"use client";

import {
  FileIcon,
  HubspotIcon,
  HumanIcon,
  SalesForceIcon,
  SettingIcon,
  SheetIcon,
} from "@/icons";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const SkeletonOne = () => {
  type Item = {
    topIconColor: string;
    title: string;
    topIcon: React.ReactNode;
    description: string;
    tags: {
      text: string;
      icon: React.ReactNode;
    }[];
  };

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const items = [
    {
      topIconColor: "bg-blue-500",
      topIcon: <FileIcon />,
      title: "Connect Data",
      description:
        "Link CRMs, helpdesks, ans API to give agent secure, role-based access.",
      tags: [
        { text: "Salesforce", icon: <SalesForceIcon /> },
        { text: "Hubspot", icon: <HubspotIcon /> },
        { text: "Sheets", icon: <SheetIcon /> },
      ],
    },
    {
      topIconColor: "bg-green-500",
      topIcon: <SettingIcon />,
      title: "Define Processing Logic",
      description:
        "Create workflows, decision points, and conditional actions for each task.",
      tags: [
        { text: "Salesforce", icon: <SalesForceIcon /> },
        { text: "Hubspot", icon: <HubspotIcon /> },
        { text: "Sheets", icon: <SheetIcon /> },
      ],
    },
    {
      topIconColor: "bg-red-500",
      topIcon: <HumanIcon />,
      title: "Human-in-the-Loop",
      description:
        "Add reviews, approvals and escalations without slowing work.",
      tags: [
        { text: "Salesforce", icon: <SalesForceIcon /> },
        { text: "Hubspot", icon: <HubspotIcon /> },
        { text: "Sheets", icon: <SheetIcon /> },
      ],
    },
  ];

  const [activeCards, setActiveCards] = useState<Item[] | null>(null);

  let interval: NodeJS.Timeout;

  useEffect(() => {
    animate();
    return () => clearInterval(interval);
  }, [items]);

  const animate = () => {
    if (isInView) {
      interval = setInterval(() => {
        setActiveCards((prev) => {
          if (!prev) {
            return [items[0]];
          }
          if (prev.length >= items.length) {
            clearInterval(interval);
            return prev;
          }

          return [items[prev.length], ...prev];
        });
      }, 1000);
    }
  };

  return (
    <motion.div
      ref={ref}
      layout
      className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2"
    >
      {activeCards?.map((item, index) => (
        <Card key={item?.title} {...item} />
      ))}
    </motion.div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  tags,
  topIconColor,
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  tags: { text: string; icon: React.ReactNode }[];
  topIconColor: string;
}) => {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: -10,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="p-4 gap-4 shadow-black/10 bg-white dark:bg-neutral-800 border border-transparent ring-1 rounded-[16px] ring-black/10 dark:ring-white/10 flex items-start"
    >
      <div
        className={cn(
          "size-6 shrink-0 mt-1 rounded-full flex items-center justify-center",
          topIconColor,
        )}
      >
        {topIcon}
      </div>
      <div>
        <p className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
          {title}
        </p>
        <p className="text-base text-balance text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="mt-2 flex flex-row fex-wrap gap-2">
          {tags.map((tag: { text: string; icon: React.ReactNode }) => (
            <Tag key={tag.text} text={tag.text} icon={tag.icon} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-1 rounded-sm w-fit px-1 py-0.5 border border-neutral-100 text-sm dark:border-neutral-700">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
