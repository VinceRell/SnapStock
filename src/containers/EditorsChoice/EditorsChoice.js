import React, { Component } from 'react';
import axios from '../../axios-gallery';

//component imports
import Gallery from '../../components/Gallery/Gallery';
import Pagination from "react-js-pagination";


class EditorsChoice extends Component {
  state = {
    galleryType: null,
    gallery: null,
    totalHits: 0,
    activePage: 1
  }


  getGalleryHandler(type) {
    // retrieve the images from the API
    const apiKey = "136304-b12526e3e307af45bcca2c3ea";
    let galleryType = type;

    // create query string
    let req = `/?key=${apiKey}&lang=nl&image_type=${galleryType}&editors_choice=true&page=${this.state.activePage}&per_page=24`;
    if (galleryType === "videos") {
      req = `/${galleryType}/?key=${apiKey}&lang=nl&editors_choice=true&page=${this.state.activePage}&per_page=24`;
    }

    axios.get(req)
      .then(response => {
        let gallery = response.data.hits;
        let totalHits = response.data.total;
        this.setState((prevState) => {
          let activePage = prevState.galleryType !== galleryType ? 1 : this.state.activePage;
          return {
            galleryType: galleryType, 
            gallery: gallery,
            totalHits: totalHits,
            activePage: activePage
          }
        }, () => window.scrollTo(0,0));
      })
      .catch(error => error);
  }

  componentDidMount() {
    this.getGalleryHandler("photo");
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.activePage < this.state.activePage || prevState.activePage > this.state.activePage) {
      this.getGalleryHandler(this.state.galleryType);
    }
  }

  switchGalleryHandler = (type) => {
    this.getGalleryHandler(type);
  }

  handlePageChange = (pageNumber) => {
    this.setState({activePage: pageNumber});
  }

  render() {
    const { galleryType, gallery, activePage, totalHits } = this.state;

    return (
      <div>
        <Gallery
          galleryCollection={gallery}
          galleryName={galleryType}
          switchGallery={this.switchGalleryHandler} />
        <Pagination
          activePage={activePage}
          totalItemsCount={totalHits}
          pageRangeDisplayed={5}
          hideFirstLastPages={true}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default EditorsChoice;