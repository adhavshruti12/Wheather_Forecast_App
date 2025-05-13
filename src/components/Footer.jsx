import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.footer 
      className="mt-16 text-center text-sm text-dark-500 dark:text-dark-400 pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <p>
        Weather data provided by{' '}
        <a 
          href="https://www.weatherapi.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-600 dark:text-primary-400 hover:underline"
        >
          WeatherAPI.com
        </a>
      </p>
      <p className="mt-2">
        © {new Date().getFullYear()} Weather Forecast App. All rights reserved.
      </p>
    </motion.footer>
  )
}

export default Footer