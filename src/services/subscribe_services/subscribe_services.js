import axiosConfig from "../../config/BaseUrl";

export function getallsubscribeers() {
    return new Promise((reslove, reject) => {
        axiosConfig.get(`/admin/subscribe/all`).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}