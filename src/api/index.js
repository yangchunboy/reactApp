/**
 * @author yangchunboy
 * @date 2018/10/10
 */
// import request from 'request';
import { host } from '../config/config';

/**
 * 
 * @param { string }  method 请求的类型
 * @param { string } urlName 请求的最后的名字
 * @param { object } body 请求携带的参数
 */

const api = ({ method, urlName, body }) => {
    const url = `${host}${urlName}`;
    const params = {
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'content-type': 'application/json'
        },
        // method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    };
    if (method === 'get' || method === 'GET') {
        Object.assign(params, { method });
    }
    else if (method === 'post' || method === 'POST') {
        Object.assign(params, { method, body });
    }

    // return fetch(url, params).then(response => response.json())
    //     .then(data => data)
    //     .catch(error => error);
    return fetch(url, params).then(response => response.json())
        .then((data) => {
            return data;
        }, (error) => {
            return error;
        })
};

export default api;

