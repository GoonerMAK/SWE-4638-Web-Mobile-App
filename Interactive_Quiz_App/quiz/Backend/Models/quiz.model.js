const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
    
  id: {  type: Number,  },

  type: { type: String,  },

  question: {   type: String,   },
  
  correctAnswer: {  type: String,   },

  options: {  type: [String], default: [],  },

  createdAt: {  type: Date,   default: Date.now,  },

});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;