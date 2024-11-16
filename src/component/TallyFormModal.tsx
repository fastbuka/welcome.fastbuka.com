

import { useState } from 'react';
import { Button } from '@/component/button';

const TallyFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full text-lg"
      >
        Join our Waitlist
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white w-full h-[90vh] md:w-[80%] relative rounded-lg overflow-hidden">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 hover:bg-gray-100"
            >
              ✕
            </button>
            <iframe 
              src="https://tally.so/embed/3y0JY0?hideTitle=1&transparentBackground=1"
              width="100%" 
              height="100%" 
              style={{ 
                border: 'none',
                margin: 0,
                padding: 0
              }}
              title="Join the Waiting List"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TallyFormModal;