import {reqSearchInfo} from '@/api'


const state = {
    searchInfo:{}
}
const actions = {
   async searchInfo({commit}){
    const data = await reqSearchInfo()
    commit('SEARCHINFO',data.data)
    }
}
const mutations = {
    SEARCHINFO(state,searchInfo){
        state.searchInfo = searchInfo
    }
}
const getters = {
    goodsList({searchInfo}){
        return searchInfo.goodsList || []
    },
    attrsList({searchInfo}){
        return searchInfo.attrsList || []
    },
    trademarkList({searchInfo}){
        return searchInfo.trademarkList || []
    },
}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}