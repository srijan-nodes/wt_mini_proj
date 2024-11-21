import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import LocationSelector from '../components/LocationSelector';
import DetailedWeather from '../components/DetailedWeather';
import Forecast from '../components/Forecast';
import MapVisualization from '../components/MapVisualization';
import Settings from '../components/Settings';
import AboutUs from '../components/AboutUs';
import LoginRegister from '../components/LoginRegister';
import FeedbackForm from '../components/FeedbackForm';
import TeamPage from '../components/TeamPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/location" element={<LocationSelector />} />
    /<Route path="/details" element={<DetailedWeather />} />
    <Route path="/forecast" element={<Forecast />} />
    <Route path="/map" element={<MapVisualization />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/login" element={<LoginRegister />} />
    <Route path="/feedback" element={<FeedbackForm />} />
    <Route path="/team" element={<TeamPage />} />
  </Routes>
);

export default AppRoutes;
