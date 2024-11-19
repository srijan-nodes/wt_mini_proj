import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './styles/universal.css';
import 'leaflet/dist/leaflet.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
