import React from 'react'
import {Link} from 'react-router-dom'

function Service({title, subtitle, icon, pd, skillUse, icolor }) {
  const colorIcon = {
    color: icolor
  }

  return (
    <div className="service">
      <div className="service-card">
        <div className="service-icon-cont">
          <h3 style={colorIcon}>{icon}</h3>
        </div>

        <div className="service-description">
          <div className="service-description-title">
            <h3 className="title">{title}</h3>
          </div>
          <div className='service--description-content'>
            <div className="service-description-subtitle">
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service