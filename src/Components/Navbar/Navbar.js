import React from 'react'
import '../Navbar/Navbar.css'
import searchimg from '../Navbar/search.png'
import bellicon from '../Navbar/notification-bing.png'
import profileicon from '../Navbar/Ellipse 381.png'

import { Link } from 'react-router-dom'

const Navbar = ({ isLoggedIn }) => {
    return (

        <>
            <section className="navbar max-width-1440">

                <Link to={'/'}>
                    <div className="left-navbar">
                        <h1 className="logo"><span className='primary-blue-color'> GB</span> Bazaar</h1>
                    </div>
                </Link>


                {
                    isLoggedIn ? (<div className="right-navbar">
                        <div className="navbar-input">
                            <input className='navbar-search' type="input" placeholder='Search..' name='Search' id='search' />
                            <div className="search-icon">
                                <img className='search-img' src={searchimg} alt="" />
                            </div>
                        </div>
                        <img className='bell-icon' src={bellicon} alt="" />
                        <Link to='/profile'><img className='profile-icon' src={profileicon} alt="" /></Link>


                    </div>) : (
                        <>
                            <div className="header-right">
                                <Link to={'/login'}> <button className="landing-signin-btn">Sign In</button></Link>
                                <Link to={'/signup'}> <button className="landing-register-btn">Register</button></Link>


                            </div>
                        </>
                    )
                }

            </section>
        </>
    )
}

export default Navbar