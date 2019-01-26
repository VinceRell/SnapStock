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
                        <MenuItem linkType={"SubItem"} linkName={"Editor's Choice"} />
                        <MenuItem linkType={"SubItem"} linkName={"Beelden"} />
                        <MenuItem linkType={"SubItem"} linkName={"Videos"} />
                  </SubMenu>
            );
      }

      return (
            <ul className={classes.DesktopNav} onMouseLeave={props.close}>
                  <MenuItem linkType={"MainItem"} linkName={"Verkennen ˅"} >
                        <div onMouseOver={props.exploreMenu}>
                              {exploreMenu}
                        </div>
                  </MenuItem>

                  <MenuItem linkType={"MainItem"} linkName={"Aanmelden"} />
                  <MenuItem linkType={"MainItem"} linkName={"Registreren"} />
            </ul>
      );
}

export default desktopNav;