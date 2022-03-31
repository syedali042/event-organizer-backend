const UserModel = require('../models').UserModel;
module.exports = {
    userRegister: async (req, res) => {
        try {
            const checkUser = await UserModel.findOne({email:req.body.email});
            console.log(checkUser)
            if(!checkUser){
                const createUser = await UserModel.create({...req.body});
                if(createUser) res.status(200).send({msg: 'User Registered', data:createUser});
                else res.status(203).send({msg: 'Something Went Wrong'});
            }else{
                res.status(203).send({msg: 'User Already Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    loginUser: async (req, res) => {
        try {
            const findUser = await UserModel.findOne({email:req.body.email, password:req.body.password});
            if(findUser){
                res.status(200).send({msg: 'User Authenticated Successfull', data:findUser});
            }else{
                res.status(203).send({msg: 'No User Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    updateProfile: async (req, res) => {
        try {
            const data = req.body;
            var items = {}
            const condition = {
                _id:req.body.userId
            };
            // console.log(items);
            const updateUser = await UserModel.findOneAndUpdate(condition, req.body, {upsert:true, new:true});
            if(updateUser){
                res.status(200).send({msg: 'User Updated Successfull', data:updateUser});
            }else{
                res.status(203).send({msg: 'No User Exist'});
            } 
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    profilePicture: async (req, res) => {
        try {
            const files = req.file;
            return res.status(200).send({msg: "Uploaded ", data:files.filename});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
}

