import React from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import { SubHeading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import { IconBrandLinkedin, IconBrandTwitter, IconSend } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { InstagramIcon } from "@/icons";

export const Footer = () => {
  const productLinks = [
    {
      title: "Agent Simulator",
      href: "#",
    },
    {
      title: "AI Workflows",
      href: "#",
    },
    {
      title: "Agent Builder",
      href: "#",
    },
    {
      title: "Analytics Dashboard",
      href: "#",
    },
    {
      title: "API Integration",
      href: "#",
    },
    {
      title: "Enterprise Solutions",
      href: "#",
    },
  ];

  const companyLinks = [
    {
      title: "About Us",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Press",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
  ];
  return (
    <footer className="relative perspective-distant overflow-hidden border-t border-neutral-200 dark:border-neutral-800 py-10 md:py-20 lg:py-32">
      <Container className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-20">
        <div className="col-span-2 flex flex-col gap-4 items-start">
          <Logo />
          <SubHeading>Safe, observable, outcome-driven AI</SubHeading>
          <Button className={"shadow-brand"}>Start a 30-day trial</Button>
        </div>
        <div className="flex flex-col gap-4">
            <h4 className="text-base font-medium text-neutral-400">Product</h4>
            <ul className="list-none flex flex-col gap-2">
                { productLinks.map((item, index) => (
                    <li key={item.title}>
                    <Link href={item.href} className="text-sm text-neutral-400 dark:hover:text-white hover:text-black transition duration-200">
                    {item.title}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h4 className="text-base font-medium text-neutral-400">Company</h4>
            <ul className="list-none flex flex-col gap-2">
                { companyLinks.map((item, index) => (
                    <li key={item.title}>
                    <Link href={item.href} className="text-sm text-neutral-400 dark:hover:text-white hover:text-black transition duration-200">
                    {item.title}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex flex-col gap-4">
        <h4 className="text-base font-medium text-neutral-400">Newsletter</h4>
        <div className="relative p-px flex items-center justify-center rounded-md border dark:border-neutral-700 dark:bg-neutral-800 border-neutral-100 bg-neutral-100">
                <input className="cursor-text bg-transparent outline-none py-2 pl-2 pr-12 placeholder-neutral-400 text-neutral-600 text-sm" type="email" placeholder="Your email"/>
                <button className="cursor-pointer px-4 py-2 rounded-[7px] bg-black inset-y-0 right-0 absolute">
                    <IconSend className="text-white size-4"/>
                </button>
                
        </div>
        <p className="text-sm text-neutral-400">
            Get the latest product news and behind the scenes updates.
        </p>
        </div>
      </Container>

      <Container className="flex flex-col sm:flex-row justify-between mt-10 relative z-20">
        <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Agentix AI. All rights reserved.
        </p>
        <div className="flex items-center gap-12 *:text-sm *:text-neutral-500 *:dark:hover:text-white *:hover:text-black *:transition *:duration-200">
            <Link href={"/privacy"} >Privacy Policy</Link>
            <Link href={"/terms"} >Terms of Service</Link>
        </div>
      </Container>
      
      <Container>
      <div className="relative flex items-center justify-end gap-4 z-20 mt-4">
          <ModeToggle/>
          <Link href={"#"}>
          <IconBrandTwitter className="size-4"/>
          </Link>
          <Link href={"#"}>
          <InstagramIcon className="size-4"/>
          </Link>
          <Link href={"#"}>
          <IconBrandLinkedin className="size-4"/>
          </Link>
        </div>
      </Container>

      <div
        className={cn(
          "h-[200%] gap-20 absolute inset-x-[-200%] -inset-y-40 flex items-center justify-center",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-900)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-900)_1px,transparent_1px)]",
          "rotate-x-60 ",
          "mask-radial-from-50%",
        )}
      />
    </footer>
  );
};
