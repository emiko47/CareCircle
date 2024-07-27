import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import React, { useRef } from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import CrossyCare from './pages/CrossyCare';
import Resources from './pages/Resources';
import Treatment from './pages/Treatment';
import ToDo from './pages/ToDo';



function App() {
  return (
    <BrowserRouter>
    <div className='main'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/To-Do" element={<ToDo />} />
        <Route path="/Crossy-Care" element={<CrossyCare />} />
        <Route path="/Treatment" element={<Treatment />} />
        <Route path="/Resources" element={<Resources />} />

      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
