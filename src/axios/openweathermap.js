import axios from 'axios';

async function getWeather(city){
    console.log('key :',process.env.REACT_APP_API_KEY_openweather)

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY_openweather}`);
    const responseData=  response.data;
    console.log('weather:',responseData)
    return responseData
}
export default getWeather;