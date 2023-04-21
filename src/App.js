
import './App.css';
import React from 'react'
import Home from './Scenes/Home';

import {
  BrowserRouter as
  Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Scenes/Login';
import Signup from './Scenes/Signup/Signup';
import WSignup from './Scenes/Signup/WSignup';

function App() {
  return (
      <Router>
        <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/WSignup' element={<WSignup/>}/>
      </Routes>
      </div>
      </Router>
  );
}


export default App;

