import axiosClient from "./axiosClient";

const userApi = {
    getUser: (id) => {
        const url = `user/${id}`;
        return axiosClient.get(url);
    },

    signIn: (data) => {
        const url = 'auth/login';
        return axiosClient.post(url, data);
    },

    createAccount: (dataForm) => {
        const url = 'auth/signup';
        return axiosClient.post(url, dataForm);
    },
    
}

export default userApi;