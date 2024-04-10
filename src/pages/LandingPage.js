import React from "react";
import backgroundImage from './back.jpeg';

const LandingPage = () => {
  return (
    <div className="pagehome4" style={{ 
      backgroundImage:` url(${backgroundImage})`,
      backgroundSize: 'cover', // Adjust background size to cover the entire element
      backgroundRepeat: 'no-repeat', // Prevent background image from repeating
      backgroundPosition: 'center', // Center the background image
      minHeight: '100vh', // Set minimum height to fill the viewport
      
     
      justifyContent: 'center',
    }}>
      
      <h1 style={{textAlign:'center', color: '#285598'}}><br></br>Welcome to VITalized</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 style={{marginLeft:'150px',color: 'orange'}}>CONNECT</h2>
      <h2 style={{marginLeft:'150px',color: '#c6408a'}}>COLLABORATE</h2>
      <h2 style={{marginLeft:'150px',color: '#48cfae'}}>INNOVATE</h2>
    <br></br>
      <h2 style={{marginLeft:'150px',color: '#227c9d'}}><em>"Where Ideas Meet Opportunities..."</em></h2>
    </div>
  );
};

export default LandingPage;