import React from 'react';
import './about.css';
import ME from '../../assets/me.jpg';
import {FaTools} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {MdWork} from 'react-icons/md';


const About = () => {
  return (
    <section className='about' id='about'>
      <h5>Find out</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" width='280'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaTools className='about__icon'/>
              <h5>Experience</h5>
              <small>Programming</small>
              <br/>
              <small>Field work</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>
            <article className='about__card'>
              <MdWork className='about__icon'/>
              <h5>Projects</h5>
              <small>2 completed</small>
            </article>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <a href='#contact' className='btn btn-primary'>Contact me!</a>
        </div>
      </div>
    </section>
  )
}

export default About