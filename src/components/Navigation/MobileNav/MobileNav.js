import React from 'react';
import classes from './MobileNav.module.scss';

//image imports
import userSignedOut from '../../../assets/images/signedOut.png';
import userSignedIn from '../../../assets/images/signedIn.png';
import Bars from '../../../assets/images/bars.png';
import Search from '../../../assets/images/search2.png';

//component imports
import SubMenu from '../SubMenu/SubMenu';
import MenuItem from '../MenuItem/MenuItem';


const mobileNav = (props) => {
    let exploreMenu = null;
    let userMenu = null;
    let searchIcon = null;

    if (props.isShowing.explore) {
        exploreMenu = (
            <SubMenu>
                <MenuItem routeName="/editors_choice" linkType={"SubItem"} linkName={"Editor's Choice"} />
                <MenuItem routeName="/gallery" linkType={"SubItem"} linkName={"Beelden"} />
                <MenuItem routeName="/gallery" linkType={"SubItem"} linkName={"Videos"} />
            </SubMenu>
        );
    }

    if (props.isShowing.user) {
        userMenu = (
            <SubMenu>
                <MenuItem routeName="/signin" linkType={"SubItem"} linkName={"Inloggen"} />
                <MenuItem routeName="/signup" linkType={"SubItem"} linkName={"Aanmelden"} />
            </SubMenu>
        );
       if(props.isSignedIn) {
        userMenu = (
            <SubMenu>
                <MenuItem routeName="/signout" linkType={"SubItem"} linkName={"uitloggen"} />
            </SubMenu>
        );
       }
    }
    
    if (props.pageLocation !== "/") {
        searchIcon = (
           <li className={classes.MobileNav__item}>
                <div>
                    <img src={Search} alt="search" className={classes.mobileNav__icon} onClick={props.toggleSearch} />
                </div>
           </li>
        );
    }



    return (
        <ul className={classes.mobileNav}>
            <li className={classes.mobileNav__item}>
                {
                    props.isSignedIn ? 
                        <img src={userSignedIn} alt="user" className={classes.mobileNav__icon} onClick={props.toggleUser}/>:
                        <img src={userSignedOut} alt="user" className={classes.mobileNav__icon} onClick={props.toggleUser} />
                }
                <div onClick={props.closeMenu} className={classes.mobileNav__sub_container}>
                    {userMenu}
                </div>
            </li>

            {searchIcon}

            <li className={classes.mobileNav__item}>
                <img src={Bars} alt="bars" className={classes.mobileNav__icon} onClick={props.toggleExplore} />
                <div onClick={props.closeMenu} className={classes.mobileNav__sub_container}>
                    {exploreMenu}
                </div>
            </li>
        </ul>
    );

}

export default mobileNav;