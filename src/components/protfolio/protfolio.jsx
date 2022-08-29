import React from 'react'
import './protfolio.css'
import data from './data'

const protfolio = () => {
  return (
    <section id='protfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container protfolio__container'>
        {data.map(({image, title, github, demo}) => {
          return(
            <article className='protfolio__item'>
                <div className='item-image'>
                  <img src={image} alt="" className='protfolio__item-image'/>
                </div>
                <h3>{title}</h3>
                <div className='protfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default protfolio