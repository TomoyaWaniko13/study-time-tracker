'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
          console.log(data);
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

  console.log(studyRecords);

  const subjects = studyRecords.map((studyRecord) => studyRecord.subject);
  const dates = studyRecords.map((studyRecord) => studyRecord.date);
  const studyTimes = studyRecords.map((studyRecord) => studyRecord.studyTime);

  const totalStudyTime = studyTimes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-CA', options);
  };

  return (
    <Table>
      <TableCaption>A list of your study time.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          {subjects.map((subject, index) => (
            <TableHead key={index}>{subject}</TableHead>
          ))}
          <TableHead>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dates.map((date) => (
          <TableRow>
            <TableCell>{formatDate(date)}</TableCell>
            {studyTimes.map((studyTime, index) => (
              <TableCell key={index}>{studyTime}</TableCell>
            ))}
            <TableCell>{totalStudyTime}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudyRecordsPage;
