import React, { Component } from 'react';
import axios from '../../axios-gallery';

//component imports
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';


class Home extends Component {
  state = {
    galleryType: null,
    gallery: null,
  }

  getGalleryHandler(type) {
    // retrieve the images from the API by providing data
    const apiKey = "136304-b12526e3e307af45bcca2c3ea";
    let galleryType = type;

    // build the query string
    let req = `/?key=${apiKey}&lang=nl&image_type=${galleryType}`;
    if (galleryType === "videos") {
      req = `/${galleryType}/?key=${apiKey}&lang=nl`;
    }
 
    // fetch images from the api, cut total image down to fit on page
    axios.get(req)
      .then(response => {
        let galleryCollection = response.data.hits.slice(0, 18);
        this.setState({ galleryType: galleryType, gallery: galleryCollection });
      })
      .catch(error => error);
  }

  componentDidMount() {
    this.getGalleryHandler("photo");
  }

  switchGalleryHandler = (type) => {
    this.getGalleryHandler(type);
  }

  render() {
    return (
      <div>
        <Hero/>
        <Gallery
          galleryCollection={this.state.gallery}
          galleryName={this.state.galleryType}
          switchGallery={this.switchGalleryHandler} />
      </div>
    );
  }
}


export default Home;