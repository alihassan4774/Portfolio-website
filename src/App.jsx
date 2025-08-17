import { Container } from "react-bootstrap";
import "./App.css";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navigation />
      <Container>
        <Home />
        <About />
        <Experience />
        <Contactus />
      </Container>
    </div>
  );
}

export default App;
