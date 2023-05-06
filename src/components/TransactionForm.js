import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = { date, description, category, amount };
    onAddTransaction(newTransaction);
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2>Add a New Transaction</h2>
      <label>
        Date:
        <input
          type="text"
          value={date}
          onChange={handleDateChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={handleCategoryChange}
        />
      </label>
      <label>
        Amount:
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}

        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
