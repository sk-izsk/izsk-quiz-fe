import React, { useEffect, useState } from 'react';
import { H6 } from 'ui-neumorphism';

export interface TimerProps {
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState<number>(seconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return <H6>Time remaining : {timeLeft}</H6>;
};

export { Timer };
