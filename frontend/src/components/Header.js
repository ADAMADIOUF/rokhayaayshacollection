import React from 'react'
import a from "../assets/h.png"
const Header = () => {
  return (
    <div className='header section-center'>
      <article className='header-img'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='556'
          height='397'
          viewBox='0 0 556 397'
          fill='none'
        >
          <path
            d='M53.7433 0.461195L508.184 135.847L555.054 384.138L1.95256e-05 396.928L53.7433 0.461195Z'
            fill='url(#paint0_linear_101_24)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_101_24'
              x1='65.6374'
              y1='411.025'
              x2='70.0426'
              y2='-0.419863'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#E1D882' />
              <stop offset='0.419487' stop-color='#E6B7A4' />
              <stop offset='1' stop-color='#F8B99E' />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='560'
          height='395'
          viewBox='0 0 560 395'
          fill='none'
        >
          <path
            d='M0.54071 0.461182L471.456 84.6003L560 394.285H0.54071V0.461182Z'
            fill='#F99469'
          />
        </svg>
        <img src={a} alt='' />
      </article>
      <article>
        <h3>Aysha Collection's</h3>
        <h2>COLLECTION DE LA PLUS HAUTE QUALITÉ</h2>
        <p>
          Explorez notre 'Collection de la Plus Haute Qualité', une boutique
          exclusive offrant une gamme élégante de hijabs, accessoires raffinés
          et chaussures tendance. Chaque pièce est soigneusement sélectionnée
          pour garantir une qualité exceptionnelle et un style inégalé.
        </p>
      </article>
    </div>
  )
}

export default Header
