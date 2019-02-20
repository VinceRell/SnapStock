import React from 'react';
import classes from './GalleryContainer.module.scss';

const galleryContainer = (props) => {
    let gallery = "loading";

    if (props.gallery) {
        gallery = props.gallery.map(galleryItem => {
            return (
                <figure className={classes.GalleryContainer__container} 
                        onClick={() => props.showImage(galleryItem.id)} 
                        key={galleryItem.id}>
                    <img src={props.galleryTab !== "videos" ?
                        galleryItem.webformatURL :
                        `https://i.vimeocdn.com/video/${galleryItem.picture_id}_640x360.jpg`}
                        alt={galleryItem.tags}
                        className={classes.GalleryContainer__content} />
                </figure>
            );

        });
    }

    return (
        <section className={classes.GalleryContainer}>
            {gallery}
        </section>
    );
};

export default galleryContainer;