import { http } from '../utils/request'

const apiPrefix = 'http://124.71.175.22:8088/doc/';

export function getDoc() {
  return http.get(`${apiPrefix}getotp?telephone=${telephone}`)
}

export function getShare(objectKey, uid) {
  return http.get(`${apiPrefix}getotp?objectKey=${objectKey}&uid=${uid}`)
}

export function deleteFile() {
  return http.delete(`${apiPrefix}getotp?objectKeyList=${objectKey}&uid=${uid}`)
}
