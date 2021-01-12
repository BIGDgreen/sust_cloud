import axios from 'axios';
import { Message } from 'element-ui';
import { baseUrl } from '../utils/constants';
// 创建axios实例
const service = axios.create({
    timeout: 10000, // 超时时间
    withCredentials: true
});
// 根据环境设置默认接口url
service.defaults.baseURL = baseUrl;

// 设置post请求头
service.defaults.headers.post['Content-Type'] = 'application/json';

// 响应拦截
service.interceptors.response.use((response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
        if(response.data.status === 'success') {
            return Promise.resolve(response.data);
        } else {
            const { errorMsg } = response.data.data;
            Message({
                message: errorMsg || '未知错误',
                type: 'error'
            });
            return Promise.reject(response.data.data);
        }
    } else {
        return Promise.reject(response.data);
    }
}, (err) => {
    let errMsg = '';
    if (err && err.response.status) {
        switch (err.response.status) {
            case 401:
                errMsg = '登录状态失效，请重新登录';
                break;
            case 403:
                errMsg = '拒绝访问';
                break;
            case 408:
                errMsg = '请求超时';
                break;
            case 500:
                errMsg = '服务器内部错误';
                break;
            case 501:
                errMsg = '服务未实现';
                break;
            case 502:
                errMsg = '网关错误';
                break;
            case 503:
                errMsg = '服务不可用';
                break;
            case 504:
                errMsg = '网关超时';
                break;
            case 505:
                errMsg = 'HTTP版本不受支持';
                break;
            default:
                errMsg = err.response.data.msg || '网络错误';
                break;
        }
    }
    else {
        errMsg = err || '网络错误';
    }
    console.log(errMsg);
    return Promise.reject(errMsg);
});
class HTTP {
    /**
     * get方法，对应get请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    get(url) {
        return new Promise((resolve, reject) => {
            service.get(url)
                .then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                });
        });
    }
    /**
     * post方法，对应post请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    post(url, params) {
        return new Promise((resolve, reject) => {
            service.post(url, params)
                .then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                });
        });
    }
}
const http = new HTTP();
export { service, http };
//# sourceMappingURL=http.js.map