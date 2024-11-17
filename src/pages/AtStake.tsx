import Image from 'next/image'
import { Button } from '../component/botton'
import Link from 'next/link'

export default function Marketing() {
  return (
    <div className="bg-white min-h-screen md:mx-[200px] flex flex-col lg:flex-row items-center justify-center px-8 py-[100px] lg:p-16">
      <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          What&apos;s at Stake if You Miss Out?
        </h1>
        <h2 className="text-2xl lg:text-2xl font-semibold mb-4">
          <span className="text-orange-500">Why Settle</span> for Slow, Costly,<br />
          and Insecure Deliveries?
        </h2>
        <p className="text-gray-700 mb-6 max-w-xl">
          Missing out on Fastbuka means settling for slow,
          costly, and insecure delivery services.
          Don&apos;t let traditional platforms leave you frustrated
          you deserve fast, affordable, and secure delivery
          with every order.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
            <span><strong className="text-green-600">Speed:</strong> Say goodbye to delays with lightning-fast delivery</span>
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
            <span><strong className="text-green-600">Affordability:</strong> Enjoy services that fit your budget.</span>
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
            <span><strong className="text-green-600">Security:</strong> Your transactions are always safe and secure.</span>
          </li>
        </ul>
         <Link href="https://tally.so/r/3y0JY0">
        <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full text-lg">
          Join Fastbuka Now
        </Button>
        </Link>
      </div>
      <div className="lg:w-1/2 relative mt-[80px] md:pl-[280px]">
        <div className="w-[300px] h-[600px]  mx-auto animate-pulse hover:animate-bounce">
          <Image
            src="/images/iphonestake.png"
            alt="Fastbuka App Interface"
            width={300}
            height={600}
            className="rounded-3xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
          />
          </div>
      </div>
    </div>
  )
}
