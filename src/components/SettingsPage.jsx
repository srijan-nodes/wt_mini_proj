import React, { useState, useEffect } from 'react';

const SettingsPage = ({ onThemeToggle, onUnitChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [unit, setUnit] = useState('C');

  useEffect(() => {
    // Check for the theme preference in local storage or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    
    // Check for the temperature unit preference in local storage
    const savedUnit = localStorage.getItem('unit') || 'C';
    setUnit(savedUnit);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    onThemeToggle(newTheme); // Notify the parent component
  };

  const handleUnitChange = (e) => {
    const newUnit = e.target.value;
    setUnit(newUnit);
    localStorage.setItem('unit', newUnit);
    onUnitChange(newUnit); // Notify the parent component
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      
      {/* Theme Toggle */}
      <div className="theme-toggle">
        <label>
          <input 
            type="checkbox" 
            checked={isDarkMode} 
            onChange={handleThemeToggle} 
          />
          Dark Mode
        </label>
      </div>
      
      {/* Temperature Unit Toggle */}
      <div className="unit-toggle">
        <label>
          Temperature Unit: 
          <select value={unit} onChange={handleUnitChange}>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SettingsPage;
