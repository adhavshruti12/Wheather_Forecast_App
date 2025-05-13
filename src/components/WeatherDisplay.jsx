import { useWeather } from '../contexts/WeatherContext'
import { format } from 'date-fns'
import DayForecast from './DayForecast'
import WeatherDetails from './WeatherDetails'
import UnitToggle from './UnitToggle'
import { motion } from 'framer-motion'
import { LocationIcon, CalendarIcon } from './Icons'

function WeatherDisplay() {
  const { weather, location, unit } = useWeather()
  
  if (!weather || !location) {
    return null
  }

  const today = weather.current
  const forecast = weather.forecast.forecastday
  
  // Yesterday (current - 1 day)
  const yesterday = forecast[0] // The API returns yesterday as first day
  
  // Today
  const todayForecast = forecast[1] // The API returns today as second day
  
  // Tomorrow
  const tomorrow = forecast[2] // The API returns tomorrow as third day

  return (
    <div className="max-w-6xl mx-auto">
      {/* Location and Date */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <LocationIcon className="w-6 h-6 text-primary-500 dark:text-primary-400" />
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
            {location.name}, {location.country}
          </h2>
        </div>
        <div className="flex items-center justify-center gap-2 text-dark-500 dark:text-dark-400 text-lg">
          <CalendarIcon className="w-5 h-5" />
          <p>{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
        </div>
        <div className="mt-6">
          <UnitToggle />
        </div>
      </div>
      
      {/* Main Weather Display */}
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Yesterday */}
          <DayForecast 
            day="Yesterday"
            data={yesterday}
            unit={unit}
          />
          
          {/* Today */}
          <DayForecast 
            day="Today"
            data={todayForecast}
            current={today}
            isToday={true}
            unit={unit}
          />
          
          {/* Tomorrow */}
          <DayForecast 
            day="Tomorrow"
            data={tomorrow}
            unit={unit}
          />
        </div>
        
        {/* Current Weather Details */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
          <WeatherDetails current={today} forecast={todayForecast} unit={unit} />
        </div>
      </div>
    </div>
  )
}

export default WeatherDisplay