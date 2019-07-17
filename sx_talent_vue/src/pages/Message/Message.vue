<template>
  <div id="main">
    <div class="list">
      <ul>
        <li>
          <router-link to="/message">通知公告</router-link>
        </li>
      </ul>
    </div>
    <div class="list_side">
      <div class="list_side_top">通知公告</div>
      <ul class="list_side_box">
        <li v-for="(message,index) in messages" :key="index">
          <router-link to="/message/details">
            <div class="list_side_item">
              <div class="calendar">
                <span class="mounth">{{message.createTime | date-format}}</span>
                <span class="year">{{message.createTime | date-format-yyyy}}</span>
              </div>
              <div class="list_side_content">
                {{message.title}}
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <Pagination :paginationData="paginationData"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import {reqNewsList} from './../../api/index'

  import Pagination from './../../components/Pagination/Pagination'

  export default {
    name: 'Message',
    data () {
      return {
        messages: {},
        paginationData: {  //  控制分页器
          handleCurrentChange: (pageNum)=> {
            this.currentPage = pageNum
            reqNewsList('tzgg', pageNum, 5)
              .then((req) => {
                this.messages = req.data.data.rows
                this.paginationData.total = req.data.data.total
              })
              .catch((error) => {
                console.log(error)
              })
          },
          currentPage: 1, //初始页
          pageSizes: [5, 10, 20, 40],
          pageSize: 10, //    每页的数据
          total: 0
        }
      }
    },
    async mounted () {
      await reqNewsList('tzgg', 1, 5)
        .then((req) => {
          this.messages = req.data.data.rows
          this.paginationData.total = req.data.data.total
        })
        .catch((error) => {
          console.log(error)
        })
    },
    components: {
      Pagination
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./../../common/variable.styl"

  #main
    display flex
    flex-direction row
    justify-content space-between

    .list
      display flex
      flex 0 0 300px

      ul
        li
          a
            display inline-block
            width 300px
            height 76px
            line-height 76px
            background #FF8D48
            color #FFFFFF
            text-align center
            font-size 20px
            font-weight 700

    .list_side
      flex-grow 1
      display flex
      flex-direction column
      justify-content space-around
      margin-left 40px

      .list_side_top
        height 40px
        line-height 40px
        font-size 24px
        color #045AEA
        font-weight 700
        border-bottom 1px solid $border-color

      .list_side_box
        display flex
        flex-direction column
        justify-content space-around
        min-height 530px

        li
          a
            .list_side_item
              display flex
              flex-direction row
              justify-content space-around
              align-items center

              .calendar
                width 76px
                height 76px

                .mounth
                  display inline-block
                  width 76px
                  height 38px
                  line-height 38px
                  background #045AEA
                  font-size 20px
                  color #FFFFFF
                  text-align center

                .year
                  display inline-block
                  background #F7F7F7
                  font-size 20px
                  text-align center
                  width 76px
                  height 38px
                  line-height 38px
                  color #333333


              .list_side_content
                width 754px
                text-indent 32px
                margin-left 30px
                font-size 16px
                line-height 32px
                color #333333
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
</style>
