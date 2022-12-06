import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


// Import Screens
import HomeScreen from "./screens/HomeScreen";
import PlanScreen from "./screens/PlanScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from './screens/DashboardScreen';

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
            <Route path='/plan' element={<PlanScreen />} />
            <Route path='/dashboard' element={<DashboardScreen />} />
            
          </Routes>
      </Router>
  </div>
  );
}

export default App;
