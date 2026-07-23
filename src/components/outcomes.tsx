import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { LandingImage } from "./landing-image";

export const Outcomes = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 lg:pt-32">
    <Container>
      <Heading tag="h1">
        Governed AI, <br />
        Trusted Outcomes
      </Heading>
      <SubHeading className="py-8">
        Deploy AI agents with built-in approvals, brand guardrails, and audit
        trails. Every step is visible, reviewable, and compliant.
      </SubHeading>
      <LandingImage
        firstImageSrc="/outcome.webp"
        SecondImageSrc="/outcome.webp"
      />
    </Container>
    </section>
  );
};
