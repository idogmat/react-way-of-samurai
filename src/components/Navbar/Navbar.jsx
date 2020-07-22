import React from 'react';
import Nav from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBlock from "../Friends/Friends";
const Navbar = (props) => {

    return <nav className={Nav.nav}>
        <div className={Nav.item}>
            <NavLink to="/Profile" activeClassName={Nav.active} >Profile</NavLink>
        </div>
        <div className={Nav.item}>
            <NavLink to="/Dialogs" activeClassName={Nav.active}>Messages</NavLink>
        </div>
        <div className={Nav.item}>
            <NavLink to="/News" activeClassName={Nav.active}>News</NavLink>
        </div>
        <div className={Nav.item}>
            <NavLink to="/Music" activeClassName={Nav.active}>Music</NavLink>
        </div>
        <div className={Nav.item}>
            <NavLink to="/Settings" activeClassName={Nav.active}>Settings</NavLink>
        </div>
        <div className={Nav.item}>
            <NavLink to="/Users" activeClassName={Nav.active}>Users</NavLink>
        </div>
        <FriendsBlock/>
    </nav>
}

export default Navbar;