import React, {useEffect} from 'react'
import Portfolio from './Portfolio'
import './portfolio.css'
import {portfolios} from '../../assets/static/data'


function Portfolios() {

  const ports = portfolios.slice(0, 5)
    useEffect(() => {
     document.querySelectorAll('.portfolio')[Math.floor(ports.length/2)].classList.add('active')
    }, [ports.length])
   

    const handleSpread = id => {
      const port = document.getElementById(`${id}`)
      const allPorts = document.querySelectorAll('.portfolio')
      allPorts.forEach(port => port.classList.remove('active'))
      port.classList.add('active')
    }

  return (
    <div className="portfolios-wrapper">
      <div className="portfolios-container">
        <div className="portfolios-title">
          <blockquote><h2>I thick its Crucial to Diversify Ones <span className="title-focus">Portfolios</span></h2></blockquote>
          <cite>- Soha Ali Khan</cite>
        </div>
        <div className="portfolios">
          {
            ports.map( port => <Portfolio key={port.id} onSpread={handleSpread} {...port}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolios