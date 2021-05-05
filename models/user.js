const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    data: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    }
}, { timestamps: true });

const Users = mongoose.model('User', userSchema);

module.exports = Users;