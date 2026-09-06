// CircleArrow.jsx
"use client";
import { motion } from "framer-motion";

export default function CircleArrow({ isOpen }) {
  return (
    <motion.div
      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
        isOpen ? "bg-black border-black text-white" : "border-gray-400 text-gray-700"
      }`}
      animate={{ rotate: isOpen ? 90 : 45 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </motion.div>
  );
}
