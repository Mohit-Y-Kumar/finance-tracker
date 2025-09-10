import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TransactionList from "../components/TransactionList";

const HomePage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-2xl font-extrabold text-gray-800">
          💰 Personal Finance Tracker
        </h1>
        <Link
          to="/add"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow-md transition"
        >
          + Add Transaction
        </Link>
      </header>

      {/* Stats (Bonus) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Total Transactions</p>
          <h2 className="text-xl font-bold text-gray-800">
            {transactions.length}
          </h2>
        </div>
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Total Income</p>
          <h2 className="text-xl font-bold text-green-600">
            ₹
            {transactions
              .filter((t) => t.amount > 0)
              .reduce((sum, t) => sum + t.amount, 0)}
          </h2>
        </div>
        <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Total Expense</p>
          <h2 className="text-xl font-bold text-red-600">
            ₹
            {transactions
              .filter((t) => t.amount < 0)
              .reduce((sum, t) => sum + t.amount, 0)}
          </h2>
        </div>
      </div>

      {/* Transactions Table / Cards */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default HomePage;
