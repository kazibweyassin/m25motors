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
      // Keep server-rendered content visible even if client-side scroll
      // observers are delayed or unavailable. Motion still lifts it into place.
      initial={reduceMotion ? false : { opacity: 1, y: 10 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={lift && !reduceMotion ? { y: -7, scale: 1.015 } : undefined}
      whileTap={lift && !reduceMotion ? { scale: 0.99 } : undefined}
    >
      {children}
    </motion.div>
  );
}
