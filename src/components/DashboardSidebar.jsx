import './DashboardSidebar.css';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';

const DashboardSidebar = () => {
  return (
    <div className='dashboard__sidebarcontainer'>
      <div className="sidebar__header">
        <h3>AIText</h3>
      </div>
      <div className="sidebar__itemcontainer">
        <AccountBoxTwoToneIcon />
        <button className="sidebar__button">
          Profile
        </button>
      </div>
      <div className="sidebar__itemcontainer">
        <SettingsSuggestTwoToneIcon />
        <button className="sidebar__button">
          Settings
        </button>
      </div>
      <div className="sidebar__itemcontainer">
      <SubscriptionsTwoToneIcon />  
        <button className="sidebar__button">
   
          Subscriptions
        </button>
      </div>
      <div className="sidebar__itemcontainer">
        <AccountTreeTwoToneIcon />
        <button className="sidebar__button">
          Projects
        </button>
      </div>
      <div className="sidebar__itemcontainer">
        <ModeEditOutlineTwoToneIcon/>
        <button className="sidebar__button">
          Texts
        </button>
      </div>
      
    </div>
  )
}

export default DashboardSidebar