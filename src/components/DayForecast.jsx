import { motion } from 'framer-motion'
import { getWeatherIcon, getWeatherLabel } from '../config/api'
import { format } from 'date-fns'
import { useTheme } from '../contexts/ThemeContext'

function DayForecast({ day, data, current, isToday = false, unit }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  if (!data) return null

  const date = new Date(data.date)
  const formattedDate = format(date, 'MMM d')
  
  const temp = current ? 
    (unit === 'celsius' ? current.temp_c : current.temp_f) : 
    (unit === 'celsius' ? data.day.avgtemp_c : data.day.avgtemp_f)
  
  const minTemp = unit === 'celsius' ? data.day.mintemp_c : data.day.mintemp_f
  const maxTemp = unit === 'celsius' ? data.day.maxtemp_c : data.day.maxtemp_f
  
  const conditionCode = current ? current.condition.code : data.day.condition.code
  const isDay = current ? current.is_day : 1
  
  const weatherIcon = getWeatherIcon(conditionCode, isDay)
  const weatherLabel = current?.condition?.text || getWeatherLabel(conditionCode)
  
  return (
    <div className={`rounded-xl p-6 ${
      isToday ? 'bg-primary-50 dark:bg-primary-900/20' : 'bg-gray-50 dark:bg-dark-700'
    }`}>
      <div className="flex flex-col items-center">
        <div className={`text-xl font-semibold mb-1 ${
          isToday ? 'text-primary-600 dark:text-primary-400' : 'dark:text-white'
        }`}>
          {day}
        </div>
        
        <div className="text-base text-dark-500 dark:text-dark-400 mb-4">
          {formattedDate}
        </div>
        
        <img 
          src={weatherIcon} 
          alt={weatherLabel}
          className="w-20 h-20 mb-4"
        />
        
        <div className="text-3xl font-bold mb-2 dark:text-white">
          {Math.round(temp)}°{unit === 'celsius' ? 'C' : 'F'}
        </div>
        
        <div className="text-lg text-dark-600 dark:text-dark-300 mb-4">
          {weatherLabel}
        </div>
        
        <div className="flex justify-between w-full text-base">
          <span className="text-dark-500 dark:text-dark-400">
            Min: {Math.round(minTemp)}°
          </span>
          <span className="text-dark-500 dark:text-dark-400">
            Max: {Math.round(maxTemp)}°
          </span>
        </div>
      </div>
    </div>
  )
}

export default DayForecast