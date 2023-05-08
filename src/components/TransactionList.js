import React, { useEffect, useState } from 'react';
import TransactionTable from './TransactionTable';
import SearchFilter from './SearchFilter';



const TransactionList = () => {
  const[transactions, setTransactions]= useState([]);
  const [filteredTransactions, setFilteredTransactions] =useState([])
  useEffect(()=>{
    fetch('https://bank-data.onrender.com/transactions')
    .then((response) => response.json())
    .then((data) => {
      setTransactions(data);
      setFilteredTransactions(data);
    })
  },[])
  const handleSearch= (searchText) =>{
    const filtered = transactions.filter((transaction) => {
      transaction.description.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilteredTransactions(filtered);
  }
  return (
    <div className='transactions-list'>
      <h2>Transaction List</h2>
      <SearchFilter onSearch={handleSearch}/>
      <TransactionTable transactions={filteredTransactions}/>
    </div>
  );
}


export default TransactionList;
