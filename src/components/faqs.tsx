"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { UserChatIcon } from "@/illustrations/general";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Faq = () => {
  const QuestionList = [
    {
      question: "What is Agentix AI?",
      answer: "Agentix AI is a platform for building and managing AI agents.",
    },
    {
      question: "Who Is Agentix AI Built For?",
      answer:
        "Agentix AI is built for businesses and developers who want to build and manage AI agents.",
    },
    {
      question: "How Does Agentix AI Work?",
      answer:
        "Agentix AI works by using a combination of AI agents and human input to build and manage AI agents.",
    },
    {
      question: "How are guardrails enforced?",
      answer:
        "Guardrails are enforced by the AI agent using a combination of AI agents and human input to build and manage AI agents.",
    },
    {
      question: "Where does our data live?",
      answer:
        "Our data lives on your own servers. We do not store any data on our servers.",
    },
  ];
  return (
    <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
      <Container>
        <UserChatIcon />
        <Heading className="my-10 md:my-20">Frequently Asked Questions</Heading>
        <div className="flex flex-col gap-4">
          {QuestionList.map((item) => (
            <QuestionCard
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const QuestionCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 p-4 md:p-8 "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-2xl font-bold font-display">
          {question}
        </h3>
        <div className="relative flex items-center justify-center size-6 rounded-full bg-black dark:bg-white">
          <IconMinus
            className={cn(
              "size-6 text-white dark:text-black absolute inset-0 transition-all duration-200",
              open && "scale-0 rotate-90",
            )}
          />
          <IconPlus
            className={cn(
              "size-6 text-white dark:text-black absolute inset-0 scale-0 -rotate-90 transition-all duration-200",
              open && "scale-100 rotate-0",
            )}
          />
        </div>
      </div>
        <motion.div
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut'
          }}
          className="overflow-hidden"
        >
          {open && (
            <motion.p
              key={String(open)}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.1,
              }}
              className="text-left mt-4 text-neutral-600 dark:text-neutral-200"
            >
              {answer}
            </motion.p>
          )}
        </motion.div>
    </button>
  );
};
