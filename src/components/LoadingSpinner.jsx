import { motion } from 'framer-motion'

function LoadingSpinner() {
  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        loop: Infinity,
        ease: "linear",
        duration: 1.5
      }
    }
  }
  
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="w-12 h-12 border-4 border-t-primary-500 dark:border-t-primary-400 border-blue-100 dark:border-dark-700 rounded-full"
        variants={containerVariants}
        animate="animate"
      />
      <p className="mt-4 text-dark-600 dark:text-dark-300 animate-pulse">
        Loading weather data...
      </p>
    </div>
  )
}

export default LoadingSpinner