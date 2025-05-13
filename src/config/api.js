// WeatherAPI.com API configuration
export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || '521dfe8d737a49d9a4a151926232511' // Example key, register at weatherapi.com for your own
export const API_URL = 'https://api.weatherapi.com/v1'

// Weather condition codes and icons mapping
export const weatherIcons = {
  // Sunny / Clear
  1000: {
    day: 'https://cdn.weatherapi.com/weather/64x64/day/113.png',
    night: 'https://cdn.weatherapi.com/weather/64x64/night/113.png',
    label: 'Sunny',
  },
  // Partly Cloudy
  1003: {
    day: 'https://cdn.weatherapi.com/weather/64x64/day/116.png',
    night: 'https://cdn.weatherapi.com/weather/64x64/night/116.png',
    label: 'Partly Cloudy',
  },
  // Cloudy
  1006: {
    day: 'https://cdn.weatherapi.com/weather/64x64/day/119.png',
    night: 'https://cdn.weatherapi.com/weather/64x64/night/119.png',
    label: 'Cloudy',
  },
  // Overcast
  1009: {
    day: 'https://cdn.weatherapi.com/weather/64x64/day/122.png',
    night: 'https://cdn.weatherapi.com/weather/64x64/night/122.png',
    label: 'Overcast',
  },
  // Mist
  1030: {
    day: 'https://cdn.weatherapi.com/weather/64x64/day/143.png',
    night: 'https://cdn.weatherapi.com/weather/64x64/night/143.png',
    label: 'Mist',
  },
  // Patchy rain
  1063: {
    day: 'https://cdn.weatherapi.com/weather/64x64/day/176.png',
    night: 'https://cdn.weatherapi.com/weather/64x64/night/176.png',
    label: 'Patchy Rain',
  },
  // Rain
  1183: {
    day: 'https://cdn.weatherapi.com/weather/64x64/day/296.png',
    night: 'https://cdn.weatherapi.com/weather/64x64/night/296.png',
    label: 'Rain',
  },
  // Heavy rain
  1195: {
    day: 'https://cdn.weatherapi.com/weather/64x64/day/308.png',
    night: 'https://cdn.weatherapi.com/weather/64x64/night/308.png',
    label: 'Heavy Rain',
  },
  // Snow
  1213: {
    day: 'https://cdn.weatherapi.com/weather/64x64/day/326.png',
    night: 'https://cdn.weatherapi.com/weather/64x64/night/326.png',
    label: 'Snow',
  },
  // Thunderstorm
  1087: {
    day: 'https://cdn.weatherapi.com/weather/64x64/day/200.png',
    night: 'https://cdn.weatherapi.com/weather/64x64/night/200.png',
    label: 'Thunderstorm',
  },
}

// Get weather icon based on condition code and is_day flag
export const getWeatherIcon = (code, isDay = 1) => {
  const iconSet = weatherIcons[code] || weatherIcons[1000] // Default to sunny/clear if code not found
  return isDay ? iconSet.day : iconSet.night
}

// Get weather label based on condition code
export const getWeatherLabel = (code) => {
  return weatherIcons[code]?.label || 'Unknown'
}