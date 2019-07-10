<template>
  <div class="yc_network_coutent yc_network_coutent1" style="display: block;">
    <ul class="yc_network_nav" style="">
      <li>
        <router-link to="/personal/personalspace/SpaceHomePage">
          <p>空间首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/personal/personalspace/MyAgent">
          <p>我的待办</p>
        </router-link>
      </li>
      <li>
        <router-link to="/personal/personalspace/MyResources">
          <p>我的资源</p>
        </router-link>
      </li>
      <li>
        <router-link to="/personal/personalspace/MyApplication">
          <p>我的应用</p>
        </router-link>
      </li>
      <li>
        <router-link to="/personal/personalspace/MySocial">
          <p>我的社交</p>
        </router-link>
      </li>
    </ul>
    <div class="organizationApply" style="position: absolute;top: 333px;margin-left: 0;width: 215px;">
      <h5><p>机构空间</p></h5>
      <ul></ul>
    </div>
    <div class="yc_network_iframe">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <rightSide/>
  </div>
</template>

<script>
  import rightSide from './../../../components/rightSide/rightSide'

  export default {
    name: 'PersonalSpace',
    components: {
      rightSide
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .yc_network_coutent
    width: 1200px;
    margin: 20px auto 100px;
    overflow: hidden;
    display: none;
    position: relative;
    min-height: 670px;

    .yc_network_nav
      float: left;
      width: 216px;
      background: #fff;
      box-shadow: 1px 0px 4px 0px rgba(48, 64, 90, 0.1);
      padding: 5px 0;

      li
        width: 100%;
        line-height: 60px;
        font-size: 16px;
        border-left: 5px solid #fff;
        border-bottom: 1px solid #E5E8EE;

        &:hover
          background: #ebf2ff;
          border-left: 5px solid #357eff;
          border-bottom: none;

          a
            background: url(./images/com_icon_jt.png) no-repeat 187px 24px;
            color: #357eff;

        &:nth-of-type(2)
          a
            p
              background: url(./images/grkj_dh_icon_xxgl_n.png) no-repeat 32px 20px;

        &:nth-of-type(3)
          a
            p
              background: url(./images/grkj_dh_icon_zygl_n.png) no-repeat 32px 20px;

        &:nth-of-type(4)
          a
            p
              background: url(./images/grkj_dh_icon_yygl_n.png) no-repeat 32px 20px;

        &:nth-of-type(5)
          a
            p
              background: url(./images/grkj_dh_icon_sqgl_n.png) no-repeat 32px 20px;

        a
          display: block;
          color: #63666c;
          text-indent: 73px;
          height: 60px;

        p
          background: url(./images/grkj_dh_icon_kjsy_n.png) no-repeat 32px 20px


    .organizationApply
      position: absolute;
      top: 333px;
      margin-left: 0;
      width: 215px;
      min-height: 226px;
      box-shadow: 1px 0px 4px 0px rgba(48, 64, 90, 0.1);
      border-radius: 4px;
      background: #fff;
      float: left;

      h5
        width: 200px;
        margin: 21px auto 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid #C9DEF5;
        height: 32px;

        p
          font-size: 16px;
          color: #183672;
          margin: 0;

      ul
        width: 194px;
        min-height: 110px;
        margin: 14px auto;

  .yc_network_iframe
    width: 711px;
    float: left;
    box-shadow: 0 0 5px #f2f8fd;
    background: #fff;
    min-height: 255px;
    margin-left: 23px;
</style>
