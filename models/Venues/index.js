const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    provider:String,
    title: String,
    address: String,
    location: String,
    images: Array,
    availableSlots: Array,
    services: Array,
    type:String,
    totalArea: String,
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

module.exports = mongoose.model('Venues', userSchema);