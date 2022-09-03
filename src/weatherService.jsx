const API_KEY = 'cf50f7a2eccb958e7913137badef3fc7';
export const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units${units}`;
    const data = await fetch(URL).then((res) => res.json()).then(
        (data) => data)
    const { wearher,
        main: {
            temp,
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity },
        wind: { speed },
        sys: { country }
    } = data;
    const { description, icon } = weather[0]
    return {
        description, icon,  temp, feels_like, temp_min, temp_max, pressure, humidity, speed, country, name
    }
}