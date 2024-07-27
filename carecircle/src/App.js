import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <div className='main'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/To-Do" element={<To-Do />} />
        <Route path="/Crossy-Care" element={<CrossyCare />} />
        <Route path="/Treatment" element={<Treatment />} />
        <Route path="/Resources" element={<Resources />} />

      </Routes>
      
    </div>
      <Footer/>
  </BrowserRouter>
  );
}

export default App;
