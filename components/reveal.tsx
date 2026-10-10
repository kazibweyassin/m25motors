"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function Reveal({
  children,
  className,
  delay = 0,
  lift = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  lift?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={lift && !reduceMotion ? { y: -7, scale: 1.015 } : undefined}
      whileTap={lift && !reduceMotion ? { scale: 0.99 } : undefined}
    >
      {children}
    </motion.div>
  );
}
