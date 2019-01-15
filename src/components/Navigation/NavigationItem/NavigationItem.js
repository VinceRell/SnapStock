import React from 'react';
import classes from './NavigationItem.module.scss';

const navigationItem = (props) => (
  <li className={classes[props.classStyle]}>
      <a href="#">
        {props.linkName}
      </a>
      {props.children}
  </li>
);


export default navigationItem;