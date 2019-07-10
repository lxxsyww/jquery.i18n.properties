<template>
  <div class="yc_network">
    <div class="yc_network_banner">
      <div class="yc_network_banner_bg">
        <img src="./images/yc_network_banner.png">
        <div class="yc_network_count">
          <div class="photo_bg">
            <img class="photo yc_network_photo"
                 src="https://bj.bcebos.com/v1/wisdomedu-img/BFAA0FECDD194B7A974C60B7E1B27C18?authorization=bce-auth-v1%2F7642b4b48046452697e90662eed41ace%2F2017-12-29T08%3A33%3A39Z%2F-1%2F%2F0f06024af14dad05694f25b8c85572567591c72bbd0129d3175b4cdbd6e62208"
                 alt="" name="1888823457">
            <img class="teacher_namber" src="/assets/network/images/teacher_namber.png" alt="">
            <img class="student_namber" src="/assets/network/images/student_namber.png" alt="">
          </div>
          <div class="yc_network_left">
            <input id="userId" type="hidden" value="1888823457">
            <p class="name_mc yc_network_bame">李华</p>
            <ul>
              <li>
                <router-link to="/personal/settings/integralprofile">
                  <span></span>
                  <p>
                    <span>60</span>
                  </p>
                </router-link>
              </li>
              <li>
                <a id="signIn" onclick="signIn()"><span></span>
                  <p>签到</p></a>
              </li>
              <li>
                <a href="/score/scoreTaskYc"
                   onclick="Setshow();$('.yc_parent_nav>li').eq(1).click();$('.yc_parent_nav>.yc_child_nav').eq(1).find('li').eq(1).click();"
                   target="view_parentframe"><span></span>
                  <p>任务</p><i></i></a>
                <span class="scoreTaskYc_new"></span>
              </li>
            </ul>
            <div class="role_job" style="min-width: 150px;">
              <p class="role_child">我的孩子：</p>
              <p class="role_select"><span class="role_name"></span><img class="role_img" src="./images/jiantou3.png">
              </p>
              <ul class="role_change role_change1"></ul>
              <ul class="role_change role_change2"></ul>
            </div>
          </div>
          <div class="yc_network_right">
            <ul>
              <li :class="{hidden:isShow === 0}" @click="handleShow(0)">
                <router-link to="/personal/settings" replace>设置</router-link>
              </li>
              <li :class="{hidden:isShow === 1}" @click="handleShow(1)">
                <router-link to="/personal/personalspace" replace>
                  <span></span>
                  <p>个人空间</p>
                </router-link>
              </li>
              <li>
                <router-link to="/personal/personalhomepage" replace>
                  <span></span>
                  <p>个人主页</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PersonalCenter',
    data () {
      return {
        homeImg: 1,
        resourceImg: 0,
        talkImg: 0,
        isShow: 0
      }
    },

    computed: {},

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
      },

      handleShow(num){
        this.isShow = num
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .yc_network
    background-color #F2F8FD
    min-height 700px
    padding-bottom 40px

    .yc_network_banner
      background-size: 100% 100%;
      width: 100%;
      height: 147px;

      .yc_network_banner_bg
        height: 147px;
        width: 100%;
        position: relative;

        > img
          height: 100%;
          display: block;
          top: 73px;
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;


        .yc_network_count
          width: 1200px;
          margin: 0 auto;
          position: absolute;
          left: 0;
          right: 0;

          .photo_bg
            height: 75px;
            width: 75px;
            border-radius: 50%;
            box-shadow: 0 0 5px #49a4fa;
            background: #fff;
            margin-top: 36px;
            float: left;
            margin-right: 20px;
            position: relative;

            .yc_network_photo
              height: 67px;
              width: 67px;
              border-radius: 50%;
              margin: 4px auto;
              display: block;


            .teacher_namber,
            .student_namber
              position: absolute;
              width: 500px;
              top: 75px;
              left: 0;
              display: none;
              z-index: 6;


          .yc_network_left
            float: left;
            margin-left: 22px;

            .yc_network_bame
              font-size: 20px;
              color: #fff;
              margin: 39px 0 10px 0;

            > ul
              height: 18px;
              margin-bottom: 16px;

              li
                float: left;
                margin-right: 30px;
                height: 100%;
                display: inline-block;
                position: relative;
                cursor: pointer;

                a {
                  display: block;
                  height: 100%;
                  width: 100%;
                  font-size: 14px;
                  color: #fff;
                  line-height: 18px;
                  text-indent: 24px;
                }

                &:nth-of-type(1)
                  a
                    background: url(./images/grkj_icon_jf.png) no-repeat left;
                    color: #FFE400;

                &:nth-of-type(2)
                  a
                    background: url(./images/grkj_icon_qd.png) no-repeat left;

                &:nth-of-type(3)
                  a
                    background: url(./images/grkj_icon_rw.png) no-repeat left;

            .role_job
              font-size: 12px;
              color: #fff;
              position: relative;
              min-width: 150px;

              .role_child
                float: left;

              .role_select
                float: left;

                .role_name
                  margin-right: 10px;
                  float: left;

                .role_img
                  margin-left: 5px;
                  float: left;
                  margin-top: 3px;


              .role_change
                display: none;
                z-index: 1;
                overflow: hidden;
                position: absolute;
                min-height: 50px;
                min-width: 86px;
                background: #EAF4FF;
                border-radius: 4px;
                top: 14px;
                left: 58px;
                box-shadow: 0 0 10px #e1ecff;

          .yc_network_right
            line-height: 30px;
            float: right;
            margin-right: 13px;
            width: 203px;
            margin-top: 68px;
            height: 30px;
            position: relative;

            > ul
              display: block;
              height: 100%;

              li
                width: 90px;
                height: 30px;
                float: left;
                font-size: 14px;
                line-height: 30px;
                text-align: center;
                text-indent: 20px;
                cursor: pointer;
                position: relative;
                border-radius: 15px;
                background: rgba(255, 255, 255, 0.8);
                box-shadow: 0px 2px 6px 0px rgba(52, 103, 255, 0.6);
                margin-right: 23px;

                &.hidden
                  display none

                a
                  color: #347EFF;
                  display: block;

                &:last-child
                  margin-right: 0

                &:nth-of-type(1)
                  a
                    background: url(./images/grkj_icon_sz.png) no-repeat 16px 6px;

                &:nth-of-type(2)
                  a
                    background: url(./images/kjsy_icon_sy.png) no-repeat 7px 8px;

                &:nth-of-type(3)
                  a
                    background: url(./images/grkj_icon_zy.png) no-repeat 7px 6px;

</style>
