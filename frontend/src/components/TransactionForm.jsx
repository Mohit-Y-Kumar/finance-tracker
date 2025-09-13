import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

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
            const token = localStorage.getItem("token");
            api.get(`/transactions/${transactionId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setFormData({
                        ...data,
                        amount: Number(data.amount),
                        date: data.date?.split("T")[0] || "",
                    });
                });
        }
    }, [transactionId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (transactionId) {
                await api.put(`/transactions/${transactionId}`, formData);
            } else {
                await api.post("/transactions", formData);
            }
            navigate("/");
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Something went wrong");
        }
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
                    <ArrowDown />
                </div>
            </div>

            <button
                type="submit"
                className="relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white transition transform hover:scale-105"
                style={{
                    background: "linear-gradient(135deg, #34D399, #10B981, #059669)",
                    boxShadow: "0 8px 20px rgba(16, 185, 129, 0.3)",
                }}
            >
                {transactionId ? "Update Transaction" : "Add Transaction"}
                {/* Optional floating glow effect */}
                <span className="absolute inset-0 bg-white opacity-10 rounded-full animate-pulse"></span>
            </button>

        </form>
    );
};

export default TransactionForm;
