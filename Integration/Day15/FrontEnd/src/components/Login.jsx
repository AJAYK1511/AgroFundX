// import { useState } from 'react';
// import { Link ,useNavigate} from 'react-router-dom';
// import admin from '../assets/images/adminimg.jpg';
// import '../assets/Login.css';
// import { login } from '../apifolder/Api';

// function Login() {
//   const [username, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const nav=useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Username:', username);
//     console.log('Password:', password);
//     const token=(await login(username,password)).data;
//     if(token!=null)
//     {
//       localStorage.setItem("JWTtoken",token);
//       nav('/home');
//     }
//   };

//   return (
//     <>
//     <div className='body-background'>
//       <form className='form' onSubmit={handleSubmit}>
//         <h2>LOGIN</h2>
//         <div className="imgcontainer">
//           <img src={admin} alt="Avatar" className="avatar" />
//         </div>
//         <div className="container">
//           <label className="label">
//             <b>Username</b>
//           </label>
//           <div>
//             <input 
//               placeholder="Enter Email" 
//               name="email" 
//               value={username} 
//               onChange={(e) => setEmail(e.target.value)} 
//               className='texttype' 
              
//               required 
//             />
//           </div>
//           <label className="label">
//             <b>Password</b>
//           </label>
//           <div>
//             <input 
//               type="password" 
//               placeholder="Enter Password (Min. 6 characters)" 
//               name="password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               pattern=".{6,}" 
//               title="Password must be at least 6 characters long" 
//               className='texttype' 
//               required 
//             />
//           </div>
//           <p className="new-user">New User? <Link to="/signup" className="signup-link">Sign Up</Link></p>
//           <hr className="divider" />
//           <button type="submit" className="button">Login</button>
//         </div>
//       </form>
//     </div></>
//   );
// }

// export default Login;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import admin from '../assets/images/adminimg.jpg';
import '../assets/Login.css';
import { login } from '../apifolder/Api';
import { getIdByUsername } from '../apifolder/AppUser';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    
 
    if(username==='string' && password==='string')
    {
      const tokenResponse = await login(username, password);
      const token = tokenResponse.data;
      localStorage.setItem("JWTtoken", token);
      if(token)
      nav('/dashhome');
    }
  else
  {
      try {
    const tokenResponse = await login(username, password);
    const token = tokenResponse.data;
      if (token) {
        localStorage.setItem("JWTtoken", token); // Store JWT token
    
        const idResponse = await getIdByUsername(username);
        const userId = idResponse.data;
        
        if (userId) {
          localStorage.setItem("userID", userId); // Store user ID
        }

        nav('/home');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
   
  };

  return (
    <>
      <div className='body-background'>
        <form className='form' onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <div className="imgcontainer">
            <img src={admin} alt="Avatar" className="avatar" />
          </div>
          <div className="container">
            <label className="label">
              <b>Username</b>
            </label>
            <div>
              <input 
                placeholder="Enter Email" 
                name="email" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
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
    </>
  );
}

export default Login;
