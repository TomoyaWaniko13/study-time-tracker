'use client';

import React, { useEffect, useState } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = `${now.getFullYear()}/
      ${String(now.getMonth() + 1).padStart(2, '0')}/
      ${String(now.getDate()).padStart(2, '0')}/
      ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      setCurrentDateTime(formattedDateTime);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return <div>{currentDateTime}</div>;
};

export default DateTimeDisplay;
