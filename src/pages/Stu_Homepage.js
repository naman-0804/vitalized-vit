import React from 'react';
import backgroundImage from './back.jpeg'; // Import your background image file

const Home4 = ({ Student_Profile }) => {
  return (
    <div className="page home3">
      <h2 style={{textAlign:'center',color:'black'}}>Hello Student!</h2>
      <br></br>
    
      {Student_Profile && (
        <center>
        <div className="Student-profile">
          <h3><br></br>Your Profile</h3>
            <p><b>Registration No.:</b>{Student_Profile.Registration_Number}</p>
            <p><b>Name: </b>{Student_Profile.Student_Name}</p>
            <p><b>Email: </b>{Student_Profile.Email}</p>
            <p><b>Contact Number: </b>{Student_Profile.Contact_Number}</p>
            <p><b>School:</b> {Student_Profile.Skill_Sets}</p>
            <p><b>Technical_Languages: </b>{Student_Profile.Technical_Languages}</p>
            <p><b>Passout Year: </b>{Student_Profile.Passing_Out_Year}</p>
            <p><b>Gender: </b>{Student_Profile.Gender}</p>
            <p><b>Programme:</b> {Student_Profile.Programme}</p>
            <p><b>School: </b>{Student_Profile.School}</p>
            <p><b>LinkedIn ID: </b>{Student_Profile.LinkedIn_ID}</p>
            <p><b>Github ID: </b>{Student_Profile.GitHub_ID}</p>
        </div>
        </center>
      )}
    </div>
    
  );
}

export default Home4;