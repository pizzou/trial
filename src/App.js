import './App.css';
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from './pages/Services'
import About from './pages/About';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
      <Route index element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
