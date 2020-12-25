import axiosClient from "./axiosClient";

const postApi = {
    getLatestPost: (params) => {
        const url = '/posts';
        return axiosClient.get(url, {params});
    },

    getById: (id) => {
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    },

    getPosts: (params) => {
        const url = '/posts';
        return axiosClient.get(url, {params});
    }
    
}

export default postApi;