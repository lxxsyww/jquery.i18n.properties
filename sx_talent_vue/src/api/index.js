/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
import axios from 'axios'
// const BASE_URL = 'http://192.168.2.162:8080/api'
const BASE_URL = '/api'
// 1、轮播右侧新闻切换 方法
export const reqTalents = (typeCode, pageNum, pageSize) => ajax(`${BASE_URL}/article/content/list`, {
  typeCode,
  pageNum,
  pageSize,
})

//  Home路由 请求数据公共方法
export const reqNewsList = (typeCode, pageNum, pageSize, value) => axios(`${BASE_URL}/article/content/list?typeCode=${typeCode}&pageNum=${pageNum}&pageSize=${pageSize}`)




