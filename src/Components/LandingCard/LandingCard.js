import React from 'react'
import '../LandingCard/LandingCard.css'
import { Link } from 'react-router-dom'
// import ReactStars from 'react-stars'

import { HiOutlinePencil } from 'react-icons/hi'
import { TbTrash } from 'react-icons/tb'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'

const landingcard = ({ landingimg, landingheader, profilepic, username, userdate }) => {
  return (
    <>
      <div className="landing-card">
        <div className="landing-card-top">
          <div className="card-edit-del">
            <div className="edit-del-circle">
              <Link to={'/editpostproduct'}>
                <HiOutlinePencil className='landing-card-icon' />
              </Link>
            </div>
            <div className="edit-del-circle">
              <Link>
                <TbTrash className='landing-card-icon' />
              </Link>

            </div>
          </div>
          <Link to='/post'>
            <div className="landing-card-image">
              <img className='landing-card-img' src={landingimg} alt="" />
            </div>

          </Link>
        </div>

        {/* <div className="review-card-stars">
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

          <ReactStars count={5} size={24} color1={'#ffd700'} />

        </div> */}


        <h1 className="landing-header">{landingheader}</h1>

        <Link to={'/profile'}>
          <div className="profile-link">
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