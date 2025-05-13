import { motion } from 'framer-motion'
import { HumidityIcon, TemperatureIcon, WindIcon } from './Icons'

function WeatherDetails({ current, forecast, unit }) {
  if (!current || !forecast) return null
  
  const details = [
    {
      icon: <TemperatureIcon className="w-5 h-5 text-red-500" />,
      label: 'Feels Like',
      value: `${Math.round(unit === 'celsius' ? current.feelslike_c : current.feelslike_f)}°${unit === 'celsius' ? 'C' : 'F'}`,
    },
    {
      icon: <HumidityIcon className="w-5 h-5 text-blue-500" />,
      label: 'Humidity',
      value: `${current.humidity}%`,
    },
    {
      icon: <WindIcon className="w-5 h-5 text-teal-500" />,
      label: 'Wind',
      value: `${Math.round(current.wind_kph)} km/h`,
    },
    {
      icon: <TemperatureIcon className="w-5 h-5 text-yellow-500" />,
      label: 'UV Index',
      value: `${current.uv}`,
    },
    {
      icon: <HumidityIcon className="w-5 h-5 text-purple-500" />,
      label: 'Precipitation',
      value: `${forecast.day.totalprecip_mm} mm`,
    },
    {
      icon: <WindIcon className="w-5 h-5 text-green-500" />,
      label: 'Visibility',
      value: `${current.vis_km} km`,
    },
  ]
  
  return (
    <motion.div 
      className="weather-card dark:bg-dark-800 bg-white dark:border-dark-700 border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="section-title">Today's Details</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {details.map((detail, index) => (
          <motion.div 
            key={detail.label}
            className="p-3 rounded-lg dark:bg-dark-700 bg-gray-50 flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <div className="flex items-center gap-2 mb-2">
              {detail.icon}
              <span className="text-sm font-medium dark:text-dark-300 text-dark-600">
                {detail.label}
              </span>
            </div>
            <span className="text-lg font-semibold dark:text-white">
              {detail.value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default WeatherDetails