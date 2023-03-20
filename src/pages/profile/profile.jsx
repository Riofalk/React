import "./profile.css"
import profileImg from "../../assets/profile.png"
import React, { useState } from 'react';

function Profile() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let {name, sname} = currentUser;
  const [email, setEmail] = useState(currentUser.email);
  return (
  <>
    <div className="profile-container">
      <h1 className='profile-title'>Profile</h1>
      <div className='profile-inf'>
        <div className='profile-inf-left'>
          <img src={profileImg} alt="Profile Picture" className="profile-img"/>
        </div>
        <div className='profile-inf-right'>
          <h2 className='profile-name'>{name}</h2>
          <h2 className='profile-sname'>{sname}</h2>
          <h2 className='profile-email'>{email}</h2>
        </div>
      </div>
      <div className='profile-btns'>
        <button>Reset Password</button>
        <button onClick={() => resetEmail(currentUser, setEmail)}>Reset Email</button>
      </div>
    </div>
  </>
  );
}

function resetEmail(currentUser, setEmail) {
    let newEmail = prompt("Please enter your name", currentUser.email);

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(.[a-z])/;

    if (!newEmail.match(validRegex)) {
        alert("Wrong email format")
        resetEmail(currentUser, setEmail)  
        return   
    }
    
    let allUsers = JSON.parse(localStorage.getItem("users"));
    let foundUser = allUsers?.find((user) => user.email === currentUser.email);
    foundUser.email = newEmail;
    setEmail(newEmail);
    localStorage.setItem("currentUser", JSON.stringify(currentUser = {...currentUser, email: newEmail}))
    localStorage.setItem("users", JSON.stringify(allUsers))
}

export default Profile;