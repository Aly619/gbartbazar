import React from 'react'
import '../LandingCard/LandingCard.css'
import { Link } from 'react-router-dom'

const landingcard = ({landingimg, landingheader, profilepic, username, userdate}) => {
  return (
    <>
    <div className="landing-card">
      <Link to='/post'>
      <img className='landing-card-img' src={landingimg} alt="" />
      </Link>
        
        <h1 className="landing-header">{landingheader}</h1>

        <Link to={'/profile'}><div className="profile-link">
            <img className='landing-card-proimg' src={profilepic} alt="" />
            <p className="user-name">{username}</p>
            <div className="usergap"></div>
            <p className="user-date">{userdate}</p>
        </div></Link>
        
    </div>
    </>
  )
}

export default landingcard