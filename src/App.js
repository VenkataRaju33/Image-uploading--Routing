import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Upload from './Upload';
import Picture from './Picture';
function App() {
  
  return (
    <div>
      <Router>
          
            <Routes>
              
              
              <Route path="/screen" element={<Picture/>} component={Picture} />
              <Route exact path="/" element={<Upload/>} component={Upload} />
            </Routes>
          
        </Router>
    </div>
  );
}

export default App;
