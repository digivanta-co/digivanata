"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export interface FaqAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: FaqItem[];
  title?: string;
}

const DEFAULT_ITEMS: FaqItem[] = [
  {
    question: "What is Vengeance UI?",
    answer:
      "Vengeance UI is a high-performance, dark-mode first component library designed for the next generation of web applications.",
  },
  {
    question: "Can I use it with Tailwind CSS?",
    answer:
      "Yes! All components are built on top of Tailwind CSS and highly customizable using utility classes.",
  },
  {
    question: "Are the components accessible?",
    answer:
      "Accessibility is a core focus. We ensure proper ARIA attributes, keyboard navigation, and semantic HTML structure.",
  },
  {
    question: "Do I need to install a heavy npm package?",
    answer:
      "No. Vengeance UI provides a CLI that lets you copy and paste only the components you need directly into your project.",
  },
  {
    question: "Is it compatible with React and Next.js?",
    answer:
      "Absolutely. The library is built with React in mind and perfectly supports Next.js Server Components and client-side rendering.",
  },
];

export function FaqAccordion({
  items = DEFAULT_ITEMS,
  title = "Frequently Asked Questions",
  className,
  ...props
}: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={cn("relative mx-auto w-full max-w-3xl py-8 font-sans", className)} {...props}>
      {title && (
        <h2 className="mb-10 text-center text-4xl font-bold text-black md:text-3xl dark:text-neutral-400">
          {title}
        </h2>
      )}

      <ul className="mx-auto flex w-full list-none flex-col p-0">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <li
              key={index}
              className={cn(
                "relative w-full transition-all duration-300 ease-in",
                "border-b-2 border-neutral-100 dark:border-neutral-800",
                "last:border-b-0",
                isActive ? "border-b border-neutral-200 dark:border-neutral-700" : ""
              )}
            >
              <button
                type="button"
                className={cn(
                  "relative m-0 flex min-h-[60px] w-full cursor-pointer flex-row items-center justify-start px-4 py-4 pl-14 text-left text-black outline-none md:text-lg",
                  "border-l-[6px] transition-colors duration-200 md:border-l-[10px]",
                  isActive
                    ? "border-l-neutral-900 bg-neutral-100/50 font-semibold text-black-900 dark:border-l-neutral-100 dark:bg-neutral-800/30 dark:text-neutral-100"
                    : "border-l-neutral-300 bg-transparent text-neutral-600 hover:border-l-neutral-500 hover:bg-neutral-50 hover:text-black dark:border-l-neutral-700 dark:text-neutral-400 dark:hover:border-l-neutral-500 dark:hover:bg-neutral-900/50 dark:hover:text-neutral-200"
                )}
                onClick={() => toggleItem(index)}
                aria-expanded={isActive}
              >
                <span
                  className={cn(
                    "absolute top-1/2 left-4 -translate-y-1/2 leading-none transition-all duration-200 md:left-5",
                    isActive
                      ? "text-[32px] font-normal text-black md:text-[40px] dark:text-neutral-100"
                      : "text-[24px] font-normal text-black md:text-[30px] dark:text-neutral-500"
                  )}
                >
                  {isActive ? "-" : "+"}
                </span>

                <span className="pr-8">{item.question}</span>

                <span
                  className={cn(
                    "absolute right-6 block h-2 w-2 border-t-[3px] border-r-[3px] transition-transform duration-200 ease-in-out",
                    isActive
                      ? "rotate-[-44deg] border-black dark:border-neutral-100"
                      : "rotate-[133deg] border-black dark:border-neutral-500"
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid w-full transition-all duration-300 ease-in-out",
                  "border-l-[6px] md:border-l-[10px]",
                  isActive
                    ? "grid-rows-[1fr] border-black bg-neutral-100/50 dark:border-l-neutral-100 dark:bg-neutral-800/30"
                    : "grid-rows-[0fr] border-black bg-transparent dark:border-l-neutral-700"
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex w-full flex-row items-start justify-start px-4 pt-2 pb-6 pl-14 text-base font-normal text-neutral-700 md:text-lg dark:text-neutral-300">
                    <span className="opacity-90">{item.answer}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FaqAccordion;
