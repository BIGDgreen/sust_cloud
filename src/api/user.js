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

export function getCode(telephone) {
    return http.get(`${apiPrefix}getotp?telephone=${telephone}`)
}