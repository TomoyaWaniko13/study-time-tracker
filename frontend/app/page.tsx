'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

interface StudyLog {
  id: number;
  studyTime: string;
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
