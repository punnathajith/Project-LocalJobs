import React, { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import howitworks from "@/assets/howitworks.webp"; 
const HowItWork: React.FC = React.memo(() => {
  const steps = useMemo(
    () => [
      {
        value: "item-1",
        title: "Sign Up",
        content:
          "Create your free account in just a few clicks. Provide your name, email, and password, then verify your email to get started.",
      },
      {
        value: "item-2",
        title: "Customise Your Profile",
        content:
          "Add your details, upload a profile picture, and set preferences so we can tailor services to your needs.",
      },
      {
        value: "item-3",
        title: "Start Using Our Service",
        content:
          "Explore our tools and features right away. Navigate the dashboard and make the most of what we offer.",
      },
      {
        value: "item-4",
        title: "Get Help",
        content:
          "Need assistance? Our support team is here. Use our help center, FAQs, or live chat to get answers quickly.",
      },
    ],
    []
  );

  return (
    <div className="bg-white py-12 rounded-xl mb-3">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        <div>
          <h4 className="text-md font-medium text-blue-500 mb-2">
            How it works
          </h4>
          <h2 className="text-4xl font-Montserrat font-black text-gray-800 mb-6">
            How Local Jobs Works
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {steps.map((step) => (
              <AccordionItem key={step.value} value={step.value}>
                <AccordionTrigger className="font-bold">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-gray-600 font-inter">
                  {step.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex justify-center">
          <img
            src={howitworks}
            alt="How it works illustration"
            className="max-w-full h-auto rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
});

HowItWork.displayName = "HowItWork"; 
export default HowItWork;
