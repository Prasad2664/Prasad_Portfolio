import { motion } from 'framer-motion';

export default function PageWrapper({ children, className = '' }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`lg:pl-64 pt-16 lg:pt-0 min-h-screen ${className}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
        {children}
      </div>
      
    </motion.main>
  );
}
