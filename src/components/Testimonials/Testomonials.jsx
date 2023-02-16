import React from 'react'
import './testimonial.css'
import Testimonial from './Testimonial'
import {testimonials} from '../../assets/static/data'

function Testimonials() {

  

  return (
    <div className="test-wrapper">
      <div className="section-title">
        <h2 >TESTIMONIALS</h2>
      </div>
      <div className="tests-container">
        <div className="tests">
          {testimonials.map(({clientName, clientRating, comment, clientImg}, index) => <Testimonial
          clientName ={clientName}
          clientRating = {clientRating}
          clientComment = {comment}
          clientImg = {clientImg}
          key = {index}
          />)}
        </div>
      </div>
    </div>
  )
}

export default Testimonials