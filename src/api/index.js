import request from 'axios'

//获取mock数据
export const delivery = (code) => request({
	url: 'static/data/index.json',
	method: 'get', // 默认是 get
})

//商品列表
export function goodsList(currentPage,pageSize){ //商品列表
    return  request({
        url:'/manage/nature/goods/list',
        method: 'post',
        params: {
        	currentPage:currentPage,
        	pageSize:pageSize
        }
    })
}