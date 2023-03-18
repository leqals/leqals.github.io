import React from 'react'
import {services} from '../../assets/static/data'
import './services.css'
import Service from './Service'

function Services() {
  return (
    <div className="services-wrapper">
        <div className="container">
          <h2 className="services-title text-center">
            The Render Method in <span className="service-focus">My Services</span> is Quite Awesome
          </h2>

         
            <div className="services-container flex center">
              {
                  services.map( ({id, title, subtitle, serviceIcon, pd, skillUse, icolor}) => <Service key={id} title={title} subtitle={subtitle} icon={serviceIcon} pd={pd} skillUse={skillUse} icolor={icolor}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Services