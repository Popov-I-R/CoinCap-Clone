import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
     <Link className="" to='/'>Coins</Link>
     <Link className="" to='/exchanges'>Exchanges</Link>
     <Link className="" to='/swap'>Swap</Link>
    </div>
  )
}
