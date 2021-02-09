import axios from 'axios';

const axiosGet = axios.create({
    baseURL: 'https://homework-65-1d2a2-default-rtdb.firebaseio.com/'
});


export default axiosGet;
