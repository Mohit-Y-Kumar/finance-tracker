import React from "react";
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
];

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
  // Prepare Pie chart data (Expenses by Category)
  const expenseData = categories.map((cat) => ({
    name: cat,
    value: transactions
      .filter((t) => t.category === cat && t.amount < 0)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0),
  }));

  // Prepare Bar chart data (Income vs Expense by Category)
  const barData = categories.map((cat) => ({
    name: cat,
    Income: transactions
      .filter((t) => t.category === cat && t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0),
    Expense: transactions
      .filter((t) => t.category === cat && t.amount < 0)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0),
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Pie Chart: Expenses */}
      <div className="p-4 bg-white rounded-xl shadow-lg flex justify-center">
        <PieChart width={300} height={300}>
          <Pie
            data={expenseData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {expenseData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Bar Chart: Income vs Expense */}
      <div className="p-4 bg-white rounded-xl shadow-lg">
        <BarChart width={400} height={300} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Income" fill="#00C49F" />
          <Bar dataKey="Expense" fill="#FF6B6B" />
        </BarChart>
      </div>
    </div>
  );
};

export default Charts;
