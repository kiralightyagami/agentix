
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import { LandingImage } from "./landing-image";

export const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container className="px-4 md:px-8">
        <Heading tag="h1">
          Agents that do the work <br />
          Approvals that keep you safe.
        </Heading>
        <SubHeading className="py-8">
          Deploy AI agents that plan, act through your tools, and report
          outcomes without changing how your teams work.
        </SubHeading>
        <div className="flex items-center gap-6">
          <Button className="shadow-brand">Start your free trial</Button>
          <Button variant={"outline"}>
            <Link href="/">View role based demos</Link>
          </Button>
        </div>
        <LandingImage/>
      </Container>
    </section>
  );
};
