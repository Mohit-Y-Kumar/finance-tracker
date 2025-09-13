import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [mode, setMode] = useState("login"); 
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "login") {
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email: form.email,
          password: form.password,
        });
        login(res.data.token);
        navigate("/");
      } else {
        await axios.post("http://localhost:5000/api/auth/register", form);
        alert("Registration successful! Please login.");
        setMode("login"); 
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex justify-center items-center relative overflow-hidden">
      {/* Floating abstract shapes */}
      <div className="absolute top-[-80px] left-[-60px] w-72 h-72 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-50px] w-96 h-96 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[360px] relative z-10">
        {/* Toggle buttons */}
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 rounded-l-lg font-semibold ${
              mode === "login"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 rounded-r-lg font-semibold ${
              mode === "register"
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setMode("register")}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          {mode === "register" && (
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-pink-400"
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold transition ${
              mode === "login"
                ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                : "bg-pink-500 hover:bg-pink-600 text-white"
            }`}
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        {/* Helper text */}
        <p className="text-center text-gray-600 mt-4 text-sm">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <span
                className="text-indigo-600 cursor-pointer font-semibold"
                onClick={() => setMode("register")}
              >
                Register here
              </span>
            </>
          ) : (
            <>
              Already registered?{" "}
              <span
                className="text-pink-600 cursor-pointer font-semibold"
                onClick={() => setMode("login")}
              >
                Login here
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
