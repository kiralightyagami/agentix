import { cn } from "@/lib/utils";
import {
  IconCircleDashedCheck,
  IconClock,
  IconExclamationCircle,
  IconPrison,
  IconRipple,
} from "@tabler/icons-react";
import React from "react";

export const SkeletonOne = () => {
  return (
    <div className="">
      <SkeletonCard 
      className="absolute bottom-0 left-12 z-30 max-w-[90%]"
      icon={<IconCircleDashedCheck className="size-4"/>}
      title={"Campaign Planner"} 
      description={"Creates clear, ready-to-use campaign briefs using product info, audience data, and past results"}
      badge={<Badge text="120$" variant="danger" />}
      />
      <SkeletonCard 
      className="absolute bottom-10 left-8 z-20"
      icon={<IconExclamationCircle className="size-4"/>}
      title={"Issue Tracker"} 
      description={"Creates clear, ready-to-use campaign briefs using product info, audience data, and past results"}
      badge={<Badge text="10$" variant="success" />}
      />
      <SkeletonCard 
      className="absolute bottom-20 left-4 max-w-[80%] z-10"
      icon={<IconPrison className="size-4"/>}
      title={"Risk Analysis"} 
      description={"Creates clear, ready-to-use campaign briefs using product info, audience data, and past results"}
      badge={<Badge text="40$" variant="warning" />}
      />
    </div>
  );
};

const SkeletonCard = ({icon, title, description, badge, className}: {
    icon: React.ReactNode ;
    title: string;
    description: string; 
    badge: React.ReactNode;
    className?: string;
}) => {
  return (
    <div className={cn("max-w-[85%] h-fit my-auto bg-neutral-100 dark:bg-neutral-950 mx-auto w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-700", className)}>
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-sm font-bold text-black dark:text-white">
          {title}
        </p>
        {badge}
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-3">
       {description}
        Creates clear, ready-to-use campaign briefs using product info, audience
        data, and past results.
      </p>
      <div className="flex items-center gap-2 flex-wrap mt-2">
        <Tag>
            Google Ads
        </Tag>
        <Tag>
            Saas
        </Tag>
        <Tag>
            Agent
        </Tag>
      </div>
    </div>
  );
};


export const Tag = ({className, children}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("px-2 text-xs py-1 rounded-sm bg-neutral-200 dark:bg-neutral-700", className)}>
        {children}
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
