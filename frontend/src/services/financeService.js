import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

// Add a new expense
const addExpense = (category, amount) => {
  const token = localStorage.getItem('token');
  return axios.post(
    API_URL + 'expenses',
    { category, amount },
    { headers: { 'x-auth-token': token } }
  );
};

// Get all expenses
const getExpenses = () => {
  const token = localStorage.getItem('token');
  return axios.get(API_URL + 'expenses', {
    headers: { 'x-auth-token': token },
  });
};

// Add new income
const addIncome = (source, amount) => {
  const token = localStorage.getItem('token');
  return axios.post(
    API_URL + 'income',
    { source, amount },
    { headers: { 'x-auth-token': token } }
  );
};

// Get all income
const getIncome = () => {
  const token = localStorage.getItem('token');
  return axios.get(API_URL + 'income', {
    headers: { 'x-auth-token': token },
  });
};

export default {
  addExpense,
  getExpenses,
  addIncome,
  getIncome,
};
