import { http } from '../utils/request'

const apiPrefix = 'http://124.71.175.22:8088/user/';

export function login(jobId, password) {
    return http.post(apiPrefix + 'pwd_login', {
        jobId, password
    })
}

export function phoneLogin(telephone, otpCode) {
    return http.post(apiPrefix + 'phone_login', {
        telephone, otpCode
    })
}

export function resetPwd(objId, password, telephone) {
    return http.get(`${apiPrefix}update?objId=${objId}&password=${password}&telephone=${telephone}`)
}

export function getCode(telephone) {
    return http.get(`${apiPrefix}getotp?telephone=${telephone}`)
}

export function getAllUsers(page) {
    return http.get(`${apiPrefix}getAllUserInfo?page=${page}`)
}

export function getUserInfo(telephone) {
    return http.get(`${apiPrefix}getUserInfo?telephone=${telephone}`)
}

export function batchImportMember(file) {
    return http.post(apiPrefix + 'insert/numbers', {
        file
    })
}

export function singleImportMember(user) {
    return http.post(apiPrefix + 'insert/one', {
        user
    })
}
