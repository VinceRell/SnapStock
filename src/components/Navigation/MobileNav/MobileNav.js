import React from 'react';
import classes from './MobileNav.module.scss';

//image imports
import User from '../../../assets/images/user-1.png';
import Bars from '../../../assets/images/bars.png';
import Search from '../../../assets/images/search.png';

//component imports
import SubMenu from '../SubMenu/SubMenu';
import MenuItem from '../MenuItem/MenuItem';

const mobileNav = (props) => {
    let exploreMenu = null;
    if(props.isShowing.explore) {
        exploreMenu = (
            <SubMenu>
               <MenuItem routeName="/editors_choice" linkType={"SubItem"} linkName={"Editor's Choice"} />
               <MenuItem routeName="/gallery" linkType={"SubItem"}  linkName={"Beelden"}/>
               <MenuItem routeName="/gallery" linkType={"SubItem"} linkName={"Videos"} />
           </SubMenu> 
        );
    }

    let userMenu = null;
    if(props.isShowing.user) {
        exploreMenu = (
            <SubMenu>
               <MenuItem routeName="/signin" linkType={"SubItem"}  linkName={"Inloggen"}/>
               <MenuItem routeName="/signup" linkType={"SubItem"} linkName={"Aanmelden"} />
           </SubMenu> 
        );
    }

    let searchIcon = null;
    if(props.pageLocation !== "/") {
        searchIcon = (
            <div className={classes.MobileNav__icon_container}>
                <img src={Search} alt="search" className={classes.MobileNav__icon} onClick={props.toggleSearch}/>
            </div>
        );
    }

    return (
        <ul className={classes.MobileNav}>

            
            <div className={classes.MobileNav__icon_container}>
                <img src={User} alt="user" className={classes.MobileNav__icon} onClick={props.toggleUser}/>
                <div onClick={props.closeMenu}>
                    {userMenu}
                </div>
            </div>
            
           {searchIcon}
    
            <div className={classes.MobileNav__icon_container}>
                <img src={Bars} alt="bars" className={classes.MobileNav__icon} onClick={props.toggleExplore}/>
                <div onClick={props.closeMenu}>
                    {exploreMenu}
                </div>
            </div>
    
        </ul>
    );
} 

export default mobileNav;