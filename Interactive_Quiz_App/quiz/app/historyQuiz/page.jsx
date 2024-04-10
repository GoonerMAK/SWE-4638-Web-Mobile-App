'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { historyQuiz } from '../data.js';
import styles from '../../styles/page.css';
import Timer from '../Timer/Timer.jsx'

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [checked, setChecked] = useState(false);
  const [questionTracker, setQuestionTracker] = useState(true);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = historyQuiz;
  const { question, options, correctAnswer } = questions[activeQuestion];


  //   Select and check the option selected if it's correct or not
  const onOptionSelected = (option, idx) => {
    setChecked(true);
    setSelectedOptionIndex(idx);

    if (option === correctAnswer) {
      setSelectedOption(true);
      console.log('true');
    } else {
      setSelectedOption(false);
      console.log('false');
    }
  };


  //   Calculate score and go to the next question
  const nextQuestion = () => {
    setChecked(false);
    setSelectedOptionIndex(null);

    setResult((prev) =>
      selectedOption
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } 
    else {                   // if the active question is the last question
      setActiveQuestion(0);
      setShowResult(true);
      setQuestionTracker(false);
    }
  };


  return (
    <div className='container'>
      <Timer />
      <br></br>
      <h1>History Quiz Page</h1>
      
      <div>
        {questionTracker ? (
          <h2>
            Question: {activeQuestion + 1}
            <span>/{questions.length}</span>
          </h2>
        ) : ( 
          <span> </span>
        )}
      </div>

      <div>
        {!showResult ? (
          <div className='quiz-container'>
            <h3>{questions[activeQuestion].question}</h3>
            {options.map((option, idx) => (
              <div>
              <button
                key={idx}
                onClick={() => onOptionSelected(option, idx)}
                className={
                  selectedOptionIndex === idx ? 'li-selected' : 'li-hover'
                }
              >
                <span>{option}</span>
              </button>
              </div>
            ))}
            
            {checked ? (
              <button onClick={nextQuestion} className='btn'>
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className='btn-disabled'>
                {' '}
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        ) : (
          <div className='quiz-container'>
            <h3>Results</h3>
            <h3>Overall { ((result.score / questions.length) * 100).toFixed(2) }%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>

            <button className='btn' onClick={() => window.location.reload()}>Restart</button>

            <Link href='/'>
              <button className='btn' >Select New</button>
            </Link>

          </div>
        )}
      </div>
    </div>
  );
};

export default page;