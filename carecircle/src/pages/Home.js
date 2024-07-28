import React, { useState } from 'react';
import '../styles/home.css';
import { setUserSession } from './AuthServices';

const Home = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const renderForm = () => {
    switch (currentForm) {
      case 'register':
        return <RegisterForm />;
      case 'join':
        return <JoinCircleForm />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <div>
      <header>
        <h1>CareCircle</h1>
      </header>
      <div>
        <h2>Welcome to CareCircle</h2>
        <p>Connect with your loved ones and care for them in a meaningful way.</p>
        <p>Start by creating a new CareCircle or joining an existing one.</p>
        <p>Together, we can make a difference in the lives of those we care about.</p>
      </div>
      <div className="form-toggle">
        <button onClick={() => setCurrentForm('login')}>Log In</button>
        <button onClick={() => setCurrentForm('register')}>Register</button>
        <button onClick={() => setCurrentForm('join')}>Join Existing Circle</button>
      </div>
      <div className="form-container">
        {renderForm()}
      </div>
      <div>
        <p>Need help?</p>
        <button>Contact Support</button>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const username = document.querySelector('#login-username').value;
    const password = document.querySelector('#login-password').value;

    try {
      const response = await fetch(process.env.REACT_APP_LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.REACT_APP_API_TOKEN,
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setUserSession(data.user, data.token); // Save user session
        setMessage('Login successful!');
        // Redirect or update state as needed
      } else {
        setMessage(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <input type="text" id="login-username" placeholder="Username" />
      <input type="password" id="login-password" placeholder="Password" />
      <button onClick={handleLogin}>Log In</button>
      {message && <p>{message}</p>}
    </div>
  );
};

const RegisterForm = () => {
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    const name = document.querySelector('#register-name').value;
    const username = document.querySelector('#register-username').value;
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;

    try {
      const response = await fetch(process.env.REACT_APP_REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.REACT_APP_API_TOKEN,
        },
        body: JSON.stringify({ name, username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Registration successful!');
        // Redirect or update state as needed
      } else {
        setMessage(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" id="register-name" placeholder="Name" />
      <input type="text" id="register-username" placeholder="Username" />
      <input type="text" id="register-email" placeholder="Email" />
      <input type="password" id="register-password" placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
      {message && <p>{message}</p>}
    </div>
  );
};

const JoinCircleForm = () => {
  return (
    <div>
      <h2>Join Existing Circle</h2>
      <input type="text" placeholder="Circle Code" />
      <button>Join</button>
    </div>
  );
};

export default Home;