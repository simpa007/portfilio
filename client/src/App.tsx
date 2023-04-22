import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Projects from "./component/Projects/Projects";
import Services from "./component/Services/Services";
import Navbar from "./Navbar/Navbar";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
