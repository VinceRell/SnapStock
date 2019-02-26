import React from 'react';
import classes from './Button.module.scss';

const button = (props) => {
    // add styles to Button component 
    // use btn and a second button class to style buttons
    // e.g. btn btn_search
    let styleClasses = props.btnStyles.split(" ").reduce((line, word)=>{
     return line.concat(classes[word]);
    },[]);
  
    return (
        <React.Fragment>
            <button disabled={props.isDisabled} className={styleClasses.join(" ")}>
                {props.children}    
            </button>
        </React.Fragment>
    );
}

export default button;