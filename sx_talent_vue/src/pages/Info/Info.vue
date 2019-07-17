<template>
  <div id="main">
    <div class="list_lf_side">
      <ul class="ul_box">
        <li>
          <router-link to="/info/talents">
            人才资讯
          </router-link>
        </li>
        <li>
          <router-link to="/info/international">
            国际人才
          </router-link>
        </li>
        <li>
          <router-link to="/info/experts">
            专家风采
          </router-link>
        </li>
        <li>
          <router-link to="/info/exchange">
            人才科技交流
          </router-link>
        </li>
      </ul>
    </div>
    <keep-alive>
      <router-view :key="$route.fullPath"/>
    </keep-alive>
  </div>
</template>

<script>

  import NewsList from './NewsList/NewsList'

  export default {
    name: 'Info',
    components: {
      NewsList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./../../common/variable.styl"
  #main
    display flex
    flex-direction row
    justify-content space-between

    .list_lf_side
      .ul_box
        li
          a
            display inline-block
            width 300px
            hieght 50px
            line-height 50px
            text-align center
            background $background-color
            color #FFFFFF
            margin-bottom 1px
            font-size 16px
            &.router-link-active
              background #FF8D48
</style>
