"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

export const LandingImage = () => {
  return (
    <div className="">
      <div className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full pt-20 perspective-distant translate-x-10 md:translate-x-28">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          className='perspective-[4000px]'>
          <Image
            src="/hero.jpg"
            height={1080}
            width={1920}
            alt="Demo 1 for agenforce template"
            loading='eager'
            draggable={false}
            className={cn("absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl select-none pointer-events-none")}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut"
          }}
          className='perspective-[4000px] translate-x-20 -translate-y-10 md:-translate-y-20 lg:-translate-y-40'>
          <Image
            src="/hero.jpg"
            height={1080}
            width={1920}
            alt="Demo 2 for agenforce template"
            draggable={false}
            className={cn("absolute inset-0 -translate-x-10 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl select-none pointer-events-none")}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
      </div>
      <div className='absolute inset-x-0 bottom-0 h-40 md:h-100 w-full mask-t-from-10% bg-background z-40'></div>
    </div>
  )
}
