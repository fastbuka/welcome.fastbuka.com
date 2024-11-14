import Image from 'next/image'
import { Button } from './botton'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-white pt-[100px] min-h-screen flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16">
      <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-green-600">Revolutionizing</span> Food &<br />
          Grocery Delivery.
        </h1>
        <p className="text-gray-700 mb-6 max-w-xl">
          "With Fastbuka, enjoy secure and speedy payments through
          digital wallets or local banks. Earn rewards with every
          purchase while saying goodbye to payment delays."
        </p>
        <Link href="https://tally.so/r/3y0JY0">
        
        <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full text-lg">
          Join our Waitlist
        </Button>
        </Link>
      </div>
      
      <div className="md:w-1/2 md:pl-[180px] pt-[50px]">
        <div className="animate-pulse hover:animate-bounce">
          <Image
            src="/images/iphone.png"
            alt="Fastbuka Food Menu"
            width={327}
            height={420.79}
            className="rounded-3xl shadow-xl"
          />
        </div>
       
      </div>
    </div>
  )
}