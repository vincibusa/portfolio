import React from 'react';
import '../App.css';
import profil from '../images/profil.jpeg';

function AvatarComponent({ darkMode }) {
  return (
    <div className={`avatar-container ${darkMode ? 'dark-mode' : ''}`}>
      <h1>A</h1>
      <h2>B</h2>
      <h3>C</h3>
      <img
        src
        alt="Avatar"
        className="rounded-circle"
        width="150"
        height="150"
      />
    </div>
  );
}

export default AvatarComponent;

