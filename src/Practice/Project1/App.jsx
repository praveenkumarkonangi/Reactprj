import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import Service from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
