import React from 'react';
import classes from './DesktopNav.module.scss';

//component imports
import MenuItem from '../MenuItem/MenuItem';
import SubMenu from '../SubMenu/SubMenu';

// image imports
import signedInUser from '../../../assets/images/signedIn.png';

const desktopNav = (props) => {
      let exploreMenu = null;
      let userMenu = null;

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

      let signedOut = (
            <React.Fragment>
                  <MenuItem routeName="/signin" linkType={"MainItem"} linkName={"Inloggen"} />
                  <MenuItem routeName="/signup" linkType={"MainItem CTA"} linkName={"Aanmelden"} />
            </React.Fragment>
      );
      
      let signedIn = (
            <li onMouseLeave={props.closeMenu}>
                  <span onMouseEnter={props.toggleUser} className={classes.desktopNav__item}>
                        <img src={signedInUser} alt="user" className={classes.desktopNav__icon}/>
                  </span>
                  <div onClick={props.closeMenu} className={classes.desktopNav__sub_container}>
                        {userMenu}
                  </div>
            </li>
      );


      return (
            <ul className={classes.desktopNav}>
                  <li onMouseLeave={props.closeMenu}>
                        <span onMouseEnter={props.toggleExplore} className={classes.desktopNav__item}>Verken{String.fromCharCode(9662)}</span>
                        <div onClick={props.closeMenu} className={classes.desktopNav__sub_container}>
                              {exploreMenu}
                        </div>
                  </li>

                  {props.isSignedIn ? signedIn : signedOut}

            </ul>
      );
}

export default desktopNav;

