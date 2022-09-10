import axios from "axios";

const fetching = axios.create({
  baseURL: 'https://jobs-ladder.herokuapp.com' ,  
});

fetching.interceptors.request.use(function (config) {
  if(!config.headers.authorization){
    config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
export default fetching