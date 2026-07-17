"use client";
import {
  EmailIcon,
  FileIcon,
  HubspotIcon,
  HumanIcon,
  RecentIcon,
  SalesForceIcon,
  SettingIcon,
  SheetIcon,
} from "@/icons";
import { cn } from "@/lib/utils";
import { IconClock } from "@tabler/icons-react";
import { motion } from "motion/react";

export const SkeletonOne = () => {
  return (
    <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 mx-auto w-full h-full absolute inset-x-10 inset-y-2 pt-2 px-2">
      <Card/>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex-col gap-4 shadow-black/10 bg-white dark:bg-neutral-800 border border-transparent ring-1 rounded-tl-[16px] ring-black/10 dark:ring-white/10 flex items-start flex-1">
      <div className="flex items-center gap-2 border-b w-full py-2 px-4">
        <RecentIcon />
        <p className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
          Recent Activity
        </p>
      </div>

      <CardContent
       Icon={
        <div className="size-4 rounded-sm bg-blue-500 text-white flex items-center justify-center">
          <EmailIcon />
        </div>
      }
      badgeText=" 15s"
      badgeIcon={<IconClock className="size-3" />}
      title={"Personalized Email"}
      description={"Personalized Email sent to ••••• @gmail.com"}
      />
      <CardContent
       Icon={
        <div className="size-4 rounded-sm bg-blue-500 text-white flex items-center justify-center">
          <EmailIcon />
        </div>
      }
      badgeText="FAILED"
      badgeClassName="text-red-500 dark:text-red-500"
      title={"Peer Review"}
      description={"Reviewed and approved 2 outputs from you"}
      />
    </div>
  );
};

const CardContent = ({
  Icon,
  title,
  description,
  badgeIcon,
  badgeText,
  badgeClassName,
}: {
  Icon: React.ReactNode;
  title: string;
  description?: string;
  badgeIcon?: React.ReactNode;
  badgeText: string;
  badgeClassName?: string;
}) => {
  return (
    <div className="flex justify-between items-center w-full pl-4 relative overflow-hidden">
        <div className="items-center flex gap-2">
          {Icon}
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {title}
          </p>
          <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-neutral-200 dark:border-neutral-500">
            {badgeIcon}
            <p className={cn("text-[10px] font-bold text-neutral-600 dark:text-neutral-400", badgeClassName)}>
             {badgeText}
            </p>
          </div>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      </div>
  )
}

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-1 rounded-sm w-fit px-1 py-0.5 border border-neutral-100 text-sm dark:border-neutral-700">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
