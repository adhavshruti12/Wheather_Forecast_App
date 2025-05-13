import { useWeather } from '../contexts/WeatherContext'
import { motion } from 'framer-motion'

function UnitToggle() {
  const { unit, toggleUnit } = useWeather()
  const isCelsius = unit === 'celsius'
  
  return (
    <motion.div 
      className="inline-flex rounded-md shadow-sm"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        type="button"
        className={`px-4 py-2 text-sm font-medium rounded-l-lg focus:outline-none focus:z-10 ${
          isCelsius
            ? 'bg-primary-500 text-white dark:bg-primary-600'
            : 'bg-gray-200 text-gray-800 dark:bg-dark-700 dark:text-dark-300'
        }`}
        onClick={() => isCelsius ? null : toggleUnit()}
      >
        °C
      </button>
      <button
        type="button"
        className={`px-4 py-2 text-sm font-medium rounded-r-lg focus:outline-none focus:z-10 ${
          !isCelsius
            ? 'bg-primary-500 text-white dark:bg-primary-600'
            : 'bg-gray-200 text-gray-800 dark:bg-dark-700 dark:text-dark-300'
        }`}
        onClick={() => !isCelsius ? null : toggleUnit()}
      >
        °F
      </button>
    </motion.div>
  )
}

export default UnitToggle