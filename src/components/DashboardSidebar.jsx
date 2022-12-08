import './DashboardSidebar.css';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import { Link } from "react-router-dom";


const DashboardSidebar = () => {
  return (
    <div className='dashboard__sidebarcontainer'>
      <div className="sidebar__header">
        <Link to="/dashboard"><h3>Generate Article</h3></Link>
        
      </div>
      <div className="sidebar__itemcontainer">
        <AccountBoxTwoToneIcon />
        <button className="sidebar__button">
          <Link to="/profile">Profile</Link>
          
        </button>
      </div>
      <div className="sidebar__itemcontainer">
        <SettingsSuggestTwoToneIcon />
        <button className="sidebar__button">
          <Link to="/settings">Settings</Link>
        </button>
      </div>
      <div className="sidebar__itemcontainer">
      <SubscriptionsTwoToneIcon />  
        <button className="sidebar__button">
          <Link to="/subscription">Subscriptions</Link>
          
        </button>
      </div>
      <div className="sidebar__itemcontainer">
        <AccountTreeTwoToneIcon />
        <button className="sidebar__button">
          <Link to="/projects">Projects</Link>
        </button>
      </div>
      <div className="sidebar__itemcontainer">
        <ModeEditOutlineTwoToneIcon/>
        <button className="sidebar__button">
          <Link to="/edit">Edit</Link>
        </button>
      </div>
      
    </div>
  )
}

export default DashboardSidebar