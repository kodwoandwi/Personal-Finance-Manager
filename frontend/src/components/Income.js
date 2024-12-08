import React, { useState, useEffect } from 'react';
import financeService from '../services/financeService';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await financeService.getExpenses();
      setExpenses(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await financeService.addExpense(category, amount);
      fetchExpenses();
      setCategory('');
      setAmount('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Expenses</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            {expense.category}: {expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
