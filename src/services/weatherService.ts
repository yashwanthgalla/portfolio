export interface WeatherData {
  temp: number;
  condition: string;
  icon: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
}

export interface GeolocationCoords {
  latitude: number;
  longitude: number;
}

export const getCoordinates = (): Promise<GeolocationCoords> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
      { timeout: 5000, enableHighAccuracy: false }
    );
  });
};

export const getCoordinatesByIP = async (): Promise<GeolocationCoords> => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    if (data.latitude && data.longitude) {
      return {
        latitude: data.latitude,
        longitude: data.longitude,
      };
    }
    throw new Error("Invalid IP location data");
  } catch (error) {
    throw new Error("Failed to get location by IP");
  }
};

export const getWeather = async (
  latitude: number,
  longitude: number
): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
    );
    const data = await response.json();

    const reverseResponse = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
    );
    const locationData = await reverseResponse.json();

    const weatherCode = data.current.weather_code;
    const { condition, icon } = getWeatherCondition(weatherCode);

    // Extract city name with multiple fallbacks
    const address = locationData.address || {};
    const city =
      address.city ||
      address.town ||
      address.city_district ||
      address.county ||
      address.state ||
      address.region ||
      "Unknown";

    const country = address.country_code?.toUpperCase() || "XX";

    return {
      temp: Math.round(data.current.temperature_2m),
      condition,
      icon,
      city,
      country,
      lat: latitude,
      lon: longitude,
    };
  } catch (error) {
    console.error("Weather data fetch error:", error);
    throw new Error("Failed to fetch weather data");
  }
};

const getWeatherCondition = (code: number): { condition: string; icon: string } => {
  if (code === 0) return { condition: "Clear", icon: "day.svg" };
  if (code === 1 || code === 2) return { condition: "Cloudy", icon: "cloudy.svg" };
  if (code === 3) return { condition: "Overcast", icon: "cloudy.svg" };
  if (code === 45 || code === 48) return { condition: "Foggy", icon: "cloudy.svg" };
  if (code >= 51 && code <= 57) return { condition: "Drizzle", icon: "rainy-1.svg" };
  if (code >= 61 && code <= 67) return { condition: "Rain", icon: "rainy-3.svg" };
  if (code >= 71 && code <= 77 || code === 85 || code === 86)
    return { condition: "Snow", icon: "snowy-3.svg" };
  if (code >= 80 && code <= 82) return { condition: "Showers", icon: "rainy-5.svg" };
  if (code >= 90 && code <= 99) return { condition: "Thunder", icon: "thunder.svg" };
  return { condition: "Unknown", icon: "day.svg" };
};
