import React from 'react'
import '../PostProduct/PostProduct.css'
import pcall from '../../Pages/PostPage/call.png'
import pmail from '../../Pages/PostPage/sms.png'
import paddress from '../../Pages/PostPage/location.png'

import Review from '../../Components/Reviews/Review'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'

import profileimage from '../../Components/PostProduct/profileimage.png'
import ReactStars from 'react-stars'


const PostProduct = ({ productimg, profilepic, username, userdate }) => {
    return (
        <>
            <section className="post-details max-width-1440">

                <div className="left-post">
                    <img className='product-img' src={productimg} alt="" />
                    <div className="left-post-btn">
                        <Link to='/editpostproduct'>
                        <button className='edit-post-btn'>Edit your post </button>
                        </Link>
                        <button className='dlt-post-btn'>Delete your post </button>
                    </div>
                </div>
                <div className="right-post">
                    <h1 className="post-heading">How to create marketing personas that start with empathy</h1>
                    <div className="review-card-stars">
                        {/* <input type="radio" name="rate" id="rate-5" />
                        <FontAwesomeIcon for="rate-5" className='fastar' icon={faStar} />
                        <input type="radio" name="rate" id="rate-4" />
                        <FontAwesomeIcon for="rate-4" className='fastar' icon={faStar} />
                        <input type="radio" name="rate" id="rate-3" />
                        <FontAwesomeIcon for="rate-3" className='fastar' icon={faStar} />
                        <input type="radio" name="rate" id="rate-2" />
                        <FontAwesomeIcon for="rate-2" className='fastar' icon={faStar} />
                        <input type="radio" name="rate" id="rate-1" />
                        <FontAwesomeIcon for="rate-1" className='fastar' icon={faStar} /> */}

                        <ReactStars count={5} size={24} color2='#ffd700' />
                    </div>
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
                    <div className="reviews">
                        <div className="review-cards">
                            <Review reviewpara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula arcu nec libero porttitor tincidunt. Nullam massa lorem, tincidunt a placerat quis, semper at ex. Donec id molestie lacus." reviewimg={profileimage} />
                            <Review reviewpara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula arcu nec libero porttitor tincidunt. Nullam massa lorem, tincidunt a placerat quis, semper at ex. Donec id molestie lacus." reviewimg={profileimage} />
                            <Review reviewpara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula arcu nec libero porttitor tincidunt. Nullam massa lorem, tincidunt a placerat quis, semper at ex. Donec id molestie lacus." reviewimg={profileimage} />
                            <Review reviewpara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula arcu nec libero porttitor tincidunt. Nullam massa lorem, tincidunt a placerat quis, semper at ex. Donec id molestie lacus." reviewimg={profileimage} />
                        </div>

                    </div>


                </div>

            </section>


        </>
    )
}

export default PostProduct