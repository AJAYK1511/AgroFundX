import '../assets/SignUp.css'
import { Link } from 'react-router-dom';
// import admin from '../assets/images/adminimg.jpg'
function SignUp()
{
    return (
      <div className='whole'>
      <form action="/action_page.php" method="post">
        <h2>SIGN UP</h2>
        <div className='newone'></div>
        {/* <div className="imgcontainer">
          <img src={admin}  alt="Avatar" className="avatar" />
        </div> */}
        <div className="container">
         <hr></hr>
          <label>
            <b>Username</b>
            </label>
            <div>
          <input type="text" placeholder="Enter Username" name="uname" className='texttype' required />
          </div>
          <label>
            <b>Password</b>
            </label>
            <div>
          <input type="password" placeholder="Enter Password" name="psw" className='texttype' required />
          </div>
          <label htmlFor="psw">
            <b>Confirm Password</b>
            </label>
            <div>
          <input type="password" placeholder="Enter Password" name="psw" className='texttype' required />
          </div>
          <p>Existing User? <Link to="/">Login</Link> </p>
          <hr></hr>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
      );
}
export default SignUp;