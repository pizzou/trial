import './App.css';
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from './pages/Services'
import About from './pages/About';

import Footer from './components/Home/Footer/Footer';
import Navbar from './components/Home/Toolsbar/Navbar/Navbar'
import Toolsbar from './components/Home/Toolsbar/Toolsbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      {/* <Toolsbar/> */}
      {/* <Navbar/> */}
      <Routes>
      <Route index element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
