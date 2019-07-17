<template>
  <div id="main">
    <!--人才数量-->
    <div class="talent_statistical">
      <ul class="talent_item">
        <li>

          <!--@click="$router.push({name:'/shop',query:{userId:shop.id}})-->
          <a href="javascript:;" @click.stop="handleClick">
            <div>
              <img src="./images/rc.png" alt="">
            </div>
            <div>
              <p>1,0256</p>
              <p>落户人才</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div>
              <img src="./images/rc.png" alt="">
            </div>
            <div>
              <p>5680</p>
              <p>科技型中小企业</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div>
              <img src="./images/rc.png" alt="">
            </div>
            <div>
              <p>258</p>
              <p>项目成果</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div>
              <img src="./images/rc.png" alt="">
            </div>
            <div>
              <p>1,0338</p>
              <p>高端人才</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!--轮播 + 新闻-->
    <div class="swiper_box">
      <div class="swiper-container swiper_box_outside">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/slider.jpg" alt="">
            <p>测试1</p>
          </div>
          <div class="swiper-slide">
            <img src="./images/slider.jpg" alt="">
            <p>测试2</p>
          </div>
          <div class="swiper-slide">
            <img src="./images/slider.jpg" alt="">
            <p>测试3</p>
          </div>
        </div>
        <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
      <div class="swiper_box_rt">
        <ul>
          <li class="active"><a data-toggle="item" href="#item_0">通知公告</a></li>
          <li><a data-toggle="item" href="#item_1">人才动态</a></li>
          <li><a data-toggle="item" href="#item_2">党建工作</a></li>
          <li><a data-toggle="item" href="#item_3">引智成果</a></li>
        </ul>
        <div class="swiper_rt_news">
          <div class="swiper_rt_news_items">
            <div class="text">
              <img src="./images/yuan.png" alt="">
              <p class="ellipsis">做好人才库的四个关键步骤个关键步骤个关键步骤。做好人才库的四个关键步骤个关键步骤个关键步骤。</p>
            </div>
            <div class="timer">[05-26]</div>
          </div>
          <div class="swiper_rt_news_items">
            <div class="text">
              <img src="./images/yuan.png" alt="">
              <p>做好人才库的四个关键步骤个关键步骤个关键步骤。</p>
            </div>
            <div class="timer">[05-26]</div>
          </div>
          <div class="swiper_rt_news_items">
            <div class="text">
              <img src="./images/yuan.png" alt="">
              <p>做好人才库的四个关键步骤个关键步骤个关键步骤。</p>
            </div>
            <div class="timer">[05-26]</div>
          </div>
          <div class="swiper_rt_news_items">
            <div class="text">
              <img src="./images/yuan.png" alt="">
              <p>做好人才库的四个关键步骤个关键步骤个关键步骤。</p>
            </div>
            <div class="timer">[05-26]</div>
          </div>
          <div class="swiper_rt_news_items">
            <div class="text">
              <img src="./images/yuan.png" alt="">
              <p>做好人才库的四个关键步骤个关键步骤个关键步骤。</p>
            </div>
            <div class="timer">[05-26]</div>
          </div>
          <div class="swiper_rt_news_items">
            <div class="text">
              <img src="./images/yuan.png" alt="">
              <p>做好人才库的四个关键步骤个关键步骤个关键步骤。</p>
            </div>
            <div class="timer">[05-26]</div>
          </div>
          <div class="swiper_rt_news_items">
            <div class="text">
              <img src="./images/yuan.png" alt="">
              <p>做好人才库的四个关键步骤个关键步骤个关键步骤。</p>
            </div>
            <div class="timer">[05-26]</div>
          </div>
          <div class="swiper_rt_news_items">
            <div class="text">
              <img src="./images/yuan.png" alt="">
              <p>做好人才库的四个关键步骤个关键步骤个关键步骤。</p>
            </div>
            <div class="timer">[05-26]</div>
          </div>
        </div>
      </div>
    </div>
    <!--综合新闻-->
    <div class="synthesize">
      <!--人才资讯+攻国际人才+专家风采-->
      <div class="synthesize_box">
        <!--人才资讯-->
        <div class="consulting news_box_container">
          <div class="news_title">
            <div>人才资讯</div>
            <a href="javascript:;">更多》</a>
          </div>
          <ul>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。土体卸荷力学模型及工程。土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
          </ul>
        </div>

        <!--国际人才-->
        <div class="international_talent news_box_container">
          <div class="news_title">
            <div>国际人才</div>
            <a href="javascript:;">更多》</a>
          </div>
          <ul>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。土体卸荷力学模型及工程。土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
          </ul>
        </div>

        <!--专家风采-->
        <div class="experts news_box_container">
          <div class="news_title">
            <div>专家风采</div>
            <a href="javascript:;">更多》</a>
          </div>
          <div class="swiper-container experts_box_outside">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./images/exports.png" alt="">
                <p>测试1</p>
              </div>
              <div class="swiper-slide">
                <img src="./images/exports.png" alt="">
                <p>测试2</p>
              </div>
              <div class="swiper-slide">
                <img src="./images/exports.png" alt="">
                <p>测试3</p>
              </div>
            </div>
            <!-- <div class="swiper-pagination"></div>--> <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
          </div>
        </div>
      </div>
      <!--虚拟大厅-->
      <div class="virtual_hall">
        <a href="javascript:;">进入虚拟大厅</a>
        <ul>
          <li>
            <a href="javascript:;">“三晋英才”支持计划管理服务平台</a>
          </li>
          <li>
            <a href="javascript:;">享受国务院特殊津贴人员管理服务平台</a>
          </li>
          <li>
            <a href="javascript:;">两站管理服务平台</a>
          </li>
          <li>
            <a href="javascript:;">专业技术人才管理服务平台</a>
          </li>
          <li class="active">
            <a href="javascript:;">高端创新型人才管理服务平台</a>
          </li>
          <li>
            <a href="javascript:;">海外高层次人才管理服务平台</a>
          </li>
          <li>
            <a href="javascript:;">职业技能人才管理服务平台</a>
          </li>
          <li>
            <a href="javascript:;">专家服务基层项目管理服务平台</a>
          </li>
          <li>
            <a href="javascript:;">留学回国人员科技活动管理服务平台</a>
          </li>
          <li>
            <a href="javascript:;">新型产业领军人才管理服务平台</a>
          </li>
        </ul>
      </div>
    </div>
    <!--项目展示-->
    <div class="item_show project_display">
      <div class="item_show_header">
        <div class="item_top_left">
          <div class="item_title">项目展示</div>
          <span>|</span>
          <div class="item_title_en">PROJECT DISPLAY</div>
        </div>
        <a href="javascript:;" class="item_top_right">更多》</a>
      </div>
      <div class="swiper-container item_box_outside">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/project1.png" alt="">
            <p class="ellipsis">测试1</p>
          </div>
          <div class="swiper-slide">
            <img src="./images/project1.png" alt="">
            <p class="ellipsis">测试2</p>
          </div>
          <div class="swiper-slide">
            <img src="./images/project1.png" alt="">
            <p class="ellipsis">测试3测试3测试3测试3测试3测试3测试3测试3测试3测试3测试3测试3测试3</p>
          </div>
          <div class="swiper-slide">
            <img src="./images/project1.png" alt="">
            <p class="ellipsis">测试1</p>
          </div>
          <div class="swiper-slide">
            <img src="./images/project1.png" alt="">
            <p class="ellipsis">测试2</p>
          </div>
          <div class="swiper-slide">
            <img src="./images/project1.png" alt="">
            <p class="ellipsis">测试3测试3测试3测试3测试3测试3测试3测试3测试3测试3测试3测试3测试3</p>
          </div>
        </div>
        <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>
    <!--成果展示-->
    <div class="item_show results_show">
      <div class="item_show_header">
        <div class="item_top_left">
          <div class="item_title">成果展示</div>
          <span>|</span>
          <div class="item_title_en">ACHIEVEMENT DISPLAY</div>
        </div>
        <a href="javascript:;" class="item_top_right">更多》</a>
      </div>
      <div class="item_show_box">
        <!--390 200-->
        <div class="every_item">
          <img src="./images/zw.png" alt="">
          <div class="every_item_lf">
            <div class="every_item_lf_top">智能家居类互联网平台</div>
            <p class="line"></p>
            <div class="every_item_lf_content">
              该项目通过物联网技术互联网技术相结合将智能市场中的多方角色进行连接，为用户提供设计、施工企业。
            </div>
          </div>
        </div>
        <div class="every_item">
          <img src="./images/show.png" alt="">
          <div class="every_item_lf">
            <div class="every_item_lf_top">智能家居类互联网平台</div>
            <p class="line"></p>
            <div class="every_item_lf_content">
              该项目通过物联网技术互联网技术相结合将智能市场中的多方角色进行连接，为用户提供设计、施工企业。
            </div>
          </div>
        </div>
        <div class="every_item">
          <img src="./images/show.png" alt="">
          <div class="every_item_lf">
            <div class="every_item_lf_top">智能家居类互联网平台</div>
            <p class="line"></p>
            <div class="every_item_lf_content">
              该项目通过物联网技术互联网技术相结合将智能市场中的多方角色进行连接，为用户提供设计、施工企业。
            </div>
          </div>
        </div>
      </div>

    </div>
    <!--统计查询 + 人才库-->
    <div class="query">
      <div class="statistical_query">
        <div class="statistical_list">统计查询服务</div>
        <div class="statistical_box">
          <div class="statistical_box_top">
            <ul>
              <li class="active">
                <a href="javascript:;">三晋英才</a>
              </li>
              <li>
                <a href="javascript:;">特殊津贴</a>
              </li>
              <li>
                <a href="javascript:;">两站管理</a>
              </li>
              <li>
                <a href="javascript:;">专业技术人才</a>
              </li>
              <li>
                <a href="javascript:;">高端创新型人才</a>
              </li>
            </ul>
            <a href="javascript:;">更多》</a>
          </div>
          <div class="statistical_box_content">
            <ul>
              <li>
                <a href="javascript:;">按月享受国务院政府特殊津贴人员管理</a>
              </li>
              <li>
                <a href="javascript:;">按月享受国务院政府特殊津贴人员管理</a>
              </li>
              <li>
                <a href="javascript:;">按月享受国务院政府特殊津贴人员管理</a>
              </li>
              <li>
                <a href="javascript:;">按月享受国务院政府特殊津贴人员管理</a>
              </li>
              <li>
                <a href="javascript:;">按月享受国务院政府特殊津贴人员管理</a>
              </li>
              <li>
                <a href="javascript:;">按月享受国务院政府特殊津贴人员管理</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--人才库-->
      <div class="talent_pool">
        <div class="consulting news_box_container">
          <div class="news_title">
            <div>人才库</div>
            <a href="javascript:;">更多》</a>
          </div>
          <ul>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。土体卸荷力学模型及工程。土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <!--300-->
                <p class="ellipsis">土体卸荷力学模型及工程。</p>
                <span>[05-26]</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'Home',
    mounted () {
      const mySwiper = new Swiper('.swiper_box_outside', {
        autoplay: true,//可选选项，自动滑动
        loop: true, // 循环模式选项
        pagination: {
          el: '.swiper-pagination',
        },
      })

      const exportsSwiper = new Swiper('.experts_box_outside', {
        slidesPerView: 5,
        spaceBetween: 10,
        autoplay: true,//可选选项，自动滑动
        loop: true, // 循环模式选项
      })

      const itemSwiper = new Swiper('.item_box_outside', {
        slidesPerView: 5,
        spaceBetween: 10,
        autoplay: true,//可选选项，自动滑动
        //loop: true, // 循环模式选项
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    methods: {
      handleClick () {
        this.$router.push({
          name: 'Describe',
          params: {
            id: 5
          }
        })
        //window.location.href = 'http://www.baidu.com'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./../../common/variable.styl"


  #main
    //  人才数量

    .talent_statistical
      margin-bottom 20px
      height 70px
      background url("./images/tq.png") no-repeat center center

      .talent_item
        margin-left 300px
        display flex
        justify-content space-around

        li
          a
            display flex
            flex-direction row
            align-items center
            width 170px
            height 70px

            div
              &:nth-of-type(1)
                margin-right 20px

              &:nth-of-type(2)
                color #FFFFFF

                p
                  &:nth-of-type(1)
                    font-size 20px


    //  轮播 + 新闻

    .swiper_box
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      margin-bottom 20px

      .swiper_box_outside
        width 535px
        height 290px
        overflow hidden

        .swiper-wrapper
          .swiper-slide
            position relative

            img
              display inline-block
              width 100%
              height auto

            p
              position absolute
              left 0
              bottom 0
              height 46px
              background-color #D9DADA
              width 100%
              line-height 46px
              padding-left 10px
              color #333333
              font-weight bold
              box-sizing border-box
              opacity .8

      .swiper_box_rt
        flex-grow 1
        display flex
        flex-direction row
        justify-content space-between
        align-items center

        ul
          display flex
          flex-direction column
          justify-content space-between
          align-items center
          height 290px

          li
            width 100px
            background #f7f7f7

            &.active
              a
                background url(./images/xyt_sprit1.png) 0 0 no-repeat;
                color #FFFFFF

            a
              display: inline-block;
              width: 112px;
              height: 71px;
              text-align: center;
              line-height: 71px;
              color: #333333;
              font-size: 16px;
              box-sizing border-box

        .swiper_rt_news
          flex-grow 1
          padding 20px
          border 1px solid $border-color
          box-sizing border-box
          height 290px
          margin-left 30px
          display flex
          flex-direction column
          justify-content space-between

          .swiper_rt_news_items
            display flex
            flex-direction row
            justify-content space-between
            align-items center

            .text
              display flex
              flex-direction row
              justify-content flex-start
              align-items center

              p
                width 430px
                margin-left 10px

            .timer
              color $timer-color

    //  综合新闻

    .synthesize
      display flex
      flex-direction row
      justify-content space-between
      margin-bottom 35px

      .synthesize_box
        display flex
        width 790px
        flex-direction row
        flex-wrap wrap
        justify-content space-between

        .news_box_container
          width 385px
          margin-bottom 20px

          .news_title
            display flex
            flex-direction row
            justify-content space-between
            align-items center
            height 40px
            background $background-color
            padding 0 20px

            div
              color #ffffff

            a
              color #ffffff


          > ul
            display flex
            flex-direction column
            justify-content space-between
            height 286px
            border 1px solid $border-color
            border-top none
            box-sizing border-box
            padding 20px

            > li
              > a
                display flex
                flex-direction row
                justify-content space-between
                color #333333

                > p
                  width 290px
                  color #333333

                > span
                  color $timer-color

        .international_talent
          margin-left 20px

        .experts
          width 100%

          .experts_box_outside
            width 790px
            height 230px
            padding 10px 20px
            box-sizing border-box
            border 1px solid $border-color
            border-top 0

            .swiper-wrapper
              .swiper-slide
                /*position relative*/
                display flex
                flex-direction column
                justify-content space-between
                align-items center

                img
                  display inline-block
                  width 135px
                  height 182px

                p /*position absolute
                left 0
                bottom 0
                height: 46px;
                background-color: #D9DADA;
                width: 100%;
                line-height: 46px;
                padding-left: 10px;
                color: #333333;
                font-weight: bold;
                box-sizing border-box*/
                  text-align center


      .virtual_hall
        width 390px
        background url("./images/xndt.png") no-repeat
        display flex
        flex-direction column
        align-items center

        > a
          display inline-block
          width 130px
          height 28px
          text-align center
          line-height 28px
          border 1px solid #075EEB
          border-radius 10px
          box-sizing border-box
          margin 20px 0

        ul
          display flex
          flex-direction column
          justify-content space-between
          align-items center
          height 530px


          li
            &.active
              a
                color #ffffff
                background #FF8D48

            a
              display inline-block
              width 280px
              height 45px
              line-height 45px
              text-align center
              background #FFFFFF
              border-radius 5px
              color #2B72ED
              font-weight bold


    .item_show
      .item_show_header
        height 30px
        line-height 30px
        box-sizing border-box
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        border-bottom 4px solid $background-color

        .item_top_left
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          width 285px

          .item_title
            font-size 18px
            color $background-color
            font-weight 600

          .item_title_en
            font-size 18px
            color #FFA46D
            font-weight 600

        a
          color #333333


      .item_box_outside
        .swiper-wrapper
          padding: 20px 0;

          .swiper-slide
            position relative

            img
              display inline-block
              width 100%
              height auto

            p
              position absolute
              left 0
              bottom 0
              width 100%
              height 38px
              line-height 38px
              background #B2B2B2
              box-sizing border-box
              text-align center
              padding 0 10px
              opacity: .8;

        .swiper-pagination
          bottom 30px


    .project_display
      margin-bottom 10px

    //成果展示

    .results_show
      .item_show_header
        .item_top_left
          width 330px

      .item_show_box
        padding 20px 0 30px 0
        display flex
        flex-direction row
        justify-content space-between
        align-items center

        .every_item
          padding 24px 20px
          display flex
          flex-direction row
          justify-content space-between
          width 386px
          height 200px
          box-sizing border-box
          background #F2F7FE
          cursor pointer

          img
            width 125px
            height 125px

          .every_item_lf
            display flex
            flex-direction column
            justify-content space-between
            width 210px


            .every_item_lf_top
              font-size 16px

            .line
              border 2px solid #FFFFFF
              margin 20px 0
              width 100%

            .every_item_lf_content
              color #6E7072
              overflow hidden
              text-overflow ellipsis
              line-height 23px
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;


    //统计查询 + 人才库

    .query
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      margin-bottom 40px

      .statistical_query
        display flex
        flex-direction row
        justify-content space-between
        width 790px
        height 225px

        .statistical_list
          flex 0 0 45px
          background $background-color
          font-size 20px
          color #FFFFFF
          padding 0 5px
          box-sizing border-box
          text-align center
          line-height 38px

        .statistical_box
          width 750px

          .statistical_box_top
            display flex
            flex-direction row
            justify-content space-between
            align-items center
            width 100%
            height 40px
            line-height 40px
            border 1px solid $border-color
            box-sizing border-box
            border-left none

            ul
              display flex
              flex-direction row
              justify-content space-around
              align-items center
              width 530px

              li
                a
                  display inline-block
                  line-height 40px
                  text-align center
                  font-size 16px
                  font-weight 600

                &.active
                  a
                    color $background-color

            a
              color #333333


          .statistical_box_content
            ul
              height 186px
              box-sizing border-box
              display flex
              flex-direction row
              flex-wrap wrap
              justify-content space-around
              align-items center
              overflow hidden
              border 1px solid $border-color
              border-top none
              border-left none

              li
                a
                  display inline-block
                  width 300px
                  height 40px
                  line-height 40px
                  text-align center
                  background $background-color
                  color #FFFFFF


      //  人才库

      .talent_pool
        width 385px
        height 224px

        .news_title
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          height 40px
          background $background-color
          padding 0 20px

          div
            color #ffffff

          a
            color #ffffff


        ul
          display flex
          flex-direction column
          justify-content space-between
          height 185px
          border 1px solid $border-color
          border-top none
          box-sizing border-box
          padding 20px

          > li
            > a
              display flex
              flex-direction row
              justify-content space-between
              color #333333

              > p
                width 290px
                color #333333

              > span
                color $timer-color


  #weather-float-he
    div
      &:nth-of-type(2)
        z-index 10
</style>
