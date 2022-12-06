import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <div className="navbar-logo">
                <Link to="/">AIText</Link>
            </div>
        </div>
        <div className="navbar-right">


            <div className="navbar-button">
                
                <Link to="/plan">Pricing</Link>
            </div>
            <div className="navbar-button">
                <Link to="/login">Login</Link>
            </div>
            
            <div className="navbar-button">
                <Link to="register">Register</Link>
            </div>
          
           
        </div>
    </div>
  )
}

export default Navbar