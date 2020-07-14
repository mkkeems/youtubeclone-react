import axios from 'axios';

export default axios.create({
  // handles our api request
  baseURL: 'https://www.googleapis.com/youtube/v3',
})