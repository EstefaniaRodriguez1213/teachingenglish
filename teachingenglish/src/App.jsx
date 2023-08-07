import './App.css';
import NavBar from './components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ContactUs from './components/Contact Us/ContactUs';
import Teacher from './components/Teacher/Teacher';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
     <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/clases" element={<Products></Products>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="/aboutme" element={<Teacher></Teacher>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
