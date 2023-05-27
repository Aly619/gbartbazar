import React from 'react'
import '../ProfileDetails/ProfileDetail.css'

import LandingCard from '../../Components/LandingCard/LandingCard'

import c1 from '../../Components/LandingCard/c1.png'
import c2 from '../../Components/LandingCard/c2.png'
import c3 from '../../Components/LandingCard/c3.png'
import c4 from '../../Components/LandingCard/c4.png'
import c5 from '../../Components/LandingCard/c5.png'
import c6 from '../../Components/LandingCard/c6.png'
import propic from '../../Components/LandingCard/propic.png'
import { Link } from 'react-router-dom'





const ProfileDetail = ({ proheroimg, profilepicture, profiledetailsheading, profiledetailspara1, profiledetailspara2, profiledetailspara3, profiledetailspara4, location }) => {
  return (
    <>
      <section className="profile-detail">
        <img src={proheroimg} alt="" />
        <div className="pro-leftandright">

          <div className="pro-left">
            <div className="profile-details">
              <img src={profilepicture} alt="" />
              <h1>{profiledetailsheading}</h1>
              <p>{profiledetailspara1}</p>
              <p>{profiledetailspara2}</p>
              <p>{profiledetailspara3}</p>
              <div className="profile-address">
                <img src={location} alt="" />
                <p>{profiledetailspara4}</p>
              </div>
              <button className='profile-edit-btn'>Edit Your Profile</button>
            </div>

          </div>
          <div className="pro-right">
            <div className="pro-right-top">
              <button className="my-art-btn">My art work</button>
              <p className='pro-right-top-about'>About</p>

              <Link to={'/upload'}><p className='pro-right-top-share'>Share your art work</p></Link>
              
            </div>
            <div className="pro-right-bottom">
              <LandingCard landingimg={c1} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
              
              <LandingCard landingimg={c2} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={c3} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={c4} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={c5} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={c6} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
              <LandingCard landingimg={c1} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={c2} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={c3} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={c4} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={c5} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={c6} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default ProfileDetail