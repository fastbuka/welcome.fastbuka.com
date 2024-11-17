import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../component/accordion"
  
  export default function FastbukaFAQ() {
    return (
      <div className="container mx-auto px-[20px] sm:px-[200px] py-[100px]">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions ?</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Q: What is Fastbuka?</AccordionTrigger>
            <AccordionContent>
              Fastbuka is an innovative food and grocery delivery platform that
              uses blockchain technology for secure, instant transactions.
              It&apos;s designed to make ordering food and groceries faster, safer,
              and more rewarding.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Q: How does Fastbuka ensure secure transactions?</AccordionTrigger>
            <AccordionContent>
              Fastbuka integrates the Stellar blockchain, allowing users to make
              payments with USDC, or local bank transfers through
              Linkio.world, a regulated payment provider. Our blockchain-backed
              technology ensures every transaction is safe and swift.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Q: Can I earn rewards on Fastbuka?</AccordionTrigger>
            <AccordionContent>
              Yes! Fastbuka offers a rewards program where you earn points on
              every purchase and referral. You can redeem these points for discounts
              on future orders.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Q: How can I join Fastbuka as a customer, rider, or vendor?</AccordionTrigger>
            <AccordionContent>
              Simply join our waiting list! This gives you early access as a customer,
              rider, or partner, and you&apos;ll be notified as soon as we&apos;re available in your area.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }
