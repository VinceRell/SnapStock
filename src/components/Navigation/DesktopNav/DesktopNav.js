import React from 'react';
import classes from './DesktopNav.module.scss';

//component imports
import MenuItem from '../MenuItem/MenuItem';
import SubMenu from '../SubMenu/SubMenu';

// image imports
import signedInUser from '../../../assets/images/signedIn.png';

const desktopNav = (props) => {
      const currentUser = { ...props.isSignedIn };    
      let exploreMenu = null;
      let userMenu = null;
      let signedOut = (
            <li className={classes.desktopNav__item} onMouseLeave={props.closeMenu}>
                  <span onMouseEnter={props.toggleExplore}>{currentUser.displayName}</span>
                  <div onClick={props.closeMenu}>
                       <ul>
                              <MenuItem routeName="/signin" linkType={"MainItem"} linkName={"Inloggen"} />
                              <MenuItem routeName="/signup" linkType={"MainItem"} linkName={"Aanmelden"} />
                       </ul>
                  </div>
            </li>
      );
      let signedIn = (
            <li className={classes.desktopNav__item} onMouseLeave={props.closeMenu}>
                  <span onMouseEnter={props.toggleExplore}>{currentUser.displayName}</span>
                  <img src={signedInUser} alt="user" className={classes.desktopNav__icon}/>
                  <div onClick={props.closeMenu}>
                        {userMenu}
                  </div>
            </li>
      );


      if (props.isShowing.explore) {
            exploreMenu = (
                  <SubMenu>
                        <MenuItem routeName="/editors_choice" linkType={"SubItem"} linkName={"Editor's Choice"} />
                        <MenuItem routeName="/gallery" linkType={"SubItem"} linkName={"Beelden"} />
                        <MenuItem routeName="/gallery/videos" linkType={"SubItem"} linkName={"Videos"} />
                  </SubMenu>
            );
      }

      if (props.isShowing.user) {
            userMenu = (
                  <SubMenu>
                       <MenuItem routeName="/signout" linkType={"SubItem"} linkName={"uitloggen"} />
                  </SubMenu>
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

                  {props.isSignedIn ? signedIn : signedOut}

            </ul>
      );
}

export default desktopNav;

