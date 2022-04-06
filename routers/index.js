const Router = require('express').Router();
const userRoutes = require('./userRoutes');
const venueRoutes = require('./venueRoutes');
const bookingRoutes = require('./bookingRoutes');
const reviewRoutes = require('./reviewRoutes');
const favouriteRoutes = require('./favouriteRoutes')

Router.use('/user', userRoutes);
Router.use('/venue', venueRoutes);
Router.use('/booking', bookingRoutes);
Router.use('/review', reviewRoutes);
Router.use('/favourite', favouriteRoutes);

module.exports = Router;