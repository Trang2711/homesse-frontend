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
    },
    
    createPost: (data) => {
        const url = '/post/create_post';
        return axiosClient.post(url, data);
    }
    
}

export default postApi;