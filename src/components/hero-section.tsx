import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-5">
      <div className="flex justify-between items-end mb-8">
        <div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Your Journey, Your Way
          </motion.h1>
          <p className="text-xl text-gray-600">
            Discover the Worlds Treasures with Dans tour
          </p>
        </div>
      </div>
    </div>
  );
}
