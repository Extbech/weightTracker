import { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="w-screen h-screen m-0 p-0 font-quicksand border-rad bg-gray-900 text-gray-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
