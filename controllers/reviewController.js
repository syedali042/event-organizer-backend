const ReviewModel = require('../models').ReviewModel;
module.exports = {
    createReview: async (req, res) => {
        try {
            const createReview = await ReviewModel.create({...req.body});
            if(createReview) res.status(200).send({msg: 'Review Created', data:createReview});
            else res.status(203).send({msg: 'Something Went Wrong'});
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    allReviews: async (req, res) => {
        try {
            const findReview = await ReviewModel.find();
            if(findReview){
                res.status(200).send({msg: 'Review Found Successfull', data:findReview});
            }else{
                res.status(203).send({msg: 'No Review Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    userReviews: async (req, res) => {
        try {
            const findReview = await ReviewModel.find({user:req.body.userId});
            if(findReview){
                res.status(200).send({msg: 'Reviews Found Successfull', data:findReview});
            }else{
                res.status(203).send({msg: 'No Review Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    getReviewByVenueId: async (req, res) => {
        try {
            const findReview = await ReviewModel.find({venue:req.body.venueId});
            if(findReview){
                res.status(200).send({msg: 'Reviews Found Successfull', data:findReview});
            }else{
                res.status(203).send({msg: 'No Review Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    getReviewById: async (req, res) => {
        try {
            const findReview = await ReviewModel.findById(req.body.id);
            if(findReview){
                res.status(200).send({msg: 'Review Found Successfull', data:findReview});
            }else{
                res.status(203).send({msg: 'No Review Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    updateReview: async (req, res) => {
        try {
            const condition = {
                _id:req.body.reviewId
            };
            const updateReview = await ReviewModel.findOneAndUpdate(condition, req.body, {upsert:true, new:true});
            if(updateReview){
                res.status(200).send({msg: 'Review Updated Successfull', data:updateReview});
            }else{
                res.status(203).send({msg: 'Something Went Wrong'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    deleteReview: async (req, res) => {
        try {
            const condition = {
                _id:req.body.reviewId
            };
            const deleteReview = await ReviewModel.findOneAndDelete(condition);
            if(deleteReview){
                res.status(200).send({msg: 'Review Deleted Successfull'});
            }else{
                res.status(203).send({msg: 'Something Went Wrong'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    }
}

