import React from "react";
import { Container } from "../container";
import { Heading } from "../heading";
import { SubHeading } from "../subheading";
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from "./card";
import { IconPlus } from "@tabler/icons-react";
import { SkeletonOne } from "./skeletons/first";

export const Features = () => {
  return (
    <Container className="py-10 md:pt-20 lg:pt-32">
      <div className="flex items-baseline-last justify-between">
        <Heading>
          Built for Fast Moving <br />
          Teams That Need Control.
        </Heading>
        <SubHeading>
          Agents work inside your existing tools, with built-in approvals, brand
          and policy guardrails, and full traceability. Every action is
          auditable, every outcome accountable.
        </SubHeading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 md:my-20">
        <Card className="rounded-tl-3xl rounded-bl-3xl">
          <CardSkeleton className="relative overflow-hidden">
            <SkeletonOne/>
          </CardSkeleton>
          <CardContent>
            <CardTitle>Prebuilt Agents, Tuned to Your Workflows</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card>
          <CardSkeleton></CardSkeleton>
          <CardContent>
            <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card className="rounded-tr-3xl rounded-br-3xl">
          <CardSkeleton></CardSkeleton>
          <CardContent>
            <CardTitle>Approvals, Guardrails, and Full Auditability</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};
