import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.tsx';
import RecordStudyTime from './components/RecordStudyTime.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/record' element={<RecordStudyTime />} />
      </Routes>
    </BrowserRouter>
  );
}
