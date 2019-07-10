<template>
  <section class="jf_box">
    <div class="jf_up">
      <div class="jf_up_jftitle">
        <span class="jf_up_title">积分概况</span>
        <span onclick="window.open('http://demo.edu.sxeduyun.com//help?type=jfsm')">积分说明</span>
        <img id="jfsm" src="./images/jfgk.png"/>
      </div>
      <div class="jf_up_cont">
        <div class="usable">
          <p>可用积分</p>
          <p class="score">65</p>
        </div>
        <div class="obtain">
          <p>今日获得积分</p>
          <p class="score">5</p>
        </div>
        <div class="history">
          <p>历史总积分</p>
          <p class="score">65</p>
        </div>
        <a>
          <button>获取更多积分</button>
        </a>
      </div>

      <p class="jf_up_bottom">
        注：本年度获取的积分有效期至次年年底，逾期自动清零（如获取时间为2015年9月30日，有效期至2016年12月31日，2017年1月1日过期清零）
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    //  积分概况
    name: 'IntegralProfile',
    data () {
      return {

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .jf_box
    width: 955px;
    height: 400px;

    .jf_up
      padding: 0px 28px 0 31px;
      background: white;
      border-radius: 4px;
      box-shadow: 1px 0px 4px 0px rgba(48, 64, 90, 0.1);

      span
        &:nth-of-type(2)
          float: right;
          color: #68728B;

      .jf_up_jftitle
        height: 59px;
        line-height: 59px;
        border-bottom: 1px solid #EBEFF3;
        overflow: hidden;

        .jf_up_title
          font-size: 16px;
          color: #3A82FF;
          padding-left: 5px;
          font-weight: 400;

        img
          float: right;
          margin-top: 21px;
          margin-right: 5px;
          vertical-align middle

      .jf_up_cont
        overflow: hidden;

        > div
          float: left;
          border-right: 1px solid #EEF1F6;
          margin-top: 30px;

          .score
            font-size: 30px;
            color: rgba(255, 138, 0, 1);
            margin-top: 10px;

        .usable
          width: 160px;
          margin-left: 5px;

        .obtain
          width: 170px;
          padding-left: 110px;

        .history
          border: 0px;
          margin-left: 110px;

        > a
          cursor: pointer;

          button
            cursor: pointer;
            width: 96px;
            height: 30px;
            background: #3A82FF;
            border-radius: 4px;
            color: #fff;
            font-size: 14px;
            border: 0px;
            margin-top: 16px;
            float: right;

      .jf_up_bottom
        font-size: 12px;
        color: rgba(162, 175, 193, 1);
        margin-top: 37px;
        padding-bottom: 17px;

    .jf_down
      padding: 0px 28px 0 31px;
      background: white;
      border-radius: 4px;
      box-shadow: 1px 0px 4px 0px rgba(48, 64, 90, 0.1);
      margin-top: 27px;
      padding-bottom: 60px;

      .jf_up_jftitle
        height: 59px;
        line-height: 59px;
        border-bottom: 1px solid #EBEFF3;
        overflow: hidden;

        .jf_up_title
          font-size: 16px;
          color: #3A82FF;
          padding-left: 5px;
          font-weight: 400;

        .jf_down_jfmx
          display: inline-block;
          width: 457px;
          float: right;

          input
            width: 160px;
            height: 30px;
            cursor: pointer;
            border-radius: 4px;
            border: 1px solid #CBD2DCFF;
            padding-left: 12px;

          margin-left -25px

          span
            color: #596373 FF;
            font-size: 14px;
            margin: 0px 10px;

          .jf_jfmx_sx
            width: 52px;
            height: 30px;
            background: #3A82FF FF;
            color: #FFFFFFFF;
            font-size: 14px;
            border: 0px;
            border-radius: 4px;
            margin-left: 10px;
            cursor: pointer;

</style>
