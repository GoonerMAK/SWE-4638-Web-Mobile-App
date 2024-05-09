const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAuthenticated} = require("../Middlewares/auth.middleware")

const { createQuiz, fetchQuizData, fetchHistoryQuizData, fetchGeneralKnowledgeQuizData, fetchGeographyQuizData, fetchSportsQuizData } = require('../Controllers/Quiz.controller');

router.post('/createQuiz', createQuiz);

router.get('/fetchQuizData', fetchQuizData);

router.get('/fetchHistoryQuizData', fetchHistoryQuizData);

router.get('/fetchGeneralKnowledgeQuizData', fetchGeneralKnowledgeQuizData);

router.get('/fetchGeographyQuizData', fetchGeographyQuizData);

router.get('/fetchSportsQuizData', fetchSportsQuizData);


module.exports = router;
