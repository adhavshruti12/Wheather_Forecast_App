import { useTheme } from './contexts/ThemeContext'
import { useWeather } from './contexts/WeatherContext'
import Header from './components/Header'
import WeatherDisplay from './components/WeatherDisplay'
import SearchBox from './components/SearchBox'
import ErrorMessage from './components/ErrorMessage'
import LoadingSpinner from './components/LoadingSpinner'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

function App() {
  const { theme } = useTheme()
  const { loading, error } = useWeather()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'dark bg-dark-900' : 'bg-gradient-to-br from-blue-50 to-blue-100'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Header />
        
        <motion.main 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SearchBox />
          
          {loading ? (
            <div className="flex justify-center items-center my-20">
              <LoadingSpinner />
            </div>
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <WeatherDisplay />
          )}
        </motion.main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App