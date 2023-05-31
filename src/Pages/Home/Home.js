import React from 'react'
import '../Home/Home.css'
import demo from '../LandingPage/demo.png'
import heroimg from '../LandingPage/heroimg.png'

import c1 from '../../Components/LandingCard/c1.png'
import c2 from '../../Components/LandingCard/c2.png'
import c3 from '../../Components/LandingCard/c3.png'
import c4 from '../../Components/LandingCard/c4.png'
import c5 from '../../Components/LandingCard/c5.png'
import c6 from '../../Components/LandingCard/c6.png'
import propic from '../../Components/LandingCard/propic.png'
import handmadehero from '../../Images/handmadehero.png'
import historicalhero from '../../Images/historicalheroimg.png'

import Navbar from '../../Components/Navbar/Navbar'
import LandingCard from '../../Components/LandingCard/LandingCard'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Footer from '../../Components/Footer/Footer'


const Home = ({ isLoggedIn }) => {


    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} />
            <section className="home-section max-width-1440">

                {/* -----------------------------------Hero-section--------------------------------- */}

                <section className="landing-hero-section">

                    <section className="landing-hero-left">
                        <h1 className="landing-hero-header">Discover the GB’s
                            designers & <span className='primary-blue-color'>creatives</span> </h1>
                        <p className="landing-hero-para">GB ArtBazaar is the leading destination to find & showcase creative work and home to the world's best design professionals.</p>

                        <div className="landing-hero-btn">
                            <button className="get-btn">Get Started</button>
                            <img className='demo-btn' src={demo} alt="" />
                        </div>

                    </section>
                    <section className="landing-hero-right">
                        <img className='landing-hero-img' src={heroimg} alt="" />

                    </section>

                </section>


                {/* ----------------------------Our-Community------------------------- */}

                {isLoggedIn ? (
                    <div className="com">

                        <div className="community-catogory">

                            <p className="catogory-para">All</p>
                            <p className="catogory-para">Catogory 1</p>
                            <p className="catogory-para">Catogory 2</p>
                            <p className="catogory-para">Catogory 3</p>
                            <p className="catogory-para">Catogory 4</p>


                        </div>

                    </div>

                ) : (
                    <div className='our-community'>

                        <h1 className="our-heading">Our <span className='primary-blue-color'> Community</span></h1>
                        <p className="our-para">GB Art Bazaar is the leading destination to find & showcase creative work and home to the world's best design professionals.</p>


                    </div>

                )}

                <section className="our-community">


                    <section className="community-cards">

                        <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

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

                    </section>

                    {/* --------------------Handmade-Arts--------------------- */}

                    <section className="handmade-arts">
                        <h1 className="handmade-heading">We produce the best  <span className='primary-blue-color'> handmade Art.</span></h1>
                        <p className="handmade-para">The word Artbazaar literally translates to ‘image’ and we believe every piece of art is a reflection of the artist’s mind.</p>
                        <img src={handmadehero} alt="" className="handmade-heroimg" />
                        <div className="handmade-cards">
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

                        </div>
                    </section>

                    {/* --------------------Historical-places-------------------- */}

                    <section className="historical-places">
                        <h1 className="historical-heading">Historical <span className='primary-blue-color'> places.</span></h1>
                        <p className="historical-para">The word Artbazaar literally translates to ‘image’ and we believe every piece of art is a reflection of the artist’s mind.</p>
                        <img src={historicalhero} alt="" className="historical-heroimg" />
                        <div className="historical-cards">
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />
                            <LandingCard landingimg={c1} landingheader="How to create desigining personas that start with empathy" profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

                        </div>
                    </section>

                    {isLoggedIn ? (
                       
                       <></>
                   

                ) : (
                    <div className="card-button">

                    <Link to='/signup'><button className="card-signup">Sign up to Continue</button></Link>
                    <Link to='/login'><button className="card-signin">Sign In</button></Link>


                </div>
                   

                )}

                </section>


            </section>
            <Footer />
        </>
    )
}

export default Home