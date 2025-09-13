const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const authRoutes = require("./routes/authRoutes");

const app = express();

// CORS setup
const allowedOrigins = [
  "http://localhost:5173",               
  "https://your-frontend-domain.com"     
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

// connect DB
connectDB();

// routes
app.use('/api/transactions', transactionRoutes);
app.use("/api/auth", authRoutes);

// health check
app.get('/api/ping', (req, res) => res.json({ ok: true, time: new Date() }));

// error middleware (should be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
