import {reqCategoryList} from '@/api'
import {reqBannerList} from '@/api'

const state = {
    categoryList:[],
    bannerList:[]
}
const actions = {
   async categoryList({commit}){
        const data = await reqCategoryList()
        commit('CATEGORYLIST',data.data)
    },
   async bannerList({commit}){
        const data = await reqBannerList()
        commit('BANNERLIST',data.data)
    }
    
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    }
}
const getters = {}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}