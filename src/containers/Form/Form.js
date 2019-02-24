import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { updatedObject } from '../../shared/utility';
import classes from './Form.module.scss';
import Search from '../../assets/images/search.png';

// component imports
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Form extends Component {

    state = {
        searchForm: {
            search: {
                elementType: 'search',
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
                        { value: "all", displayValue: "Beelden" },
                        { value: "photo", displayValue: "Foto's" },
                        { value: "vector", displayValue: "Vectoren" },
                        { value: "illustration", displayValue: "Illustraties" },
                        { value: "videos", displayValue: "Video's" }
                    ]
                },
                value: 'all'
            }
        }
    }

    inputChangeHandler = (event, inputIdentifier) => {
        /*
          use the updatedObject function to return the searchForm object from the state
          width the updated value of the input identifier
        */
        const updatedForm = updatedObject(this.state.searchForm, {
          [inputIdentifier]: updatedObject(this.state.searchForm[inputIdentifier], {
            value: event.target.value
          })
        })
    
        this.setState({ searchForm: updatedForm });
    }

    searchImageHandler = (event) => {
        event.preventDefault();
        const { search, imageType } = this.state.searchForm;
        let searchTerm = encodeURI(search.value);
        this.props.history.push({
            pathname: `/gallery/${imageType.value}`,
            search: `${searchTerm}`
        });
    }

    render() {
        const { searchForm } = this.state;
        // create an array of objects with the input element as key
        const formElementArray = [];
        for (let key in searchForm) {
            formElementArray.push({
                id: key,
                config: searchForm[key]
            });
        }
        
        let style = classes.Form__searchform;
        let submitBtn = "Btn Btn--search";
        if(this.props.location.pathname !== "/") {
            style = classes.Form__searchbar;
            submitBtn = "Btn Btn--search_nav"
        }

        /*
         create the form element by looping through the form element array 
         and create the input elements by passing the configurations as props
        */
        return (
            <form className={style} onSubmit={this.searchImageHandler}>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        showSearch={this.props.location.pathname}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangeHandler(event, formElement.id)} />
                ))}
                <Button btnStyles={submitBtn}>
                    <img src={Search} alt="Zoeken" className={classes.Form__search} />
                </Button>
            </form>
        );
    }
}

export default withRouter(Form);