import React from 'react';
import classes from './GalleryContainer.module.scss';
import spinnerClasses from '../../../assets/css/Spinner.module.scss';

const galleryContainer = (props) => {
    let gallery = (<div className={spinnerClasses.lds_facebook}><div></div><div></div><div></div></div>);

    if(props.gallery) {
       gallery = (
            <div className={classes.galleryContainer}>
                {props.gallery.map(galleryItem => {
                    return (
                        <figure className={classes.galleryContainer__container}
                            onClick={() => props.showImage(galleryItem.id)}
                            key={galleryItem.id}>
                            <img src={props.galleryTab !== "videos" ?
                                galleryItem.webformatURL :
                                `https://i.vimeocdn.com/video/${galleryItem.picture_id}_640x360.jpg`}
                                alt={galleryItem.tags}
                                className={classes.galleryContainer__content} />
                        </figure>
                    );
    
                })}
            </div>
        );
    }

    return (
        <section>
            {gallery}
        </section>
    );
};

export default galleryContainer;