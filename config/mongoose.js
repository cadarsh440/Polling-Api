//importing mongoose as our ODM
const mongoose = require('mongoose');

// making a connection to our mongo DB
mongoose.connect('mongodb://localhost/Polling_Api');

// creating a db from the connection
const db = mongoose.connection;

// checking if there is an error when making a connection
db.on('error', console.error.bind(console,'There was an error opening the connection to MongoDB')
)

// checking and printing if the connection was successful
db.once('open',function(){
    console.log('Successfully connected to MongoDB')
});

// finally exporting the db from this module

module.exports = db;
