import React, { Component } from 'react';
import { updatedObject } from '../../shared/utility';

//component imports
import Hero from '../../components/Hero/Hero';


class Home extends Component {
    constructor() {
      super();
      this.state = {
        searchForm: {
          search: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
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
        }
      }
    }

    inputChangeHandler = (event, inputIdentifier) => {
        // create a constant for storing the inputIdentifier and its value stored in the event object
        const updatedFormElement = updatedObject(this.state.searchForm[inputIdentifier], {
          value: event.target.value
        });
        // create a constant that takes in the state object and the inputIdentifier with the first constant as a value
        const updatedForm = updatedObject(this.state.searchForm, updatedFormElement);
        // set the state to the updated object
        this.setState({searchForm: updatedForm});
    }

    render() {
        return (
          <div>
            <Hero 
              changeInput={this.inputChangeHandler} 
              inputElements={this.state.searchForm}/>
            <p>sub nav</p>
            <p>images</p>
            <p>categories</p>
            <p>footer</p>
          </div>
        );
    }
}


export default Home;