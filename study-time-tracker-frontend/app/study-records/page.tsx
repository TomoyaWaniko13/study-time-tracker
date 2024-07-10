'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';

type StudyRecord = {
  id: number;
  date: string;
  subject: string;
  studyTime: number;
};

const StudyRecordsPage = () => {
  const { user, isLoading } = useUser();
  const [studyRecords, setStudyRecords] = useState<StudyRecord[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudyRecords = async () => {
      if (user) {
        try {
          const response = await fetch(`http://localhost:8080/api/study-records/email/${user.email}`);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          const data = await response.json();
          setStudyRecords(data);
        } catch (error) {
          console.error('There was a problem with your fetch operation:', error);
          setError(error.message);
        }
      }
    };

    fetchStudyRecords();
  }, [user]);

  if (isLoading) return <div className={'font-extralight p-10'}>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={'p-4'}>
      <h1>{user?.name}'s Study Records</h1>
      <ul>
        {studyRecords.map((record) => (
          <li key={record.id}>
            {record.date} - {record.subject}: {record.studyTime} hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyRecordsPage;
