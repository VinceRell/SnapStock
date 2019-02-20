import React from 'react';
import classes from './Backdrop.module.scss';

const Backdrop = (props) => (
   props.show ? <div className={classes.backdrop} onClick={props.close}></div> : null
);

export default Backdrop;