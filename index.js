
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path')
const app = express();
// Cross Platform Compatibility
app.use(cors());
// body-parser
app.use(express.json());
// setting routes
app.use('/',require('./routers/index'));
app.use('/uploads', express.static('uploads'));
// Configure Dotenv File
dotenv.config({path: '.env'});
const PORT = process.env.PORT;

// Server listing
app.listen(PORT,() => console.log(`Server is running on http://localhost:${PORT}`));