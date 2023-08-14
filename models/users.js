// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    amountNo: String,
    email: String,
    balance: Number,
});

const users = mongoose.models.users || mongoose.model('users', userSchema);
export default users;