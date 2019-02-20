import React from 'react';
import classes from './SingleImage.module.scss';
import Radium from 'radium';

// component imports
import Button from '../../UI/Button/Button';

const SingleImage = (props) => {

    const styles = {
        "iconContainer": {
            position: "relative"
        },

        "fas":{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            padding: "1rem",
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
            ":hover": {
                opacity: "0.7"
            }
        }, 
        "socInsta": {
            fontSize: "1.55rem",
            background: "#125688",
            color: "#fff",
            display: "inline-block",
            padding: "0.8rem",
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
            ":hover": {
                opacity: "0.7"
            }
        }
    
    }

    return (
        <React.Fragment>
            
            <div style={styles.ionContainer}>
                <i className="fas fa-times" style={styles.fas} onClick={props.closeImage}></i>
            </div>   

            <div className={classes.single_image__content}>
                <div className={classes.single_image__img_container}>
                    <img src={props.imgScource} alt={props.title} className={classes.single_image__img}/>
                    <h1 className={classes.single_image__title}>{props.title}</h1>
                </div>
                
                <article >
                    <div className={classes.single_image__author_section}>
                       <div>
                            <h4 className={classes.single_image__author_title}>Door:</h4>
                            <p  className={classes.single_image__author_subtitle}>{props.author}</p>
                       </div>

                        <Button btnStyles={"Btn Btn--cta "}>
                           <a href={`http://www.pixabay.com/nl/users/${props.author}-${props.authorID}/`} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className={classes.single_image__author_link}>
                                auteur profiel
                           </a>
                        </Button>
                    </div>
                   

                    <div className={classes.single_image__button_group}>
                        <ul className={classes.single_image__social_links}>
                            <li><i className="fab fa-facebook-square" style={styles.socFB} key="key1"></i></li>
                            <li><i className="fab fa-twitter-square" style={styles.socTwit} key="key2"></i></li>
                            <li><i className="fab fa-instagram" style={styles.socInsta} key="key3"></i></li>
                            <li><i className="fab fa-pinterest-square" style={styles.socPint} key="key4"></i></li>
                        </ul>
                    </div>
                </article>
            </div>
        </React.Fragment>
    );
}

export default Radium(SingleImage);