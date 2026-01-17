"use client";

import { motion } from "framer-motion";

export default function BackgroundBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden h-full">
      <motion.div
        className="absolute -top-40 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 right-1/3 h-150 w-150 rounded-full bg-cyan-400/20 blur-[120px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-100 w-100 rounded-full bg-indigo-500/20 blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}
