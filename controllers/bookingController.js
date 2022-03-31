const BookingModel = require('../models').BookingModel;
module.exports = {
    createBooking: async (req, res) => {
        try {
            const createBooking = await BookingModel.create({...req.body});
            if(createBooking) res.status(200).send({msg: 'Booking Created', data:createBooking});
            else res.status(203).send({msg: 'Something Went Wrong'});
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    allBookings: async (req, res) => {
        try {
            const findBooking = await BookingModel.find();
            if(findBooking){
                res.status(200).send({msg: 'Booking Found Successfull', data:findBooking});
            }else{
                res.status(203).send({msg: 'No Booking Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    userBookings: async (req, res) => {
        try {
            const findBooking = await BookingModel.find({client:req.body.client});
            if(findBooking){
                res.status(200).send({msg: 'Bookings Found Successfull', data:findBooking});
            }else{
                res.status(203).send({msg: 'No Booking Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    getBookingById: async (req, res) => {
        try {
            const findBooking = await BookingModel.findById(req.body.id);
            if(findBooking){
                res.status(200).send({msg: 'Booking Found Successfull', data:findBooking});
            }else{
                res.status(203).send({msg: 'No Booking Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    updateBooking: async (req, res) => {
        try {
            const condition = {
                _id:req.body.bookingId
            };
            const updateBooking = await BookingModel.findOneAndUpdate(condition, req.body, {upsert:true, new:true});
            if(updateBooking){
                res.status(200).send({msg: 'Booking Updated Successfull', data:updateBooking});
            }else{
                res.status(203).send({msg: 'No User Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    deleteBooking: async (req, res) => {
        try {
            const condition = {
                _id:req.body.bookingId
            };
            const deleteBooking = await BookingModel.findOneAndDelete(condition);
            if(deleteBooking){
                res.status(200).send({msg: 'Booking Deleted Successfull'});
            }else{
                res.status(203).send({msg: 'No User Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    }
}

