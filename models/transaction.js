import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    amount: Number,
    transactionId: String,
    transactionAt: String
});

const transactions = mongoose.models.transactions || mongoose.model('transactions', transactionSchema);
export default transactions;