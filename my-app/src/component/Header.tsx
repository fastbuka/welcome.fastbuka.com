import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import TallyFormModal from "./TallyFormModal"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-32">
              <Image
                src="/images/logo.png"
                alt="FastBuka Logo"
                width={120} height={80}
                className="w-full h-auto"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link href="/" className="text-gray-700 hover:text-green-600">Choose Us</Link>
            <Link href="/" className="text-gray-700 hover:text-green-600">What's At Stake</Link>
            <Link href="/" className="text-gray-700 hover:text-green-600">Do this together</Link>
           
          </div>

        <div className='hidden lg:flex items-center'>
          {/* <Link href="/get-started" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
              Get Started
            </Link> */}
            <TallyFormModal />
            </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-6">
              <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link> 
              <Link href="/" className="text-gray-700 hover:text-green-600">Choose Us</Link>
              {/* <Link href="/" className="text-gray-700 hover:text-green-600">What's At Stake</Link>
              <Link href="/" className="text-gray-700 hover:text-green-600">Do this together</Link> */}
              {/* <Link href="/" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 text-center">
                Get Started
              </Link> */}
              <TallyFormModal />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;