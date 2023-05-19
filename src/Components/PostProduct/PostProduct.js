import React from 'react'
import '../PostProduct/PostProduct.css'
import pcall from '../../Pages/PostPage/call.png'
import pmail from '../../Pages/PostPage/sms.png'
import paddress from '../../Pages/PostPage/location.png'


const PostProduct = ({productimg,profilepic,username,userdate}) => {
    return (
        <>
            <section className="post-details max-width-1440">

                <div className="left-post">

              <img className='product-img' src={productimg} alt="" />

                </div>
                <div className="right-post">
                    <h1 className="post-heading">How to create marketing personas that start with empathy</h1>
                    <div className="profile-link1">
                        <img className='post-proimg' src={profilepic} alt="" />
                        <p className="users-name">{username}</p>
                        <div className="usergap"></div>
                        <p className="users-date">{userdate}</p>
                    </div>
                    <h2 className="post-heading2">Describtion</h2>
                    <p className="post-para">GB Art Bazaar is the leading destination to find & showcase creative work and home to the world's best design professionals. GB Art Bazaar is the leading destination to find & showcase creative work and home to the world's best design professionals. GB Art Bazaar is the leading destination to find & showcase creative work and home to the world's best design professionals. GB Art Bazaar is the leading destination to find & showcase creative work and home to the world's best design professionals. </p>
                    <div className="post-contact-links">
                        <div className="post-number">
                            <img src={pcall} alt="" />
                            <p>Contact Number: 03555 059344</p>

                        </div>
                        <div className="post-mail">
                        <img src={pmail} alt="" />
                            <p>Mailing Address: javediq999@gamail.com</p>

                        </div>
                        <div className="post-address">
                        <img src={paddress} alt="" />
                            <p>Addrss: Ideometrix ltd pakistan gilgit</p>

                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default PostProduct