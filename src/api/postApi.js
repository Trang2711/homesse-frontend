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
        const url = '/admin/post/list';
        return axiosClient.get(url, {params});
    },
    
    createPost: (data) => {
        const url = '/post/create_post';
        return axiosClient.post(url, data);
    },
    
    searchPost: (data) => {
        const url = '/post/search/basic_search';
        return axiosClient.post(url, data);
    },
    
    getPostUnapproval: (userId)=> {
        const url = `/post/${userId}/unapproval_post_of_user`;
        return axiosClient.get(url);
    },

    getPostApproval: (userId)=> {
        const url = `/post/${userId}/approval_post_of_user`;
        return axiosClient.get(url);
    },

    setApprovalPost: (postId) => {
        const url = `/admin/post/approve/${postId}`;
        return axiosClient.get(url);
    },

    setUnapprovalPost: (postId) => {
        const url = `/admin/post/unapprove/${postId}`;
        return axiosClient.get(url);
    },

    getListDay: () => {
        const url = `/admin/post/list_day`;
        return axiosClient.get(url);
    },

    getAcountPosts: () => {
        const url = '';
        return axiosClient.get(url);
    }
}

export default postApi;