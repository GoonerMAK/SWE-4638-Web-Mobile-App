'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const Timer = ({ timerRefresh  }) => {
    
  const [seconds, setSeconds]=useState(20);


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
      <h1>Timer</h1>
      <h2>{ seconds<10 ? "0"+seconds : seconds }</h2>
    </div>
  );
};

export default Timer;
