import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from './store'
// 引入mockServe
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'


Vue.config.productionTip = false
// 三级联动组件全局注册
Vue.component(TypeNav.name,TypeNav)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
