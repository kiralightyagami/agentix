"use client";
import React from "react";
import { Container } from "../container";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { IntegrationIcon, PeopleIcon, WorkflowIcon } from "@/icons";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/forth";

export const FeaturesTertiary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800">
          <div className="pt-8 pl-8 border-b md:border-r border-neutral-200 dark:border-neutral-800">
            <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              Audit Trail
            </h2>
            <CardDescription>
              Tracks every agent action with full input-output visibility and
              timestamps.
            </CardDescription>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="pt-8 px-8 border-b border-neutral-200 dark:border-neutral-800">
            <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              Role-Based Access
            </h2>
            <CardDescription>
              Controls who can launch, review, or manage agents based on roles.
            </CardDescription>
            <CardSkeleton className=" mask-radial-from-20%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
          <div className="pt-8 pl-8 md:border-r border-neutral-200 dark:border-neutral-800">
            <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              Approval Queue
            </h2>
            <CardDescription>
            Sends agent-generated content to human reviewers before it&apos;s published.
            </CardDescription>
            <CardSkeleton className="mask-radial-from-20% mask-r-from-50%">
              <SkeletonThree />
            </CardSkeleton>
          </div>
          <div className="pt-8 pl-8">
            <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
            Guardrail Engine
            </h2>
            <CardDescription>
            Applies brand, tone, and policy checks before output goes live.
            </CardDescription>
            <CardSkeleton className="">
              <SkeletonFour />
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
  return (
    <p className="text-neutral-600 max-w-md mt-2 text-balance">{children}</p>
  );
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
