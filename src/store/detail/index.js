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
const getters = {}






export default {
    namespaced:true,
    state,
    actions,
    mutations
}