const params = {
    latitude: 27.7017,
    longitude: 85.3206,
    daily: ["temperature_2m_max", "temperature_2m_min", "rain_sum", "snowfall_sum", "windspeed_10m_max", "precipitation_hours"],
    timezone: "Asia/Singapore",
};

const queryString = new URLSearchParams(params).toString();
const url = `https://api.open-meteo.com/v1/forecast?${queryString}`;

async function fetchWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Extract only the required daily data
        const daily = data.daily;
        const dataArray = {
            time: daily.time,
            temperature_2m_max: daily.temperature_2m_max,
            temperature_2m_min: daily.temperature_2m_min,
            rain_sum: daily.rain_sum,
            snowfall_sum: daily.snowfall_sum,
            windspeed_10m_max: daily.windspeed_10m_max,
            precipitation_hours: daily.precipitation_hours
        };

        return dataArray;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

async function generateWeeklySummary() {

    const dailyData = await fetchWeather();
    if (!dailyData) return;

    function getWeekday(dateString) {
        // Convert date string to weekday name
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    }

    function getWeatherCondition(rain, snowfall, windspeed) {
        if (rain > 0) return "Rainy";
        if (snowfall > 0) return "Snowy";
        if (windspeed > 15) return "Windy";
        return "Sunny";
    }

    const weatherList = document.getElementById('weather-list');
    if (!weatherList) return;

    weatherList.innerHTML = dailyData.time
        .map((date, index) => {
            const day = getWeekday(date);
            const maxTemp = dailyData.temperature_2m_max[index];
            const minTemp = dailyData.temperature_2m_min[index];
            const rain = dailyData.rain_sum[index];
            const snowfall = dailyData.snowfall_sum[index];
            const windspeed = dailyData.windspeed_10m_max[index];
            const condition = getWeatherCondition(rain, snowfall, windspeed);
            return `<li><strong>${day}:</strong> ${Math.round(maxTemp)}°C / ${Math.round(minTemp)}°C <em>(${condition})</em></li>`;
        })
        .join('');
}

generateWeeklySummary();
