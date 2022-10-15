import React from 'react';
import { Link } from 'react-router-dom';
import "./HeaderContainer.css";
import logo from './logo.png';
import InputSearch from './InputSearch.js'
import Settings from './Settings';
import Button from './Button';



export default function HeaderContainer() {
    return (
        <div className="Header-container">
            <div className="Nav-item Links-container">
                <Link className="" to='/'>Coins</Link>
                <Link className="" to='/exchanges'>Exchanges</Link>
                <Link className="" to='/swap'>Swap</Link>
            </div>
            <Link className="" to='/'><img className="logo" src={logo} alt="LOGO"></img></Link>
            <InputSearch />
            <Settings />
            <Button action="Login"/>
            <Button action="Add Wallet"/>
        </div>
    )
}
