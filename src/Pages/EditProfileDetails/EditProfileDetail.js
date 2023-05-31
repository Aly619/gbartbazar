import React from 'react'
import './EditProfileDetail.css'
import profileformimg from '../EditProfileDetails/profileformimg.png'


const EditProfileDetail = () => {
    return (
        <>
            <section className="profile-form">
                <div className="profile-form-left">
                    <div className="profile-form-left-img">
                        <img src={profileformimg} alt="" />
                    </div>
                </div>
                <div className="profile-form-right">
                    <div className="form-inputs">
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder='Enter Your Name' />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="Name">Last Name</label>
                        <input type="text" placeholder='Enter Last Name' />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="Name">Add your skil</label>
                        <input type="text" placeholder='Add Skill ' />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="Name">Company name</label>
                        <input type="text" placeholder='Company Name' />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="Name">Add Company Link</label>
                        <input type="text" placeholder='Add Company Link' />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="Name">Address</label>
                        <input type="text" placeholder='Enter Your Address' />
                    </div>
                    <button className='form-save-btn'>Save & Continue</button>





                </div>
            </section>
        </>
    )
}

export default EditProfileDetail