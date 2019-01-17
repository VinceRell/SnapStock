import React from 'react';
import classes from './MobileNav.module.scss';

//image imports
import User from '../../../assets/images/user-1.png';
import Bars from '../../../assets/images/bars.png';

//component imports
import SubMenu from '../SubMenu/SubMenu';
import MenuItem from '../MenuItem/MenuItem';

const mobileNav = () => (
    <ul className={classes.MobileNav}>

        <div className={classes.MobileNav__icon_container}>
            <img src={User} alt="user" className={classes.MobileNav__icon} />
            <SubMenu>
                <MenuItem linkType={"SubItem"} linkName={"Aanmelden"} />
                <MenuItem linkType={"SubItem"} linkName={"Registreren"}/>
            </SubMenu>
        </div>

        <div className={classes.MobileNav__icon_container}>
            <img src={Bars} alt="bars" className={classes.MobileNav__icon} />
            <SubMenu>
                <MenuItem linkType={"SubItem"} linkName={"Editor's Choice"} />
                <MenuItem linkType={"SubItem"}  linkName={"Beelden"}/>
                <MenuItem linkType={"SubItem"} linkName={"Videos"} />
            </SubMenu>
        </div>

    </ul>
);

export default mobileNav;