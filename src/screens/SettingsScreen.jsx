import "./SettingsScreen.css";
import DashboardSidebar from "../components/DashboardSidebar";

const SettingsScreen = () => {
  return (
    <div className="settings__container">
        <DashboardSidebar />
        <div className="settings__main">Setting Screen</div>
    </div>
  )
}

export default SettingsScreen