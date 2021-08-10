import axios from 'axios';

async function getCityImage(city){
    console.log('key :',process.env.REACT_APP_API_KEY_unsplash)
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${process.env.REACT_APP_API_KEY_unsplash}`);
    const responseData=  response.data;
    console.log('cityImage:',responseData)

    return responseData
}
export default getCityImage;

