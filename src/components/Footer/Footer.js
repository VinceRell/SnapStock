import React from 'react';
import classes from './Footer.module.scss';

const footer = (props) => (
    <footer className={classes.Footer}>
        <p className={classes.Footer__text}>{String.fromCharCode(169)}2019 Snapstock</p>
        <p className={classes.Footer__text}>Powerd by: Google Firebase</p>
    </footer>
);

export default footer;