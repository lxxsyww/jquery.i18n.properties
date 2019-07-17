<template>
  <div id="main">
    <div class="top_title">成果库</div>
    <div class="screen_box">
      <!--行业应用-->
      <div class="screen_box_item industry">
        <div class="screen_box_top">应用行业：</div>
        <div class="screen_box_content">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
              <el-select v-model="formInline.one" placeholder="一级分类">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select v-model="formInline.two" placeholder="二级分类">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select v-model="formInline.three" placeholder="三级分类">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!--成果来源-->
      <div class="screen_box_item results">
        <div class="screen_box_top">成果来源：</div>
        <div class="screen_box_content">
          <div class="source">国家科技计划项目成果</div>
          <div class="source">省级科技计划项目成果</div>
          <div class="source">省级科技计划项目成果</div>
          <div class="source">省级科技计划项目成果</div>
        </div>
      </div>
      <!--完成时间-->
      <div class="screen_box_item time">
        <div class="screen_box_top">完成时间：</div>
        <div class="screen_box_content">
          <div class="source">国家科技计划项目成果</div>
          <div class="source">省级科技计划项目成果</div>
          <div class="source">省级科技计划项目成果</div>
          <div class="source">省级科技计划项目成果</div>
        </div>
      </div>
    </div>
    <div class="result_box">
      <img src="./images/1.png" alt="">
      <div class="result_rt_side">
        <div class="result_rt_side_top ellipsis">抗菌肽Cbf-14是基于“源于天然结构的高活性抗菌肽发现和理化性质优化</div>
        <div class="result_rt_side_content">
          抗菌肽Cbf-14是基于“源于天然结构的高活性抗菌肽发现和理化性质优化策略”关键技术设计和改造获得的新型阳离子小分子多肽，是针对细菌自身（质膜破坏/耐药基因结合）和宿主防御体系（免疫调控通路）多靶点对抗耐药菌活性和机制进行研发的I类新药品种。Cbf-14是含14个氨基酸的短肽，结构新颖，具有完整的自主知识产权，目前已申请发明专利4项（其中授体系（免疫调控通路）......
        </div>
        <div class="timer">2019-12-28</div>
      </div>
    </div>
    <div class="result_list">
      <div class="result_list_top">总数：256</div>
      <ul>
        <li>
          <router-link to="result">成果名称：土体卸荷力学模型及工程。</router-link>
        </li>
        <li>
          <router-link to="result">成果名称：土体卸荷力学模型及工程。</router-link>
        </li>
        <li>
          <router-link to="result">成果名称：土体卸荷力学模型及工程。</router-link>
        </li>
        <li>
          <router-link to="result">成果名称：土体卸荷力学模型及工程。</router-link>
        </li>
        <li>
          <router-link to="result">成果名称：土体卸荷力学模型及工程。</router-link>
        </li>
        <li>
          <router-link to="result">成果名称：土体卸荷力学模型及工程。</router-link>
        </li>
        <li>
          <router-link to="result">成果名称：土体卸荷力学模型及工程。</router-link>
        </li>
      </ul>
      <Pagination/>
    </div>
  </div>
</template>

<script>
  import Pagination from './../../components/Pagination/Pagination'

  export default {
    name: 'Results',
    data () {
      return {
        formInline: {
          user: '',
          region: '',
          one: '',
          two: '',
          three: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    },
    components:{
      Pagination
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./../../common/variable.styl"
  #main
    .top_title
      border-bottom $border-bottom
      font-size 18px
      height 38px
      line-height 38px
      color $background-color
      font-weight bold

    .screen_box
      margin-top 30px
      background #F7F7F7

      .screen_box_item
        box-sizing border-box

        .screen_box_top
          height 42px
          line-height 42px
          padding-left 20px
          border-bottom $border-bottom
          font-size 16px
          color #FF8D48
          box-sizing border-box

        .screen_box_content
          padding-left 20px
          border-bottom $border-bottom
          box-sizing border-box

          .el-form
            display flex
            flex-direction row
            justify-content flex-start
            align-items center
            height 70px

            .el-form-item
              margin 0 20px 0 0

      .results, .time
        .screen_box_content
          display flex
          flex-direction row
          height 70px

          div
            margin-right 70px
            line-height 70px

    .result_box
      margin-top 20px
      display flex
      flex-direction row
      justify-content space-between

      img
        width 277px
        height 172px

      .result_rt_side
        display flex
        flex-direction column
        justify-content space-around
        margin-left 20px

        .result_rt_side_top
          font-size 16px
          color $background-color
          font-weight bold

        .result_rt_side_content
          line-height 32px
          text-indent 32px
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;


    .result_list
      display flex
      flex-direction column
      justify-content space-between
      margin-top 20px

      .result_list_top
        width 210px
        height 45px
        line-height 45px
        background #FF8D48
        color #FFFFFF
        text-align center

      ul
        border-top 1px solid #FF8D48
        box-sizing border-box

        li
          a
            display inline-block
            width 100%
            height 50px
            line-height 50px
            border-bottom $border-bottom

</style>
