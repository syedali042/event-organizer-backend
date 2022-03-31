const VenueModel = require('../models').VenueModel;
module.exports = {
    addNewVenue: async (req, res) => {
        try {
            const createVenue = await VenueModel.create({...req.body});
            if(createVenue) res.status(200).send({msg: 'Venue Created', data:createVenue});
            else res.status(203).send({msg: 'Something Went Wrong'});
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    allVenues: async (req, res) => {
        try {
            const findVenue = await VenueModel.find();
            if(findVenue){
                res.status(200).send({msg: 'Venues Found Successfull', data:findVenue});
            }else{
                res.status(203).send({msg: 'No Venue Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    providerVenues: async (req, res) => {
        try {
            const findVenue = await VenueModel.find({provider:req.body.provider});
            if(findVenue){
                res.status(200).send({msg: 'Venues Found Successfull', data:findVenue});
            }else{
                res.status(203).send({msg: 'No Venue Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    getVenueById: async (req, res) => {
        try {
            const findVenue = await VenueModel.findById(req.body.id);
            if(findVenue){
                res.status(200).send({msg: 'Venue Found Successfull', data:findVenue});
            }else{
                res.status(203).send({msg: 'No Venue Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    uploadImages: async (req, res) => {
        try {
            const files = req.files;
            var data = [];
            files.forEach((f)=>{
                data.push(f.filename);
            })
            return res.status(200).send({msg: "Uploaded ", data:data});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    updateVenue: async (req, res) => {
        try {
            const condition = {
                _id:req.body.venueId
            };
            const updateVenue = await VenueModel.findOneAndUpdate(condition, req.body, {upsert:true, new:true});
            if(updateVenue){
                res.status(200).send({msg: 'Venue Updated Successfull', data:updateVenue});
            }else{
                res.status(203).send({msg: 'No User Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    deleteVenue: async (req, res) => {
        try {
            const condition = {
                _id:req.body.venueId
            };
            const deleteVenue = await VenueModel.findOneAndDelete(condition);
            if(deleteVenue){
                res.status(200).send({msg: 'Venue Deleted Successfull'});
            }else{
                res.status(203).send({msg: 'No User Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    }
}

