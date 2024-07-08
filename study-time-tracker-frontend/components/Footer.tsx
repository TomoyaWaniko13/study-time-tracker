import Link from 'next/link';
import DateTimeDisplay from '@/components/header/DateTimeDisplay';
import UserAuthenticationButton from '@/components/header/authentication-record-Button';
import React from 'react';

const Footer = () => {
  return (
    <footer className={'bg-black text-white'}>
      <nav className={'flex flex-row justify-between items-center space-x-10 p-8 text-xl'}>
        <div>
          <Link href={'/'}>
            <h1 className={'text-4xl'}>footer</h1>
          </Link>
        </div>
        <div className={'flex flex-row items-center space-x-5'}>
          <DateTimeDisplay />
          <UserAuthenticationButton />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
