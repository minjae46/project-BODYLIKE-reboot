import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Search from './pages/Search/Search';
import Cart from './pages/Cart/Cart';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/product/list" element={<ProductList />} />
        <Route path="/product/search" element={<Search />} />
        <Route path="/product/:id" element={<ProductDetail />} />;
        <Route path="/carts" element={<Cart />} />
        <Route path="/auth/signUp" element={<Join />} />
        <Route path="/auth/signIn" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
