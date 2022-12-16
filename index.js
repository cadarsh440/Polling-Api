 // first requring the express framework for our app
const express = require('express');
const router = require('../ToDoApp/routes');
// setting our app with express framework
const app = express();
const port = 8000;
// setting up the connection to our DB from mongoose config file
const db = require('./config/mongoose')

//using the body parser
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

app.use('/',require('./routes'));



// making our app listen on port number which is assigned to a variable
app.listen(port,function(err){
    if(err){
        console.log('There was an error listening on the port',err);
        return;
    }

    console.log('The app is up and running on port : ',port);
})

