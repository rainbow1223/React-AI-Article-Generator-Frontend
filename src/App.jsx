import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


// Import Screens
import HomeScreen from "./screens/HomeScreen";
import PlanScreen from "./screens/PlanScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from "./screens/SettingsScreen";
import EditorScreen from "./screens/EditorScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SubscriptionScreen from "./screens/SubscriptionScreen";
import ProjectScreen from "./screens/ProjectScreen";

// Import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      
      
      <Router>
      <Navbar />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/plan' element={<PlanScreen/>} />
            <Route path='/dashboard' element={<DashboardScreen />} />
            <Route path='/settings' element={<SettingsScreen />} />
            <Route path='/projects' element={<ProjectScreen />} />
            <Route path='/edit' element={<EditorScreen />} />
            <Route path='/subscription' element={<SubscriptionScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            
          </Routes>
      </Router>
  </div>
  );
}

export default App;
