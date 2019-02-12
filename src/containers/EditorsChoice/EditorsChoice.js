import React, { Component } from 'react';
import axios from '../../axios-gallery';

//component imports
import Gallery from '../../components/Gallery/Gallery';

class EditorsChoice extends Component {
    state = {
            galleryType: null,
            gallery: null
    }

    componentDidMount(){
        this.getGalleryHandler("photo");
      }
  
      getGalleryHandler(type) {
        // retrieve the images from the API
        const apiKey = "136304-b12526e3e307af45bcca2c3ea";
        let galleryType = type;
        let req = `/?key=${apiKey}&lang=nl&image_type=${galleryType}&editors_choice=true&per_page=24`;
  
        if(galleryType === "videos") {
          req = `/${galleryType}/?key=${apiKey}&lang=nl&editors_choice=true&per_page=24`;
        }
  
        axios.get(req)
            .then(response => {
              let galleryCollection = response.data.hits.slice();
              this.setState({galleryType: galleryType, gallery: galleryCollection});
            })
            .catch(error => error);
      }
  
      switchGalleryHandler = (type) => {
        this.getGalleryHandler(type);
      }

    render() {
        return (
            <div>
               <Gallery 
                    galleryCollection={this.state.gallery} 
                    galleryName={this.state.galleryType}
                    switchGallery={this.switchGalleryHandler}/>
            </div>
        );
    }
}

export default EditorsChoice;