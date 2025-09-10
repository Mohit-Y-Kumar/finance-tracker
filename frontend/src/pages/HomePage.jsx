import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TransactionList from "../components/TransactionList";

const HomePage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">💰 Personal Finance Tracker</h1>
      <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded">+ Add Transaction</Link>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default HomePage;
