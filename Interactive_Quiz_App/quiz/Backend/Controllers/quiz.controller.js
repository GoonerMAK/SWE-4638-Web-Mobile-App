const Quiz = require("../Models/quiz.model.js");
const mongoose = require('mongoose');


const createQuiz = async (req, res) => {
    try {
      const { type, question, correctAnswer, options } = req.body;
  
      const newQuiz = new Quiz({
        type,
        question,
        correctAnswer,
        options,
      });
  
      await newQuiz.save();
  
      res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
    } catch (err) {
      console.error(err); 
      res.status(500).json({ message: 'Internal server error' }); 
    }
};


const fetchQuizData = async (req, res) => {
    try {
      const quizData = await Quiz.find(); 
      res.status(200).json(quizData); 
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' }); 
    }
};

const fetchHistoryQuizData = async (req, res) => {
  try {
      const historyQuizData = await Quiz.find({ type: "history" }).select('question options correctAnswer -_id');
      res.status(200).json(historyQuizData);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
  }
};


const fetchGeneralKnowledgeQuizData = async (req, res) => {
  try {
      const generalKnowledgeQuizData = await Quiz.find({ type: "general knowledge" }).select('question options correctAnswer -_id');
      res.status(200).json(generalKnowledgeQuizData);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
  }
};


const fetchGeographyQuizData = async (req, res) => {
  try {
      const geographyQuizData = await Quiz.find({ type: "geography" }).select('question options correctAnswer -_id');
      res.status(200).json(geographyQuizData);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
  }
};


const fetchSportsQuizData = async (req, res) => {
  try {
      const sportsQuizData = await Quiz.find({ type: "sports" }).select('question options correctAnswer -_id');
      res.status(200).json(sportsQuizData);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = { createQuiz, fetchQuizData, fetchHistoryQuizData, fetchGeneralKnowledgeQuizData, fetchGeographyQuizData, fetchSportsQuizData };
