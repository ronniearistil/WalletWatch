// src/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Math.random().toString(36).substr(2, 9), // Random ID
      text,
      amount: parseFloat(amount),
      category,
    };

    addExpense(newExpense);
    setText('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Expense Name:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
