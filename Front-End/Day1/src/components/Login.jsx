import '../assets/Login.css'
const Login=()=>
{
    return (
        <div className='outer'>
            <div className='header'>
            <h1>LOGIN PAGE</h1>
            </div>
            <div className='cen'>
              <div>
                <form>
                <label>
                <h3>Email:</h3>
                <input type="email" required/>
                 </label>
                <label>
                <h3>Password:</h3>
                <div className='onet'>
                <input type="password" required/></div>
                </label>
               <h5 >New User?Sign Up Here</h5>  
               <button>Login</button>
              </form>
            </div>
            </div>
        </div>
      );
};                          
export default Login;