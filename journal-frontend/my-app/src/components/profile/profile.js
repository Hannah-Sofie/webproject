import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../header/Header";
import "./profile.css";
import importedProfileImage from "./images/ansikt.jpg";

const Profile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [profileImage, setProfileImage] = useState(importedProfileImage);

    const navigate = useNavigate();

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleProfileImageChange = () => {
        // Logic to change profile image
    };

    const handleSave = () => {
        // Logic to save profile information
        navigate('/reflections');
    };

    const handleLogout = () => {
        // Logic to handle logout
        navigate('/');
    };

    const handleCancel = () => {
        // Logic to handle cancel
        navigate('/reflections');
    };


    return (
        <div className='profile-container'>
            <Header />
            <form>
                <div className='profile-container_edit'>
                    <label>
                        <img src={profileImage} alt="Profile" className='profile-image'/>
                        <button className='image-button' onClick={handleProfileImageChange}>Change profile picture</button>
                    </label>
                    <div>
                        <label>
                            First Name:
                            <input type="text" value={firstName} onChange={handleFirstNameChange} />
                        </label>
                        <br />
                        <label>
                            Last Name:
                            <input type="text" value={lastName} onChange={handleLastNameChange} />
                        </label>
                        <br />
                        <label>
                            New Password:
                            <input type="password" value={newPassword} onChange={handleNewPasswordChange} />
                        </label>
                    </div>
                </div>
                <div className='line-seperator'></div>
        
                <div className='profile-buttons'>
                    <button onClick={handleLogout} id='profile-logout'>Logout</button>
                    <div>
                        <button onClick={handleCancel} id='profile-cancel'>Cancel</button>
                        <button onClick={handleSave} id='profile-save'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Profile;