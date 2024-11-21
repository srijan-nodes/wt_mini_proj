import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Routes';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <head>
        <title>Weather App</title> 
      </head>
      <nav className="navbar">
        <ul className="navbar-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/details">Weather Details</Link></li>
          
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/map">Map Visualization</Link></li>
          <li><Link to="/login">Login/Registration</Link></li>
          <li><Link to="/team">Team Page</Link></li>
          <li><Link to="/team">dummmy Page</Link></li>
        </ul>
      </nav>

      
      <div className="main-content">
        <Routes />
      </div>
    </Router>
  );
};

export default App;
