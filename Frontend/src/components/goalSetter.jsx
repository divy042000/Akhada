// src/components/GoalSetter.js
import React, { useState } from 'react';
import Calendar from './calenderComponent';
import Timeline from './timelineComponent';

const GoalSetter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <h1>Goal Setter</h1>
      <Calendar onDateChange={handleDateChange} />
      <Timeline startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default GoalSetter;
