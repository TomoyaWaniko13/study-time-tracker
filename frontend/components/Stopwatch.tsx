'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Stopwatch = () => {
  const [time, setTime] = useState(0.0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    const confirmReset = window.confirm('Are you sure you want to reset the stopwatch?');
    if (confirmReset) {
      setIsRunning(false);
      setTime(0);
    }
  };

  return (
    <div className={'text-4xl flex flex-col space-y-3'}>
      <div>
        <div>{time}s</div>
      </div>
      <div className={'flex justify-center space-x-4 '}>
        <Button onClick={startStopwatch} variant={'default'} disabled={isRunning}>
          Start/Restart
        </Button>

        <Button onClick={stopStopwatch} variant={'yellow'} disabled={!isRunning}>
          Stop
        </Button>
        <Button onClick={resetStopwatch} variant={'destructive'}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Stopwatch;
