import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

// 引入使用element-ui
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)

// 引入mockServe
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'

// 创建事件总线
Vue.prototype.$bus = new Vue()


Vue.config.productionTip = false
//全局组件注册
// 三级联动组件全局注册
Vue.component(TypeNav.name,TypeNav)
// 轮播图组件
Vue.component(Carousel.name,Carousel)
// 分页器组件
Vue.component(Pagination.name,Pagination)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
