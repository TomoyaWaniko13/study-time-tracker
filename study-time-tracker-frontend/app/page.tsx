'use client';
import Stopwatch from '@/components/Stopwatch';

const HomePage = () => {
  return (
    <main className={'flex flex-col justify-center items-center space-y-10 text-center h-screen'}>
      <Stopwatch />
      <span>homepage</span>
    </main>
  );
};

export default HomePage;
