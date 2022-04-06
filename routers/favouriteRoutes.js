const route = require('express').Router();
const favouriteController = require('../controllers/favouriteController');
const path =  require('path')


route.post('/addToFavourite', favouriteController.addToFavourite);
route.post('/removeFromFavourite', favouriteController.removeFromFavourite);


module.exports = route;