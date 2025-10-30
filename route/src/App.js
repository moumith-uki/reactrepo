import logo from './logo.svg';
import './App.css';
import Home from './components/day09/Home';
import AboutUs from './components/day09/AboutUs';
import ContactUS from './components//day09/ContactUS';
import { BrowserRouter, Routes, Route, Link,  } from "react-router-dom"

function App() {
  return (
   <>
  <BrowserRouter>
       <nav>
         <Link to='/'>Home</Link>
         <Link to='/about'>AboutUs</Link>
         <Link to='/contact'>ContactUs</Link>
       </nav>
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<AboutUs></AboutUs>}></Route>
            <Route path="/contact" element={<ContactUS></ContactUS>}></Route>
        </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
