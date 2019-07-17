<template>
  <div class="swiper_rt_news" v-if="notice.data">
    <div class="swiper_rt_news_items" v-for="(item,index) in notice.data.rows" :key="index">
      <div class="text">
        <img src="./images/yuan.png" alt="">
        <p class="ellipsis">{{item.title}}</p>
      </div>
      <div class="timer">[{{item.createTime | date-format}}]</div>
    </div>
    <div class="swiper_rt_news_items more">
      <div class="timer">更多》</div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Message',
    computed: {
      ...mapState(['notice'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./../../../common/variable.styl"
  .swiper_rt_news
    flex-grow 1
    padding 20px
    border 1px solid $border-color
    box-sizing border-box
    height 290px
    margin-left 30px
    display flex
    flex-direction column
    justify-content space-between

    .swiper_rt_news_items
        display flex
        flex-direction row
        justify-content flex-end
        align-items center

        .text
          display flex
          flex-direction row
          justify-content flex-start
          align-items center

          p
            width 430px
            margin-left 10px

        .timer
          color $timer-color


</style>
