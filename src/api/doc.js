import { http } from '../utils/request'

export const apiPrefix = 'http://124.71.175.22:8088/doc/';

const uid = localStorage.getItem('uid');

export function getDoc(target, search = '', pageNumber = 1, pageSize = 15) {
  return http.get(`${apiPrefix}documentList?target=${target}&uid=${uid}&pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`)
}

export function getShare(objectKey) {
  return http.get(`${apiPrefix}share?objectKey=${objectKey}&uid=${uid}`)
}

export function downloadFile(objectKey) {
  return http.get(`${apiPrefix}file?objectKey=${objectKey}&uid=${uid}`)
}

export function uploadFile(file) {
  return http.post(`${apiPrefix}file?file=${JSON.stringify(file)}&uid=${uid}`)
}

export function deleteFile(objectKey) {
  return http.delete(`${apiPrefix}file?objectKeyList[]=${objectKey}&uid=${uid}`)
}

export function emptyBin() {
  return http.delete(`${apiPrefix}bin?uid=${uid}`)
}

export function restoreFromBin(objectKeyList){
  return http.put(`${apiPrefix}bin?objectKeyList=${objectKeyList}&uid=${uid}`)
}
