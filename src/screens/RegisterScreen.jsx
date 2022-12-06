import './LoginScreen.css';
import './RegisterScreen.css';

import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  return (
    <div className='login__container'>
    <div className="login__background">
      <div className="login__form login__show">
        <div className="login__title">
        Create Your Free Account
        </div>
        <p className="login__text">
        Generate high-quality articles in one click
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
        <p>---------------------------------------</p>
        <button className="login__button email">
          Continue with Email
        </button>

        <input className='login__input' placeholder='Full Name'/>
        <input className='login__input' placeholder='Email Address'/>
        <input className='login__input' placeholder='Password'/>

        <div className="register__check">
          <div className='register__radio'><input type="radio"/></div>
          <div className='register__text'><p>I agree to platform Terms of service and Privacy Policy</p></div>
        </div>
        <button className="login__button register">
          Register
        </button>
        <div className="login__footer">
          <div> <p>Already have an account?</p></div>
          <div> <Link to="/login">Log in</Link></div>
        </div>


      </div>
    </div>
</div>
  )
}

export default RegisterScreen