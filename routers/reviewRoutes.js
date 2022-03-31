const route = require('express').Router();
const reviewController = require('../controllers/reviewController');
const path =  require('path')
const multer = require('multer');
route.post('/createReview', reviewController.createReview);
route.get('/allReviews', reviewController.allReviews);
route.post('/userReviews', reviewController.userReviews);
route.post('/getReviewById', reviewController.getReviewById);
route.post('/getReviewByVenueId', reviewController.getReviewByVenueId);
route.post('/updateReview', reviewController.updateReview);
route.post('/deleteReview', reviewController.deleteReview);

module.exports = route;