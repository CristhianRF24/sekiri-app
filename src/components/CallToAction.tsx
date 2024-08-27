import React from 'react';
import { Button } from './ui/button';

const CallToAction = ({buttonText}: {buttonText: string}) => {
  return (
    <div className="container mx-auto text-center py-8">
      <Button
        variant="purple"
        className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg lg:text-xl font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
       {buttonText}
      </Button>
    </div>
  );
};

export default CallToAction;
