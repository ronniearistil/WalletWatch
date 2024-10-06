// src/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      <h3>Expense List</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.text} - ${expense.amount} ({expense.category})
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
