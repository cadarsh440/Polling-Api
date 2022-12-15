//importing mongoose as our ODM
const mongoose = require('mongoose');
// const mongodb = require('mongodb');
// // making a connection to our mongo DB
// // mongoose.connect('mongodb://localhost/Polling_Api');
mongoose.connect('mongodb+srv://MithunAj:oZHni5rHWf3fqKgX@cluster0.per79te.mongodb.net/?retryWrites=true&w=majority',{}).then(()=>{
    console.log('DB connected')
}).catch((error)=> {
    console.log(error, 'An error')
});

// // creating a db from the connection
// const db = mongoose.connection;

// // checking if there is an error when making a connection
// db.on('error', console.error.bind(console,'There was an error opening the connection to MongoDB')
// )

// // checking and printing if the connection was successful
// db.once('open',function(){
//     console.log('Successfully connected to MongoDB')
// });

// // finally exporting the db from this module

// module.exports = db;


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://MithunAj:Acharya@123@cluster0.per79te.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//   client.close();
// });


// module.exports = client;