'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

interface CallToActionProps {
  buttonText: string;
  url?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ buttonText, url = '/' }) => {
  return (
    <div className="container mx-auto text-center py-8">
      <Link href={url} passHref>
        <Button
          variant="purple"
          className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105 h-auto whitespace-normal"
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default CallToAction;
