// src/Profile.js

import React from "react";
import './Profile.css'; // Assuming we will add CSS here

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="/Anaya Photo.jpeg"
          alt="Profile"
          className="profile-picture"
        />
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
      </div>
      <div className="profile-bio">
        <h2>About Me</h2>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
