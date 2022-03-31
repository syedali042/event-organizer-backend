const mongoose = require('mongoose');

const reviewBooking = new mongoose.Schema({
    user:String,
    venue: String,
    rating:String,
    comment: String,
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

module.exports = mongoose.model('Reviews', reviewBooking);