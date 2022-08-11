import React from 'react';
import CTA from './CTA';
import ME from '../../assets/foto.png';
import HeaderSocials from './HeaderSocials';
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hi! I'm</h3>
        <h1>Germán Flores</h1>
        <h5 className="text-light">Full Stack Developer // Agricultural Engineer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='me' width='320px'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll down</a>

      </div>
    </header>
  )
}

export default Header