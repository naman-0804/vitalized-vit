import React from "react";
import backgroundImage from './back.jpeg';
const LandingPage = () => {
  return (
    <div className="pagehome4" style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '100%', // Adjust background size to cover the entire element
      backgroundRepeat: 'no-repeat', // Prevent background image from repeating
      backgroundPosition: 'center' // Center the background image
    }}>
      <br></br>
      <h2 style={{textAlign:'center'}}>Welcome to Vitalized</h2>
      <img src="C:\Users\Kuldeep\vitized\src\pages\logo.jpeg" alt="img" />
    </div>
  );
};

import React from "react";
import backgroundImage from './back.jpeg';

const LandingPage = () => {
  return (
    <div className="pagehome4" style={{ 
      backgroundImage: url(${backgroundImage}),
      backgroundSize: 'cover', // Adjust background size to cover the entire element
      backgroundRepeat: 'no-repeat', // Prevent background image from repeating
      backgroundPosition: 'center', // Center the background image
      minHeight: '100vh', // Set minimum height to fill the viewport
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2 style={{textAlign:'center'}}>Welcome to Vitalized</h2>
      <img src="C:\Users\Kuldeep\vitized\src\pages\logo.jpeg" alt="img" />
    </div>
  );
};
