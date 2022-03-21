import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";


const App = () => {
  return (
    <div>
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />

          </Routes>
        </Router>
     
    </div>
  );
};

export default App;
