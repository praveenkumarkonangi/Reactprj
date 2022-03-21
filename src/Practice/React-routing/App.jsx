import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Service from'./Service'
import Contact from './Contact'
const App = () => {
  return (
    <div>
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />

             <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
          </Routes>
        </Router>
     
    </div>
  );
};

export default App;
