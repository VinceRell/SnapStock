import React from 'react';
import classes from './Hero.module.scss';

// component imports
import Input from '../UI/Input/Input';

const hero = (props) => {
    // create an array of objects with the input element as key
    const formElementArray = [];
     for(let key in props.inputElements) {
         formElementArray.push({
            id: key,
            config: props.inputElements[key] 
         });
     }

    let form = (
        <form>
            {formElementArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig} 
                    value={formElement.config.value}  
                    changed={(event) => props.changeInput(event, formElement.id)}/>
            ))}
        </form>
    );
    
    return (
        <section className={classes.Hero}>
            <div className={classes.Hero__text_container}>
                <h1 className={classes.Hero__title}>Prachtige gratis afbeeldingen</h1>
                <h4 className={classes.Hero__subtitle}>Ontdek meer dan 1,6 miljoen afbeeldingen en video's gedeeld door onze genereuze community.</h4>
                {form}
            </div>
        </section>
    );
}

export default hero;