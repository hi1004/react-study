import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines',
  params: {
    apiKey: process.env.REACT_APP_APIKEY,
    country: 'jp',
  },
});
export default instance;
