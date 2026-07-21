"use client";
import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LogoIcon } from "@/components/logo";

export const SkeletonTwo = () => {
  return (
    <div className="absolute flex-1 rounded-t-3xl gap-4 space-y-4 w-full h-full px-8 flex-col items-center justify-center">
      <div className="grid grid-cols-4 gap-2 justify-center max-w-md mx-auto">
        <Box />
        <Box src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Box src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Box />
      </div>
      <div className="grid grid-cols-5 gap-2">
        <Box />
        <Box src="https://images.unsplash.com/photo-1783916812204-1e975731de9d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Box containerClassName="from-black/50 via-transparent to-black/50 dark:from-white/50 dark:via-transparent dark:to-white/50">
          <div className="h-full w-full bg-white dark:bg-neutral-900 z-50 rounded-[12px] flex justify-center items-center">
            <LogoIcon className="size-12" />
          </div>
        </Box>
        <Box src="https://images.unsplash.com/photo-1560087637-bf797bc7796a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Box />
      </div>
      <div className="grid grid-cols-4 gap-2 justify-center max-w-md mx-auto">
        <Box />
        <Box src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Box src="https://images.unsplash.com/photo-1548637724-cbc39e0c8d3b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Box />
      </div>
    </div>
  );
};

const Box = ({
  children,
  className,
  containerClassName,
  src,
}: {
  children?: React.ReactNode;
  className?: string;
  src?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "p-px relative w-full justify-self-center aspect-square rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-neutral-100)]/10",
        className,
      )}
    >
      <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: Math.random() * 0.8 + 0.2,
        delay: Math.random() * 0.8 + 0.2,
      }}
        className={cn(
          "p-px flex items-center justify-center w-full h-full rounded-[12px]",
          src && "bg-linear-to-br from-blue-500 via-transparent to-blue-500",
          containerClassName,
        )}
      >
        {children ?? (
          <>
            {src && (
                <Image
                  src={src}
                  alt="item"
                  height={120}
                  width={120}
                  className="relative z-20 object-cover aspect-square rounded-[12px]"
                />
            )}
          </>
        )}
      </motion.div>
      <Pattern />
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[5px_5px] bg-fixed rounded-xl"></div>
  );
};
