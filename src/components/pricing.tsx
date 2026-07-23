import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { GuardrailsIcon, LoopIcon, UserIcon } from "@/illustrations/general";
import { Button } from "./ui/button";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import Link from "next/link";

export const Pricing = () => {
  return (
    <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4">
          <SubHeading className="mt-2">
            Trusted by 500+ enterprise companies
          </SubHeading>
          <Heading>
            Affordable pricing.
            <br />
            Easy scaling.
          </Heading>
          <SubHeading className="mt-4">
            Start small to explore automation, add agents as you scale, and
            unlock enterprise-grade guardrails, orchestration, and reporting
            when you&apos;re ready
          </SubHeading>
          <ul className="list-none *:flex *:items-center *:gap-2 *:font-medium mt-4 flex flex-col gap-2">
            <li>
              <GuardrailsIcon />
              Built-in Guardrails
            </li>
            <li>
              <UserIcon />
              Agent Orchestration
            </li>
            <li>
              <LoopIcon />
              Human-in-the-Loop
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <PricingCard
          price="10"
          description="Perfect for individuals or small teams exploring automation."
          ctaLink="/"
          ctaText="Start your free trial"
          steps={["1 AI Agent Included", "Standard Integrations", "Basic Approval Flows", "7 Day Activity Log"]}
        />
         <PricingCard
          price="60"
          description="Ideal for growing teams ready to scale automation safely."
          ctaLink="/"
          ctaText="Contact Sales"
          steps={["Upto 5 AI Agents", "Multi Agent Orchestration", "Advanced Approval Flows", "30 Day activity logs", "ROI Insights"]}
        />
        </div>
      </Container>
    </section>
  );
};

const PricingCard = ({
  price,
  description,
  ctaLink,
  ctaText,
  steps,
}: {
  price: string;
  description: string;
  ctaLink: string;
  ctaText: string;
  steps: string[];
}) => {
  return (
    <div>
      <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800">
        <div>
          <Heading>
            ${price}
            <span className="text-neutral-500 text-sm md:text-xl lg:text-3xl">
              /mon
            </span>
          </Heading>
          <SubHeading className="mt-4">{description}</SubHeading>
          <Button className="mt-4">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
        <ul className="list-none *:flex *:items-center *:gap-2 *:font-medium mt-4 flex flex-col gap-2">
            {steps.map((step, index) => (
              <Step key={step + index } text={step} />
            ))}
        </ul>
      </div>
    </div>
  );
};

const Step = ({ text }: { text: string }) => {
  return (
    <li>
      <IconCircleCheckFilled className="size-5 text-neutral-500" />
      <p className="text-sm md:text-base">{text}</p>
    </li>
  );
};
