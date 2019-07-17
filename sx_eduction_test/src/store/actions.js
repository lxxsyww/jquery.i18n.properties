import {
  RECEIVE_ADDRESS,
  UPDATE_LOCATION
} from './mutation-types'

// 动态生成script标签，异步加载
// 在需要使用map地图的vue文件用引入
import BaiduMap from './../../static/js/map'

export default {
  // 异步获取地址
  async getAddress({commit}) {
    BaiduMap.init()
      .then((BMap) => {
        // 这个时候就可以访问到BMap了，
        let myCity = new BMap.LocalCity()
        myCity.get(result => {
          const address = result
          commit(RECEIVE_ADDRESS, {address})
        })
      })
  },

  updateLoaction({commit}, {location, cityId}) {
    commit(UPDATE_LOCATION, {location, cityId})
  }


}
