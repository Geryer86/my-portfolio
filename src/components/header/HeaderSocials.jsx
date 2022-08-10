import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/germ%C3%A1n-flores-arg86/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/Geryer86' target="_blank"><FaGithub/></a>
      <a href='' target="_blank"></a>
    </div>
  )
}

export default HeaderSocials