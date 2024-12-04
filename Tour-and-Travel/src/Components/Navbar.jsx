import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='NavbarItems'>
      <h1 className='Logo'>Travel</h1>

      <ul className='nav-menu'>
        <li>
          <Link><i class="fa-solid fa-house-user"></i>Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
