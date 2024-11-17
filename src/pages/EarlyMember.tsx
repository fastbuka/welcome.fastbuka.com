import { Button } from "../component/button"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../component/card"
import { ClipboardList, FileText, Trophy } from 'lucide-react'

export default function EarlyMember() {
  return (
    <section id="chooseUs" className="bg-green-600 text-white min-h-screen flex flex-col items-center justify-center px-8 py-[100px]">
      <div className="max-w-4xl  text-center">
        <h1 className="text-3xl font-bold mb-4">
          Be an Early Member of FastBuka<br />and Unlock Exclusive Rewards
        </h1>
        <p className="mb-8 text-lg">
          Join us on an exciting journey to revolutionize the way food and grocery delivery works.
          Take the opportunity to be part of something innovative and impactful while securing exclusive rewards
          along the way. Follow these simple steps to get started and enjoy perks as we prepare to launch!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9  mb-8">
          <StepCard
            step={1}
            title="Join the Waiting List"
            description="Sign up today as a customer, rider, or vendor and reserve your spot in the FastBuka community. Stay ahead of the curve and be among the first to experience our platform when we officially launch in your area!"
            icon={<img src="/images/writing.png" alt="Writing" className="h-8 w-8" />}
            titleColor="text-dark"
            bgColor="bg-white"
          />
          <StepCard
            step={2}
            title="Participate in Testing and Tasks"
            description="Contribute to shaping the future of FastBuka by testing our platform and completing easy tasks. Your valuable insights will play a crucial role in helping us refine and improve our services for everyone!"
            icon={<img src="/images/satisfaction.png" alt="Writing" className="h-8 w-8" />}
            titleColor="text-[#ed1d24]"
            bgColor="bg-[#fff5f5]"
          />
          <StepCard
            step={3}
            title="Earn Exclusive Rewards"
            description="Earn points that can be redeemed for exclusive discounts, credits, and special perks during our official launch. Be among the first to enjoy the full FastBuka experience and unlock exciting rewards!"
            icon={<img src="/images/trophy.png" alt="Writing" className="h-8 w-8" />}
            titleColor="text-green-600"
            bgColor="bg-[#f7fffc]"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Us Today and Start Earning Rewards!</h2>
          <Button className="bg-white text-green-600 hover:bg-green-100 font-semibold py-3 px-8 rounded-full text-lg">
            Sign up Now
          </Button>
        </div>
      </div>
    </section>
  )
}

interface StepCardProps {
    step: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    titleColor?: string;
    bgColor?: string;
}

function StepCard({ step, title, description, icon, titleColor = "text-green-dark", bgColor = "bg-white" }: StepCardProps) {
  return (
    <Card className={`${bgColor} text-start`}>
      <CardHeader>
        <CardTitle className="grid gap-2">
            
          <span className="text-2xl font-bold">Step {step}</span>
          {icon}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl items-start  font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 items-start ">{description}</p>
      </CardContent>
    </Card>
  )
}
