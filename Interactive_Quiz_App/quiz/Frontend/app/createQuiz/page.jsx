"use client"
import React, { useState, useEffect } from 'react';
import styles from '../../styles/page.css';
import axios from 'axios';


const QuizForm = () => {
  const [type, setType] = useState('');
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [options, setOptions] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const typeLowercase = type.toLowerCase();

        const response = await axios.post('http://localhost:5000/createQuiz', {
          type: typeLowercase,
          question,
          correctAnswer,
          options,
        });
        console.log('Quiz Creaion successful:', response.data.message);
        console.log(response.data); 
      } catch (error) {
        console.error(error); 
      }
  };


  const handleAddOption = () => {
    setOptions([...options, '']);       
  };
  

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Type:
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Question:
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Correct Answer:
          <input type="text" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} />
        </label>
      </div>
      <div>
        <button type="button" onClick={handleAddOption}>Add Option</button>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              Option {index + 1}:
              <input type="text" value={option} onChange={(e) => handleOptionChange(index, e.target.value)} />
            </label>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuizForm;
