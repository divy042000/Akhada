// src/App.jsx
import React from 'react';
import CardioPage from './pages/cardioPage';
import GoalSetter from './components/goalSetter';
import './index.css';

const App = () => {
  return (
    <div>
      <CardioPage memberID="12345" trainerID="67890" />
      <GoalSetter/>
    </div>
  );
};

export default App; // Add this line to export App as the default export
