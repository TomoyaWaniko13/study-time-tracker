import React from 'react';
import Link from 'next/link';
import DateTimeDisplay from './DateTimeDisplay';
import { Button } from '@/components/ui/button';
import { useUser } from '@auth0/nextjs-auth0/client';
import UserAuthenticationButton from '@/components/header/authentication-record-Button';

// TODO extract client component part
const Header = () => {
  return (
    <header className={'sticky top-0 bg-black text-white'}>
      <nav className={'flex flex-row justify-between items-center space-x-10 p-8 text-xl'}>
        <div>
          <Link href={'/'}>
            <h1 className={'text-4xl'}>study time tracker</h1>
          </Link>
        </div>
        <div className={'flex flex-row items-center space-x-5'}>
          <DateTimeDisplay />

          <UserAuthenticationButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
