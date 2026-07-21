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
import { IconClipboardData, IconFeatherFilled, IconFileDotsFilled, IconFilter2Search, IconPointerUp } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useState } from "react";

export const SkeletonFour = () => {
  const items = [
    {
      title: "Brand & Style",
      icon: <IconClipboardData className="size-4 text-blue-500" />,
      className: "bg-blue-100 border border-blue-200 dark:bg-neutral-800 dark:border-neutral-700",
      description:
        "Link CRMs, helpdesks, ans API to give agent secure, role-based access.",
      tags: [
        { text: "Salesforce", icon: <SalesForceIcon /> },
        { text: "Hubspot", icon: <HubspotIcon /> },
        { text: "Sheets", icon: <SheetIcon /> },
      ],
    },
    {
      title: "Compliance & Policy",
      icon: <IconFileDotsFilled className="size-4 text-green-500" />,
      className: "bg-green-100 border border-blue-200 dark:bg-neutral-800 dark:border-neutral-700",
      description:
        "Ensure your AI agents follow company policies and regulatory requirements with built-in compliance controls",
      tags: [
        { text: "Salesforce", icon: <SalesForceIcon /> },
        { text: "Hubspot", icon: <HubspotIcon /> },
        { text: "Sheets", icon: <SheetIcon /> },
      ],
    },
    {
      title: "Content Safety Filters",
      icon: <IconFeatherFilled className="size-4 text-indigo-500"/>,
      className: "bg-indigo-100 border border-blue-200 dark:bg-neutral-800 dark:border-neutral-700",
      description:
        "Protect your brand from harmful content with built-in safety filters that block sensitive or inappropriate material.",
      tags: [
        { text: "Salesforce", icon: <SalesForceIcon /> },
        { text: "Hubspot", icon: <HubspotIcon /> },
        { text: "Sheets", icon: <SheetIcon /> },
      ],
    },
    {
      title: "Approval Triggers",
      icon: <IconPointerUp className="size-4 text-neutral-500" />,
      className: "bg-neutral-100 border border-blue-200 dark:bg-neutral-800 dark:border-neutral-700",
      description:
        "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
      tags: [
        { text: "Salesforce", icon: <SalesForceIcon /> },
        { text: "Hubspot", icon: <HubspotIcon /> },
        { text: "Sheets", icon: <SheetIcon /> },
      ],
    },
    {
      title: "Output Quality Checks",
      icon: <IconFilter2Search className="size-4 text-purple-500" />,
      className: "bg-purple-100 border border-blue-200 dark:bg-neutral-800 dark:border-neutral-700",
      description:
        "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
      tags: [
        { text: "Salesforce", icon: <SalesForceIcon /> },
        { text: "Hubspot", icon: <HubspotIcon /> },
        { text: "Sheets", icon: <SheetIcon /> },
      ],
    },
  ];

  const [selected, setSelected] = useState(items[0])
  return (
    <div>
    <div className="flex gap-4 items-center justify-center max-w-lg mx-auto flex-wrap mb-4">
        {items.map((item, idx) => (
          <button key={item.title} onClick={()=> setSelected(item)} className={cn("text-sm opacity-50 active:scale-98 transition duration-200 cursor-pointer flex gap-1 items-center justify-center px-2 py-1 rounded-sm",
          selected.title === item.title && "opacity-100" ,
          item.className
          )}>
           {item.icon}
           {item.title}
          </button>
        ))}
      </div>
    <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 max-w-[20rem] lg:max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2">
      
      <Card
        topIcon={selected.icon}
        title={selected.title}
        description={selected.description}
        tags={selected.tags}
        className={selected.className}
      />
    </div>
    </div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  tags,
  className,
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  tags: { text: string; icon: React.ReactNode }[];
}) => {
  return (
    <motion.div key={title} className="flex-col p-4 gap-4 shadow-black/10 bg-white dark:bg-neutral-800 border border-transparent ring-1 rounded-[16px] ring-black/10 dark:ring-white/10 flex items-start">
      <div className="flex items-center gap-2">
        <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
        }}
          className={cn(
            "size-6 shrink-0 mt-1 rounded-full flex items-center justify-center",
            className,
          )}
        >
          {topIcon}
        </motion.div>
        <motion.p
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{
          delay: 0.1,
        }}
        className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
          {title}
        </motion.p>
      </div>

      <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.2,
      }}
      >
        <p className="text-base text-neutral-600 dark:text-neutral-400">
          Tone Guidelines
        </p>
        <p className="text-sm mt-2 mb-4 text-neutral-600 dark:text-neutral-400 rounded-sm border border-dashed border-neutral-200 dark:border-neutral-700 px-2 py-1">
          {description}
        </p>
        <div className="mt-2 flex flex-row fex-wrap gap-2">
          {tags.map((tag: { text: string; icon: React.ReactNode }, idx) => (
            <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: -10
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3 + idx * 0.1,
            }}
            >
            <Tag key={tag.text} text={tag.text} icon={tag.icon} />
            </motion.div>
          ))}
        </div>
      </motion.div>
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
