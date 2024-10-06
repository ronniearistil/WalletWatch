import React, { useState, useEffect } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import CategoryFilter from './components/CategoryFilter';
import TotalExpenses from './components/TotalExpenses';
import './index.css';  // Updated import to match the existing CSS file

const CATEGORIES = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Miscellaneous'];

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState('All');

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (savedExpenses) {
      setExpenses(savedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses =
    filteredCategory === 'All'
      ? expenses
      : expenses.filter((expense) => expense.category === filteredCategory);

  return (
    <div className="app-container">
      <h1>WalletWatch: Personal Expense Tracker</h1>
      <TotalExpenses expenses={filteredExpenses} />
      <CategoryFilter
        categories={CATEGORIES}
        setFilteredCategory={setFilteredCategory}
      />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;

