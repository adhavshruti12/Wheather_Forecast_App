# Weather Forecast App

A modern, responsive weather forecast application built with React that shows weather information for yesterday, today, and tomorrow. The app features a beautiful UI with dark/light mode support and real-time weather updates.

### Deployment link : https://wheather-forecast-app.vercel.app/

## Features

- 🌤️ Real-time weather data from WeatherAPI.com
- 📅 3-day forecast (yesterday, today, tomorrow)
- 🌓 Dark/light mode toggle
- 🌡️ Temperature unit conversion (Celsius/Fahrenheit)
- 📱 Fully responsive design
- ⚡ Fast and smooth animations
- 🔍 City search functionality
- 📊 Detailed weather information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-forecast-app.git
cd weather-forecast-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your WeatherAPI key:
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`


## Technology Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- WeatherAPI.com
- date-fns

## Features in Detail

### Weather Information
- Current temperature
- Feels like temperature
- Humidity
- Wind speed
- UV index
- Precipitation
- Visibility

### User Interface
- Clean and modern design
- Smooth transitions and animations
- Intuitive city search
- Easy-to-read weather information
- Responsive layout for all devices

### Theme Support
- Automatic system theme detection
- Manual theme toggle
- Persistent theme preference


## API Integration

The app uses WeatherAPI.com for weather data. To use your own API key:

1. Sign up at [WeatherAPI.com](https://www.weatherapi.com/)
2. Copy your API key
3. Create a `.env` file based on `.env.example`
4. Add your API key to the `.env` file


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
