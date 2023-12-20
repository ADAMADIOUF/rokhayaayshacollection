import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import{FaTimes,FaBars} from "react-icons/fa"
import a from "../assets/logo.png"
const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false)

 const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen)
 }
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>
          <img src={a} alt='' />
        </Link>
      </div>
      <button className='hamburger' onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to='/' onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={toggleMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li className='dropdown'>
          Clothes
          <ul className='dropdown-menu'>
            <li>
              <Link to='/clothing/item1' onClick={toggleMenu}>
                hijab dress party
              </Link>
            </li>
            <li>
              <Link to='/clothing/item2' onClick={toggleMenu}>
                hijab plus size
              </Link>
            </li>
            <li>
              <Link to='/clothing/item3' onClick={toggleMenu}>
                modest fashion
              </Link>
            </li>
          </ul>
        </li>
        <li className='dropdown'>
          Accessoires
          <ul className='dropdown-menu'>
            <li>
              <Link to='/clothes/item1' onClick={toggleMenu}>
                broche pour hijab
              </Link>
            </li>
            <li>
              <Link to='/clothes/item2' onClick={toggleMenu}>
                underscarf
              </Link>
            </li>
            <li>
              <Link to='/clothes/item3' onClick={toggleMenu}>
                manches
              </Link>
            </li>
            <li>
              <Link to='/clothes/item4' onClick={toggleMenu}>
                Item 4
              </Link>
            </li>
          </ul>
        </li>
        <li className='cart'>
          <Link to='/cart' className='cart-link'>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
