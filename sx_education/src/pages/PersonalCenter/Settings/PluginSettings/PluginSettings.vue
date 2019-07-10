<template>
  <section class="h_content">
    <section class="classes_zz">
      <div class="stone_table">
        <ul>
          <li style="color:#005EFF;font-size:16px;">插件设置</li>
        </ul>
      </div>
      <ul class="plugins_box clear">
        <li v-for="(newPlugin,index) in newPluginArr" v-if="newPluginArr" :key="index">
          <img :src="newPlugin.img">
          <p>{{newPlugin.text}}</p>
          <span :class="{yuan_s:newPlugin.isShow}"></span>
        </li>
        <li class="hover_" @click="pluginModal = true"><img src="./images/tjcj_n.png"></li>
      </ul>
    </section>

    <el-dialog
      title="插件中心"
      :visible.sync="pluginModal"
      width="30%"
      :before-close="handleClose" class="pluginModal">
      <ul class="clear">
        <li v-for="(item,index) in plugArr" @click="handleShowYuan(index)" :key="item.index">
          <img :src="item.img">
          <p>{{item.text}}</p>
          <span :class="{yuan_s:item.isShow}"></span>
        </li>
      </ul>
      <span slot="footer" class="dialog-footer">
    <el-button @click="pluginModal = false">取 消</el-button>
    <el-button type="primary" @click="pluginModal = false">确 定</el-button>
  </span>
    </el-dialog>
  </section>
</template>

<script>
  import rl from './images/rl.png'
  import ke from './images/ke.png'
  import tq from './images/tq.png'
  import yy from './images/yy.png'
  import tjzy from './images/tjzy.png'

  export default {
    name: 'PluginSettings',
    data () {
      return {
        plugArr: [
          {
            index: 0,
            img: rl,
            text: '日历',
            isShow: false
          },
          {
            index: 1,
            img: ke,
            text: '课程表',
            isShow: false
          },
          {
            index: 2,
            img: tq,
            text: '天气',
            isShow: false
          },
          {
            index: 3,
            img: yy,
            text: '音乐',
            isShow: false
          },
          {
            index: 4,
            img: tjzy,
            text: '推荐资源',
            isShow: false
          },
        ],
        newPluginArr: [],
        pluginModal: false,
        showYuan: false
      }
    },
    computed: {},
    methods: {
      handleShowYuan (index) {
        this.plugArr[index].isShow = !this.plugArr[index].isShow
        if (this.plugArr[index].isShow) {
          this.newPluginArr.push(this.plugArr[index])
        } else {
          this.newPluginArr.splice(this.newPluginArr.indexOf(this.plugArr[index]), 1)
        }
      },
      handleClose (done) {
        done()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .h_content
    margin: 40px auto;
    overflow: hidden;
    z-index: 10;
    min-height: 752px !important;
    width: 970px;
    background: #f7f6f3;
    margin-top: 0;

    .classes_zz
      height: 580px;
      width: 970px;
      background: #fff;
      min-height: 520px;
      float: right;
      border-radius: 4px;
      box-shadow: 0 0 8px #e6ecf3;

      .stone_table
        height: 58px;
        line-height: 58px;
        margin: 0 36px;
        border-bottom: 1px solid #e1ecff;

        ul
          border-bottom: 1px solid #e5fdf8;
          overflow: hidden;

          li
            float: left;
            margin-right: 60px;
            line-height: 58px;
            cursor: pointer;
            color: #005EFF;
            font-size: 16px;

      .plugins_box
        width: 890px;
        margin: 0 auto;

        > li
          float: left;
          width: 106px;
          height: 106px;
          margin: 35px 26px 0 0;
          position: relative;

          img
            display: block;
            height: 100%;
            width: 100%;

          p
            text-align: center;
            font-size: 13px;
            line-height: 20px;
            color: #68728b;

    .pluginModal
      ul
        li
          position relative
          float: left;
          height: 58px;
          width: 58px;
          margin: 20px 14px 26px;

          img
            display: block;
            height: 100%;
            width: 100%;

          p
            text-align: center;
            font-size: 13px;
            line-height: 20px;
            color: #68728B;

          span
            display: block;
            height: 20px;
            width: 20px;
            position: absolute;
            top: -7px;
            right: -7px;
            background: url(./images/yuan_n.png) no-repeat;

            &.yuan_s
              background: url(./images/yuan_s.png) no-repeat;

</style>
