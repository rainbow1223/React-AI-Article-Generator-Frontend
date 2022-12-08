import './ProjectScreen.css';
import DashboardSidebar from '../components/DashboardSidebar';
import ProjectMain from '../components/ProjectMain';

const ProjectScreen = () => {
  return (
    <div className='project__container'><DashboardSidebar />
    <ProjectMain /></div>
  )
}

export default ProjectScreen