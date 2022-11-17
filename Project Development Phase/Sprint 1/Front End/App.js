import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Footer } from './containers';
import { Navbar } from './components';

import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
    </div>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </div>
);

export default App;