import React from 'react';
import { Chrono } from 'react-chrono';

const Timeline = ({ startDate, endDate }) => {
  if (!startDate || !endDate) return null;

  const items = [];
  const currentDate = new Date(startDate);
  const endDateTime = new Date(endDate).getTime();

  while (currentDate.getTime() <= endDateTime) {
    items.push({
      title: currentDate.toDateString(),
      content: (
        <div>
          <h3>{currentDate.toDateString()}</h3>
          <progress value={0.5} max="1"></progress>
        </div>
      )
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-center">
        <Chrono
          items={items}
          mode="VERTICAL"
          slideItemDuration={300}
          slideItemClassName="bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4"
          cardWidth={"350px"}
          cardHeight={"auto"}
          hideControls={true}
          highlightCardsOnHover={true}
          disableToolbar={true}
          scrollable={true}
        />
      </div>
    </div>
  );
};

export default Timeline;
