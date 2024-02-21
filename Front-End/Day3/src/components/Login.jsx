import { Link } from 'react-router-dom';
import '../assets/Login.css'; 
import admin from '../assets/images/adminimg.jpg';
function Login() {
  return (
    <div className='whole'>
    <div>
      <form>
        <h2>LOGIN</h2>
        <div className="imgcontainer">
          <img src={admin} alt="Avatar" className="avatar" />
        </div>
        <div className="container">
          <label>
            <b>Username</b>
            </label>
            <div>
          <input type="text" placeholder="Enter Username" name="uname" className='texttype' required /></div>
          <label>
            <b>Password</b>
          </label>
          <div>
          <input type="password" placeholder="Enter Password" name="psw" className='texttype' required /></div>
          <p>New User? <Link to="/signup">Sign Up</Link></p>
          <hr></hr>
          <Link to="/home"><button type="submit">Login</button></Link>
        </div>
      </form>
    </div>
    </div>
  );
}
export default Login;