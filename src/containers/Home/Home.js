import React, { Component } from 'react';
import axios from '../../axios-gallery';

//component imports
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';
import Modal from '../../components/UI/Modal/Modal';
import SingleImage from '../../components/Gallery/SingleImage/SingleImage';


class Home extends Component {
  state = {
    galleryType: null,
    gallery: null,
    imageID: null,
    showModal: false
  }

  getGalleryHandler(type) {
    // retrieve the images from the API by providing data
    const apiKey = "136304-b12526e3e307af45bcca2c3ea";
    let galleryType = type;

    // build the query string
    let req = `/?key=${apiKey}&lang=nl&image_type=${galleryType}&per_page=18`;
    if (galleryType === "videos") {
      req = `/${galleryType}/?key=${apiKey}&lang=nl&per_page=18`;
    }
 
    // fetch images from the api, cut total image down to fit on page
    axios.get(req)
      .then(response => {
        let galleryCollection = response.data.hits;
        this.setState({galleryType: galleryType, gallery: galleryCollection});
      })
      .catch(error => error);
  }

  componentDidMount() {
    this.getGalleryHandler("photo");
  }

  switchGalleryHandler = (type) => {
    this.getGalleryHandler(type);
  }

  showSingleImageHandler = (id) => {
     this.setState({imageID: id, showModal: true});
  }

  closeImageHandler = () => {
    this.setState({imageID: null, showModal: false});
  }

  render() {
    const { gallery, galleryType, imageID, showModal} = this.state;
    let singleImage = null;
    if(gallery && imageID) {
      let image = [...gallery].find(img => img.id === imageID);
      singleImage = <SingleImage 
                      title={image.tags}
                      imgScource={image.webformatURL}
                      author={image.user}
                      authorID={image.user_id}
                      closeImage={this.closeImageHandler}/> 
    }

    return (
      <div>
        <Modal showModal={showModal} closeImage={this.closeImageHandler}>
            {singleImage}
        </Modal>
        <Hero/>
        <Gallery
          galleryCollection={gallery}
          galleryName={galleryType}
          switchGallery={this.switchGalleryHandler} 
          showImage={this.showSingleImageHandler}/>
      </div>
    );
  }
}


export default Home;