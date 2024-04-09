import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [showTime, setShowTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const timeString = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
            setShowTime(timeString);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); 


    return (
        <div>
            <h1 align="center">Current Time</h1>
            <h2 align="center">{showTime}</h2>
        </div>
    );
};

export default React.memo(Timer);
