"use client";
import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";


export const SkeletonTwo = () => {
  return (
    <div className="flex-1 rounded-t-3xl gap-2 w-full h-full px-8">
     <div className="grid grid-cols-5 gap-1">
        <Box/>
     </div>
    </div>
  );
};

const Box = ({
  children, 
  className,
  src = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
}:{
  children?: React.ReactNode;
  className?: string;
  src?: string;
}) => {
  return (
    <div className={cn(
      "p-px relative w-full aspect-square rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800",
      "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-neutral-100)]/10",
      className
      )}>
        <div className="p-px flex items-center justify-center w-full h-full bg-linear-to-br from-blue-500 via-transparent to-blue-500 rounded-[12px]">
          <Image
          src={src}
          alt="item"
          height={120}
          width={120}
 
          className="relative z-20 object-cover aspect-square rounded-[12px]"
          />
        </div>
        <Pattern/>
      {children}
    </div>
  )
}

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[5px_5px] bg-fixed rounded-xl"></div>
  );
};
