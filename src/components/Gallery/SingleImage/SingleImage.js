import React from 'react';
import classes from './SingleImage.module.scss';
import Radium from 'radium';

const SingleImage = (props) => {

    const styles = {

        "fas": {
            position: "sticky",
            padding: "0.5rem",
            fontSize: "1.4rem",
            cursor: "pointer",
            ":hover": {
                opacity: "0.7"
            }
        },


        "socFB": {
            fontSize: "1.55rem",
            background: "#3B5998",
            color: "#fff",
            display: "inline-block",
            padding: "0.8rem",
            cursor: "pointer",
            ":hover": {
                opacity: "0.7"
            }
        },
        "socTwit": {
            fontSize: "1.55rem",
            background: "#55ACEE",
            color: "#fff",
            display: "inline-block",
            padding: "0.8rem",
            cursor: "pointer",
            ":hover": {
                opacity: "0.7"
            }
        },
        "socPint": {
            fontSize: "1.55rem",
            background: "#cb2027",
            color: "#fff",
            display: "inline-block",
            padding: "0.8rem",
            cursor: "pointer",
            ":hover": {
                opacity: "0.7"
            }
        }
    }

    let source = props.galleryType !== "videos" ?
        (<img src={props.source} alt={props.title} />)
        : (<video controls src={props.source}></video>);

    return (
        <div style={{textAlign: "right"}}>
            <i className="fas fa-times" style={styles.fas} onClick={props.closeImage}></i>
            <div className={classes.single_image} >
        
                <div className={classes.single_image__img_container}>
                    {source}
                    <h1 className={classes.single_image__title}>{props.title}</h1>
                </div>

                <article className={classes.single_image__info}>
                    <div className={classes.single_image__author_section}>
                        <div className={classes.single_image__author}>
                            <h4 className={classes.single_image__author_title}>Door:</h4>
                            <p className={classes.single_image__author_subtitle}>{props.author}</p>
                        </div>


                        <a href={`http://www.pixabay.com/nl/users/${props.author}-${props.authorID}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.single_image__author_link}>
                            auteur profiel
                    </a>
                    </div>


                    <div className={classes.single_image__button_group}>
                        <ul className={classes.single_image__social_links}>
                            <li>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpixabay.com%2Fnl%2F" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-square" style={styles.socFB} key="key1"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fpixabay.com%2Fnl%2F&text=Deel%20prachtige%20afbeeldingen" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter-square" style={styles.socTwit} key="key2"></i>
                                </a>
                            </li>
                            <li>
                                <a href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fpixabay.com%2Fnl%2F&media=https%3A%2F%2Fpixabay.com%2Fnl%2Fphotos%2Fwater-noorwegen-landschap-de-natuur-4013446%2F&description=Deel%20prachtige%20afbeeldingen" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-pinterest-square" style={styles.socPint} key="key4"></i>    
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Radium(SingleImage); 