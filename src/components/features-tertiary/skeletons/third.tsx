import React from 'react'
import { cn } from "@/lib/utils";
import { IconSettings, IconSparkles } from '@tabler/icons-react';
import { ArrowIllustration, DownArrowIllustration } from '@/illustrations/general';

export const SkeletonThree = () => {
  return (
    <div className="max-w-lg z-20 flex-1 rounded-t-3xl gap-2 flex flex-col mx-auto w-full h-full absolute inset-0 pt-2 px-2 perspective-[4000px]">
        <ArrowIllustration className='absolute inset-x-0 -top-3 mx-auto z-30'/>
        <DownArrowIllustration className='absolute left-30 -bottom-4 mx-auto blur-[2px]' />
        <GridBackgroundDemo/>
    </div>
  )
}

export function GridBackgroundDemo() {
  return (
      <div
        className={cn(
          "h-[200%] gap-20 absolute inset-x-[-200%] -inset-y-40 flex items-center justify-center",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-200)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)]",
          "rotate-y-10 rotate-x-60 rotate-z-30",
        )}
      >
        <div className='flex items-center gap-2 text-orange-500 font-medium px-4 py-2 rounded-full bg-orange-100 border border-orange-300'>
            <IconSettings className='size-4'/>
            <span>Processing</span>
        </div>
        <div className='flex items-center gap-2 text-green-500 font-medium px-4 py-2 rounded-full bg-green-100 border border-green-300'>
            <IconSparkles className='size-4'/>
            <span>Feedback</span>
        </div>
      </div>
  );
}
