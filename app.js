const express   = require('express');
const path      = require('path');
const bodyParser= require('body-parser');
const cors      = require('cors');
const mongoose  = require('mongoose');
const cookieparser = require('cookie-parser');

const api       = require('./server/routes/api');
const config    = require('./server/config');

const app = express();


//takes the first argument (node app [profile]) or use default
let profile = process.argv[2] ? config[process.argv[2]] : config["1"];
console.log(profile);
const port = profile.port;
const database = profile.database;

mongoose.connect(database, {useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//we want the server to run on port 3000

//use the CORS middleware to enable Cross-Origin Requests (like fonts)
app.use(cors());

//use bodyParser for parsing url-encoding and JSON objects in requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieparser());

//try to send requests to the /dist folder
app.use(express.static(path.join(__dirname, 'dist')));

//refer requests to /api/* to the api router at API/api.routes.js
app.use('/api', api);

//for all other paths, give the index page
app.get("*", (req,res) => {
    console.log("got request")
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//start the server on port 3000
app.listen(port, () => {
    console.log(`starting server on port ${port}`);
});
