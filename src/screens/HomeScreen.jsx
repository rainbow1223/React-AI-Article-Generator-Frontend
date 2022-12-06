import './HomeScreen.css';
import { Link } from 'react-router-dom';


const HomeScreen = () => {
  return (
    <div className='home__container'>
      <h1 className='home__title'>AI-powered article writer</h1>
      <p className='home__text'>Get a ready-to-use article on any topic in just one click</p>
      <div className="home__item">
      <input className='home__input'/>
      
      <button className='home__button'><Link to='/dashboard'>Generate Article</Link></button>
      </div>
     
    </div>
  )
}

export default HomeScreen