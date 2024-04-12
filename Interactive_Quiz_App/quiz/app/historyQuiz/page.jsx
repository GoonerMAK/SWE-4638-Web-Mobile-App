'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { historyQuiz } from '../data.js';
import styles from '../../styles/page.css';
import Timer from '../Timer/Timer.jsx'

const page = () => {
  const timerForSingleQuestion = 20;

  const [timerRefresh, setTimerRefresh] = useState(false);
  const [timeTaken, setTimeTaken]=useState(0);
  const [singleQuestionTimer, setSingleQuestionTimer]=useState(timerForSingleQuestion);
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
      setSingleQuestionTimer(timerForSingleQuestion);
    } 
    else {                   // if the active question is the last question
      setActiveQuestion(0);
      setShowResult(true);
      setQuestionTracker(false);
    }

    setTimerRefresh(true);     // Refresh the timer for the next question
    
  };


  //    Reset the timer when going to the next question
  useEffect(() => {
    setTimerRefresh(false);
  }, [activeQuestion]);


  //    Automatically go to the next question when timer for a particular question expires
  useEffect(() => {
    const timer = setInterval(() => {
      setSingleQuestionTimer((prevTime) => prevTime - 1);

      if(singleQuestionTimer == 0)      //  If the timer runs out for a particular question
      {
        if (activeQuestion !== questions.length - 1) {
          setActiveQuestion((prev) => prev + 1);
        } 
        else {                   // if the active question is the last question
          setActiveQuestion(0);
          setShowResult(true);
          setQuestionTracker(false);
        }
        
        setTimerRefresh(true);        // Refresh the timer for the next question
        setSingleQuestionTimer(timerForSingleQuestion);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [singleQuestionTimer]);


  //  To calculate the total time taken for the quiz
  useEffect(() => {
    const timer = setInterval(() => {
      if (!showResult) {
        setTimeTaken((prevTime) => prevTime + 1);
      }
    }, 1000);
  
    return () => clearInterval(timer);
  }, [showResult]);


  return (
    <div className='container'>
      
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
      
      <br></br>
      <br></br>

      <div>
        {!showResult ? (
          <div className='quiz-container'>
            <Timer key={timerRefresh}/>
            <br></br>
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
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <p>
              Total Time Taken: <span>{timeTaken>60 ? 60 : timeTaken}</span> seconds
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