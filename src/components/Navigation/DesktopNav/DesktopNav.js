import React from 'react';
import classes from './DesktopNav.module.scss';

//component imports
import MenuItem from '../MenuItem/MenuItem';
import SubMenu from '../SubMenu/SubMenu';

const desktopNav = () => (
      <ul className={classes.DesktopNav}>
            <MenuItem linkType={"MainItem"} linkName={"Verkennen ˅"} >
                  <SubMenu>
                        <MenuItem linkType={"SubItem"} linkName={"Editor's Choice"} />
                        <MenuItem linkType={"SubItem"} linkName={"Beelden"} />
                        <MenuItem linkType={"SubItem"} linkName={"Videos"} />
                  </SubMenu>
            </MenuItem>

            <MenuItem linkType={"MainItem"} linkName={"Aanmelden"} />
            <MenuItem linkType={"MainItem"} linkName={"Registreren"} />
      </ul>
);

export default desktopNav;