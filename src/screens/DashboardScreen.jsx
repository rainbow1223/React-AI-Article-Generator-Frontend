import './DashboardScreen.css'

import DashboardSidebar from '../components/DashboardSidebar';
import DashboardMain from '../components/DashboardMain';
// import ReactEditor from './EditorScreen';

const DashboardScreen = () => {
  return (
    <div className='dashboard__container'>
      
      <DashboardSidebar />
      <DashboardMain />
      {/* <ReactEditor /> */}
    </div>
  )
}

export default DashboardScreen