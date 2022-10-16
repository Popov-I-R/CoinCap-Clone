import React from 'react';
import { Link } from 'react-router-dom';
import "./HeaderContainerMobile.css";
import logo from './logo.png';
import InputSearch from './InputSearch.js'
import Settings from './Settings';


export default function HeaderContainerMobile() {
    return (
        <div className="Header-container-mobile">
            <InputSearch />
            <Link className="" to='/'><img className="logo" src={logo} alt="LOGO"></img></Link>
            <Settings />
        </div>
    )
}
