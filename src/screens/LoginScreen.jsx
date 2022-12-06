import './LoginScreen.css'
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <div className='login__container'>
        <div className="login__background">
          <div className="login__form">
            <div className="login__title">
            Login
            </div>
            <p className="login__text">
            Log in to your account
            </p>
            <button className="login__button google">
              Continue with Google
            </button>
            <button className="login__button facebook">
              Continue with Facebook
            </button>
            <button className="login__button github">
              Continue with Github
            </button>
            <button className="login__button email">
              Continue with Email
            </button>
        
          

            <div className="login__footer">
              <div> <p>Don’t have an account?</p></div>
              <div> <Link to="/register">Sign Up</Link></div>
             
            </div>
          </div>
        </div>
    </div>
  )
}

export default LoginScreen