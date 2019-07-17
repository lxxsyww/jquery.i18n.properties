<template>
  <header id="header">
    <div class="header_top">
      <h4 @click="$router.push('/home')">山西（国际）人才管理平台</h4>
      <div class="header_top_right">
        <div class="welcome_user">
          <a href="javascript:">登陆</a>
          <a href="javascript:;" style="display: none">欢迎回来&nbsp;&nbsp;&nbsp;&nbsp;[麦兜兜]</a>
        </div>
        <div class="language ">
          English
        </div>
      </div>
    </div>
    <nav id="nav">
      <ul class="nav_header">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/message">通知公告</router-link>
        </li>
        <li>
          <router-link to="/info">人才资讯</router-link>
        </li>
        <li>
          <a href="javascript:;">业务平台</a>
        </li>
        <li>
          <router-link to="/info/international">国际人才</router-link>
        </li>
        <li>
          <router-link to="/info/experts">专家风采</router-link>
        </li>
        <li>
          <a href="javascript:;">人才科技交流</a>
        </li>
        <li>
          <router-link to="/Results">项目成果</router-link>
        </li>
        <li>
          <a href="javascript:;">网上办事</a>
        </li>
        <li>
          <a href="javascript:;">数据库</a>
        </li>
        <li>
          <a href="javascript:;">统计查询服务</a>
        </li>
        <li>
          <router-link to="/relation">联系我们</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./../../common/variable.styl"
  #header
    margin 0 auto 20px
    background url("./images/hh.png") no-repeat center center

    .header_top
      width 1200px
      height 90px
      margin 0 auto
      display -webkit-flex
      display flex
      flex-direction row
      justify-content space-between
      align-items center

      h4
        font-size 20px
        font-weight bold
        color #075CEA
        cursor: pointer;

      .header_top_right
        display flex
        flex-direction row
        justify-content space-around
        align-items center

        .welcome_user
          color #4276ED

          a
            font-size 10px
            color #4276ED

        .language
          font-size 10px
          color #4276ED
          margin-left 20px

    #nav
      width 100%
      background $background-color

      .nav_header
        display flex
        flex-direction row
        justify-content space-around
        align-items center
        width 1200px
        margin 0 auto

        li
          a
            display inline-block
            height 60px
            line-height 60px
            padding 0 15px
            color: #FEFFFF
            text-align center
            font-size 16px

</style>
