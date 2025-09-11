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
  // Pie chart data: total of all transactions per category
  const pieData = categories.map((cat) => ({
    name: cat,
    value:
      transactions
        .filter((t) => t.category === cat)
        .reduce((sum, t) => sum + Math.abs(t.amount), 0) || 0,
  }));

  // Bar chart data: separate income and expense per category
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
      {/* Pie Chart */}
      <div className="py-4  bg-white rounded-xl shadow-lg flex justify-center">
        <PieChart width={550} height={350} margin={{ top: 20, right: 50, bottom: 20, left: 50 }} >
          <Pie
         
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
              label={(entry) => (entry.value > 0 ? entry.name : "")}
            stroke="none"
            
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Bar Chart */}
      <div className="py-4 bg-white rounded-xl shadow-lg">
        <BarChart width={600} height={330}
        
        data={barData}>
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
