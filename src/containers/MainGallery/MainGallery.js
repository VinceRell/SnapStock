import React, { Component } from 'react';
import axios from '../../axios-gallery';
import classes from '../../assets/css/pagination.module.scss';
import titleClasses from './MainGallery.module.scss';

// componnt imports
import GalleryContainer from '../../components/Gallery/GalleryContainer/GalleryContainer';
import Pagination from "react-js-pagination";
import Modal from '../../components/UI/Modal/Modal';
import SingleImage from '../../components/Gallery/SingleImage/SingleImage';

class MainGallery extends Component {
    state = {
        galleryType: null,
        gallery: null,
        page_id: "",
        totalHits: 0,
        activePage: 1,
        imageID: null,
        showModal: false
    }

    getGalleryHandler(type) {
        const apiKey = "136304-b12526e3e307af45bcca2c3ea";
        const { location } = this.props;
        let galleryType = location.pathname.replace("/gallery/", "") !== "videos" ? type : "videos"; 
        let pageNumber = this.state.activePage;
        let req = "";

        if (this.props.location.search) {
            // convert the search term for the api url
            let searchTerm = decodeURIComponent(location.search)
                .substring(1).split(" ").join("+");

            //filter out the gallerytype from the url
            galleryType = location.pathname.replace("/gallery/", "");
            req = galleryType !== "videos" ?
                `/?key=${apiKey}&lang=nl&q=${searchTerm}&image_type=${galleryType}&page=${pageNumber}&per_page=24` :
                `/videos/?key=${apiKey}&lang=nl&q=${searchTerm} &video_type=all&page=${pageNumber}&per_page=24`;
        } else {
            req = galleryType !== "videos" ?
                `/?key=${apiKey}&lang=nl&image_type=${galleryType}&page=${pageNumber}&per_page=24` :
                `/videos/?key=${apiKey}&lang=nl&video_type=all&page=${pageNumber}&per_page=24`;
        }

        axios.get(req)
            .then(response => {
                let gallery = response.data.hits;
                let totalHits = response.data.total;
                this.setState({
                    galleryType: galleryType,
                    gallery: gallery,
                    totalHits: totalHits
                }, () => window.scrollTo(0, 0));
            })
            .catch(error => error);

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.location.key !== prevState.page_id) {
            return {
                page_id: nextProps.location.key,
                activePage: 1
            }
        }

        return null;
    }

    componentDidMount() {
        this.getGalleryHandler("all");
    }

    componentDidUpdate(prevProps, prevState) { 
        if(prevState.activePage !== this.state.activePage || prevState.page_id !== this.state.page_id) {
            this.getGalleryHandler("all");
        }
    }

    handlePageChange = (pageNumber) => {
        this.setState({ activePage: pageNumber });
    }

    showSingleImageHandler = (id) => {
        this.setState({imageID: id, showModal: true});
    }
    
     closeImageHandler = () => {
       this.setState({imageID: null, showModal: false});
    }


    render() {
        const { galleryType, gallery, activePage, totalHits, imageID, showModal} = this.state;
        let searchTerm = this.props.location.search ? `Voor ${this.props.location.search.substring(1)}` : "";
        let singleImage = null;
        if(gallery && imageID) {
          let image = [...gallery].find(img => img.id === imageID);
          let imgSource = galleryType !== "videos" ? image.webformatURL : image.videos.tiny.url;
          singleImage = <SingleImage 
                          title={image.tags}
                          source={imgSource}
                          author={image.user}
                          authorID={image.user_id}
                          galleryType={galleryType}
                          closeImage={this.closeImageHandler}/> 
        }
    
        return (
            <div>
                <h1 className={titleClasses.main_gallery__title}>{galleryType !== "videos" ? "Afbeeldingen" : "Video's"}</h1>
                <h3 className={titleClasses.main_gallery__subtitle}>{`${searchTerm} ${totalHits} resultaten`}</h3>
                <Modal showModal={showModal} closeImage={this.closeImageHandler}>
                    {singleImage}
                </Modal>
                <GalleryContainer
                    gallery={gallery}
                    galleryTab={galleryType} 
                    showImage={this.showSingleImageHandler}/>
                <Pagination
                    activePage={activePage}
                    totalItemsCount={totalHits}
                    pageRangeDisplayed={5}
                    itemsCountPerPage={24}
                    hideFirstLastPages={true}
                    innerClass={classes.pagination}
                    linkClass={classes.pagination_item_link}
                    activeClass={classes.pagination_item_active}
                    activeLinkClass={classes.pagination_item_active}
                    onChange={this.handlePageChange} />
            </div>
        );
    }
}


export default MainGallery;