const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// routes
app.use('/api/transactions', transactionRoutes);

// health check
app.get('/api/ping', (req, res) => res.json({ ok: true, time: new Date() }));

// error middleware (should be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
