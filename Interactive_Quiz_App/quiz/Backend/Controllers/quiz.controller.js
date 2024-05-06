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
  
      const savedQuiz = await newQuiz.save();
  
      res.status(201).json(savedQuiz); 
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


module.exports = { createQuiz, fetchQuizData };
