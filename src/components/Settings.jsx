import React, { useState } from 'react';

const Settings = () => {
  const [unit, setUnit] = useState('Celsius');
  const [theme, setTheme] = useState('Light');

  return (
    <div className="container">
      <h1>Settings</h1>
      <div>
        <h2>Temperature Unit</h2>
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <div>
        <h2>Theme</h2>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
