import React from 'react'
import '../LandingCard/LandingCard.css'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const landingcard = ({ landingimg, landingheader, profilepic, username, userdate }) => {
  return (
    <>
      <div className="landing-card">
        <Link to='/post'>
          <img className='landing-card-img' src={landingimg} alt="" />
        </Link>
        <div className="review-card-stars">
          <input type="radio" name="rate" id="rate-5" />
          <FontAwesomeIcon for="rate-5" className='fastar' icon={faStar} />
          <input type="radio" name="rate" id="rate-4" />
          <FontAwesomeIcon for="rate-4" className='fastar' icon={faStar} />
          <input type="radio" name="rate" id="rate-3" />
          <FontAwesomeIcon for="rate-3" className='fastar' icon={faStar} />
          <input type="radio" name="rate" id="rate-2" />
          <FontAwesomeIcon for="rate-2" className='fastar' icon={faStar} />
          <input type="radio" name="rate" id="rate-1" />
          <FontAwesomeIcon for="rate-1" className='fastar' icon={faStar} />

        </div>


        <h1 className="landing-header">{landingheader}</h1>

        <Link to={'/profile'}><div className="profile-link">
          <img className='landing-card-proimg' src={profilepic} alt="" />
          <p className="user-name">{username}</p>
          <div className="usergap"></div>
          <p className="user-date">{userdate}</p>
        </div></Link>

        <Link to={'/post'}><div className="reviewbtn">
          {/* <button>Review</button> */}
        </div></Link>
       

      </div>
    </>
  )
}

export default landingcard