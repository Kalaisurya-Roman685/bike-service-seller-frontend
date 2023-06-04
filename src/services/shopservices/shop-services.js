import axiosConfig from "../../config/BaseUrl";

export function ShopCreateservice(data) {
    console.log(data, "data")
    return new Promise((resolve, reject) => {
        axiosConfig.post(`/bike/seller/create`, data).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function SkillUpdate(id, data) {
    return new Promise((resolve, reject) => {
        axiosConfig.put(`/bike/seller/update`, data).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function SkillDelete(id) {
    return new Promise((resolve, reject) => {
        axiosConfig.delete(`/skills/delete/${id}`).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function SkillSingleDatas(id) {
    return new Promise((resolve, reject) => {
        axiosConfig.get(`/skills/single/${id}`).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function SkillAllData(id) {
    return new Promise((resolve, reject) => {
        axiosConfig.get(`/skills/allskills/${id}`).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}