import React from 'react';
import { Link } from 'react-router-dom';
import classes from './GalleryContainer.module.scss';

const galleryContainer = (props) => {
    let gallery = "loading";
    
    if(props.gallery) {
        gallery = props.gallery.map(galleryItem => {
            let url = galleryItem.tags.replace(/,/gi, "").split(" ").join("-");

            return (
                <figure className={classes.GalleryContainer__container} key={galleryItem.id}>
                    <Link to={`/${url}-${galleryItem.id}`}>
                        <img src={props.galleryTab !== "videos" ? 
                              galleryItem.webformatURL : 
                              `https://i.vimeocdn.com/video/${galleryItem.picture_id}_640x360.jpg` } 
                               alt={galleryItem.tags} 
                               className={classes.GalleryContainer__content}/>
                    </Link>
                </figure>
            );
    
        });            
    }

    return(
        <section className={classes.GalleryContainer}>
            {gallery}
        </section>
    );
};

export default galleryContainer;