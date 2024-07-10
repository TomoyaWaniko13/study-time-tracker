'use client';
import { Button } from '@/components/ui/button';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import React from 'react';

const AuthenticationRecordButton = () => {
  const { user, error, isLoading } = useUser();

  if (error) return <div>{error.message}</div>;

  if (isLoading) return <div>loading...</div>;

  return (
    <div className={'flex flex-row items-center space-x-5'}>
      {!user ? (
        <Button variant={'black'}>
          <a href='/api/auth/login'>Login or Signup to record study time</a>
        </Button>
      ) : (
        <>
          <Button variant={'default'}>
            <Link href={'/studyTimeForm'}>Record study time</Link>
          </Button>
          <Button variant={'default'}>
            <Link href={'/study-records'}>Check the recorded study time</Link>
          </Button>
          <Button variant={'destructive'}>
            <a href={'/api/auth/logout'}>Logout</a>
          </Button>
        </>
      )}
    </div>
  );
};

export default AuthenticationRecordButton;
