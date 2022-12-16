const express = require('express')
const router = express.Router();
const Options_Controller = require('../controller/options_controller')

router.post('/:id/add_votes',Options_Controller.addVotes);

router.delete('/:id/delete',Options_Controller.delete);



module.exports = router;