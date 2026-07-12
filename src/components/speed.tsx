import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { LandingImage } from "./landing-image";

export const Speed = () => {
  return (
    <Container className="relative py-10 md:py-20 lg:py-10">
      <Heading tag="h1">
        Built for Speed <br />
        Designed for Scale.
      </Heading>
      <SubHeading className="py-8">
          Deploy AI agents that plan, act through your tools, and report
          outcomes without changing how your teams work.
        </SubHeading>
        <LandingImage firstImageSrc="/speed.webp" SecondImageSrc="/speed.webp" showGradient={false}/>
    </Container>
  );
};
