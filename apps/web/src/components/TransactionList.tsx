import React from 'react';

const TransactionList: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <ul className="space-y-2">
        {/* Replace with dynamic transaction data */}
        <li className="mb-2">Transaction 1</li>
        <li className="mb-2">Transaction 2</li>
        <li className="mb-2">Transaction 3</li>
      </ul>
    </div>
  );
};

export default TransactionList;
