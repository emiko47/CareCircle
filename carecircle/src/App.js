
import './App.css';
import './styles/todo.css';
import './styles/navbar.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import React, { useRef } from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import CrossyCare from './pages/CrossyCare';
import Resources from './pages/Resources';
import Treatment from './pages/Treatment';
import ToDo from './pages/ToDo/ToDo';
import EditToDo from './pages/ToDo/EditToDoForm';
import ToDoForm from './pages/ToDo/ToDoForm';
import ToDoWrapper from './pages/ToDo/ToDoWrapper';


function App() {
  return (
    <BrowserRouter>
    <div className='main'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/To-Do" element={<ToDoWrapper />} />
        <Route path="/Crossy-Care" element={<CrossyCare />} />
        <Route path="/Treatment" element={<Treatment />} />
        <Route path="/Resources" element={<Resources />} />

      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
