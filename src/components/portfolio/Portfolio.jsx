import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/henry-countries-pi.PNG'
import IMG2 from '../../assets/henry-games.PNG'


const Portfolio = () => {
  const porfolioItems = [{
    id: 1,
    image: IMG1,
    title: "Henry Countries",
    github: "https://github.com/Geryer86/PI-Countries",
    demo: "https://pi-countries-inky.vercel.app"
  },
  {
    id: 2,
    image: IMG2,
    title: "Henry Games",
    github: "https://github.com/Geryer86/HenryGames-PG",
    demo: "https://henry-games-pg.vercel.app"
  }]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container portfolio__container'>
        {
          porfolioItems.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className="portfolio__item-image">
                  <img src={image} alt="PROJECT 1" width='100%'/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio