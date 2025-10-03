import { motion } from "framer-motion";

export default function Backdrop({ onClick }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/40 z-40"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
}
