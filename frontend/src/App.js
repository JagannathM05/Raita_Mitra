import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import Sell from './pages/Sell';
import Shopping from './components/Shopping';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import FarmerDashboard from './pages/FarmerDashboard';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
};

export default App;