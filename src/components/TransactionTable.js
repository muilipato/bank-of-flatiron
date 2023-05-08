import React from 'react';

const TransactionTable = ({transactions}) => {
 /* const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('https://bank-data.onrender.com/transactions')
      .then((response) => response.json()) 
      .then((data => setTransactions(data)))
      

  }, []);
  console.log(transactions); */ 
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        )))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
