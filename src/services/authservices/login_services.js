import axiosConfig from "../../config/BaseUrl"

export function Loginuser(data) {
    return new Promise((reslove, reject) => {
        axiosConfig.post(`/auth/seller/login`, data).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function UserSignup(data) {
    return new Promise((reslove, reject) => {
        axiosConfig.post(`/auth/seller/register`, data).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function Forgetpassworduser(data) {
    return new Promise((reslove, reject) => {
        axiosConfig.post(`/auth/forgetpassword`, data).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function ChnageForgetpassword(token, data) {
    return new Promise((reslove, reject) => {
        axiosConfig.post(`/auth/reset-password/${token}`, data).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}