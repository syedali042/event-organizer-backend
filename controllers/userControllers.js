const UserModel = require('../models').UserModel;
module.exports = {
    userRegister: async (req, res) => {
        try {
            const checkUser = await UserModel.findOne({ email: req.body.email });
            console.log(checkUser)
            if (!checkUser) {
                const createUser = await UserModel.create({ ...req.body });
                if (createUser) res.status(200).send({ msg: 'User Registered', data: createUser });
                else res.status(203).send({ msg: 'Something Went Wrong' });
            } else {
                res.status(204).send({ msg: 'User Already Exist' });
            }
        } catch (error) {
            res.status(500).send({ msg: 'Internal Server Error' });
        }
    },
    loginUser: async (req, res) => {
        try {
            console.log(req.body)
            const findUser = await UserModel.findOne({ email: req.body.email, password: req.body.password });
            if (findUser) {
                res.status(200).send({ msg: 'User Authenticated Successfull', data: findUser });
            } else {
                res.status(203).send({ msg: 'No User Exist' });
            }
        } catch (error) {
            res.status(500).send({ msg: 'Internal Server Error' });
        }
    },
    updateProfile: async (req, res) => {
        try {
            const data = req.body;
            console.log(data);
            var items = {}
            const condition = {
                _id: req.body.userId
            };
            // console.log(items);
            const updateUser = await UserModel.findOneAndUpdate(condition, req.body, { upsert: true, new: true });
            if (updateUser) {
                res.status(200).send({ msg: 'User Updated Successfull', data: updateUser });
            } else {
                res.status(203).send({ msg: 'No User Exist' });
            }
        } catch (error) {
            res.status(500).send({ msg: 'Internal Server Error' });
        }
    },
    profilePicture: async (req, res) => {
        try {
            console.log(req.body)
            const files = req.file;
            const updateProfilePicture = await UserModel.findOneAndUpdate({_id:req.body.id}, [{$set:{"profilePicture": files.filename}}], {upsert:false, new:true})
            if(updateProfilePicture){
                res.status(200).send({ msg: "Uploaded ", data: files.filename });
            }else{
                res.status(200).send({msg: "Uploaded ", data:files.filename});
            }
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    getUserById: async (req, res) => {
        try {
            const findUser = await UserModel.findById(req.body.id);
            if (findUser) {
                delete findUser.password;
                res.status(200).send({ msg: 'User Found Successfull', data: findUser });
            } else {
                res.status(203).send({ msg: 'No User Exist' });
            }
        } catch (error) {
            res.status(500).send({ msg: 'Internal Server Error' });
        }
    },

    sendConfirmationCode: async (req, res) => {
        try {
            const findUser = await UserModel.findOne({ email: req.body.email });
            if (findUser) {
                const update_cc = await UserModel.findOneAndUpdate({ email: req.body.email }, { cc: req.body.cc });
                if (update_cc) {
                    res.status(200).send({ msg: 'Confirmation Code Sent', data: update_cc });
                } else {
                    res.status(203).send({ msg: 'Something Went Wrong' });
                }
            } else {
                res.status(204).send({ msg: 'No User Exist' });
            }
        } catch (error) {
            res.status(500).send({ msg: 'Internal Server Error' });
        }
    },
    confirmCode: async (req, res) => {
        try {
            const confirmCode = await UserModel.findOne({ email: req.body.email, cc: req.body.cc });
            if (confirmCode) {
                res.status(200).send({ msg: 'Email Confirmed Succexxfully' });
            } else {
                res.status(204).send({ msg: 'No User Exist' });
            }
        } catch (error) {
            res.status(500).send({ msg: 'Internal Server Error' });
        }
    },
    updatePassword: async (req, res) => {
        try {
            const updatePassword = await UserModel.findOneAndUpdate({ email: req.body.email }, { email: req.body.email, password: req.body.password });
            if (updatePassword) {
                res.status(200).send({ msg: 'Password Updated' });
            } else {
                res.status(204).send({ msg: 'No User Exist' });
            }
        } catch (error) {
            res.status(500).send({ msg: 'Internal Server Error' });
        }
    },
}

