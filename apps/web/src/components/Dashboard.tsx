import React from 'react';
import EventList from './EventList';
import RegistrationList from './RegistrationList';
import TransactionList from './TransactionList';
import Statistics from './Statistics';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 font-bold text-2xl">Eventify</div>
        <nav className="flex flex-col p-4 space-y-2">
          <a href="#" className="text-gray-200 hover:bg-gray-700 p-2 rounded">Dashboard</a>
          <a href="#" className="text-gray-200 hover:bg-gray-700 p-2 rounded">Events</a>
          <a href="#" className="text-gray-200 hover:bg-gray-700 p-2 rounded">Registrations</a>
          <a href="#" className="text-gray-200 hover:bg-gray-700 p-2 rounded">Transactions</a>
          <a href="#" className="text-gray-200 hover:bg-gray-700 p-2 rounded">Statistics</a>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <header className="bg-white p-4 rounded-lg shadow mb-6">
          <h1 className="text-2xl font-bold">Organizer Dashboard</h1>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <EventList />
          <RegistrationList />
          <TransactionList />
          <Statistics />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
