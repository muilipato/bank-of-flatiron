import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

import './App.css';

function App() {
    const [transactions, setTransactions] = useState([]);

    const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1 className='header'>The Royal Bank of Flatiron</h1>
      <TransactionList transactions={transactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
}

export default App;