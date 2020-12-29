import axios from 'axios';
import queryString from 'query-string';
import store from '../store';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    /**
     * handle whatever you want
     */
    if(store.user) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = localStorage.getItem(token);
    }
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if(response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosClient;