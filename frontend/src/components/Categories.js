import React from 'react'
import a from "../assets/c1.png"
import b from '../assets/c2.png'
import c from '../assets/c3.png'
import d from '../assets/c4.png'
const Categories = () => {
  return (
    <div className='categories section-center'>
      <div className='categories-container'>
        <article className='first-c'>
          <h3>clothing </h3>
          <img src={a} alt='' />
        </article>
        <article className='first-c fc'>
          <h3>Accessoires</h3>
          <img src={b} alt='' />
        </article>
        <article className='first-c fd'>
          <h3>Sacs</h3>
          <img src={c} alt='' />
        </article>
        <article className='first-c fe'>
          <h3>Chaussures</h3>
          <img src={d} alt='' />
        </article>
      </div>
    </div>
  )
}

export default Categories
