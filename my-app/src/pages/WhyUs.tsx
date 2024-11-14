import React from 'react';
import { Card, CardContent } from '@/component/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle }) => (
  <Card className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
    <CardContent className="space-y-4">
      <div className="flex justify-center">
        <div className="w-16 h-16">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </CardContent>
  </Card>
);

const WhyChooseFastBuka = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className=" px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose FastBuka?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<img src="/images/shopping-cart.png" alt="Shopping Cart" className="w-full h-full" />}
            title="Cutting-Edge Convenience:"
            subtitle="Place orders in seconds"
          />
          <FeatureCard
            icon={<img src="/images/shield.png" alt="Digital Payments" className="w-full h-full" />}
            title="Seamless Digital Payments:"
            subtitle="Pay securely via USDC, XLM, or local banks."
          />
          <FeatureCard
            icon={<img src="/images/giftbox.png" alt="Rewards" className="w-full h-full" />}
            title="Earn Rewards:"
            subtitle="Gain points with every order and referral."
          />
          <FeatureCard
            icon={<img src="/images/security.png" alt="Security" className="w-full h-full" />}
            title="Enhanced Security:"
            subtitle="Blockchain-backed systems for ultimate safety."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFastBuka;