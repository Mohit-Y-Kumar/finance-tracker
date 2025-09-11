import React from "react";
import { ResponsiveContainer } from "recharts";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// Colors for categories
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF6384",
  "#A28BFE",
  "#FF6B6B",
  "#6BCB77",
  "#FFD93D",
  "#FF9F40",
  "#FF5A5F",
];

// Predefined categories
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

const Charts = ({ transactions }) => {
  // Pie chart data
  const pieData = categories.map((cat) => ({
    name: cat,
    value:
      transactions
        .filter((t) => t.category === cat)
        .reduce((sum, t) => sum + Math.abs(t.amount), 0) || 0,
  }));

  // Bar chart data
  const barData = categories.map((cat) => ({
    name: cat,
    Income:
      transactions
        .filter((t) => t.category === cat && t.amount > 0)
        .reduce((sum, t) => sum + t.amount, 0) || 0,
    Expense:
      transactions
        .filter((t) => t.category === cat && t.amount < 0)
        .reduce((sum, t) => sum + Math.abs(t.amount), 0) || 0,
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Pie Chart Card */}
      <div className="py-6 px-4 rounded-xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform hover:scale-105 transition duration-300">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3 text-center text-gray-700">
            Transactions by Category
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart

            >
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="80%"
                label={(entry) => (entry.value > 0 ? entry.name : "")}
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell
                  className="py-8"
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart Card */}
      <div className="py-6 px-4 rounded-xl shadow-lg bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 transform hover:scale-105 transition duration-300">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3 text-center text-gray-700">
            Income vs Expense by Category
          </h2>
          <ResponsiveContainer width="100%" height={350}>

            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Income" fill="#00C49F" />
              <Bar dataKey="Expense" fill="#FF6B6B" />
            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
};

export default Charts;
