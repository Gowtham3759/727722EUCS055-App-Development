import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await axios.post('http://localhost:8080/users', loginData);
      localStorage.setItem('token', response.data.token);
      setLoginMessage('Login successful');
      navigate('/dashboard');
    } catch (error) {
      setLoginMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <input
          className="login-input"
          type="text"
          placeholder="Username or Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">Login</button>
        <div className="login-signup-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
        {loginMessage && <p className="login-message">{loginMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;