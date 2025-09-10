import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TransactionForm = ({ transactionId }) => {
  const [formData, setFormData] = useState({ title: "", amount: "", date: "", category: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (transactionId) {
      fetch(`http://localhost:5000/api/transactions/${transactionId}`)
        .then(res => res.json())
        .then(data => setFormData(data));
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
      <input
        type="text"
        placeholder="Title"
        className="border p-2"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount (+ income, - expense)"
        className="border p-2"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />
      <input
        type="date"
        className="border p-2"
        value={formData.date?.split("T")[0] || ""}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        className="border p-2"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        {transactionId ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TransactionForm;
