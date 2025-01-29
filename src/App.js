import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home_router';
import About from './About_router';
import Contact from './Contact_router';
import User from './User_router';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
        
            <Link to="/">Home</Link>
         
            <Link to="/about">About</Link>
          
            <Link to="/contact">Contact</Link>
        
            <Link to="/user">User</Link>
         </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
      </Routes>
      </Router>
  );
};

export default App;


















/*
import './App.css';


function App() {
return (

  <div className='header'>
    <div>
    <h1 id='first-header'>MY APP</h1>
    <p id='para1'>second line</p>
  </div>
  <div>
    <h1 id='first-header'>MY APP</h1>
    <p id='para1'>second line</p>
  </div>
  <div>
    <p>system component</p>
  </div>
    <App />
  </div>
)
}
  
export default App;
*/
