<template>
  <div class="list_rt_side">
    <div class="list_top">{{title}}</div>
    <ul>
      <li v-for="(item,index) in news" :key="index">
        <router-link to="/details">
          <p class="ellipsis">{{item.title}}</p>
          <span>{{item.createTime | date-format}}</span>
        </router-link>
      </li>
    </ul>
    <Pagination :paginationData="paginationData"/>
  </div>
</template>

<script>
  import {reqNewsList} from '../../../api'
  import Pagination from '../../../components/Pagination/Pagination'

  export default {
    name: 'NewsList',
    data () {
      return {
        news: {},
        title: '',
        paginationData: {  //  控制分页器
          handleCurrentChange: (pageNum) => {

          },
          currentPage: 1, //初始页
          pageSizes: [5, 10, 20, 40],
          pageSize: 10, //    每页的数据
          total: 0
        }
      }
    },
    async mounted () {
      if (this.$route.fullPath === '/info/international') {
        await reqNewsList('gjrc', 1, 10)
          .then((req) => {
            this.news = req.data.data.rows
            this.title = req.data.data.message
            this.paginationData.total = req.data.data.total
            this.paginationData.handleCurrentChange = (pageNum) => {
              reqNewsList('gjrc', pageNum, 10)
                .then((req) => {
                  this.news = req.data.data.rows
                  this.paginationData.total = req.data.data.total
                  this.paginationData.currentPage = pageNum
                })
                .catch((error) => {
                  console.log(error)
                })
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else if (this.$route.fullPath === '/info/experts') {
        await reqNewsList('zjfc', 1, 10)
          .then((req) => {
            this.news = req.data.data.rows
            this.title = req.data.data.message
            this.paginationData.handleCurrentChange = (pageNum) => {
              reqNewsList('zjfc', pageNum, 10)
                .then((req) => {
                  this.news = req.data.data.rows
                  this.paginationData.total = req.data.data.total
                  this.paginationData.currentPage = pageNum
                })
                .catch((error) => {
                  console.log(error)
                })
            }
            this.paginationData.total = req.data.data.total
          })
          .catch((error) => {
            console.log(error)
          })
      } else if (this.$route.fullPath === '/info/exchange') {
        await reqNewsList('rckjjl', 1, 10)
          .then((req) => {
            this.news = req.data.data.rows
            this.title = req.data.data.message
            this.paginationData.handleCurrentChange = (pageNum) => {
              reqNewsList('rckjjl', pageNum, 10)
                .then((req) => {
                  console.log(req)
                  this.news = req.data.data.rows
                  this.paginationData.total = req.data.data.total
                  this.paginationData.currentPage = pageNum
                })
                .catch((error) => {
                  console.log(error)
                })
            }
            this.paginationData.total = req.data.data.total
          })
          .catch((error) => {
            console.log(error)
          })
      }else if (this.$route.fullPath === '/info/talents') {
        await reqNewsList('rczx', 1, 10)
          .then((req) => {
            this.news = req.data.data.rows
            this.title = req.data.data.message
            this.paginationData.handleCurrentChange = (pageNum) => {
              reqNewsList('rczx', pageNum, 10)
                .then((req) => {
                  this.news = req.data.data.rows
                  this.paginationData.total = req.data.data.total
                  this.paginationData.currentPage = pageNum
                })
                .catch((error) => {
                  console.log(error)
                })
            }
            this.paginationData.total = req.data.data.total
          })
          .catch((error) => {
            console.log(error)
          })
      }

    },
    components: {
      Pagination
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/variable.styl"
  .list_rt_side
    display flex
    flex-grow 1
    flex-direction column
    margin-left 40px

    > div
      height 45px
      line-height 45px
      border-bottom $border-bottom
      font-size 24px
      color $background-color
      font-weight 700

    ul
      min-height 500px

      li
        a
          width 100%
          height 45px
          line-height 45px
          border-bottom $border-bottom
          display flex
          flex-direction row
          justify-content space-between
          align-items center

          p
            width 800px
</style>
