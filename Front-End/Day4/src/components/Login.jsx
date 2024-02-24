import { useState } from 'react';
import { Link } from 'react-router-dom';
import admin from '../assets/images/adminimg.jpg';
import '../assets/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation logic
    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }

    if (!emailPattern.test(email.trim())) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!password.trim()) {
      alert('Please enter your password.');
      return;
    }

    // Assuming validation passes, you can proceed with login logic here
    // For demonstration, let's simulate a successful login by logging the email and redirecting to the home page
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirect to home page upon successful login
    window.location.href = '/home';
  };

  return (
    <div className='body-background'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <div className="imgcontainer">
          <img src={admin} alt="Avatar" className="avatar" />
        </div>
        <div className="container">
          <label className="label">
            <b>Username (Email)</b>
          </label>
          <div>
            <input 
              type="email" 
              placeholder="Enter Email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className='texttype' 
              required 
            />
          </div>
          <label className="label">
            <b>Password</b>
          </label>
          <div>
            <input 
              type="password" 
              placeholder="Enter Password (Min. 6 characters)" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              pattern=".{6,}" 
              title="Password must be at least 6 characters long" 
              className='texttype' 
              required 
            />
          </div>
          <p className="new-user">New User? <Link to="/signup" className="signup-link">Sign Up</Link></p>
          <hr className="divider" />
          <button type="submit" className="button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
