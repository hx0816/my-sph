import axios from 'axios'

const mockRequest = axios.create({
    baseURL:'/mock',
    timeout:5000
})

mockRequest.interceptors.response.use(res=>{
    return res.data
})

export default mockRequest
