import React from 'react';
import './experience.css';
import {BsShieldFillCheck} from 'react-icons/bs';
import {AiFillCheckSquare} from 'react-icons/ai';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsShieldFillCheck className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsShieldFillCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsShieldFillCheck className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsShieldFillCheck className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Begginer</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsShieldFillCheck className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Begginer</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsShieldFillCheck className='experience__details-icon'/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>Postgres</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>Sequelize</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience