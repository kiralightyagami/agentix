"use client";
import React from "react";
import { Container } from "../container";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";

export const FeaturesSecondary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-x divide-neutral-200 dark:divide-neutral-800">
          <div className="p-8">
            <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              Agent Studio
            </h2>
            <CardDescription>
              Design, launch and customize AI agents for marketing, sales,
              support and ops, built around your workflows.
            </CardDescription>
            <CardSkeleton>
              <SkeletonOne/>
            </CardSkeleton>
          </div>
          <div className="p-8">
            <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              Multi-Agent Orchestration
            </h2>
            <CardDescription>
              Coordinate multiple agents across workflows using memory,
              interrupts, and conditional logic.
            </CardDescription>
            <CardSkeleton>
              <SkeletonTwo/>
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};


export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-neutral-600 max-w-md mt-2 text-balance">{children}</p>;
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-70 md:min-h-80 overflow-hidden perspective-distant mt-10",
        className,
      )}
    >
      {children}
    </div>
  );
};
