import {stringify} from 'qs' // 引用qs（类似引用vue等--他是全局的）一种转换数据的工具  qs是webpack里的
import axios from 'axios'
import Vue from 'vue'
//引用toast插件
import toast from '@/components/template/toast/';
Vue.use(toast)

axios.defaults.baseURL = process.env.VUE_APP_API;  //配置默认地址
axios.defaults.timeout = 10000; //设置ajax请求超时时间，这里为10s

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.data.code == 504){
    	
    	
    }else if(response.data.code == 507){
    	
    }
    if(response.data.code !== 0){  //可以统一在这里处理错误信息
		Vue.$abbo.toast.show(response.data.msg)
		return Promise.reject(error);
	}
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    Vue.$abbo.toast.show(error.response.data.status)
    return Promise.reject(error);
  });


if (process.env.NODE_ENV === 'development') { // 开发环境
	axios.defaults.headers.common['mAuthToken'] = '/D3PzPWrBUwLLFJs93V1oG2f9fmQWlA/CAjO8sZWFU0=';    //配置token
} else { // 生产环境
	if(localStorage.getItem('mAuthToken')==null){  //不存在 ，
	    if(isRequest){
	      isRequest = false;
	      weiCode(function(){
	        isRequest = true;
	        location.reload()
	      })
	    }
	}else{   //存在
	    axios.defaults.headers.common['mAuthToken'] = localStorage.getItem("cAuthToken");
	}
}





// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    
    return config;
  }, function (error) {
    // 对请求错误做些什么
    
    return Promise.reject(error);
  });






