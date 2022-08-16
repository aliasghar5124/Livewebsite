import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import { Route,Navigate, Routes, BrowserRouter } from 'react-router-dom';
import Navbarweb from './Navbarweb';
import Footer from './Footer';
function App() {
  return (
    <>
      <Navbarweb />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route Navigate="/" />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
    );
}
export default App;