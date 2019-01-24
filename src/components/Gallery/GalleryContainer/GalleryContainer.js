import React from 'react';
import classes from './GalleryContainer.module.scss';

const galleryContainer = (props) => {
    let gallery = "loading";
    if(props.gallery) {
        gallery = props.gallery.map(galleryItem => (
            <figure  className={classes.GalleryContainer__container} key={galleryItem.id}>
                <img src={galleryItem.webformatURL} alt={galleryItem.tags}  className={classes.GalleryContainer__image}/>
            </figure>
        ));
    }

    return(
        <section className={classes.GalleryContainer}>
            {gallery}
        </section>
    );
};

export default galleryContainer;