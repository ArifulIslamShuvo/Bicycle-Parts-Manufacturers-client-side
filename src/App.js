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
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Login/RequireAdmin';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProducts from './pages/Dashboard/ManageProducts';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Blog from './pages/Blog.js/Blog';

function App() {
  return (
    <div className="App">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders />} />
          <Route path="userreview" element={<UserReview />} />
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="manageproducts" element={<ManageProducts />} />
          <Route path="manageallorders" element={<ManageAllOrders />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
