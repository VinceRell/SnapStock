import React from 'react';
import classes from './DesktopNav.module.scss';

//component imports
import MenuItem from '../MenuItem/MenuItem';
import SubMenu from '../SubMenu/SubMenu';

const desktopNav = (props) => {
      let exploreMenu = null;

      if (props.show.explore) {
            exploreMenu = (
                  <SubMenu>
                        <MenuItem routeName="/editors_choice" linkType={"SubItem"} linkName={"Editor's Choice"} />
                        <MenuItem routeName="/photos" linkType={"SubItem"} linkName={"Beelden"} />
                        <MenuItem routeName="/videos" linkType={"SubItem"} linkName={"Videos"} />
                  </SubMenu>
            );
      }

      return (
            <ul className={classes.DesktopNav}>
             <span onMouseEnter={props.exploreMenu} onMouseLeave={props.close}>
                  <MenuItem routeName="/editors_choice" linkType={"MainItem"} linkName={"Verkennen ˅"} >
                        {exploreMenu}
                  </MenuItem>
             </span>
                  
                  

                  <MenuItem routeName="/signin" linkType={"MainItem"} linkName={"Aanmelden"} />
                  <MenuItem routeName="/signup" linkType={"MainItem"} linkName={"Registreren"} />
            </ul>
      );
}

export default desktopNav;