import React from 'react';
import classes from './DesktopNav.module.scss';

//component imports
import MenuItem from '../MenuItem/MenuItem';
import SubMenu from '../SubMenu/SubMenu';

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
      return (
            <ul className={classes.DesktopNav}>
                  <li className={classes.Explore} onMouseLeave={props.closeMenu}>
                        <span onMouseEnter={props.toggleExplore}>Verken{String.fromCharCode(9662)}</span>
                        <div onClick={props.closeMenu}>
                              {exploreMenu}
                        </div>
                  </li>

                  <MenuItem routeName="/signin" linkType={"MainItem"} linkName={"Aanmelden"} />
                  <MenuItem routeName="/signup" linkType={"MainItem"} linkName={"Registreren"} />
            </ul>
      );
}

export default desktopNav;