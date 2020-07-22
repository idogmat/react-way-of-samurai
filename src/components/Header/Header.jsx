import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className={h.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt='prev-img'/>
        <div className={h.loginBlock}>
            {props.isAuth ? props.login :
        <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;