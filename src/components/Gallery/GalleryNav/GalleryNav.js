import React from 'react';
import classes from './GalleryNav.module.scss';

// Component imports
import MenuItem from '../../Navigation/MenuItem/MenuItem';

const galleryNav = (props) => (
  <section className={classes.GalleryNav}>
      <nav className={classes.GalleryNav__navbar}>
        <MenuItem linkType={"SecondaryItem"} linkName={"Foto's"}/>
        <MenuItem linkType={"SecondaryItem"} linkName={"Illustraties"}/>
        <MenuItem linkType={"SecondaryItem"} linkName={"Vectors"}/>
        <MenuItem linkType={"SecondaryItem"} linkName={"Videos"}/>
        <MenuItem linkType={"SecondaryItem"} linkName={"Meer..."}/>
      </nav>
  </section>
); 

export default galleryNav;