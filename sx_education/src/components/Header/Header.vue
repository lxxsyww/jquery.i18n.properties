<template>
  <div id="header" class="clear">
    <router-link to="/home" class="lf">
      <img src="./../../images/logo_s.png" alt="">
    </router-link>
    <ul class="ul_list lf clear">
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/space">校园空间</router-link>
      </li>
      <li>
        <router-link to="/resource">资源中心</router-link>
      </li>
      <li>
        <router-link to="/personal">个人中心</router-link>
      </li>
      <li>
        <router-link to="/application">应用中心</router-link>
      </li>
      <li>
        <router-link to="/internet">互联</router-link>
      </li>
    </ul>
    <ul class="userInfo lf clear" v-if="seen">
      <li>
        <i class="el-icon-search search"></i>
      </li>
      <li>
        <i class="el-icon-chat-dot-round message"></i>
      </li>
      <li class="user_info">
        <img src="./images/avatar.png" alt="">
        <span>李文华</span>

        <ul class="ulItem">
          <li>
            <a href="javasccript:;">
              <i class="el-icon-setting"></i>
              个人设置
            </a>
          </li>
          <li>
            <a href="javasccript:;">
              <i class="el-icon-help"></i>
              帮助中心
            </a>
          </li>
          <li>
            <a href="javasccript:;">
              <i class="el-icon-switch-button"></i>
              退出账号
            </a>
          </li>
        </ul>
      </li>
    </ul>

    <div class="login_or_register" v-else>
      <el-button type="primary" @click="goTo('/login')">登陆</el-button>
      <el-button type="success" @click="goTo('/register')">注册</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        seen: false
      }
    },
    mounted () {

    },
    methods: {
      goTo (path) {
        this.$router.replace(path)
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #header
    width 1200px
    margin 0 auto
    height 80px
    line-height 80px
    text-align center
    position relative

    > a
      line-height 47px

    .ul_list
      width: 630px;
      margin-left: 20px;

      li
        float: left;

        > a
          display: inline-block;
          width: 80px;
          height: 80px;
          line-height: 80px;
          text-align: center;

        .router-link-active
          color: #0D53FF;
          border-bottom: 2px solid #1054FF;
          box-sizing: border-box;


    .userInfo
      > li
        float left
        text-align center
        margin-right 30px

        > i
          font-size 26px
          color #347EFF

        img
          float left
          width 40px
          height 40px
          border-radius 50%
          vertical-align middle
          margin-top 16px


        span
          float left
          margin-left 10px


        .ulItem
          position absolute
          top 80px
          right 30px;
          display none

          li
            padding 0 20px
            height 40px
            line-height 40px

            a
              display inline-block
              width 100%
              height 100%


        .user_info
          padding 0 20px

          li
            height 40px
            line-height 40px


      &.user_info:hover
        .ulItem
          display block

    .login_or_register
      float left
</style>
