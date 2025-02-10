import React from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {  BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Home from './pages/Home';
// import About from './pages/About';
import Cart from './pages/Cart';

function App() {
  return (
    <>


      <Router>

      <Navbar />

        
        <Routes>

          <Route path="/"  element={<Home />} />
          <Route path="/Shop"  element={<Shop />} />
          {/* <Route path="/About"  element={<About />} /> */}
          <Route path="/Contact"  element={<Contact />} />
          <Route path="/SignUp"  element={<SignUp />} />
          <Route path="/Cart"  element={<Cart />} />

          
        </Routes>
        <ToastContainer position="top-right " autoClose={2000} />
       

        </Router>
       
    </>
  );
}

export default App;
