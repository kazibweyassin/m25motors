"use client";

import { motion, useReducedMotion } from "motion/react";

const headline = ["Car", "repairs,", "without", "the", "guesswork."];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

const wordVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function StaggeredHeadline() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.h1
      className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
      aria-label="Car repairs, without the guesswork."
      aria-live="off"
      variants={containerVariants}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
    >
      {headline.map((word, index) => (
        <span key={word} aria-hidden="true">
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className={`inline-block ${index === 2 ? "font-light italic text-red-300" : ""}`}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
          {index < headline.length - 1 ? " " : null}
        </span>
      ))}
    </motion.h1>
  );
}
