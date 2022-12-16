const express = require('express');
const router = express.Router();
const Questions_controller = require('../controller/question_controller')

router.get('/:id',Questions_controller.getQuestion);

router.post('/:id/options/create',Questions_controller.createOption);

router.post('/create',Questions_controller.createQuestion);

router.delete('/:id/delete',Questions_controller.deleteQuestion);



module.exports = router;