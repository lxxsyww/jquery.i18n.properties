import {
  RECEIVE_NOTICE,
  RECEIVE_TANLENS,
  RECEIVE_INTERNATIONAL_TALENT,
  RECEIVE_EXPERTS
  // RECEIVE_DYNAMIC,
  // RECEIVE_BUILDING,
  // RECEIVE_ENGINEERING
} from './mutation-types'

import {
  reqTalents
} from './../api/index'

import axios from 'axios'

export default {
  // typeCode: 'rczx',pageNum:1,pageSize:8
  //  人才资讯
  async getNews ({commit}, {typeCode, pageNum, pageSize, callback}) {
    if (typeCode === 'rczx') {
      const result = await reqTalents(typeCode, pageNum, pageSize)
      if (result.status === 200) {
        commit(RECEIVE_TANLENS, result.data)
        callback && callback()
      }
    }else if (typeCode === 'gjrc') {
      const result = await reqTalents(typeCode, pageNum, pageSize)
      if (result.status === 200) {
        commit(RECEIVE_INTERNATIONAL_TALENT, result.data)
        callback && callback()
      }
    } else if (typeCode === 'zjfc') {
      const result = await reqTalents(typeCode, pageNum, pageSize, callback)
      if (result.status === 200) {
        commit(RECEIVE_EXPERTS, result.data)
        callback && callback()
      }
    }
    /*else if (typeCode === 'xmzs') {
      const result = await reqTalents(typeCode, pageNum, pageSize)
      if (result.status === 200) {
        commit(RECEIVE_ITEM_SHOW, result.data)
        callback && callback()
      }
    } else if (typeCode === 'cgzs') {
      const result = await reqTalents(typeCode, pageNum, pageSize)
      if (result.status === 200) {
        commit(RECEIVE_ACHIEVEMENT, result.data)
        callback && callback()
      }
    }*/

  },

  //  通知公告
  async getNotice ({commit}) {
    const url = 'http://192.168.2.162:8080/api/article/content/list?typeCode=tzgg&pageNum=1&pageSize=7'
    await axios.get(url)
      .then((req) => {
        commit(RECEIVE_NOTICE, req.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  //  人才动态
  async getDynamic ({commit}) {
    const url = 'http://192.168.2.162:8080/api/article/content/list?typeCode=rcdt&pageNum=1&pageSize=7'
    const result = await axios.get(url)
      .then((req) => {
        commit(RECEIVE_NOTICE, req.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  //  党建工作
  async getBuilding ({commit}) {
    const url = 'http://192.168.2.162:8080/api/article/content/list?typeCode=djgg&pageNum=1&pageSize=7'
    await axios.get(url)
      .then((req) => {
        commit(RECEIVE_NOTICE, req.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  //  引智成果
  async getEngineering ({commit}) {
    const url = 'http://192.168.2.162:8080/api/article/content/list?typeCode=yzcg&pageNum=1&pageSize=7'
    await axios.get(url)
      .then((req) => {
        commit(RECEIVE_NOTICE, req.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
