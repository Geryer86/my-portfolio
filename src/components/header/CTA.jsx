import React from 'react';
import CV from '../../assets/CV_linkedIn.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn btn-primary'>Download my CV</a>
      <a href='#contact' className='btn'>Contact me!</a>
    </div>
  )
}

export default CTA