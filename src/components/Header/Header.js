import React from 'react'
import "./Header.css";
import HeaderContainer from './HeaderContainer/HeaderContainer.js';
import HeaderContainerMobile from './HeaderContainerMobile/HeaderContainerMobile';

export default function Header() {
  return (
    <div className="App-header">
      <HeaderContainerMobile />
      <HeaderContainer />
    </div>
  )
}
