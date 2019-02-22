import React from 'react';
import classes from './DesktopNav.module.scss';

//component imports
import MenuItem from '../MenuItem/MenuItem';
import SubMenu from '../SubMenu/SubMenu';
// import SignOut from '../SignOut/SignOut';

const desktopNav = (props) => {
      let exploreMenu = null;
      if (props.isShowing.explore) {
            exploreMenu = (
                  <SubMenu>
                        <MenuItem routeName="/editors_choice" linkType={"SubItem"} linkName={"Editor's Choice"} />
                        <MenuItem routeName="/gallery" linkType={"SubItem"} linkName={"Beelden"} />
                        <MenuItem routeName="/gallery/videos" linkType={"SubItem"} linkName={"Videos"} />
                  </SubMenu>
            );
      }

      let authButtons =  (
            <React.Fragment>
                  <MenuItem routeName="/signin" linkType={"SubItem"}  linkName={"Inloggen"}/>
                  <MenuItem routeName="/signup" linkType={"SubItem"} linkName={"Aanmelden"}/>
            </React.Fragment>
      );

      // if() {
      //       authButtons =
      // }


      
      return (
            <ul className={classes.DesktopNav}>
                  <li className={classes.Explore} onMouseLeave={props.closeMenu}>
                        <span onMouseEnter={props.toggleExplore}>Verken{String.fromCharCode(9662)}</span>
                        <div onClick={props.closeMenu}>
                              {exploreMenu}
                        </div>
                  </li>


                  {authButtons}

            </ul>
      );
}

export default desktopNav;