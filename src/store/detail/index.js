import { reqGoodsInfo, reqAddOrGetShopCart } from '@/api'

const state = {
    goodsInfo: {}
}
const actions = {
    // 获取详情数据
    async goodsInfo({ commit }, skuId) {
        const result = await reqGoodsInfo(skuId)
        if (result.code === 200) {
            commit('GOODSINFO', result.data)
        }
    },
    // 添加到购物车
    async addCart(_, { skuId, skuNum }) {
        const result = await reqAddOrGetShopCart(skuId, skuNum)
        console.log(result)
    }

}
const mutations = {
    GOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    }
}
const getters = {
    categoryView({ goodsInfo }) {
        return goodsInfo.categoryView || {}
    },
    skuInfo({ goodsInfo }) {
        return goodsInfo.skuInfo || {}
    },
    spuSaleAttrList({ goodsInfo }) {
        return goodsInfo.spuSaleAttrList || []
    },

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}