import axiosClient from "./axiosClient";

const userApi = {
    getUser: (params) => {
        const url = '/users';
        return axiosClient.get(url, {params});
    },

    // getUser: (id) => {
    //     const url = `/users/${id}`;
    //     return axiosClient.get(url);
    // },
    
}

export default userApi;