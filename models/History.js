// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    orderId: String,
    product: [String],
    address: {
      city: String,
      area: String,
      houseNo: String,
      phone: String,
    },
    amount: Number,
    orderTime: Date,
    status: String,
    deliveredTime: Date,
    transactionId: String,
    email: String,
});

const History = mongoose.models.History || mongoose.model('History', userSchema);
export default History;