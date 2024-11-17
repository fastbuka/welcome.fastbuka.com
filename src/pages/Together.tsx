import React from 'react';
import Image from 'next/image';
import { Button } from '../component/button';

interface RoleCardProps {
  image: string;
  alt: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ image, alt, description, buttonText, onClick }) => (
  <div className="flex flex-col items-center max-w-sm">
    <div className="relative w-full h-72 rounded-3xl overflow-hidden mb-6">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
    <p className="text-center w-[300px] text-xm mb-6">
      {description}
    </p>
    <Button
      onClick={onClick}
      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg"
    >
      {buttonText}
    </Button>
  </div>
);

const Together = () => {
  return (
    <section id="together" className="">
      <h2 className="text-4xl font-bold text-center my-12">
        Let Us Do This Together
      </h2>
      <div className="grid justify-items-center md:flex md:justify-center gap-[200px] ">
        <RoleCard
          image="/images/together1.png"
          alt="Food Vendor"
          description="Are you a food or grocery vendor? Partner with Fastbuka to expand your customer base, streamline orders, and receive quick settlements for every order fulfilled"
          buttonText="Become a Partner"
          onClick={() => window.location.href = '/'}
        />
        
        <RoleCard
          image="/images/together2.png"
          alt="Delivery Rider"
          description="Deliver with ease and speed! With Fastbuka, riders enjoy instant payment settlements after each delivery, powered by our secure blockchain technology."
          buttonText="Become a Rider"
          onClick={() => window.location.href = '/'}
        />
        
        <RoleCard
          image="/images/together3.png"
          alt="Team Members"
          description="Ready to be part of a dynamic team that's transforming food and grocery delivery in Nigeria? At Fastbuka, we're building the future with cutting-edge technology and innovative solutions."
          buttonText="Explore Careers"
          onClick={() => window.location.href = '/'}
        />
      </div>
    </section>
  );
};

export default Together;
