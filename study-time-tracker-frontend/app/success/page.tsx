import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const SuccessPage = () => {
  return (
    <div className={'h-screen flex flex-col space-y-4 justify-center items-center'}>
      <h3 className={'text-4xl font-bold'}>Successfully submitted!</h3>
      <Button variant={'default'} size={'xl'}>
        <Link href={'/studyTimeForm'}>record study time again</Link>
      </Button>
    </div>
  );
};

export default SuccessPage;
