import React from 'react'
import '../ProfileDetails/ProfileDetail.css'

import LandingCard from '../../Components/LandingCard/LandingCard'

import pro1 from '../../Components/LandingCard/profile1.png'
import pro2 from '../../Components/LandingCard/profile2.png'
import pro3 from '../../Components/LandingCard/profile3.png'
import pro4 from '../../Components/LandingCard/profile4.png'
import pro5 from '../../Components/LandingCard/profile5.png'
import pro6 from '../../Components/LandingCard/profile6.png'
import pro7 from '../../Components/LandingCard/profile7.png'
import pro8 from '../../Components/LandingCard/profile8.png'
import pro9 from '../../Components/LandingCard/profile9.png'
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
              <Link to={'/editprofiledetail'}><button className='profile-edit-btn'>Edit Your Profile</button></Link>
              
            </div>

          </div>
          <div className="pro-right">
            <div className="pro-right-top">
              <button className="my-art-btn">My art work</button>
              <p className='pro-right-top-about'>About</p>

              <Link to={'/upload'}><p className='pro-right-top-share'>Share your art work</p></Link>
              
            </div>
            <div className="pro-right-bottom">
              <LandingCard landingimg={pro5} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
              
              <LandingCard landingimg={pro9} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={pro3} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={pro4} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={pro1} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={pro6} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
              
              <LandingCard landingimg={pro2} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={pro5} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={pro4} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={pro8} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

              <LandingCard landingimg={pro7} landingheader="How to create marketing personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />


              
            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default ProfileDetail