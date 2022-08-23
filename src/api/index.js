import request from './request'
import mockRequest from './mock'

// 三级联动数据接口 /api/product/getBaseCategoryList GET
export const reqCategoryList = ()=>{
    return request('/product/getBaseCategoryList',{
        methods:'get'
    })
}

export const reqBannerList = ()=>{
    return mockRequest('/banner',{methods:'get'})
}

export const reqFloorList = ()=>{
    return mockRequest.get('/floor')
}
