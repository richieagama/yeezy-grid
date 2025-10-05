// PaperModal.js
import React from "react";
import { motion } from "framer-motion";

// Randomize direction: slide in from left or right
const getSlideDirection = () => {
  return Math.random() > 0.5 ? -1 : 1; // -1 = left, 1 = right
};

export default function PaperModal({ product, onClose }) {
  if (!product) return null;

  const direction = getSlideDirection();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-modal="true"
      role="dialog"
    >
      {/* Dim background */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{ opacity: 0.4, pointerEvents: "auto" }}
        exit={{ opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        onClick={onClose} // ✅ close when clicking outside
      />

      {/* Paper container */}
      <motion.div
        className="relative bg-white rounded-md shadow-lg w-[80%] md:w-[60%] lg:w-[50%] aspect-[4/3] overflow-hidden border border-gray-200 flex flex-col"
        style={{
          backgroundImage:
            "linear-gradient(white, white), url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
          backgroundBlendMode: "multiply",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)", // ✨ stronger shadow for paper edge
        }}
        initial={{ x: direction * 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: direction * 200, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        onClick={(e) => e.stopPropagation()} // ✅ prevent click inside from closing
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-black z-10"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header row */}
        <div className="px-4 pt-4 pb-2 text-xs text-gray-500 font-mono flex justify-between flex-shrink-0">
          <span>{product.time}</span>
          <span>{product.description}</span>
          <span></span>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center p-6 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-[85%] max-h-[85%] object-contain"
          />
        </div>

        {/* Footer row */}
        <div className="px-4 pb-4 pt-2 text-xs text-gray-500 font-mono flex justify-between flex-shrink-0 border-t border-gray-200">
          <span>{product.sku}</span>
          <span></span>
          <span>{product.id}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
