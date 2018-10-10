/**
 * @author yangchunboy
 * @date 2018/10/10
 */
import request from 'request';
import { host } from '../config/config';

/**
 * 
 * @param { string }  method 请求的类型
 * @param { string } uriName 请求的最后的名字
 * @param { object } body 请求携带的参数
 */

const api = ({ method, uriName, body }) => {
    const params = {};
    if (method === 'get' || method === 'GET') {
        Object.assign(params, { method, uri: `${host}${uriName}` });
    }
    else if (method === 'post' || method === 'POST') {
        Object.assign(params, { method, uri: `${host}${uriName}`, body });
    }
    return Promise.resolve({
        then(resolve, reject) {
            request(params, (error, response, body) => {
                console.log(error, response, body);
                resolve( { body, response });
                reject(error);
            });
        }
    });
};

export default api;

