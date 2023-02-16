import React, {useEffect, useRef} from 'react'

function Skill({name, level, LevelStr, icon, color}) {
  const skillRef = useRef(null)
  const svgRef = useRef(null)

  useEffect(() => {

    skillRef.current.style.setProperty(
      '--clr', `${color}`
    )
  }, [color])



  useEffect(() => {
   svgRef.current.style.setProperty(
     '--offset', `${246 - (246*level/100)}`
   )
  }, [level])
  
  

  return (
     <div className="skill" ref={skillRef}>
       <div className="skill-container">
          <div className="icon_box">
            <div className="icon-container">
             
              <svg id='progress' xmlns='http://www.w3.org//2000/svg' version='1.1' ref={svgRef}>
                <defs>
                  <linearGradient id='GradientColor'>
                    <stop offset='0%' stopColor='#e91e63'/>
                    <stop offset='100%' stopColor='#673ab7'/>
                  </linearGradient>
                </defs>

                <circle cx='40' cy='40' r='40' strokeLinecap='round'/>
              </svg>
              <span className="icon" >{icon}</span>
            </div>
          </div>
          <div className="skill-name">
            <span>{name}</span>
          </div>
       </div>
     </div>
  )
}

export default Skill