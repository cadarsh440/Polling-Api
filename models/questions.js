const mongoose = require('mongoose');
// creating the schema for questions
const questionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    options:[
        {
            type:mongoose.Schema.ObjectId,
            ref: 'Options'
        }
    ]
},{
    timestamps:true
})

// creating the questions model with the present schema called questionSchema
const Questions = new mongoose.model('Questions',questionSchema);

// exporting Questions model from the module
module.exports = Questions;
