import React from 'react'
import '../SignIn/SignIn.css'
import signin from '../../Images/Signupimg.png'
import usericon from '../../Images/user.png'
import usernameicon from '../../Images/username.png'
import emailicon from '../../Images/sms.png'
import passwordicon from '../../Images/lock.png'


const SignIn = () => {
    return (
        <>
            <div className="max-width-1440">
                <section className="signin ">

                    <section className="left-section">
                        <h1 className="signinheading">Sign up to <br /> <span className='primary-blue-color'>GB </span> Art Bazaar</h1>
                        <p className="signinpara">GB Art Bazaar is the leading destination
                            to find & showcase creative work and home to the world's best design professionals.</p>


                        <div className="input-fields">

                            <div className="input-name">
                                <input className='name' type="text" placeholder='Name' name='name' id='name' />
                                <div className="user-icon">
                                    <img src={usericon} alt="" />
                                </div>
                            </div>

                            <div className="input-name">
                                <input className='name' type="text" placeholder='Username' name='username' id='username' />
                                <div className="username-icon">
                                    <img src={usernameicon} alt="" />
                                </div>
                            </div>

                            <div className="input-name">
                                <input className='name' type="Email" placeholder='Email' name='email' id='email' />
                                <div className="email-icon">
                                    <img src={emailicon} alt="" />
                                </div>
                            </div>

                            <div className="input-name">
                                <input className='name' type="password" placeholder='Password' name='Password' id='password' />
                                <div className="password-icon">
                                    <img src={passwordicon} alt="" />
                                </div>
                            </div>

                        </div>

                        <button className='submit-btn' type='submit'>Create Account</button>

                    </section>

                    <section className="right-section">
                        <img className='hero-img' src={signin} alt="" />
                    </section>


                </section>

            </div>



        </>
    )
}

export default SignIn