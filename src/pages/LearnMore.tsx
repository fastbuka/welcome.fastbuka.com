import React from 'react';
import { Button } from '../component/button';

const LearnMore = () => {
  return (
    <section className="bg-emerald-400 py-16">
      <div className="px-[50px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Want to learn more?
            </h2>
            <Button 
              className="bg-emerald-700 text-white hover:bg-emerald-800 rounded-full px-8 py-3"
              onClick={() => window.location.href = '/'}
            >
              Learn more
            </Button>
          </div>
          
          <div className="max-w-xl">
            <p className="text-xl text-gray-800">
              To find out more about our products, offers and services
              or if you have any question, please get in touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
