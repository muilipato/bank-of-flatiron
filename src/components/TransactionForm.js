import React, { useState } from 'react';
import {format} from 'date-fns';
const TransactionForm = ({ onAddTransaction }) => {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTransaction = { date:format(date, 'yyyy-MM-dd'), 
      description,
       category,
        amount };
        try{
          const response = await fetch('https://bank-data.onrender.com/transactions',{
            method: "POST",
            headers: {
              "Content-type" : "application/json",
            },
            body: JSON.stringify(newTransaction),
          })
          if (!response.ok){
            throw new Error("Error submitting transaction");
          }
          const newTransactions =await response.json();
          onAddTransaction(newTransactions);
          setDate(new Date());
          setDescription('');
          setCategory('');
          setAmount('');
        } catch (error){
          console.log(error)
        }
   
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2>Add a New Transaction</h2>
      <div>
      <label>
        Date:
        <input
          type="date"
          value={format(date,'yyyy-MM-dd')}
          onChange={handleDateChange}
          placeholder='yyyy-mm-dd'
        />
      </label>
      </div>
      <div>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>
      </div>
      <div>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={handleCategoryChange}
        />
      </label>
      </div>
      <div>
      <label>
        Amount:
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}

        />
      </label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
