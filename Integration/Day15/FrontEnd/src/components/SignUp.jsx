import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../assets/SignUp.css';
import { signup } from '../apifolder/Api';

function SignUp() {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const navi=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Username:', name);
    console.log('Password:', password);
    console.log('Email:', email);
    if((await signup(name,password,email)).data)
    {
      navi('/');
    }
  };
  return (
    <div className='body-background'>
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
              value={name} 
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
          <label htmlFor="eMail">
            <b>Email</b>
          </label>
          <div>
            <input 
              type="password" 
              placeholder="E Mail" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
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
