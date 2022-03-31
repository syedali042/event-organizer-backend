const route = require('express').Router();
const venueController = require('../controllers/venueController');
const path =  require('path')
const multer = require('multer');
const UPLOAD_FILES_DIR = "./uploads/venues";
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
route.post('/addNewVenue', venueController.addNewVenue);
route.get('/allVenues', venueController.allVenues);
route.post('/providerVenues', venueController.providerVenues);
route.post('/getVenueById', venueController.getVenueById);
route.put('/uploadImages', upload.array('files', 5), venueController.uploadImages);
route.post('/updateVenue', venueController.updateVenue);
route.post('/deleteVenue', venueController.deleteVenue);

module.exports = route;