import React from 'react';
import Link from 'next/link';
import DateTimeDisplay from './DateTimeDisplay';
import UserAuthenticationButton from '@/components/authentication-record-Button';
import { Separator } from '@/components/ui/separator';
import UserAvatar from '@/components/userAvatar';

// TODO extract client component part
const Header = () => {
  return (
    <header className={'sticky top-0 backdrop-blur-lg'}>
      <nav className={'flex flex-row justify-between items-center space-x-10 p-8 text-xl'}>
        <div>
          <Link href={'/'}>
            <h1 className={'text-4xl'}>study time tracker</h1>
          </Link>
        </div>
        <div className={'flex flex-row items-center space-x-5'}>
          <DateTimeDisplay />
          <UserAuthenticationButton />
          <UserAvatar />
        </div>
      </nav>
      <Separator />
    </header>
  );
};

export default Header;
