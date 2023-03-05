import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: process.env.REACT_APP_APIKEY,
    searchIn: 'title',
  },
});
export default instance;
