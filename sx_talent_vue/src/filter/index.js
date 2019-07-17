import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'
// 自定义过滤器
Vue.filter('date-format', function (value, formatStr='MM-DD') {
  return format(value, formatStr)
})

Vue.filter('date-format-yyyy', function (value, formatStr='YYYY') {
  return format(value, formatStr)
})
