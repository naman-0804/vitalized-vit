
import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email,password);
  };

  return (
    <div>
     
      {/* Login section */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Faculty Login</h2>
        <form onSubmit={handleSubmit} style={{ width: '500px', margin: '0 auto',height:"180px" }}>
          <br></br>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
          <br></br>
          <button type="submit" style={{ width: '45%',marginRight:'20px' }}>Login</button>
          <button onClick={() => window.location.href = '/signup'} style={{ width: '45%'}}>Sign Up</button>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
