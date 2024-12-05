import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='NavbarItems'>
      <h1 className='Logo'>Travel</h1>

      <ul className='nav-menu'>
        <li>
          <a><i class="fa-solid fa-house-user"></i>Home</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
