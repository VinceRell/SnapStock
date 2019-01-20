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
        }
      }
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
            <p>sub nav</p>
            <p>images</p>
            <p>categories</p>
            <p>footer</p>
          </div>
        );
    }
}


export default Home;