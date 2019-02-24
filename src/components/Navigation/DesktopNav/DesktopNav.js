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

      let authItems =  (
            <React.Fragment>
                  <MenuItem routeName="/signin" linkType={"MainItem"}  linkName={"Inloggen"}/>
                  <MenuItem routeName="/signup" linkType={"MainItem"} linkName={"Aanmelden"}/>
            </React.Fragment>
      );
      if(props.isSignedIn) {
            authItems = (
                <React.Fragment>
                    <MenuItem routeName="/signout" linkType={"MainItem"} linkName={"uitloggen"} />
                </React.Fragment>
            );
      }

       return (
            <ul className={classes.DesktopNav}>
                  <li className={classes.Explore} onMouseLeave={props.closeMenu}>
                        <span onMouseEnter={props.toggleExplore}>Verken{String.fromCharCode(9662)}</span>
                        <div onClick={props.closeMenu}>
                              {exploreMenu}
                        </div>
                  </li>


                  {authItems}

            </ul>
      );
}

export default desktopNav;