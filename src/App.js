import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navber from './pages/Home/Navber';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import Product from './pages/Home/Product';
import Purchase from './pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import UserReview from './pages//Dashboard/UserReview';
import MyOrders from './pages/Dashboard/MyOrders';

function App() {
  return (
    <div className="App">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders />} />
          <Route path="userreview" element={<UserReview />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
