import { createContext, useContext, useState, useCallback } from 'react'
import { API_KEY, API_URL } from '../config/api'
import axios from 'axios'

const WeatherContext = createContext()

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null)
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [unit, setUnit] = useState('celsius')

  const fetchWeatherByCity = useCallback(async (city) => {
    if (!city) return
    
    setLoading(true)
    setError(null)
    
    try {
      const response = await axios.get(`${API_URL}/forecast.json`, {
        params: {
          key: API_KEY,
          q: city,
          days: 3, // Increased to 3 days to include tomorrow
          aqi: 'yes',
          alerts: 'no',
        },
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      setWeather(response.data)
      setLocation(response.data.location)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching weather data:', err)
      setError(err.response?.data?.error?.message || 'Failed to fetch weather data. Please try again.')
      setLoading(false)
    }
  }, [])

  const toggleUnit = () => {
    setUnit(prevUnit => prevUnit === 'celsius' ? 'fahrenheit' : 'celsius')
  }

  return (
    <WeatherContext.Provider value={{
      weather,
      location,
      loading,
      error,
      unit,
      toggleUnit,
      fetchWeatherByCity
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export function useWeather() {
  const context = useContext(WeatherContext)
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider')
  }
  return context
}