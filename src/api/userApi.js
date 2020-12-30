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

    signOut: () => {
        const url = 'auth/logout';
        return axiosClient.get(url);
    },

    createAccount: (dataForm) => {
        const url = 'auth/signup';
        return axiosClient.post(url, dataForm);
    },
    
    authorization: () => {
        const url = 'user/';
        return axiosClient.get(url);
    },

    getAllUser: () => {
        const url = 'admin/users/list';
        return axiosClient.get(url);
    },

    setUnapprovalUser: (userId) => {
        const url = `/admin/users/${userId}/unapproval`;
        return axiosClient.get(url);
    },

    setApprovalUser: (userId) => {
        const url = `/admin/users/${userId}/approval`;
        return axiosClient.get(url);
    }

}

export default userApi;