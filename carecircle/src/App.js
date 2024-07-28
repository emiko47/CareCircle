import './App.css';
import './styles/todo.css';
import './styles/navbar.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import CrossyCare from './pages/CrossyCare';
import Resources from './pages/Resources';
import Treatment from './pages/Treatment';
import ToDoWrapper from './pages/ToDo/ToDoWrapper';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resources" element={<Resources />} />
          <Route
            path="/To-Do"
            element={
              <ProtectedRoute>
                <ToDoWrapper />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Crossy-Care"
            element={
              <ProtectedRoute>
                <CrossyCare />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Treatment"
            element={
              <ProtectedRoute>
                <Treatment />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
