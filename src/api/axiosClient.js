import  axios from 'axios';

export const axiosClient = axios.create({
    // baseURL: 'https://600961f00a54690017fc3214.mockapi.io',
    baseURL:'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
    },
   
  });