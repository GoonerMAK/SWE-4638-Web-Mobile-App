"use client"
import React, { useState } from 'react';
import styles from '../../styles/page.css';
import Link from 'next/link';
import axios from 'axios';


const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
      process.env.REACT_APP_AUTHENTICATED === '1';
      console.log('Login successful:', response.data.message);

      setTimeout(() => {
        window.location.href = "http://localhost:3000/";
    }, 2000);
    } catch (error) {
      console.error('Error registering user:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Log In</button>
        <p>or Don't Have an Account?</p>
        <Link href='/register'>
            <button type="submit">Register</button>
        </Link>

      </form>
    </div>
  );
};

export default SignInForm;
