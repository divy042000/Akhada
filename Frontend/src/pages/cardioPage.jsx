import React from 'react';
import '../App.css';
import '../index.css';
// Define the CardioPage component
const CardioPage = ({ memberID, trainerID }) => {
  return (
    <div className="flex flex-col border-2 justify-center w-full rounded-lg">
      <h1 className=" text-zinc-50 mt-1 ">Cardio Page</h1>
      <div className="flex flex-col">
        <p className="text-zinc-50">Member ID: {memberID}</p>
        <p className="text-zinc-50">Trainer ID: {trainerID}</p>
      </div>
      <h2 className="text-zinc-50">Goals Section</h2>
      {/* Add content for the Goals Section here */}
    </div>
  );
};

// Export the CardioPage component
export default CardioPage;
