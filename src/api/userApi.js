import axiosClient from "./axiosClient";

const userApi = {
    getUser: (params) => {
        const url = '/users';
        return axiosClient.get(url, {params});
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