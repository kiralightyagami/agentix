import { cn } from '@/lib/utils';
import React from 'react'

export const SubHeading = ({children, className, tag= 'p'}: {
    children: React.ReactNode;
    className?: string;
    tag?: 'h1' | 'h2'| 'p';
}) => {
    const Tag = tag;
  return (
    <Tag className={cn("max-w-xl text-base md:text-lg text-neutral-500 dark:text-neutral-400 font-inter",className)}>
        {children}
    </Tag>
  )
}
