import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from './Icons'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <motion.button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative rounded-full w-14 h-7 flex items-center ${
        isDark ? 'bg-dark-600' : 'bg-primary-200'
      } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isDark ? 'focus:ring-primary-400' : 'focus:ring-primary-600'
      }`}
      onClick={toggleTheme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      
      {/* Toggle Track Icons */}
      <span className="absolute left-1 text-dark-900">
        <SunIcon className={`w-5 h-5 ${isDark ? 'opacity-40' : 'opacity-100 text-yellow-500'}`} />
      </span>
      <span className="absolute right-1 text-dark-100">
        <MoonIcon className={`w-5 h-5 ${isDark ? 'opacity-100 text-blue-200' : 'opacity-40'}`} />
      </span>
      
      {/* Toggle Handle */}
      <motion.span 
        className={`absolute w-5 h-5 rounded-full theme-toggle-handle ${
          isDark 
            ? 'bg-dark-900 border border-dark-600' 
            : 'bg-white border border-primary-300'
        }`}
        animate={{ x: isDark ? 28 : 2 }}
        transition={{ duration: 0.2, type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  )
}

export default ThemeToggle