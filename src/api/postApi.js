import axiosClient from "./axiosClient";

const postApi = {
    getLatestPost: (params) => {
        const url = '/post/recent_posts';
        return axiosClient.get(url);
    },

    getPost: (id) => {
        const url = `/post/${id}`;
        return axiosClient.get(url);
    },

    getPosts: (params) => {
        const url = '/post';
        return axiosClient.get(url, {params});
    },
    
    createPost: (data) => {
        const url = '/post/create_post';
        return axiosClient.post(url, data);
    }
    
}

export default postApi;