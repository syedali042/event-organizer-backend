const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    contact: String,
    password: String,
    role: String,
    status: String,
    address: {
        lineOne: String,
        lineTwo: String,
    },
    lastLocation: String,
    profilePicture: String,
    paymentMethod : {
        accountTitle: String,
        accountNumber: String,
        bankName: String,
        cardNo: String,
        cardExpiry: String,
        cardCvv: String,
    },
    isActive:{
        type: Boolean,
        default:false,
    },
    isDeleted:{
        type: Boolean,
        default:false,
    },
    createdAt: {    
        type: Date,
        default: Date.now()
    },
    updatedAt: {    
        type: Date,
        default: Date.now()
    },                              
})

module.exports = mongoose.model('Users', userSchema);