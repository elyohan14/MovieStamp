import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

Vue.prototype.$api = axiosInstance
