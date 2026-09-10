"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-14 left-0 right-0 z-40 h-0.5 origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
