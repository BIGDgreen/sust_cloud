import { http } from '../utils/request'

export const apiPrefix = '/doc/';

const uid = localStorage.getItem('uid');

export function getDoc(target, search = '', page = 1, size = 6) {
  return http.get(`${apiPrefix}documentList?target=${target}&uid=${uid}&page=${page}&size=${size}&search=${search}`)
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
  return http.post(`${apiPrefix}fileDelete?objectKey=${objectKey}&uid=${uid}`)
}

export function emptyBin() {
  return http.post(`${apiPrefix}bin?uid=${uid}`)
}

export function restoreFromBin(objectKey){
  return http.post(`${apiPrefix}file?objectKey=${objectKey}&uid=${uid}`)
}
