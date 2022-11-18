/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer, Causes, Treatment, Prevention, FAQS } from './containers';
import { Navbar } from './components';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
