'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Stopwatch = ({ onTimeChange }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // increase the 'time' state by 1 every second and save it to the localStorage.
  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 1;
        // localStorageにtimeの値を保存することで、ページのリロードの後も
        // リロードする前のtimeの値を使うことができる。
        localStorage.setItem('stopwatch-time', newTime.toString());
        onTimeChange(newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, onTimeChange]);

  // localStorageからtimeの値を取得
  useEffect(() => {
    const storedTime = localStorage.getItem('stopwatch-time');
    if (storedTime) {
      setTime(parseFloat(storedTime));
    }
  }, []);

  // show warning before a reload happens.
  useEffect(() => {
    // コンポーネントが初めてレンダリングされると、useEffect が実行され、
    // handleBeforeUnload イベントリスナーが beforeunload イベントに追加されます。

    // これにより、ユーザーがページをリロードしたり閉じたりする操作をしようとすると、
    // handleBeforeUnload 関数が呼び出されます。
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // コンポーネントがDOMから削除される際に、useEffect のクリーンアップ関数が実行されます。
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
      // localStorageから値を削除
      localStorage.removeItem('stopwatch-time');
      onTimeChange(0);
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
      {/* TODO fix the position of the time when the time changes. */}
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
