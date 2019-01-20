import React from 'react';
import classes from './Button.module.scss';

const button = (props) => (
    <React.Fragment>
        <button className={[classes.Btn, classes[`Btn--${props.btnStyle}`]].join(" ")}>
            {props.children}    
        </button>
    </React.Fragment>
);

export default button;