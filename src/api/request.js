import axios from 'axios'
// 引入进度条 start方法开始  done方法结束
import nprogress from 'nprogress'
// 引入nprogress样式
import 'nprogress/nprogress.css'

const request = axios.create({
    baseURL:'/api',
    timeout:5000
})

request.interceptors.request.use(config=>{
    nprogress.start()
    return config
})
request.interceptors.response.use(res=>{
    nprogress.done()
    return res.data
})


export default request