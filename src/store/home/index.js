import {
    reqCategoryList,
    reqBannerList,
    reqFloorList
} from '@/api'

const state = {
    categoryList: [],
    bannerList: [],
    floorList:[]
}
const actions = {
    // 获取分类数据
    async categoryList({ commit }) {
        const data = await reqCategoryList()
        commit('CATEGORYLIST', data.data)
    },
    // 获取listContainer轮播图数据
    async bannerList({ commit }) {
        const data = await reqBannerList()
        commit('BANNERLIST', data.data)
    },
    // 获取floor数据
    async floorList({ commit }) {
        const data = await reqFloorList()
        if(data.code === 200){
            commit('FLOORLIST',data.data)
        }
    }

}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}