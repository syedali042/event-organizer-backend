const route = require('express').Router();
const userController = require('../controllers/userControllers');
const path =  require('path')
const multer = require('multer');
const UPLOAD_FILES_DIR = "./uploads/user-profiles";
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, UPLOAD_FILES_DIR);
  },
// in case you want to change the names of your files)
  filename(req, file = {}, cb) {
    file.mimetype = "audio/webm";
    // console.log(req)
    const {originalname} = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    cb(null, `${Date.now()}${fileExtension}`);
  }
});
const upload = multer({storage});
route.post('/userRegister', userController.userRegister);
route.post('/loginUser', userController.loginUser);
route.post('/getUserById', userController.getUserById);
route.post('/updateProfile', userController.updateProfile);
route.post('/profilePicture', upload.single('filename'), userController.profilePicture);
route.post('/sendConfirmationCode',userController.sendConfirmationCode);
route.post('/confirmCode',userController.confirmCode);
route.post('/updatePassword',userController.updatePassword);

module.exports = route;