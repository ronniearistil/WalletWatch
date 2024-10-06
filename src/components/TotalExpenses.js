// src/TotalExpenses.js
import React from 'react';

const TotalExpenses = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h2>Total Expenses: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default TotalExpenses;
