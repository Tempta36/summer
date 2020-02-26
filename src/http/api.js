/**
 * ajax请求配置
 */
import axios from 'axios'
import apiConfig from './config.js'

// import cookie from '../../static/js/cookie.js'

// axios默认配置
axios.defaults.timeout = 10000;   // 超时时间
axios.defaults.baseURL = apiConfig.baseURL;  // 默认地址

// 路由请求拦截
axios.interceptors.request.use(
    config => {
        //config.data = JSON.stringify(config.data);  
        config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        //判断是否存在ticket，如果存在的话，则每个http header都加上ticket
        // if (cookie.get("token")) {
        //用户每次操作，都将cookie设置成2小时
        // cookie.set("token",cookie.get("token") ,1/12)    
        // cookie.set("name",cookie.get("name") ,1/12)
        // 　　　　 config.headers.token = cookie.get("token");
        // 　　　　 config.headers.name= cookie.get("name");
        // }

        return config;
    },
    error => {
        return Promise.reject(error.response);
    });

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.status == 404) {
            console.log("response.data.resultCode是404")
            // 返回 错误代码-1 清除ticket信息并跳转到登录页面
            //      cookie.del("ticket")
            //      window.location.href='http://login.com'
            return
        } else {
            if (response.status === 200) {
                return Promise.resolve(response);
            }
            return Promise.reject(response)
        }
    },
    error => {
        return Promise.reject(error.response)   // 返回接口返回的错误信息
    });
export default axios;