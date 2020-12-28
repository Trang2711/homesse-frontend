import axiosClient from "./axiosClient";

const notificationApi = {
    getNotification: (params) => {
        const url = '/users';
        return axiosClient.get(url, {params});
    },
}

export default notificationApi;