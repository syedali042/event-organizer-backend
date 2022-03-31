const mongoose = require('mongoose');
const UserModel = require('./Users');
const VenueModel = require('./Venues');
const BookingModel = require('./Bookings');
const ReviewModel = require('./Reviews');
mongoose.connect(`mongodb+srv://salizahid:7Kr58c1PyHHl4Cca@cluster0.ehb1z.mongodb.net/event-organizer?retryWrites=true&w=majority`);


module.exports = {
    UserModel,
    VenueModel,
    BookingModel,
    ReviewModel,
}