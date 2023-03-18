import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import PP from '../../assets/images/laptop-png.png'
import CV from '../../assets/brand/my_resume.pdf'
import { BsFillArrowDownCircleFill, BsFillArrowUpRightCircleFill } from 'react-icons/bs'

function Hero() {
  return (
    <>
      <div className="hero-circle"></div>
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-content" >
            <h3>Hi there! I am 
              <div>
                <p data-name="Dev.Legals" className="name">Dev.Legals</p>
              </div> 
            </h3>

            <p className="intro-subtitle">
              A dedicated Fullstack Developer, Problem solver and very passionate Pythonister. 
            </p>

            <div className="hero-cta">
              <div class="cta-container">
                <a href={CV} className="cta-stroke cta" download>VIEW RESUME <BsFillArrowDownCircleFill/></a>
                <Link to={'/contact'} className="cta-fill cta">CONTACT ME <BsFillArrowUpRightCircleFill/></Link>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container" style={{zIndex: 2}}>
              <img src={PP} alt="Dev Legals" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero