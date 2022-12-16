const Questions = require('../models/questions');
const Options = require('../models/options');

module.exports.getQuestion = async function(req,res){
    try {
        // to get the question
        // and we are also excluding some fields from Question model and including only few fields from Options model
        let question = await Questions.findOne({_id:req.params.id},{createdAt:0,updatedAt:0,__v:0}).populate('options','text votes link_to_vote');
        if(question){
            return res.json(200,{
                message: 'Request successful',
                question: question
            })
        }
        else{
            return res.json(404,{
                message : 'Request unsuccessful',
                error : 'Question not found'
            })
        }
        
    } catch (error) {
        return res.json(500,{
            message : 'Internal server error',
            error : error.errors
        })
    }
    

}

module.exports.createOption = async function(req,res){
    
    try {

        // first getting the question for which the options has to be created
        let question = await Questions.findOne({_id:req.params.id}).populate('options');

        // creating the option only if the question is found
        if(question){

            let option = await Options.create(req.body);
            
            // inserting the link to vote field to the option is created
            option.link_to_vote = `http://localhost:8000/options/${option._id}/add_votes`;
            // saving the question to the option created
            option.question = question.id;
            option.save();
            // pushing the option created into the options array of the question
            question.options.push(option)
            question.save();
                
            return res.json(200,{
                message: `Your option was successfully saved to the question called ${question.title}`,
                option_id : option._id,
                voting_link: option.link_to_vote
            })
        }
        // returning not found if the question was not found
        else{
            return res.json(404,{
                message : 'Question not found'
            })
        }
    } catch (error) {
        return res.json(500,{
            message : 'Internal server error',
            error : error.errors
        })
    }
    

}

module.exports.createQuestion = async function(req,res){
    
    try {   
        // creating the question with the body given
        let question = await Questions.create(req.body);

        return res.json(200,{
            message : 'Successfully created the question',
            id: question._id
        })
    } catch (error) {
        // in case the user did not enter the name of the required field properly, then we throw an internal server error with the error message
        return res.json(500,{
            message : 'Internal server error',
            error : error.errors
        })
    }
    
}

module.exports.deleteQuestion = async function(req,res){
    
    try {
        let question = await Questions.findById({_id:req.params.id})
        // if the question associated was found
        if(question){
            await Questions.findOneAndDelete({_id:req.params.id})
            await Options.deleteMany({question:req.params.id});

            return res.json(200,{
                message : 'Successfully deleted the question and its options',
                question_deleted : question.title
            })
        }
        //if the question was not found
        else{
            return res.json(404,{
                message : 'Question that you are trying to delete was not found'
            })
        }

    } catch (error) {
        return res.json(500,{
            message : 'Internal server error'
        })
    }

}
