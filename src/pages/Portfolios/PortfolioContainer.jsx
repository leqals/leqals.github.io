import React, {useState} from 'react'
import { UseSetupPortfolio } from '../../functions/portfolio'

function PortfolioContainer({id, category, name, description, LiveDemo, LiveDemoAdrress, SourceCode, SourceCodeAddress}) {

  const [icon, setIcon] = useState(null)
  const [color, setColor] = useState(null)

  UseSetupPortfolio(category, setIcon, setColor)

  return (
   <div className="p_container">
    
    <div className="p_content">

      <div className="p_name"> { name } </div>
      <div className="description">{ description }</div>

      <div className="capsule_buttons">
        {
          LiveDemo ? <a href = { LiveDemoAdrress } className={ LiveDemo && SourceCode ? "capsule_btn capsule_btn_left": "capsule_btn_single capsule_btn" } >Live Demo</a> : null
        }
        {
          SourceCode ? <a href = { SourceCodeAddress } className={ LiveDemo && SourceCode ? "capsule_btn capsule_btn_right": "capsule_btn_single capsule_btn" } >Source Code</a> : null
        }
      </div>
      
    </div>
   </div>
  )
}

export default PortfolioContainer