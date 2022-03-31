const route = require('express').Router();
const bookingController = require('../controllers/bookingController');
const path =  require('path')
const multer = require('multer');
route.post('/createBooking', bookingController.createBooking);
route.get('/allBookings', bookingController.allBookings);
route.post('/userBookings', bookingController.userBookings);
route.post('/getBookingById', bookingController.getBookingById);
route.post('/updateBooking', bookingController.updateBooking);
route.post('/deleteBooking', bookingController.deleteBooking);

module.exports = route;