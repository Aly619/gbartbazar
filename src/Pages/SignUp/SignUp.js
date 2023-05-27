import React from 'react'
import '../SignIn/SignIn.css'
import '../SignUp/SignUp.css'
import signin from '../../Images/Signupimg.png'
import usernameicon from '../../Images/username.png'
import passwordicon from '../../Images/lock.png'

import { useNavigate } from 'react-router-dom'
const SignUp = ({isLoggedIn,setIsloggedIn}) => {

    const navigate = useNavigate()
    const handleSignUp = ()=>{
        console.log('Form Submitted')
        setIsloggedIn(true)
        navigate('/')
    }
    return (
        <>
            <div className="max-width-1440">
                <section className="signup">
                    <section className="left-section">
                        <h1 className="signinheading">Sign In to <br /> <span className='primary-blue-color'>GB </span> Art Bazaar</h1>
                        <p className="signinpara">GB Art Bazaar is the leading destination
                            to find & showcase creative work and home to the world's best design professionals.</p>


                        <div className="input-fields">

                            <div className="input-name">
                                <input className='name' type="text" placeholder='Username' name='username' id='username' />
                                <div className="username1-icon">
                                    <img src={usernameicon} alt="" />
                                </div>
                            </div>

                            <div className="input-name">
                                <input className='name' type="password" placeholder='Password' name='Password' id='password' />
                                <div className="password1-icon">
                                    <img src={passwordicon} alt="" />
                                </div>
                            </div>

                        </div>

                        <p className="forget-password">forget Password?</p>

                        <button className='signin-btn' type='submit' onClick={handleSignUp}>Sign In</button>

                    </section>

                    <section className="right-section">
                        <img className='hero-img' src={signin} alt="" />
                    </section>
                </section>

            </div>

        </>
    )
}

export default SignUp