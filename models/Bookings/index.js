const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    client:String,
    venue: String,
    bookedSlot: {
        from: String,
        to:String
    },
    persons: String,
    servicesIncluded: Array,
    totalCharges: Number,
    status: String,
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

module.exports = mongoose.model('Bookings', bookingSchema);