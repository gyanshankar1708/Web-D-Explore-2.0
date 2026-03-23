import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SiteStyles.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="logo-wrap">
        <div className="logo-dot" />
        <div className="logo">ISTE</div>
      </div>
      {/* <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact us</a></li>
        <li><a href="">About us</a></li>
      </ul> */}

      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          {/* <NavLink to={'/'} onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink> */}
          <NavLink to={'/'}>Home</NavLink>

        </li>
        <li>
          {/* <NavLink to={'/about'} onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink> */}
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          {/* <NavLink to={'/contact'} onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink> */}
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
