import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

//备份原来的push方法
let originPush = VueRouter.prototype.push
// 重写push方法
VueRouter.prototype.push  = function(location,resolve,reject){
   if(resolve && reject){
    //call调用确保this指向VueRouter实例
    originPush.call(this,location,resolve,reject)
   }else{
    originPush.call(this,location,()=>{},()=>{})
   }
}

//备份原来的replace方法
let originReplace = VueRouter.prototype.replace
// 重写push方法
VueRouter.prototype.replace  = function(location,resolve,reject){
   if(resolve && reject){
    //call调用确保this指向VueRouter实例
    originReplace.call(this,location,resolve,reject)
   }else{
    originReplace.call(this,location,()=>{},()=>{})
   }
}

Vue.use(VueRouter)


const routes = [
    {
        path:'/home',
        component:Home,
        meta:{
            show:true
        }
    },
    {
        path:'/search/:keyword?',
        component:Search,
        name:'search',
        meta:{
            show:true
        },
        props:true
    },
    {
        path:'/login',
        component:Login,
        meta:{
            show:false
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            show:false
        }
    },
    {
        name:'detail',
        path:'/detail/:id',
        component:Detail,
        meta:{
            show:true
        }
    },
    {
        path:'/',
        redirect:'/home'
    }
]

const router = new VueRouter({
    routes,
    scrollBehavior(to,from,savedPosition){
        return {y:0}
    }
})


export default router