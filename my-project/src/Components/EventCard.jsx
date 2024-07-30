// src/components/EventCard.jsx
import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden  hover:translate-x-2 hover:translate-y-2">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-2">{event.date}</p>
        <p className="text-gray-800">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
