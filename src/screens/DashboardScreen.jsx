import './DashboardScreen.css'

import DashboardSidebar from '../components/DashboardSidebar';
import DashboardMain from '../components/DashboardMain';
const DashboardScreen = () => {
  return (
    <div className='dashboard__container'>
      
      <DashboardSidebar />
      <DashboardMain />
    </div>
  )
}

export default DashboardScreen