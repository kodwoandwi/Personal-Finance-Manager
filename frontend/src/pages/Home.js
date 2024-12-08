import React from 'react';
import Expenses from '../components/Expenses';
import Income from '../components/Income';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Personal Finance Manager</h1>
      <Expenses />
      <Income />
    </div>
  );
};

export default Home;
