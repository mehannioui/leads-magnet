import React from 'react';
import LandingPageNavbar from './components/LandingPageNavbar';

function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col overflow-x-clip'>
      <LandingPageNavbar />
      <div className='flex-grow'>{children}</div>
    </div>
  );
}

export default LandingLayout;
