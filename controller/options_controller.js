const Questions = require('../models/questions');
const Options = require('../models/options');

module.exports.addVotes = async function(req,res){


    try {
        // finding the option
        let option = await Options.findOne({_id:req.params.id});

        if(option){
            // updating the votes value by 1
            await Options.findByIdAndUpdate({_id:req.params.id},{$inc:{votes:1}})
            // returning the option name and the current vote count
            return res.json(200,{
                message : `Successfully added your vote to the option ${option.text}`,
                cuurent_votes : option.votes + 1
            })
        }else{
            return res.json(404,{
                message : 'The option you are trying to vote was not found'
            })
        }
       
    } catch (error) {
        return res.json(500,{
            message : 'Internal server error',
            error : error.errors
        })
    }
    

}

module.exports.delete = async function(req,res){

    
    try {
        let option = await Options.findById({_id:req.params.id});
        // if the associated option is found
        if(option){
            let question = option.question;
            // removing the option entry from the options array in question.
            await Questions.findByIdAndUpdate(question,{$pull:{options:req.params.id}})

            await Options.findByIdAndDelete({_id:req.params.id});

            return res.json(200,{
                message: 'Successfully deleted your option',
                option_deleted: option.text
            })
        }
        // if the option with the given id was not found
        else{

            return res.json(404,{
                message : 'Option that you are trying to delete was not found'
            })
        }
    } catch (error) {
        return res.json(500,{
            message : 'Internal server error',
            error : error.errors
        })
    }
    
    
}