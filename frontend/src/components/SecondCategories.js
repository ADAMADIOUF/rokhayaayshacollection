import React from 'react'
import a from  "../assets/g1.png"
import b from '../assets/g2.png'
import c from '../assets/g3.png'
import d from '../assets/g4.png'


const SecondCategories = () => {
  return (
    <div className='second-categories section-center'>
      <div className='second-categories-container'>
        <article className='second-c1'>
          <img src={a} alt='' />
        </article>
        <article className='second-c2'>
          <img src={b} alt='' />
        </article>
      </div>
      <div className='second-categories-container'>
        <article className='second-c2'>
          <img src={c} alt='' />
        </article>
        <article className='second-c1'>
          <img src={d} alt='' />
        </article>
      </div>
    </div>
  )
}

export default SecondCategories
