import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

function Header() {
  const { theme } = useTheme()
  
  return (
    <header className="relative">
      <motion.div 
        className={`p-4 rounded-xl shadow-lg ${
          theme === 'dark' 
          ? 'bg-gradient-to-r from-dark-800 to-dark-900 text-white' 
          : 'bg-gradient-to-r from-primary-400 to-primary-600 text-white'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/weather-icon.svg" 
              alt="Weather App Logo" 
              className="w-10 h-10" 
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Weather Forecast</h1>
              <p className="text-sm md:text-base opacity-90">Your daily weather companion</p>
            </div>
          </div>
          
          <ThemeToggle />
        </div>
      </motion.div>
    </header>
  )
}

export default Header