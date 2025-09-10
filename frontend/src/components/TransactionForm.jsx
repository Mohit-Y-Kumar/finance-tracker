import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TransactionForm = ({ transactionId }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (transactionId) {
      fetch(`http://localhost:5000/api/transactions/${transactionId}`)
        .then((res) => res.json())
        .then((data) => setFormData(data));
    }
  }, [transactionId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = transactionId ? "PUT" : "POST";
    const url = transactionId
      ? `http://localhost:5000/api/transactions/${transactionId}`
      : "http://localhost:5000/api/transactions";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    navigate("/");
  };

  const categories = [
    "Food",
    "Transport",
    "Shopping",
    "Entertainment",
    "Health",
    "Education",
    "Salary",
    "Business",
    "Others",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <input
        type="text"
        placeholder="Title"
        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Amount (+ income, - expense)"
        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        required
      />
      <input
        type="date"
        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        value={formData.date?.split("T")[0] || ""}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      {/* Styled Category Dropdown */}
      <div className="relative">
        <select
          className="appearance-none w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-white cursor-pointer"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {/* Down arrow icon */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center ">
          <ArrowDown/>
        </div>
      </div>

      <button className="bg-green-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-green-600 transition">
        {transactionId ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
};

export default TransactionForm;
