import React from 'react';
import classes from './GalleryContainer.module.scss';

const galleryContainer = (props) => {
    let images = "loading";
    if(props.images) {
        images = props.images.map(image => (
            <img src={image.webformatURL} alt={image.tags} key={image.id}/>
        ));
    }

    return(
        <section className={classes.GalleryContainer}>
            {images}
        </section>
    );
};

export default galleryContainer;