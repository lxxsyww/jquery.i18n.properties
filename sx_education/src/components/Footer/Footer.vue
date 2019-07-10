<template>
  <div id="footer">
    <div class="baseftooer">
      <ul class="baseinfo">
        <li>联系方式: <span>400-1515-101</span></li>
        <li><a href="http://demo.edu.sxeduyun.com/help">帮助中心</a> <i>|</i> <a href="http://demo.edu.sxeduyun.com/help">用户反馈</a>
          <i>|</i> <a href="http://demo.edu.sxeduyun.com/loadSysProtocolLink">用户协议</a></li>
        <li><span>技术支持:山西欣宇通科技数码有限公司</span></li>
      </ul>
      <ul class="appbox">
        <li><img src="http://static.hseduyun.com/img/yc_ewm1.png">
          <p>iOS&amp;Android</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


  #footer
    width 100%
    height: 160px;
    margin: 0 auto;
    background: #295db7;

    .baseftooer
      font-size: 12px;
      width: 1000px;
      margin: 0 auto;
      line-height: 30px;
      overflow: hidden;
      padding-top: 30px;
      letter-spacing: 1px;
      color: #96b2de;

    .baseinfo
      float: left;
      margin-top: 18px;

      li
        a
          color #96b2de

        &:nth-of-type(1)
          color: #00ffe4;

          span
            font-size: 16px !important;
            display: block;
            float: right;
            margin-right: 500px;

          a
            color: #96b2de;
            font-size: 12px

          i
            margin: 0 6px;
            font-style: normal;

          &:last-child
            span
              font-size: 12px !important;

    .appbox
      float: right;

      li
        float: left;
        text-align: center;
        margin-right: 20px;
        margin-top: 20px;

        img
          width: 77px
          height: 77px

</style>

<style>
  body {
    position: relative;
  }

</style>
