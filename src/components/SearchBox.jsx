import { useState } from 'react'
import { useWeather } from '../contexts/WeatherContext'
import { motion } from 'framer-motion'
import { SearchIcon } from './Icons'

function SearchBox() {
  const [city, setCity] = useState('')
  const { fetchWeatherByCity, loading, weather } = useWeather()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      fetchWeatherByCity(city.trim())
    }
  }
  
  return (
    <motion.div 
      className={`mb-8 mx-auto max-w-2xl ${!weather ? 'mt-20' : ''}`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name to get weather forecast..."
          className="input-field flex-1 text-lg py-3"
          disabled={loading}
        />
        <button 
          type="submit" 
          className="btn btn-primary px-6"
          disabled={loading || !city.trim()}
        >
          <SearchIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </form>
      
      {!weather && (
        <div className="text-center mt-4 text-lg text-dark-500 dark:text-dark-400">
          Search for a city to see its weather forecast
        </div>
      )}
    </motion.div>
  )
}

export default SearchBox