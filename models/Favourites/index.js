const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    user:String,
    venue: String,
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

module.exports = mongoose.model('Favourites', favouriteSchema);