import axiosClient from "./axiosClient";

const userApi = {
    getAll: (params) => {
        const url = '/users';
        return axiosClient.get(url, {params});
    },

    getUser: (id) => {
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },
    
}

export default userApi;