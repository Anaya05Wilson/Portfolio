// src/App.js

import React from "react";
import Profile from "./Profile";
import "./App.css";

const App = () => {
  // Example user data
  const user = {
    name: "Anaya Wilson",
    email: "anayawil05@gmail.com",
    profilePicture: "Anaya Photo.jpeg", // Random image URL
    bio: "I am a software developer who loves coding and learning new technologies. Always eager to build something new!",
  };

  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
};

export default App;
