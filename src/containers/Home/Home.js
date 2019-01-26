import React, { Component } from 'react';
import { updatedObject } from '../../shared/utility';
import axios from '../../axios-gallery';

//component imports
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';



class Home extends Component {
    constructor() {
      super();
      this.state = {
        searchForm: {
          search: {
            elementType: 'input',
            elementConfig: {
              type: 'search',
              placeholder: 'Zoek images, vectors of videos'
            },
            value: ''
          },
          imageType: {
            elementType: 'select',
            elementConfig: {
                options: [
                  {value: "Beelden", displayValue: "Beelden"},
                  {value: "Foto's", displayValue: "Foto's"},
                  {value: "Vectoren", displayValue: "Vectoren"},
                  {value: "Illustraties", displayValue: "Illustraties"},
                  {value: "Video's", displayValue: "Video's"}
                ]
            },
            value: 'beelden'
          }
        },
        galleryType: null,
        gallery: null
      }
    }

    componentDidMount(){
      this.getGalleryHandler("photo");
    }

    getGalleryHandler(type) {
      // retrieve the images from the API
      const apiKey = "136304-b12526e3e307af45bcca2c3ea";
      let galleryType = type;
      let req = `/?key=${apiKey}&image_type=${galleryType}`;

      if(galleryType === "videos") {
        req = `/${galleryType}/?key=${apiKey}`;
      }

      axios.get(req)
          .then(response => {
            let galleryCollection = response.data.hits.slice(0, 18);
            this.setState({galleryType: galleryType, gallery: galleryCollection});
          })
          .catch(error => error);
    }

    switchGalleryHandler = (type) => {
      this.getGalleryHandler(type);
    }

    inputChangeHandler = (event, inputIdentifier) => {
      /* use the updatedObject function to return the searchForm object from the state
        width the updated value of the input identifier
      */ 
      const updatedForm = updatedObject(this.state.searchForm, {
        [inputIdentifier]: updatedObject(this.state.searchForm[inputIdentifier], {
          value: event.target.value
        })
      })

      this.setState({searchForm: updatedForm});
    }

    render() {
        return (
          <div>
            <Hero 
              changeInput={this.inputChangeHandler} 
              inputElements={this.state.searchForm}/>
            <Gallery 
              galleryCollection={this.state.gallery} 
              galleryName={this.state.galleryType}
              switchGallery={this.switchGalleryHandler}/>
          </div>
        );
    }
}


export default Home;