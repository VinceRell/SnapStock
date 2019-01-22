import React from 'react';

//Component imports
// import GalleryNav from './GalleryNav/GalleryNav';
import GalleryContainer from './GalleryContainer/GalleryContainer';

const gallery = (props) => (
    <section>
        <GalleryContainer images={props.imageCollection}/>
    </section>
);


export default gallery;