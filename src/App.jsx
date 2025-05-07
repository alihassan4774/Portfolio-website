import { Container } from "react-bootstrap";
import "./App.css";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {  
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Router>
        <Navigation />
        <Container />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
