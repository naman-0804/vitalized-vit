// SignupPage.js
import React, { useState } from 'react';

const SignupPage = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Faculty_Name, setFaculty_Name] = useState('');
  const [designation, setDesignation] = useState('');
  const [school, setSchool] = useState('');
  const [domain, setDomain] = useState('');
  const [contact_number, setContact_Number] = useState('');
  const [linkedin_id, setLinkedIn_ID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Name:', Faculty_Name);
    console.log('Designation:', designation);
    console.log('School:', school);
    console.log('Domain:', domain);
    console.log('Contact Number:', contact_number);
    console.log('LinkedIn ID:', linkedin_id);
    try {
      onSignup(email, password, Faculty_Name,designation,school,domain,contact_number,linkedin_id);
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };
  

  return (
    <div><br></br>
      <h2 style={{textAlign:'center' }}>Faculty Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={Faculty_Name} onChange={(e) => setFaculty_Name(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        <input type="text" placeholder="School" value={school} onChange={(e) => setSchool(e.target.value)} />
        <input type="text" placeholder="Domain" value={domain} onChange={(e) => setDomain(e.target.value)} />
        <input type="text" placeholder="Contact Number" value={contact_number} onChange={(e) => setContact_Number(e.target.value)} />
        <input type="text" placeholder="LinkedIn ID" value={linkedin_id} onChange={(e) => setLinkedIn_ID(e.target.value)} />
        <button type="submit" style={{width:'45%',marginLeft:'120px',marginRight:'10px' }}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
