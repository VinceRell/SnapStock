import React from 'react';

//Component imports
import GalleryNav from './GalleryNav/GalleryNav';
import GalleryContainer from './GalleryContainer/GalleryContainer';

const gallery = (props) => (
    <section>
        <GalleryNav 
            galleryTab={props.galleryName}
            switchHandler={props.switchGallery}/>
        <GalleryContainer 
            galleryTab={props.galleryName}
            gallery={props.galleryCollection}
            showImage={props.showImage}/>
    </section>
);


export default gallery;