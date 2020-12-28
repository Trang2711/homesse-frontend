import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: 'http://25e5742ad583.ngrok.io',
    
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    /**
     * handle whatever you want
     */
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