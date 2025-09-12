const Transaction = require('../models/Transaction');

/**
 * Create a new transaction
 * POST /api/transactions
 */
exports.createTransaction = async (req, res, next) => {
  try {
    const { title, amount, date, category } = req.body;
     const userId = req.user._id;
    if (!title || amount === undefined || !date || !category) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const tx = await Transaction.create({ title, amount, date, category });
    res.status(201).json(tx);
  } catch (err) {
    next(err);
  }
};

/**
 * Get all transactions (optional query: start,end,category)
 * GET /api/transactions
 */
exports.getTransactions = async (req, res, next) => {
  try {
    const { start, end, category } = req.query;
    const userId = req.user._id; // NEW: logged-in user

    const filter = { userId };
    if (category) filter.category = category;
    if (start || end) {
      filter.date = {};
      if (start) filter.date.$gte = new Date(start);
      if (end) filter.date.$lte = new Date(end);
    }
    const txs = await Transaction.find(filter).sort({ date: -1 });
    res.json(txs);
  } catch (err) {
    next(err);
  }
};

/**
 * Get single transaction
 * GET /api/transactions/:id
 */
exports.getTransaction = async (req, res, next) => {
  try {
    const tx = await Transaction.findOne({ _id: req.params.id, userId: req.user._id });
    if (!tx) return res.status(404).json({ message: 'Transaction not found' });
    res.json(tx);
  } catch (err) {
    next(err);
  }
};

/**
 * Update transaction
 * PUT /api/transactions/:id
 */
exports.updateTransaction = async (req, res, next) => {
  try {
    const { title, amount, date, category } = req.body;
    const tx = await Transaction.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id }, // UPDATED
      { title, amount, date, category },
      { new: true, runValidators: true }
    );
    if (!tx) return res.status(404).json({ message: 'Transaction not found' });
    res.json(tx);
  } catch (err) {
    next(err);
  }
};

/**
 * Delete transaction
 * DELETE /api/transactions/:id
 */
exports.deleteTransaction = async (req, res, next) => {
  try { 
    const tx = await Transaction.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!tx) return res.status(404).json({ message: 'Transaction not found' });
    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    next(err);
  }
};
