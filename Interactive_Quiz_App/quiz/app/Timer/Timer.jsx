'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const Timer = () => {
  const [countdown, setCountdown] = useState(30);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(intervalId);
      window.location.href = '/';
    }
  }, [countdown, intervalId]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h1 align="center">Timer</h1>
      <h2 align="center">{formatTime(countdown)}</h2>
    </div>
  );
};

export default Timer;
