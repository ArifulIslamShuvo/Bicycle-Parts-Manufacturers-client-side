import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navber from './pages/Home/Navber';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import Purchase from './pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/purchase" element={<RequireAuth><Purchase /></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
