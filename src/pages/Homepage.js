import React from 'react';

const Home3 = ({ Faculty_Profile }) => {
  return (
    <div className="page home3">
      <h2 style={{textAlign:'center',color:'white'}}>Hello Faculty!</h2>
      <br></br>
      {Faculty_Profile && (
        <center>
        <div class="research-card" style={{width:'500px',height:'450px',backgroundColor:'#e8e9eb'}}>
        <div className="faculty-profile">
          <h3 style={{color: 'black'}}>Your Profile</h3>
          <div style={{marginLeft:"25px"}}>
          <br></br><div style={{textAlign:'left',color: 'black'}}>
            <br></br><br></br><br></br><br></br>
          <pr><b>Empid: </b>{Faculty_Profile.Empid}</pr><br></br><br></br>
          <pr><b>Name: </b>{Faculty_Profile.Faculty_Name}</pr><br></br><br></br>
          <pr><b>Email: </b>{Faculty_Profile.Email}</pr><br></br><br></br>
          <pr><b>Contact Number: </b>{Faculty_Profile.Contact_Number}</pr><br></br><br></br>
          <pr><b>Domain: </b>{Faculty_Profile.Domain}</pr><br></br><br></br>
          <pr><b>School: </b>{Faculty_Profile.School}</pr><br></br><br></br>
          <pr><b>Designation: </b>{Faculty_Profile.Designation}</pr><br></br><br></br>
          </div>
        </div>
        </div>
        </div>
        </center>
        
      )}
    </div>
  );
}

export default Home3;
