import React from 'react'
import '../UploadPage/Upload.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import backbtn from '../UploadPage/back.png'
import uploadimg from '../UploadPage/uploadimg.png'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
// import { isDisabled } from '@testing-library/user-event/dist/utils'



const Upload = () => {
  const [isLoggedIn, setIsloggedIn] = useState(true)
  const navigate = useNavigate()

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }



  };
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} />
      <section className="upload max-width-1440">
        <div className="back-btn">
          <img onClick={() => navigate(-1)} src={backbtn} alt="" />

        </div>
        <div className="upload-content">
          <input className='upload-content-title' type="text" placeholder='Enter your title' />
          <div className="upload-content-image-section " id='img-box'>
            <input className='upload-content-image' type="file" accept='image/*' name='image' id='file' onChange={handleImageChange} />
            <label htmlFor="file">
              <div>
                {selectedImage ? (
                  <div className='upload-img'>
                    <img src={selectedImage} alt="Preview" />
                  </div>
                ) : (
                  <img src={uploadimg} alt="Preview" />
                )}
              </div>
            </label>

            {/* {selectedImage && (
              <div className='upload-img'>
                <img src={selectedImage} alt="Preview" />
              </div>
            )} */}
            {/* <img src={uploadimg} alt="" /> */}
            {/* <label className='upload-label' htmlFor="file">Upload</label> */}

          </div>
          <textarea name="" id="" placeholder='Type your desicribtion here ( up to 200 words)' cols="30" rows="1"></textarea>

        </div>
        <div className="upld-btn">
          <button className='upload-btn'>Upload</button>

        </div>
      </section>

      <Footer />


    </>
  )
}


export default Upload