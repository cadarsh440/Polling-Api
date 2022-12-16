const express = require('express');
const Questions = require('../models/questions');
const Options = require('../models/options');
const { route } = require('../../ToDoApp/routes');
const router = express.Router();



router.use('/questions',require('./questions'));
router.use('/options',require('./options'));




module.exports = router;