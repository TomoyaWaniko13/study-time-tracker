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
    if (user) {
      fetch(`http://localhost:8080/api/study-records/email/${user.email}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => setStudyRecords(data))
        .catch((error) => {
          console.error('There was a problem with your fetch operation:', error);
          setError(error.message);
        });
    }
  }, [user]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
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
