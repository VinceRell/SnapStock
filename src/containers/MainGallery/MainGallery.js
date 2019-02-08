import React, { Component } from 'react';
import axios from '../../axios-gallery';

// componnt imports
import GalleryContainer from '../../components/Gallery/GalleryContainer/GalleryContainer';

class MainGallery extends Component {
    state = {
        galleryType: null,
        gallery: null,
        page_id: ""
    }

    componentDidMount() {
        this.getGalleryHandler("all");
    }

    componentDidUpdate() {
        this.getGalleryHandler("all");
    }

    getGalleryHandler(type) {
        const { location } = this.props;
        const pageId = location.key;

        if (this.state.page_id !== location.key) {
            // retrieve the images from the API
            const apiKey = "136304-b12526e3e307af45bcca2c3ea";
            let galleryType = type;

            // create query to fetch all images/videos
            let req = `/?key=${apiKey}&image_type=${galleryType}&per_page=42`;
            if (galleryType === "videos") {
                req = `/videos/?key=${apiKey}&video_type=all&per_page=42`;
            }

            // create query to fetch specific images/videos
            if (this.props.location.search) {
                // convert the search term for the api url
                let searchTerm = decodeURIComponent(location.search)
                    .substring(1).split(" ").join("+");

                galleryType = location.pathname.replace("/gallery/", "");
                req = `/?key=${apiKey}&q=${searchTerm}&image_type=${galleryType}&per_page=42`;
                if (galleryType === "videos") {
                    req = `/videos/?key=${apiKey}&q=${searchTerm}&video_type=all&per_page=42`;
                }
            }

            axios.get(req)
                .then(response => {
                    let galleryCollection = response.data.hits.slice();
                    this.setState({ galleryType: galleryType, gallery: galleryCollection, page_id: pageId });
                })
                .catch(error => error);
        }
    }
    render() {
        return (
            <div>
                <GalleryContainer
                    gallery={this.state.gallery}
                    galleryTab={this.state.galleryType} />
            </div>
        );
    }
}


export default MainGallery;