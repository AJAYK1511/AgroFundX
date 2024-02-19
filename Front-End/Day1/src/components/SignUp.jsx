function SignUp()
{
    return (
        <div className='whole'>
          <div className='righh'>
            <h1>Sign Up Page</h1></div>
            <div className='cen'>
              <div>
                <form>
                <label>
                <h3>Email:</h3>
                <input type="email"/>
                 </label>
                <label>
                <h3>Password:</h3>
                <input type="password" />
                </label>
                <label>
                <h3>Confirm Password:</h3>
                <input type="password" />
                </label>
               <h5 >Existing User? Login here</h5>  
               <button>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      );
}
export default SignUp;