
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
 import About from "./pages/About.jsx";
import Sponsor from "./pages/Sponsor.jsx";
import Thanks from "./pages/Thanks.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'

function App() {
  

  return (
    <>
      <Router>
      <Header /> 
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsor" element={<Sponsor />} />
         <Route path="/thanks" element={<Thanks />} /> 

          
        </Routes>
        <Footer />
      </Router>
    </>
      
  )
}

export default App
