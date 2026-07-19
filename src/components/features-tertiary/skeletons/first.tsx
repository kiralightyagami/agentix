"use client";
import {
  AdminIcon,
  AuditIcon,
  DraftingIcon,
  EmailIcon,
  PriceIcon,
  RecentIcon,
  ReportIcon,
  ReviewIcon,
} from "@/icons";
import { cn } from "@/lib/utils";
import { IconClock } from "@tabler/icons-react";
import { motion } from "motion/react";

const cardContents = [
  {
    icon: <EmailIcon />,
    iconBg: "bg-blue-500",
    badgeText: " 15s",
    badgeIcon: <IconClock className="size-3" />,
    title: "Personalized Email",
    description: "Personalized Email sent to ••••• @gmail.com",
  },
  {
    icon: <ReviewIcon />,
    iconBg: "bg-red-500",
    badgeText: "FAILED",
    badgeClassName: "text-red-500 dark:text-red-500",
    title: "Peer Review",
    description: "Reviewed and approved 2 outputs from Content Drafting Agent",
  },
  {
    icon: <DraftingIcon />,
    iconBg: "bg-orange-500",
    badgeText: "PROCESSING",
    badgeClassName: "text-orange-500 dark:text-orange-500",
    title: "Content Drafting",
    description: "Generated draft campaign brief",
  },
  {
    icon: <AdminIcon />,
    iconBg: "bg-black",
    badgeText: "PROCESSING",
    badgeClassName: "text-orange-500 dark:text-orange-500",
    title: "Admin Approval",
    description: "Final approval of marketing copy before publishing",
  },
  {
    icon: <ReportIcon />,
    iconBg: "bg-indigo-500",
    badgeText: "2m",
    badgeIcon: <IconClock className="size-3" />,
    title: "Weekly Campaign Report",
    description: "Generated campaign performance report",
  },
  {
    icon: <AuditIcon />,
    iconBg: "bg-red-500",
    badgeText: "FAILED",
    badgeClassName: "text-red-500 dark:text-red-500",
    title: "SEO Audit",
    description: "Reviewed and approved 2 outputs from Content Drafting Agent",
  },
  {
    icon: <PriceIcon />,
    iconBg: "bg-orange-500",
    badgeText: "PROCESSING",
    badgeClassName: "text-orange-500 dark:text-orange-500",
    title: "Price Monitoring Agent",
    description: "Generated draft campaign brief",
  },
];

export const SkeletonOne = () => {
  return (
    <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 mx-auto w-full h-full absolute inset-x-10 inset-y-2 pt-2 px-2">
      <Card>
        {cardContents.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
          >
            <CardContent
              key={index}
              Icon={
                <div
                  className={`size-5 rounded-sm ${item.iconBg} text-white flex items-center justify-center`}
                >
                  {item.icon}
                </div>
              }
              badgeText={item.badgeText}
              badgeIcon={item.badgeIcon}
              badgeClassName={item.badgeClassName}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </Card>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-col gap-4 shadow-black/10 bg-white dark:bg-neutral-800 border border-transparent ring-1 rounded-tl-[16px] ring-black/10 dark:ring-white/10 flex items-start flex-1">
      <div className="flex items-center gap-2 border-b w-full py-2 px-4">
        <RecentIcon />
        <p className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
          Recent Activity
        </p>
      </div>

      {children}
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
          <p
            className={cn(
              "text-[10px] font-bold text-neutral-600 dark:text-neutral-400",
              badgeClassName,
            )}
          >
            {badgeText}
          </p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 flex-nowrap max-w-[16rem] whitespace-nowrap w-full text-left">
        {description}
      </p>
    </div>
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
