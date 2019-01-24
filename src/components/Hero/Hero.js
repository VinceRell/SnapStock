import React from 'react';
import classes from './Hero.module.scss';
import Search from '../../assets/images/search.png';

// component imports
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const hero = (props) => {
    // create an array of objects with the input element as key
    const formElementArray = [];
     for(let key in props.inputElements) {
         formElementArray.push({
            id: key,
            config: props.inputElements[key] 
         });
     }

    /*
     create the form element by looping through the form element array 
     and create the input elements by passing the configurations as props
    */  
    let form = (
        <form className={classes.Hero__searchform}>
            {formElementArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig} 
                    value={formElement.config.value}  
                    changed={(event) => props.changeInput(event, formElement.id)}/>
            ))}
            <Button btnStyles={"Btn Btn--search"}>
                <img src={Search} alt="Zoeken" className={classes.Hero__search}/>
            </Button>
        </form>
    );
    
    return (
        <section className={classes.Hero}>
            <div className={classes.Hero__content}>
                <h1 className={classes.Hero__title}>Prachtige gratis afbeeldingen</h1>
                <h4 className={classes.Hero__subtitle}>Ontdek meer dan 1,6 miljoen afbeeldingen en video's gedeeld door onze genereuze community.</h4>
                {form}
            </div>
        </section>
    );
}

export default hero;