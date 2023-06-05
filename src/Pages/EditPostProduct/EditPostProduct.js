import React from 'react'
import '../EditPostProduct/EditPostProduct.css'

import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import pcall from '../../Pages/PostPage/call.png'
import pmail from '../../Pages/PostPage/sms.png'
import paddress from '../../Pages/PostPage/location.png'

import { useState } from 'react'



const EditPostProduct = () => {
    const [isLoggedIn, setIsloggedIn] = useState(true)
    return (
        <>
        <Navbar isLoggedIn={isLoggedIn}/>

            <section className="post-details max-width-1440">

                <div className="left-post">
                    <input type="file" />

                </div>
                <div className="right-post">
                    <input type="text" name="" id="" />
                    <h2 className="post-heading2">Describtion</h2>
                    <input type="text" name="" id="" />
                    <div className="post-contact-links">
                        <div className="post-number">
                            <img src={pcall} alt="" />
                            <input type="text" name="" id="" />

                        </div>
                        <div className="post-mail">
                            <img src={pmail} alt="" />
                            <input type="text" name="" id="" />

                        </div>
                        <div className="post-address">
                            <img src={paddress} alt="" />
                            <input type="text" name="" id="" />

                        </div>

                    </div>



                </div>

            </section>

            <Footer/>
        </>
    )
}

export default EditPostProduct