import axiosConfig from "../../config/BaseUrl";

export function workerscreate(data) {
    return new Promise((reslove, reject) => {
        axiosConfig.post(`/workers/create`, data).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function workersedit(data) {
    return new Promise((reslove, reject) => {
        axiosConfig.put(`/workers/edit`, data).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function workersgetsingle(data) {
    return new Promise((reslove, reject) => {
        axiosConfig.post(`/workers/single`, data).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}


export function workersgetall(data) {
    return new Promise((reslove, reject) => {
        axiosConfig.post(`/workers/allworkers`, data).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}


export function deleteworker(data) {
    return new Promise((reslove, reject) => {
        axiosConfig.post(`/workers/delete/worker`, data).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}