import './ProfileScreen.css'
import ProfileMain from "../components/ProfileMain";
import DashboardSidebar from '../components/DashboardSidebar'
const ProfileScreen = () => {
  return (
    <div className="profile__container">
      <ProfileMain />
      <DashboardSidebar />
    </div>
  )
}

export default ProfileScreen