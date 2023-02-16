import React from 'react'
import Skill from './Skill'
import './skills.css'
import {skillsArr} from '../../assets/static/data'

function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-title">
        <h2>A Combination of <span className="skill-focus">Passion</span> and <span className="skill-focus">Skill</span> makes up a <span className="skill-focus">Masterpiece</span>.</h2>
      </div>
      <div className="skills-container">
        {skillsArr.map(({Name, Level, LevelStr, icon, color}, index) => <Skill name={Name} key={index} index={index} level={Level} LevelStr={LevelStr} icon={icon} color={color} />)}
      </div>
    </div>
  )
}

export default Skills