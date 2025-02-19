'use client'

import React, { useState, useEffect } from 'react';

const TopHeader = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 15,
    minutes: 25,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newHours = prevTime.hours;
        let newMinutes = prevTime.minutes;
        let newSeconds = prevTime.seconds;

        if (newSeconds === 0) {
          if (newMinutes === 0) {
            if (newHours === 0) {
              return prevTime;
            }
            newHours--;
            newMinutes = 59;
          } else {
            newMinutes--;
          }
          newSeconds = 59;
        } else {
          newSeconds--;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black text-white">
      <div className="bg-black">
        <div className="container mx-auto px-4">
          <div className="h-auto py-4 flex items-center justify-center text-sm text-center">
            <p>
              Ganhe até 25% de desconto - Promoção {String(timeLeft.hours).padStart(2, '0')}hr{' '}
              {String(timeLeft.minutes).padStart(2, '0')}min{' '}
              {String(timeLeft.seconds).padStart(2, '0')}s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;