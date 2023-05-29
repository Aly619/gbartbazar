import React from 'react'
import '../Reviews/Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const Review = ({ reviewpara, reviewimg }) => {
  return (
    <>
      <section className="review">
        <div className="review-card">
          <div className="review-card-up">
            <p>{reviewpara}</p>
            <img src={reviewimg} alt="" />
          </div>
          <div className="review-card-stars">
            <input type="radio" name="rate" id="rate-5"/>
            <FontAwesomeIcon for="rate-5" className='fastar' icon={faStar} />
            <input type="radio" name="rate" id="rate-4"/>
            <FontAwesomeIcon for="rate-4" className='fastar' icon={faStar} />
            <input type="radio" name="rate" id="rate-3"/>
            <FontAwesomeIcon for="rate-3" className='fastar' icon={faStar} />
            <input type="radio" name="rate" id="rate-2"/>
            <FontAwesomeIcon for="rate-2" className='fastar' icon={faStar} />
            <input type="radio" name="rate" id="rate-1"/>
            <FontAwesomeIcon for="rate-1" className='fastar' icon={faStar} />
           

          </div>
        </div>
      </section>
    </>
  )
}

export default Review