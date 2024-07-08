import Stopwatch from '@/components/Stopwatch';
import AuthenticationRecordButton from '@/components/authentication-record-Button';

const HomePage = () => {
  return (
    <main className={'flex flex-col justify-center items-center space-y-10 text-center h-screen bg-gray-100 p-5'}>
      <section className='flex flex-col items-center space-y-5'>
        <h1 className='text-4xl font-bold text-gray-800'>Boost Your Productivity with Our Study Time Tracker</h1>
        <p className='text-xl text-gray-600'>Effortlessly Track and Analyze Your Study Sessions</p>
      </section>
      <section className='flex flex-col items-center space-y-5'>
        <h2 className='text-2xl font-semibold text-gray-700'>Why Use Our App?</h2>
        <ul className='list-disc list-inside text-gray-600 flex flex-col items-start'>
          <li>Improve Your Time Management Skills</li>
          <li>Identify Your Most Productive Hours</li>
          <li>Stay Motivated with Visual Progress Reports</li>
          <li>Optimize Your Study Sessions for Better Results</li>
        </ul>
      </section>
      <AuthenticationRecordButton />
    </main>
  );
};

export default HomePage;
