import React from 'react'
import MetaTags from 'react-meta-tags'
import './about.css'
// import Benefit from './Benefit'/
import {Header} from '../../components'
import { benefits } from '../../assets/static/data'
import portfolioSvg from '../../assets/images/portfolio.svg'
import selfTaught from  '../../assets/images/selfTaught.svg'
import devProduction from '../../assets/images/devProduction.svg'


function About() {

  return (
    <>
        <Header/>
        <div className="wrapper">
            <MetaTags>
                <title>About Dev.Legals | Have an insight into the Developer you are hiring</title>
                <meta name="description" content="Get to Know More about This Web Developer and Pythonister. Am Sure You will Love Dev.Legal"/>
                <meta property="og:title" content="Know More About Dev.Legals" />
                <meta property="og:image" content={devProduction} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </MetaTags>

            <div className="about-container">
                <div className="who text-right">
                    <div className=" card">
                        <h3 className="q">Who is Dev.Legals?</h3>
                        <p className="subtitle">Dev.Legals is a passionate Software Enthusiates. He was Born and Brought up in Gboko, Benue State. His Favorite IDEs are VSCode and Jupyter NoteBook</p>
                    </div>

                    <div className="img"><img src={portfolioSvg} alt="About Dev.Legals" /></div>
                </div>
                <div className="what text-left">
                    <div className="card">
                        <h3 className="q">Whats Does Dev.Legals Do?</h3>
                        <p className="subtitle">Dev.Legals is into Web Development, Data Analysis and Web Scraping. He also a Machine Learning lover. He Develops websites using Wordpress, React, Django not to mention HTML, CSS, JavaScript and PHP. DataBase? Sorry I forgot to mention that He is familiar with MongoDb and very familiar With MySQL. Python! Thats the base of every other thing He does. Web Scraping, Data Analysis and Basic Machine Learning, all of these He uses Python.</p>
                    </div>

                    <div className="img"><img src={devProduction} alt="About Dev.Legals" /></div>
                </div>
                <div className="benefits">
                    <h3 className="b-q">How do You Benefit working with Dev.Legals</h3>
                <div className='benefits-container' >
                { benefits.map( benefit => <Benefit key={benefit.name} {...benefit} />) }
                </div>
                </div>

                <div className="how text-right">
                    <div className=" card">
                        <h3 className="q">How Qualified is He?</h3>
                        <p className="subtitle">Dev.Legals is unfortunately a self-taught Developer who is doing His National Deploma at Federal Polytechnic Ile-Oluji, Ondo State, Nigeria. he has no form of certification, BUT, This doesn't make Him any less than any certified Developer. Infact, this give more chance to explore and improve His ability to Learn and Adapt. Nevertheless, if you feel like offering an oppotunity to get Certified, Am all in.</p>
                    </div>
                    <div className="img"><img src={selfTaught} alt="About Dev.Legals" /></div>
                </div>
            </div>
    </div>
    </>
  )
}

const Benefit = ({name, subtitle, icon, color}) => {
    return (
      <div className="benefit-container">
        <div className="benefit">
          <div className="icon-cont">
            <span className="icon" style={{color}}>{icon}</span>
          </div>
          <h4 className='name' >{name}</h4>
          <p className="b-subtitle">{subtitle}</p>
        </div>
      </div>
    ) 
  }

export default About