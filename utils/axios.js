import Vue from 'vue'
import axios from 'axios';
import stores from './../store/index'
import router from '../router';



// let baseURL='http://192.168.0.95';

// const http = axios.create({
//     baseURL: 'http://192.168.0.95:3763',  //后台服务地址
//     timeout:120000,    //请求超时时间
//     withCredentials:true,   //是否允许带cookie这些
//     headers:{
//         'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'   //设置请求头请求格式为json
//     }
// })



//请求拦截器
axios.interceptors.request.use(config =>{
    
    config.data.append('identity',0);
    let token = sessionStorage.getItem('token');
    if(token){
        config.headers.token = token;
    }
    
    return config;
},(error)=>{
    return Promise.reject(error);
})

//响应拦截器
axios.interceptors.response.use(response=>{
    if(response.data.state == 1){
        window.location.href = "/Login";
    }
    return response.data

},function(error){
    
})



export default axios

