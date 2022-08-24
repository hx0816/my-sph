import request from './request'
import mockRequest from './mock'

// 三级联动数据接口 /api/product/getBaseCategoryList GET
export const reqCategoryList = () => {
    return request('/product/getBaseCategoryList', {
        methods: 'get'
    })
}

// 首页轮播图数据
export const reqBannerList = () => {
    return mockRequest('/banner', { methods: 'get' })
}

//首页floor数据
export const reqFloorList = () => {
    return mockRequest.get('/floor')
}

// search数据 /api/list  POST
// 可选参数
// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
//   }
export const reqSearchInfo = (data={}) =>{
    return request({
        url:'/list',
        method:'post',
        data
    })
}
