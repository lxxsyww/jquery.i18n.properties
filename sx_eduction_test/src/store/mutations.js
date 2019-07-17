/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  UPDATE_LOCATION
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },

  [UPDATE_LOCATION](state, {location, cityId}) {
    state.address.name = location
    state.address.cityId = cityId
  }

}
