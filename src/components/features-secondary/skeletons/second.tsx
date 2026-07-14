"use client";
import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/logo";
import { InstagramIcon, MetaIcon, SheetIcon, SheetsIcon, SlackIcon } from "@/icons";
import {
  IconCircleDashedCheck,
  IconClock,
  IconRipple,
} from "@tabler/icons-react";

export const SkeletonTwo = () => {
  return (
    <div className="flex-1 rounded-t-3xl gap-2 flex items-center justify-center w-full h-full absolute inset-x-0 p-2 rotate-y-20 rotate-x-20 -rotate-z-20 ">
      <Circle className="flex items-center justify-center border border-neutral-200 dark:border-neutral-600 shadow-sm">
        <LogoIcon className="size-10 text-neutral-400" />
        <RevolvingCard className="[--translate-position:120px] [--orbit-duration:10s]">
          <SlackIcon />
        </RevolvingCard>
        <RevolvingCard className="[--translate-position:140px] [--orbit-duration:20s]">
          <MetaIcon />
        </RevolvingCard>
        <RevolvingCard className="[--translate-position:150px] [--orbit-duration:15s]">
        <InstagramIcon/>
        </RevolvingCard>
        <RevolvingCard className="[--translate-position:185px] [--orbit-duration:25s]">
        <SheetsIcon/>
        </RevolvingCard>
      </Circle>
      <Circle className="relative size-60 bg-neutral-100/80 z-9 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-600 shadow"></Circle>
      <Circle className="size-80 bg-neutral-100/60 z-8 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-600 shadow"></Circle>
      <Circle className="size-100 bg-neutral-100/40 z-7 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-600 shadow"></Circle>
      <Circle className="size-120 bg-neutral-100/20 z-6 dark:bg-neutral-800/20 border border-neutral-200 dark:border-neutral-600 shadow"></Circle>
    </div>
  );
};

const RevolvingCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 m-auto flex rounded-sm items-center justify center size-8 bg-white dark:bg-neutral-800 border border-transparent shadow-black/10 dark:shadow-white/10 ring-1 ring-black/10 animate-orbit",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Circle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "size-40 bg-white z-10 dark:bg-neutral-800 rounded-full absolute inset-0 m-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[85%] h-fit my-auto bg-neutral-100 dark:bg-neutral-950 mx-auto w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-2xl",
        className,
      )}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-sm font-normal text-black dark:text-white">
          {title}
        </p>
        {badge}
      </div>
      <p className="text-sm text-neutral-400/80 dark:text-neutral-400/80 font-normal mt-3">
        {description}
      </p>
    </div>
  );
};

const Badge = ({
  variant,
  text,
}: {
  variant?: "danger" | "success" | "warning";
  text: string;
}) => {
  return (
    <div
      className={cn(
        "p-1 rounded-full flex items-center gap-1 w-fit",
        variant === "danger" &&
          "bg-red-300/10 dark:bg-neutral-800 border border-red-300 text-red-500",
        variant === "warning" &&
          "bg-yellow-300/10 dark:bg-neutral-800 border border-yellow-300 text-yellow-500",
        variant === "success" &&
          "bg-green-300/10 dark:bg-neutral-800 border border-green-300 text-green-500",
      )}
    >
      <IconClock className={cn("size-3")} />
      <IconRipple className="size-3" />
      <p className="text-[10px] font-bold">{text}</p>
    </div>
  );
};
