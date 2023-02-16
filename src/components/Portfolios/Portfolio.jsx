import React, {useState, useEffect, useRef} from 'react'
import { UseSetupPortfolio } from '../../functions/portfolio'
import { FaPython, FaReact } from 'react-icons/fa'
import { SiDjango, SiWordpress, SiNextdotjs, SiFigma, SiSolidity, SiJavascript, SiHtml5, SiCss3, SiFirebase, SiReactos } from 'react-icons/si'



function Portfolio({id, category, name, description, libraries, LiveDemo, LiveDemoAdrress, SourceCode, SourceCodeAddress, imageUrl, onSpread}) {

  const portRef = useRef(null)
  const btnRef = useRef(null)
  const [icon, setIcon] = useState(null)
  const [color, setColor] = useState(null)

  const icons = {
    django: <SiDjango/>,
    wordpress: <SiWordpress/>,
    'next.js': <SiNextdotjs/>,
    figma: <SiFigma/>,
    solidity: <SiSolidity/>,
    javascript: <SiJavascript/>,
    html5: <SiHtml5/>,
    css3: <SiCss3/>,
    firebase: <SiFirebase/>,
    python: <FaPython/>,
    react: <FaReact/>,
    'react native': <SiReactos/>
  };

  UseSetupPortfolio(category, setIcon, setColor)

  useEffect(() => {
    portRef.current.style.setProperty(
      '--bg', `url(${imageUrl})`
    )
  }, [imageUrl])
  

    useEffect(() => {
      const pBtn = btnRef.current
      pBtn.addEventListener('click', () => onSpread(id))

      return () => pBtn.removeEventListener('click', () => onSpread(id))
    }, [id, onSpread])
    


  return (
    <div className='portfolio' ref={portRef} id={`${id}`} >
      <div className="portfolio-container flex flex-row relative" style={{zIndex: 10}}>
        <div className='content'>
          <div className="icon-container" ref={btnRef}>
            <span className="icon" style={{color: color, fontSize: 'var(--fs-mb)'}}>{icon}</span>
          </div>

          <div className="port-info">
            <div className="port-title">
              <h4>{name}</h4>
            </div>
            <p className="description">{ description }</p>
          </div>

          <div className="port-btn">
            <a href={LiveDemo? LiveDemoAdrress : null} className={LiveDemo? 'btn btn-stroke' : 'hide-btn'} alt='' target='_blank' rel='noreferrer'>Live Demo</a>
            <a href={SourceCode? SourceCodeAddress : null} className={SourceCode? 'btn btn-fill' : 'hide-btn'} alt='' target='_blank' rel='noreferrer'>Source Code</a>
          </div>
          
        </div>
        <div className="libraries relative">
          {
             libraries.map((lib, index) => <div key={index} className='lib flex center relative'>{icons[lib]}</div>)
          }
        </div>
      </div>
    </div>
  )
}


export default Portfolio