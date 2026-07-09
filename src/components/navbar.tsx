"use client";
import React, { useState } from "react";
import { Logo, LogoIcon } from "./logo";
import { Container } from "./container";
import Link from "next/link";
import { Button } from "./ui/button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { it } from "node:test";

const navlinks = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Product",
    href: "/product",
  },
  {
    title: "Socials",
    href: "/social",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex md:hidden px-4 py-2 justify-between">
      <Logo />
      <button onClick={() => setOpen(!open)}>
        <IconLayoutSidebar className="size-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div 
          initial={{opacity:0}}
          animate={{
            opacity: 1,
            backdropFilter: "blur(15px)",
            background: 'transparent'
          }}
          exit={{
            opacity: 0,
            backdropFilter: 0,
            background: 'rgba(255,255,255,0.5)'
          }}
          transition={{
            duration:0.2,
          }}
          className="fixed inset-0 h-full w-full bg-white z-50 px-4 py-2"
          >
            <div>
            <div className="flex justify-between">
            <Logo/>
            <button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2"
            >
              <IconX />
            </button>
            </div>
            <div className="flex flex-col gap-6 my-10">
                {navlinks.map((item,index) => 
                <motion.div 
                initial={{
                    opacity:0,
                    x: -4,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    duration: 0.2,
                    delay: index * 0.1
                }}
                key={index + item.title}>
                <Link 
                key={index} 
                href={item.href}
                className="text-2xl text-neutral-600 dark:text-neutral-400 font-medium"
                >
                {item.title}
                </Link>
                </motion.div>)}
            </div>
            </div>
            <div className="flex items-center justify-end gap-4">
                <Link 
                href="/login"
                className="text-sm px-4 inline-block py-2 rounded-md text-neutral-600 dark:text-neutral-400 font-medium"
                >
                    Login
                </Link>
                <Button>Signup</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="items-center justify-between py-4 hidden lg:flex">
      <Logo />
      <div className="flex items-center gap-4">
        {navlinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="login"
          className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
        >
          Login
        </Link>
        <Button className="">SignUp</Button>
      </div>
    </Container>
  );
};
