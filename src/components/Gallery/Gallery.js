import React from 'react';

//Component imports
import GalleryNav from './GalleryNav/GalleryNav';
import GalleryContainer from './GalleryContainer/GalleryContainer';

const gallery = (props) => (
    <section>
        <GalleryNav switchHandler={props.switchGallery}/>
        <GalleryContainer gallery={props.galleryCollection}/>
    </section>
);


export default gallery;