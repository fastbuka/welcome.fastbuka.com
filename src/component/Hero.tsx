import Image from 'next/image'
import { Button } from './botton'
import Link from 'next/link'
import TallyFormModal from './TallyFormModal'

export default function Hero() {
  return (
    <div className="bg-white pt-[100px] min-h-screen flex flex-col md:flex-row items-center justify-center p-8 lg:p-16">
      <div className="lg:w-1/2 md:pr-10 mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-green-600">Disrupting</span> Food &<br />
          Grocery Delivery in Africa.
        </h1>
        <p className="text-gray-700 mb-6 max-w-xl">
          "With Fastbuka, enjoy secure and speedy payments through
          digital wallets or local banks. Earn rewards with every
          purchase while saying goodbye to payment delays."
        </p>
       
       <TallyFormModal />
       
      </div>
      
      <div className=" lg:pl-[220px] pt-[50px]">
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