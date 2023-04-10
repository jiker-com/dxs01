import axios from 'axios'

axios.defaults.withCredentials = true
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000
})

// token 处理-未完成

export default service