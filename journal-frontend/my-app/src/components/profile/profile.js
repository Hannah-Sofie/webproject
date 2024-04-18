import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../header/Header";
import importedProfileImage from "./images/ansikt.jpg";
import "./profile.css"

const Profile = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        newPassword: '',
        profileImage: importedProfileImage
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleProfileImageChange = () => {
    };

    const handleSave = (e) => {
        e.preventDefault();
        navigate('/reflections');
    };

    return (
  <>
    <Header />
    <div className='page-container'>
        <main className="main-content center">
            <div class="form-container">
            <form className="profile-form" onSubmit={handleSave}>
                
                <div className="profile-picture-container">
                    <img src={profile.profileImage} alt="Profile" className='profile-image'/>
                    <button type="button" className='button image-button' onClick={handleProfileImageChange}>Change profile picture</button>
                </div>
                
                <div>
                    <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-input" name="firstName" placeholder='First name' value={profile.firstName} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-input" name="lastName" placeholder='Last name' value={profile.lastName} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">New Password</label>
                        <input type="password" className="form-input" name="newPassword" placeholder='New password' value={profile.newPassword} onChange={handleChange} />
                    </div>
                </div>
            </form>
            <hr className="form-divider" />
             <div className="action-buttons">
                <button type="button" onClick={() => navigate('/')} className='button cancel-btn'>Logout</button>
                <div>
                    <button type="button" onClick={() => navigate('/reflections')} className='button cancel-btn'>Cancel</button>
                    <button type="submit" className='button submit-btn'>Save</button>
                </div>
            </div>
            </div>
        </main>
    </div>
  </>
    );
};

export default Profile;
