import { useState, useEffect } from "react";
const CountdownTimer = ({
  timeRemaining,
  setTimeRemaining,
  setIsTimeUp,
  isTimeUp,
}) => {
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          setIsTimeUp(true);
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, [isTimeUp]); // The empty dependency array ensures the effect runs only once on mount

  // Convert seconds to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <span className="px-1">{`${
      minutes.toString().length > 1 || minutes == 0 ? "" : "0"
    }${minutes == 0 ? "" : minutes + " m"} ${
      seconds.toString().length > 1 ? "" : "0"
    }${seconds} s`}</span>
  );
};

export default CountdownTimer;
