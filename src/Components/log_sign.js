import React, { useState } from 'react';
import axios from 'axios';

export default function LoginPaze() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/register', formData);
      alert('Registration successful');
    } catch (error) {
      alert('Registration failed');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', formData);

      if (response.data.message === 'Login successful') {
        if (formData.username === 'admin') {
          // Redirect to admin panel or perform admin-specific actions
          // For now, let's assume redirecting to '/admin'
          window.location.href = '/admin';
        } else {
          window.location.href = `/home?username=${formData.username}`;
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  const flipCard = () => {
    setIsLoginForm(!isLoginForm);
  };

  const blk1 = (v) => {
    v.target.style.backgroundColor = 'black';
    v.target.style.color = '#bababa';
    v.target.style.border = 'none';
  };

  const lkb = (v) => {
    v.target.style.backgroundColor = '#bababa';
    v.target.style.color = 'black';
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#bababa' }}>
      <div
        className={`card ${isLoginForm ? 'login' : 'signup'}`}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '75px 0 75px 0',
        }}
      >
        <div className="card-content" style={{ backgroundColor: 'black', borderRadius: '75px 0 75px 0' }}>
          <img src="Logo.png" alt="" style={{ width: '50%', height: '80%' }} />
          <br />
          <br />
          <h5 style={{ color: '#bababa', display: 'inline' }}>{isLoginForm ? 'Sign up here ' : 'Log in here '}</h5>
          <button onClick={flipCard} className="card-toggle-button btn78" onMouseOver={blk1} onMouseLeave={lkb}>
            {isLoginForm ? 'Sign up' : 'Log in'}
          </button>
          <br />
          <br />
          <h5 style={{ color: '#bababa' }}>{isLoginForm ? 'Username' : 'Create a Username'}</h5>
          <div className="row">
            <div className="col-md-12">
              <input type="text" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
            </div>
          </div>
          <br />
          <h5 style={{ color: '#bababa' }}>{isLoginForm ? 'Password' : 'Create a Password'}</h5>
          <div className="row">
            <div className="col-md-12">
              <input type="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-12">
              <button
                onClick={isLoginForm ? handleLogin : handleRegister}
                onMouseOver={blk1}
                onMouseLeave={lkb}
                className="btn78"
              >
                {isLoginForm ? 'Log in' : 'Sign up'}
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
