import React, { Component } from 'react';
import { updatedObject } from '../../shared/utility';
import axios from 'axios';

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
        images: null
      }
    }

    componentDidMount(){
      axios.get("https://pixabay.com/api/?key=136304-b12526e3e307af45bcca2c3ea&image_type=photo")
          .then(response => {
            this.setState({images: response.data.hits});
          })
          .catch(error => error);
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
            <Gallery imageCollection={this.state.images}/>
            <p>footer</p>
          </div>
        );
    }
}


export default Home;