import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Routes';
import './App.css'; // Ensure App.css is linked

const App = () => {
  return (
    <Router>
      <head>
        <title>Weather App</title> {/* Title for the webpage */}
      </head>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/details">Weather Details</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/forecast">15-Day Forecast</Link></li>
          <li><Link to="/map">Map Visualization</Link></li>
          <li><Link to="/login">Login/Registration</Link></li>
          <li><Link to="/team">Team Page</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Routes for different pages */}
        <Routes />
      </div>
    </Router>
  );
};

export default App;
