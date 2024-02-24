import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/SignUp.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!username.trim()) {
      alert('Please enter your username.');
      return;
    }

    if (!password.trim()) {
      alert('Please enter your password.');
      return;
    }

    if (password.trim().length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      alert('Passwords do not match.');
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
  
    // Reload the page after successful signup
    window.location.reload();
  };
  return (
    <div className='whole'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>SIGN UP</h2>
        <div className='newone'></div>
        <div className="container">
          <hr />
          <label>
            <b>Username</b>
          </label>
          <div>
            <input 
              type="text" 
              placeholder="Enter Username" 
              name="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className='texttype' 
              required 
            />
          </div>
          <label>
            <b>Password</b>
          </label>
          <div>
            <input 
              type="password" 
              placeholder="Enter Password (Min. 6 characters)" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className='texttype' 
              required 
            />
          </div>
          <label htmlFor="confirmPassword">
            <b>Confirm Password</b>
          </label>
          <div>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              name="confirmPassword" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              className='texttype' 
              required 
            />
          </div>
          <p>Existing User? <Link to="/">Login</Link></p>
          <hr />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
