<template>
  <div>
    <div class="yc_user_nav">
      <ul>
        <li :class="{active:homeImg===1}" @click="handleHome(1)">
          <router-link to="/personal/personalhomepage/homepage" replace>
            <img src="./images/zhuye_s.png" v-show="homeImg===1">
            <img src="./images/zhuye_n.png" v-show="homeImg===0">
            <p>主页</p>
          </router-link>
        </li>
        <b>|</b>
        <li :class="{active:resourceImg===1}" @click="handleResource(1)">
          <router-link to="/personal/personalhomepage/resource" replace>
            <img src="./images/ziyuan_n.png" v-show="resourceImg===0">
            <img src="./images/ziyuan_s.png" v-show="resourceImg===1">
            <p>资源</p>
          </router-link>
        </li>
        <b>|</b>
        <li :class="{active:talkImg===1}" @click="handleTalk(1)">
          <router-link to="/personal/personalhomepage/talk" replace>
            <img src="./images/shuoshuo_n.png" v-show="talkImg===0">
            <img src="./images/shuoshuo_s.png" v-show="talkImg===1">
            <p>说说</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="yc_user_iframe">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data () {
      return {
        homeImg: 1,
        resourceImg: 0,
        talkImg: 0
      }
    },
    methods: {
      handleHome (flag) {
        this.homeImg = flag
        this.resourceImg = 0
        this.talkImg = 0
      },

      handleResource (flag) {
        this.homeImg = 0
        this.resourceImg = flag
        this.talkImg = 0
      },

      handleTalk (flag) {
        this.homeImg = 0
        this.resourceImg = 0
        this.talkImg = flag
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .yc_user_nav
    width: 100%;
    height: 90px;
    line-height: 90px;
    background: #fff;

    ul
      width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 99;

      li
        float: left;
        padding: 0 30px;
        height: 100%;
        display: block;

        &:nth-of-type
          margin-left: 188px;

        &.active
          a
            color #347eff

        a
          display inline-block
          width 130px
          height 90px

          img
            float: left;
            margin-right: 10px;
            margin-top: 33px;

          p
            float left

      b
        float: left;
        display: block;
        color: #e5eaf5;

  .yc_user_iframe
    width: 1200px;
    margin: 0 auto;
    margin-top: 40px;

</style>
