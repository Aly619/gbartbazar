import React from 'react'
import '../PostPage/Post.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import productimg from '../PostPage/product.png'
import propic from '../PostPage/Avatar.png'
import { useState } from 'react'



import PostProduct from '../../Components/PostProduct/PostProduct'


const Post = () => {
  const [isLoggedIn, setIsloggedIn] = useState(true)
  return (
    <>
    <Navbar isLoggedIn={isLoggedIn}/>

    <section className="post-section">
    <PostProduct productimg={productimg} profilepic={propic} username="John Birmingham" userdate="25 December 2019" />

    </section>

    <Footer/>
    </>
  )
}

export default Post