<template>
  <div class="yc_network_coutent">
    <ul class="yc_parent_nav">
      <p>个人中心</p>
      <li>
        <router-link to="/personal/settings/accountsettings" replace>
          <p>账号设置</p>
        </router-link>
      </li>
      <ul class="yc_child_nav">
        <li>
          <a href="/disk/mySet">
            <p>资料信息</p>
          </a>
        </li>
        <li>
          <a href="/api/user/bindChildren" onclick="frame_show()" target="view_parentframe">
            <p>绑定孩子</p>
          </a>
        </li>
      </ul>
      <li>
        <router-link to="/personal/settings/integralprofile">
          <p>积分</p>
        </router-link>
      </li>
      <ul class="yc_child_nav">
        <li>
          <router-link to="/personal/settings/pluginsettings">
            <p>我的积分</p>
          </router-link>
        </li>
        <li>
          <a href="/score/scoreTaskYc">
            <p>积分任务</p>
          </a>
        </li>
      </ul>
      <li>
        <router-link to="/personal/settings/pluginsettings">
          <p>插件设置</p>
        </router-link>
      </li>
    </ul>
    <div class="yc_network_iframe">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Settings'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .yc_network_coutent
    width: 1200px;
    margin: 20px auto 100px;
    overflow: hidden;
    position: relative;
    min-height: 670px;

    .yc_parent_nav
      float: left;
      width: 216px;
      background: #fff;
      box-shadow: 0 0 5px #f2f8fd;
      padding-bottom: 5px;

      > p
        height: 60px;
        text-align: center;
        font-size: 20px;
        color: #63666C;
        background: #EBEEF3;
        line-height: 60px;

      > li
        width: 100%;
        line-height: 60px;
        font-size: 16px;

        &:nth-of-type(2)
          > a
            > p
              background: url(./images/jf_icon_n.png) no-repeat 32px 20px;


        &:nth-of-type(3)
          > a
            > p
              background: url(./images/zwsz_zbl_icon_n.png) no-repeat 32px 20px;

        a
          background: url(./images/jf_icon_xl_n.png) no-repeat 187px 28px;
          color: #2E4561;
          display: block;
          text-indent: 82px;
          height: 60px;

          p
            background: url(./images/kj_icon_zlxx_n.png) no-repeat 32px 20px;

      > ul
        min-height: 50px;
        font-size: 14px;
        display: none;

    .yc_network_iframe
      width: 958px;
      float: left;
      box-shadow: 0 0 5px #f2f8fd;
      background: #fff;
      min-height: 255px;
      margin-left: 23px;
</style>
