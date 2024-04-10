// SignupPage.js
import React, { useState } from 'react';

const Stu_SignupPage = ({ onSignup }) => {
  const [registrationnumber, setRegistrationnumber] = useState('');
  const [Student_Name, setStudent_Name] = useState('');
  const [email, setEmail] = useState('');
  const [contact_number, setContact_Number] = useState('');
  const [skillsets, setskillsets] = useState('');
  const [technicallanguages, settechnicallanguages] = useState('');
  const [passoutyear, setpassoutyear] = useState('');
  const [gender, setgender] = useState('');
  const [programme, setProgramme] = useState('');
  const [school, setSchool] = useState('');
  const [password, setPassword] = useState('');
  const [github_id, setgithub_ID] = useState('');
  const [linkedin_id, setLinkedIn_ID] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Name:', Student_Name);
    console.log('Registration Number:', registrationnumber);
    console.log('Gender:', gender);
    console.log('Skill Sets:', skillsets);
    console.log('School:', school);
    console.log('Programme:', programme);
    console.log('Contact Number:', contact_number);
    console.log('LinkedIn ID:', linkedin_id);
    console.log('Github ID:', github_id);
    console.log('Technical Languages:', technicallanguages);
    console.log('Pass Out Year:', passoutyear);
    try {
      onSignup(registrationnumber,Student_Name,email,contact_number,skillsets,technicallanguages,passoutyear,
        gender,programme,school,password,github_id,linkedin_id);
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };
  

  return (
    <div>
      <br></br>
      <h2 style={{textAlign:'center'}}>Student Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={Student_Name} onChange={(e) => setStudent_Name(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Skill Sets" value={skillsets} onChange={(e) => setskillsets(e.target.value)} />
        <input type="text" placeholder="School" value={school} onChange={(e) => setSchool(e.target.value)} />
        <input type="text" placeholder="Programme" value={programme} onChange={(e) => setProgramme(e.target.value)} />
        <input type="text" placeholder="Contact Number" value={contact_number} onChange={(e) => setContact_Number(e.target.value)} />
        <input type="text" placeholder="LinkedIn ID" value={linkedin_id} onChange={(e) => setLinkedIn_ID(e.target.value)} />
        <input type="text" placeholder="Github ID" value={github_id} onChange={(e) => setgithub_ID(e.target.value)} />
        <input type="text" placeholder="Technical Languages" value={technicallanguages} onChange={(e) => settechnicallanguages(e.target.value)} />
        <input type="text" placeholder="Registration Number" value={registrationnumber} onChange={(e) => setRegistrationnumber(e.target.value)} />
        <input type="text" placeholder="Gender" value={gender} onChange={(e) => setgender(e.target.value)} />
        <input type="text" placeholder="Pass Out Year" value={passoutyear} onChange={(e) => setpassoutyear(e.target.value)} />
        <button type="submit" style={{width:'45%',marginLeft:'120px',marginRight:'10px' }}>Sign Up</button>
      </form>
    </div>
  );
};

export default Stu_SignupPage;