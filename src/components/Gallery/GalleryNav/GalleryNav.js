import React from 'react';
import classes from './GalleryNav.module.scss';

// Component imports
import Button from '../../UI/Button/Button';

const galleryNav = (props) => (
  <section className={classes.GalleryNav}>
      <nav className={classes.GalleryNav__tab_menu}>
        <ul className={classes.GalleryNav__tab_items}>
          <li onClick={() => props.switchHandler("photo")}>
              <Button btnStyles={"Btn Btn--cta"} >
                  Foto's
              </Button>
          </li>
          <li className={classes["hideItem--tablet"]} onClick={() => props.switchHandler("illustration")}>
              <Button btnStyles={"Btn Btn--cta"}>
                Illustraties
              </Button>
          </li>
          <li className={classes["hideItem--desktop"]} onClick={() => props.switchHandler("vector")}>
              <Button btnStyles={"Btn Btn--cta"}>
                Vectors
              </Button>
          </li>
          <li  onClick={() => props.switchHandler("videos")}>
              <Button btnStyles={"Btn Btn--cta"}>
                Videos
              </Button>
          </li>
          <li>
              <Button btnStyles={"Btn Btn--cta"}>
                Meer {String.fromCharCode(8594)} 
              </Button>
          </li>
        </ul>
      </nav>
  </section>
); 

export default galleryNav;