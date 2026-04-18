import { useState, useEffect } from "react";
import {
  getCoordinates,
  getCoordinatesByIP,
  getWeather,
  type WeatherData,
} from "../../services/weatherService";

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        let coords;
        try {
          coords = await getCoordinates();
        } catch (geoError) {
          console.warn("Browser geolocation failed, trying IP-based geolocation...");
          coords = await getCoordinatesByIP();
        }
        
        const data = await getWeather(coords.latitude, coords.longitude);
        setWeather(data);
      } catch (error) {
        console.error("Weather fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return null;
  if (!weather) return null;

  return (
    <div className="absolute top-20 right-6 z-40 rounded-lg border border-black/10 bg-white/60 px-3 py-2 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <img
          src={`/weather_icons/${weather.icon}`}
          alt={weather.condition}
          className="w-12 h-12"
          onError={(e) => {
            console.error("Failed to load weather image:", `weather_icons/${weather.icon}`);
          }}
        />
        <div>
          <div className="text-xs font-semibold text-black">
            {weather.temp}°C
          </div>
          <div className="text-xs text-black/70">{weather.condition}</div>
          <div className="text-xs text-black/60">
            {weather.city}, {weather.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
