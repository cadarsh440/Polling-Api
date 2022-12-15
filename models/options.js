const mongoose = require('mongoose');
// creating the optionschema 
const optionSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    votes:{
        type: Number,
        default: 0
    },
    link_to_vote:{
        type: String,
    },
    question:{
        type: mongoose.Schema.ObjectId
    }
},{
    timestamps:true
});
//creating a Options model with above defined schema
const Options = mongoose.model('Options',optionSchema);
// exporting the options modela from this module
module.exports = Options;