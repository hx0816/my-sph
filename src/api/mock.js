import axios from 'axios'

const mock = axios.create({
    baseURL:'/mock',
    timeout:5000
})

mock.interceptors.response.use(res=>{
    return res.data
})

export default mock
