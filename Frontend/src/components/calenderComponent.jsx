// src/components/Calendar.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate && date && (endDate - date) / (1000 * 60 * 60 * 24) > 10) {
      setEndDate(null);
      onDateChange(date, null);
    } else {
      onDateChange(date, endDate);
    }
  };

  const handleEndDateChange = (date) => {
    if (startDate && date && (date - startDate) / (1000 * 60 * 60 * 24) > 10) {
      alert("You cannot select a range longer than 10 days.");
      return;
    }
    setEndDate(date);
    onDateChange(startDate, date);
  };

  return (
    <div className="flex flex-row border-2 items-center space-y-4 p-4 bg-white shadow-md rounded-lg">
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Select start date"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="Select end date"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Calendar;
