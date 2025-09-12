const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/transactionController');
const { protect } = require('../middleware/authMiddleware');  // import protect

// Secure all transaction routes with authentication
router.post('/', protect, ctrl.createTransaction);
router.get('/', protect, ctrl.getTransactions);
router.get('/:id', protect, ctrl.getTransaction);
router.put('/:id', protect, ctrl.updateTransaction);
router.delete('/:id', protect, ctrl.deleteTransaction);

module.exports = router;
