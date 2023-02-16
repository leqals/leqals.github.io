import React, {useEffect, useReducer, useState} from 'react'
import {FaStar} from 'react-icons/fa'



function Testimonial({clientName, clientRating, clientComment, clientImg}) {

    const [rating, setRating] = useState(null)

    const rate = (rValue) => {
        if (rValue >= 90 ){
            setRating( r => r = <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>)
        }

        else if (rValue < 90 && rValue >= 80){
            setRating( r => r = <div><FaStar/><FaStar/><FaStar/><FaStar/></div>)
        }
        else if (rValue < 80 && rValue >= 60){
            setRating( r => r = <div><FaStar/><FaStar/><FaStar/></div>)
        }
        else if (rValue < 60 && rValue >= 40){
            setRating( r => r = <div><FaStar/><FaStar/></div>)
        }
        else if (rValue < 40 && rValue >= 10){
            setRating( r => r = <div><FaStar/></div>)
        }
    }

    // eslint-disable-next-line no-unused-vars
    const [_r, dispatch] = useReducer(rate, clientRating)
    
    useEffect(() => {
        dispatch()
    })

  return (
    <div className="test">
        <div className="test-container" style={{zIndex:3}}>
            <div className="i-con">
                <img src={clientImg} alt=''/>
            </div>

            <div className="content-container">
                <div className="client-info">
                    <div className="client-rating">{rating}</div>
                    <div className="client-name"><h3>{clientName}</h3></div>
                </div>

                <div className="comment">
                    <div className="c-cont">
                        {clientComment}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial