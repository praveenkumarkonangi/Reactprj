import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./Navbar";
import ContactApp from "./ContactApp";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";


const App = () => {
  
  return (
    <div>
    
        <Router>
          <Navbar />
          <Routes>
            <Route path="/contactApp" element={<ContactApp />} />
            <Route path="/ContactList" element={<ContactList />}/>
            <Route path="/ContactCard" element={<ContactCard/>}/>
          </Routes>
        </Router> 
     
    </div>
  );
};

export default App;
