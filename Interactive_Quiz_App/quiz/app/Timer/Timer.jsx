'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const Timer = ({ timerRefresh  }) => {
    
  const timerForSingleQuestion = 20;
  const [seconds, setSeconds]=useState(timerForSingleQuestion);


  useEffect(() => {
    const timer = setInterval(() => {
      if(seconds > 0)
      {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);

  }, [timerRefresh, seconds]);



  return (
    <div>
      <h1>Timer: { seconds<10 ? "0"+seconds : seconds } </h1>
    </div>
  );
};

export default Timer;
