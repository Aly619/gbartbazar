import React from 'react'
import '../Profile/Profile.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import prohero from '../Profile/proheropic.png'
import profilepic from '../../Pages/Profile/profilpic.png'
import location from '../../Pages/Profile/location.png'

import ProfileDetail from '../../Components/ProfileDetails/ProfileDetail'

import { useState } from 'react'

const Profile = () => {
  const [isLoggedIn, setIsloggedIn] = useState(true)
  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn}/>

    <section className="profile-section max-width-1440">
        <ProfileDetail proheroimg={prohero} profilepicture={profilepic} profiledetailsheading="GB Art Bazaar" profiledetailspara1="Skill Set" profiledetailspara2="Working place/ company" profiledetailspara3="company link here" profiledetailspara4="Address here"  location={location} />

    </section>


    <Footer/>
    </>
  )
}

export default Profile