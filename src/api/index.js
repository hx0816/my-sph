import request from './request'
import mock from './mock'

// 三级联动数据接口 /api/product/getBaseCategoryList GET
export const reqCategoryList = ()=>{
    return request('/product/getBaseCategoryList',{
        methods:'get'
    })
}

export const reqBannerList = ()=>{
    return mock('/banner',{methods:'get'})
}
