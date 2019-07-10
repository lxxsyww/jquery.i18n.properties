<template>
  <div>
    <div class="n_xykj_banner"></div>
    <div class="n_xykj_man">
      <div class="n_xykj_screening">
        <div class="n_xykj_select"><label>筛选</label>
          <div class="n_xykj_select_city">
            <el-select placeholder="全省" v-model="province" @change="provinceChange">
              <el-option v-for='(item,index) in provinceList' :label="item.label"
                         :value="item.label" :key="item.index"></el-option>
            </el-select>
          </div> <!---->
          <div class="n_xykj_select_city">
            <el-select v-model="request.learningPeriod" placeholder="学段" @change="learningPeriodChange">
              <el-option
                v-for='item in learningPeriodList'
                :label="item.label"
                :value="item.value"
                :key="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="n_xykj_keyWord"><input type="text" placeholder="请输入关键字搜索"> <span><img
          src="./images/xykj_icon_ss.png"></span></div>
      </div> <!---->
      <div class="n_xykj_content_list">
        <ul>
          <li><a target="_blank" href="javascript:void(0);"><img src="./images/sxdx.png"> <span>山西大学附属中学</span>
            <label>高中</label></a></li>
          <li><a target="_blank" href="javascript:void(0);"><img src="./images/tywz.png"> <span>太原市第五中学</span>
            <label>高中</label></a></li>
          <li><a target="_blank" href="javascript:void(0);"><img src="./images/xzdy.png"> <span>忻州市第一中学</span>
            <label>高中</label></a></li>
          <li><a target="_blank" href="javascript:void(0);"><img src="./images/yckj.png"> <span>运城市康杰中学</span>
            <label>高中</label></a></li>
          <li><a target="_blank" href="javascript:void(0);"><img src="./images/xdhy.png"> <span>山西现代双语学校</span>
            <label>高中</label></a></li>
          <li><a target="_blank" href="javascript:void(0);"><img src="./images/lfdy.png"> <span>临汾市第一中学</span>
            <label>高中</label></a></li>
          <li><a target="_blank" href="javascript:void(0);"><img src="./images/ssq.png"> <span>太原市第三实验中学</span>
            <label>高中</label></a></li>
          <li><a target="_blank" href="javascript:void(0);"><img src="./images/yqyz.png"> <span>阳泉一中</span>
            <label>高中</label></a></li>
          <li><a target="_blank" href="javascript:void(0);"><img src="./images/jcyz.png"> <span>晋城一中</span>
            <label>高中</label></a></li>
          <li><a target="_blank" href="javascript:void(0);"><img src="./images/pyzx.png"> <span>平遥中学</span>
            <label>高中</label></a></li>
          <li><a target="_blank" href="javascript:void(0);"><img src="./images/tgzx.png"> <span>太谷中学</span>
            <label>高中</label></a></li>
        </ul>
      </div> <!----></div>
  </div>
</template>

<script>
  export default {
    name: 'CampusSpace',
    data () {
      return {
        totalNum: 0,//总数
        request: {
          pageNum: 1,//当前页数
          pageSize: 36, //一页显示36个
          keyWord: '',//搜索内容
          city: '',//市
          learningPeriod: '',//学段
          portalld: '',// 县id
        },
        xykjList: [], //数据
        learningPeriodList: [{ //学段数组
          label: '全学段',
          value: ''
        }, {
          label: '小学',
          value: '1'
        }, {
          label: '初中',
          value: '2'
        }, {
          label: '高中',
          value: '3'
        }],
        cityList: [],//市的数组
        provinceList: [{ //全省
          label: '全省',
        }, {
          label: '太原市',
        }, {
          label: '大同市',
        }, {
          label: '阳泉市',
        }, {
          label: '长治市',
        }, {
          label: '晋城市',
        }, {
          label: '朔州市',
        }, {
          label: '忻州市',
        }, {
          label: '晋中市',
        }, {
          label: '临汾市',
        }, {
          label: '吕粱市',
        }, {
          label: '运城市',
        }],
        province: '全省',// 市
        cityBollean: false,// 是否显示县
        provinceBollean: true, //是否显示市
        falseList: [{
          logo: '/assets/xykj/img/sxdx.png',
          name: '山西大学附属中学',
          schoolType: '5'
        }, {
          logo: '/assets/xykj/img/tywz.png',
          name: '太原市第五中学',
          schoolType: '5'
        }, {
          logo: '/assets/xykj/img/xzdy.png',
          name: '忻州市第一中学',
          schoolType: '5'
        }, {
          logo: '/assets/xykj/img/yckj.png',
          name: '运城市康杰中学',
          schoolType: '5'
        }, {
          logo: '/assets/xykj/img/xdhy.png',
          name: '山西现代双语学校',
          schoolType: '5'
        }, {
          logo: '/assets/xykj/img/lfdy.png',
          name: '临汾市第一中学',
          schoolType: '5'
        }, {
          logo: '/assets/xykj/img/ssq.png',
          name: '太原市第三实验中学',
          schoolType: '5'
        }, {
          logo: '/assets/xykj/img/yqyz.png',
          name: '阳泉一中',
          schoolType: '5'
        }, {
          logo: '/assets/xykj/img/jcyz.png',
          name: '晋城一中',
          schoolType: '5'
        }, {
          logo: '/assets/xykj/img/pyzx.png',
          name: '平遥中学',
          schoolType: '5'
        }, {
          logo: '/assets/xykj/img/tgzx.png',
          name: '太谷中学',
          schoolType: '5'
        }]
      }
    },
    methods: {
      provinceChange () {

      },
      cityChange () {

      },
      //	筛选学段
      learningPeriodChange: function (res) {
        this.request.learningPeriod = res
        this.request.pageNum = 1
        this.getxykj(this.request.pageNum, this.request.keyWord, this.request.city, this.request.learningPeriod)
      },
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .n_xykj_banner
    width: 100%;
    height: 155px;
    background: url(./images/new_xykj_banner.png) no-repeat;

  .n_xykj_man
    width: 1197px;
    margin: -52px auto 120px;
    position: relative;

    .n_xykj_screening
      width: 100%;
      height: 82px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 1px 0px 4px 0px rgba(48, 64, 90, 0.1);
      border-radius: 4px;
      margin-bottom: 25px;

      .n_xykj_select
        position: absolute;
        top: 30px;
        left: 18px;

        label
          margin: 0;
          font-size: 14px;
          padding-right: 20px;
          color: rgba(51, 77, 122, 1);

        .n_xykj_select_city
          width: 160px;
          display: inline-block;
          padding-right: 14px;

          .el-select
            .el-input
              .el-input__inner
                height: 30px;
                line-height: 30px;
                border: 1px solid rgba(203, 210, 220, 1);
                border-radius: 4px;
                color: rgba(162, 175, 193, 1);

    .n_xykj_keyWord
      width: 191px;
      height: 36px;
      border: 1px solid rgba(232, 232, 232, 1);
      border-radius: 4px;
      position: absolute;
      top: 27px;
      right: 16px;
      background: rgba(243, 243, 243, 1);

      input
        width: 148px;
        height: 100%;
        font-size: 12px;
        padding-left: 17px;
        display: inline-block;
        outline none
        background-color #F3F3F3

      span
        display: inline-block;
        width: 35px;
        height: 26px;
        border-radius: 1px;
        margin-top: 5px;
        text-align: center;
        position: relative;
        top: -34px;
        right: -160px;

        &:before
          content: ' ';
          width: 1px;
          height: 26px;
          background: rgba(232, 232, 232, 1);
          position: absolute;
          top: -3px;
          left: 0;

        img
          margin-top: 4px;
          width: 14px;
          height: 14px;

    .n_xykj_content_list
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 4px 0px rgba(48, 64, 90, 0.1);
      border-radius: 4px;
      padding: 16px 18px 32px;
      min-height: 510px;

      ul
        display: flex;
        flex-flow: wrap;

        li
          width: 174px;
          height: 210px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(241, 243, 248, 1);
          box-shadow: 0px 0px 4px 0px rgba(48, 64, 90, 0.1);
          border-radius: 4px;
          margin-top: 18px;
          margin-right: 23px;

          a
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;

            img
              width: 120px;
              height: 120px;
              border-radius: 50%;
              margin: 18px auto;
              display: block;

            span
              font-size: 12px;
              color: rgba(51, 77, 122, 1);
              display: block;

            label
              display inline-block
              background: rgba(242, 248, 253, 1);
              border-radius: 4px;
              padding: 3px 8px;
              margin-top: 10px;
</style>

<style>
  body {
    background-color: #F2F8FD;
  }
</style>
