'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const padTime = (unit: number) => String(unit).padStart(2, '0');
    return `${padTime(hours)}h /${padTime(minutes)}m /${padTime(seconds)}s`;
  };

  return (
    <div className={'text-4xl flex flex-col space-y-3'}>
      <div>{formatTime(time)}</div>
      <div className={'flex justify-center space-x-4'}>
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
