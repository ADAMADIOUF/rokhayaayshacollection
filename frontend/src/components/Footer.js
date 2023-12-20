import React from 'react'
import { FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container section-center'>
        <article className='footer-newsletter'>
          <h5>newsletter</h5>
          <p>keep up to date with all the latest news</p>
          <form className='form-newsletter'>
            <input type='text' placeholder='enter email' />
            <button className='btn'>Sign Up</button>
          </form>
          <div className='footer-socials'>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaTiktok />
            </span>
          </div>
        </article>
        <article className='footer-links'>
          <ul className='footer-links nav'>
            <li>
              <Link to={`/about`}>About us</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
            <li>
              <Link to={`/shop`}>Boutique</Link>
            </li>
          </ul>
        </article>
        <article className='footer-address'>
<h3>Address</h3>
<p>Senegal,thies,bp2344</p>
<p>Senegal.Dakar ,bp 4566</p>
        </article>
      </div>
    </div>
  )
}

export default Footer
