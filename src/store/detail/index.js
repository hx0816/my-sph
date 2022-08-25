import {reqGoodsInfo} from '@/api'

const state = {
    goodsInfo:{}
}
const actions = {
   async goodsInfo({commit},skuId){
        const result = await reqGoodsInfo(skuId)
        if(result.code === 200){
            commit('GOODSINFO',result.data)
        }
    }
}
const mutations = {
    GOODSINFO(state,goodsInfo){
        state.goodsInfo = goodsInfo
    }
}
const getters = {
    categoryView({goodsInfo}){
        return goodsInfo.categoryView || {}
    },
    skuInfo({goodsInfo}){
        return goodsInfo.skuInfo || {}
    },
    spuSaleAttrList({goodsInfo}){
        return goodsInfo.spuSaleAttrList || []
    },

}






export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}