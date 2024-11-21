import React, { useState, useEffect } from 'react';

const SettingsPage = ({ onThemeToggle, onUnitChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [unit, setUnit] = useState('C');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    
    const savedUnit = localStorage.getItem('unit') || 'C';
    setUnit(savedUnit);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    onThemeToggle(newTheme); 
  };

  const handleUnitChange = (e) => {
    const newUnit = e.target.value;
    setUnit(newUnit);
    localStorage.setItem('unit', newUnit);
    onUnitChange(newUnit); 
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      
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
