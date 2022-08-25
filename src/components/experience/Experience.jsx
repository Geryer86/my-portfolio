import React from 'react';
import './experience.css';
import {BsShieldFillCheck} from 'react-icons/bs';
import {AiFillCheckSquare} from 'react-icons/ai';
import html from '../../assets/logo__html.png';
import css from "../../assets/logo__css.png";
import javascript from "../../assets/logo__js.png";
import node from "../../assets/logo__node.png";
import postgreSQL from "../../assets/logo__postgres.png";
import react from "../../assets/logo__react.png";
import redux from "../../assets/logo__redux.png";
import sequelize from "../../assets/logo__sql.png";
import express from "../../assets/logo_ex.png";
import typescript from "../../assets/logo__ts.png";

const techs = [
  {
    id:1,
    src:html,
    title:'HTML',
    style: 'shadow-orange-500'
  },
  {
    id:2,
    src:css,
    title:'CSS',
    style: 'shadow-blue-600'
  },
  {
    id:3,
    src:react,
    title:'React',
    style: 'shadow-sky-500'
  },
  {
    id:4,
    src:javascript,
    title:'JavaScript',
    style: 'shadow-yellow-500'
  },
  {
    id:5,
    src:redux,
    title:'Redux',
    style: 'shadow-violet-500'
  }
]
const techs2 = [
  {
    id:6,
    src:express,
    title:'Express',
    style: 'shadow-gray-500'
  },
  {
    id:7,
    src:sequelize,
    title:'Sequelize',
    style: 'shadow-sky-500'
  },
  {
    id:8,
    src:node,
    title:'Node',
    style: 'shadow-green-400'
  },
  {
    id:9,
    src:postgreSQL,
    title:'PostgreSQL',
    style: 'shadow-blue-300'
  },
  {
    id:10,
    src:typescript,
    title:'TypeScript',
    style: 'shadow-blue-300'
  },
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills and techs</h5>
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
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
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
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className='techs_container'>
        {
          techs.map(({ id, src, title, style }) => (
            <div className={`techs ${style}`}>
              <img src={src} alt="" className='techs_logo'/>
            </div>
          ))
        }
      </div>
      <div className='techs_container'>
        {
          techs2.map(({ id, src, title, style }) => (
            <div className={`techs ${style}`}>
              <img src={src} alt="" className='techs_logo'/>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Experience