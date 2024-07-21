import React from 'react';

const EventList: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Your Events</h2>
      <ul className="space-y-2">
        {/* Replace with dynamic event data */}
        <li className="mb-2">Event 1</li>
        <li className="mb-2">Event 2</li>
        <li className="mb-2">Event 3</li>
      </ul>
    </div>
  );
};

export default EventList;
