import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TransactionList from "../components/TransactionList";
import { Wallet, PlusCircle } from "lucide-react";

const HomePage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  // Calculate stats
  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 sm:p-6 relative overflow-hidden">
      {/* Floating abstract shapes */}
      <div className="absolute top-[-80px] left-[-60px] w-72 h-72 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-50px] w-96 h-96 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>

      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 flex items-center gap-2">
          <Wallet className="w-8 h-8 text-green-600" />
          Personal Finance Tracker
        </h1>

        <Link
          to="/add"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg transition transform hover:scale-105"
        >
          <PlusCircle className="w-5 h-5" />
          Add Transaction
        </Link>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 relative z-10">
        <div className="p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
          <p className="text-gray-700 font-semibold">Total Transactions</p>
          <h2 className="text-2xl font-bold text-gray-800">{transactions.length}</h2>
        </div>
        <div className="p-5 bg-green-50 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
          <p className="text-green-700 font-semibold">Total Income</p>
          <h2 className="text-2xl font-bold text-green-600">₹{totalIncome}</h2>
        </div>
        <div className="p-5 bg-red-50 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
          <p className="text-red-700 font-semibold">Total Expense</p>
          <h2 className="text-2xl font-bold text-red-600">₹{totalExpense}</h2>
        </div>
      </div>

      {/* Transactions Table / Cards */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden relative z-10">
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default HomePage;
