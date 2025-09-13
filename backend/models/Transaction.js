const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  amount: { type: Number, required: true }, 
  date: { type: Date, required: true },
  category: { type: String, required: true, trim: true },
   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" ,required:true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Transaction', transactionSchema);
