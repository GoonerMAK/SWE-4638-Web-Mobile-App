const express = require("express");
const router = express.Router();

const { createQuiz, fetchQuizData } = require('../Controllers/Quiz.controller');

router.post('/createQuiz', createQuiz);

router.get('/fetchQuizData', fetchQuizData);

module.exports = router;
