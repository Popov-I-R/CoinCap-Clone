import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";

export default function Header() {
  return (
    <div className="App-header">
     <Link className="" to='/'>Coins</Link>
     <Link className="" to='/exchanges'>Exchanges</Link>
     <Link className="" to='/swap'>Swap</Link>
    </div>
  )
}
