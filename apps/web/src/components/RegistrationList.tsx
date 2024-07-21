import React from 'react';

const RegistrationList: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Attendee Registrations</h2>
      <ul className="space-y-2">
        {/* Replace with dynamic registration data */}
        <li className="mb-2">Registration 1</li>
        <li className="mb-2">Registration 2</li>
        <li className="mb-2">Registration 3</li>
      </ul>
    </div>
  );
};

export default RegistrationList;
