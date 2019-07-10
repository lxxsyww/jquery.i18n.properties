<template>
  <div class="container clear">
    <div class="main_left lf">
      <div class="per_common per_info" style="padding-bottom:20px;">
        <div class="per_info_title">
          个人信息
        </div>
        <div class="per_info_con">
          <p><span>职务:</span><span class="duties"></span></p>
          <p><span>所属机构:</span><span class="school">null</span></p>
          <p><span>学历:</span><span class="educational"></span></p>
          <p><span>职称:</span><span class="professional"></span></p>
          <p><span>就职部门:</span><span class="department">null</span></p>
          <p style="display: block;"><span>角色:</span><span class="role">家长</span></p>
          <p><span>年级:</span><span class="gradeName">null</span></p>
          <p><span>班级:</span><span class="className">null</span></p>
          <p style="display: block;"><span>孩子:</span><span class="childrenList"></span></p>
        </div>
      </div>
      <div class="per_common per_march clear">
        <div class="col-md-6">
          <p>资源</p>
          <p class="resourceTotal">0</p>
        </div>
        <div class="col-md-6">
          <p>说说</p>
          <p class="talkTotal">0</p>
        </div>
      </div>
      <div class="per_common per_faser">
        <div class="per_info_title">
          成长档案
        </div>
        <div class="per_info_con">
          <div class="zero_msg">
            暂无数据
          </div>
        </div>
      </div>
      <div class="per_common per_faser">
        <div class="per_info_title">
          最近访客
        </div>
        <div class="per_info_con">
          <div class="zero_msg">
            暂无访客
          </div>
        </div>
      </div>
      <div class="per_common per_faser">
        <div class="per_info_title">
          TA的资源
        </div>
        <div class="per_info_con userResource">
          <div class="zero_msg">暂无资源</div>
        </div>
      </div>
    </div>
    <div class="main_right rt">
      <div class="per_common per_info">
        <div class="per_info_title">
          TA的动态
        </div>
        <div class="per_info_con userDynamic">
          <!--<div class="per_con_li">
                            <div class="pcl_left">
                                <p>收藏了资源</p>
                                <p>《我三十万大军胜利度过黄河》</p>
                            </div>
                            <div class="pcl_right">
                                <span>2018-10-05 20:15:10</span>
                            </div>
                        </div>
                        <div class="per_con_li">
                            <div class="pcl_left">
                                <p>上传了资源</p>
                                <p>《我三十万大军胜利度过黄河》</p>
                            </div>
                            <div class="pcl_right">
                                <span>2018-10-05 20:15:10</span>
                            </div>
                        </div>
                        <div class="per_con_li">
                            <div class="pcl_top">
                                <div class="pcl_left">
                                    <p>上传了资源</p>
                                    <p>《我三十万大军胜利度过黄河》</p>
                                </div>
                                <div class="pcl_right">
                                    <span>2018-10-05 20:15:10</span>
                                </div>
                            </div>
                            <div class="pcl_bottom">
                                <p class="ptext">通过观察上图，只要让div的中心移动到红线的位置，那么整个div就居中了。那怎么让它中心移动到红线处呢？从图中可以观察到，从div的中心到红线的距离是div自身高度的一半。这时候，我们可以使用通过margin-top属性来设置</p>
                                <p class="pbutton"><span class="zanpin">点赞 29</span><span class="zanpin">评论 2</span><span>删除</span></p>
                            </div>
                        </div>
                        <div class="per_con_li">
                            <div class="pcl_top">
                                <div class="pcl_left">
                                    <p>参与了大赛</p>
                                    <p>《我三十万大军》荣获了三等奖</p>
                                </div>
                                <div class="pcl_right">
                                    <span>2018-10-05 20:15:10</span>
                                </div>
                            </div>
                            <div class="pcl_bottom">
                                <div class="ds_img">
                                    <img src="/assets/user_yc/img/dasai.png" />
                                </div>
                                <div class="ds_con">
                                    <p>修辞手法.jpg</p>
                                    <p class="star"><span>★★★★★</span><b>5.0</b><i>(1)</i></p>
                                    <P class="stsheet">
                                        <span>大小:<b>24K</b></span>
                                        <span>上传时间:<b>2017-10-24</b></span>
                                        <span>浏览:<b>34次</b></span>
                                    </P>
                                </div>
                            </div>
                        </div>
                        <div class="per_con_li">
                            <div class="pcl_top pcl_zhibo">
                                <div class="pcl_left">
                                    <p>完成了直播课程</p>
                                </div>
                                <div class="pcl_right">
                                    <span>2018-10-05 20:15:10</span>
                                </div>
                            </div>
                            <div class="pcl_bottom">
                                <div class="zb_box">
                                    <div class="y_l_img">
                                        <img src="/assets/user_yc/img/subid6.png" />
                                        <span class="yimg_s">家校互通</span>
                                        <span class="yimg_t">测试</span>
                                        <div class="tips">
                                            <span>湖南二中</span>
                                            <span>一年级,二年级</span>
                                        </div>
                                        <p class="title">
                                            <span>深圳测试中学四</span>
                                            <span class="ready">往期课程</span>
                                        </p>
                                        <p class="teacher">
                                            <span class="teaname teaCol">主讲 中学四教师二</span>
                                            <span class="hour">17:00</span>
                                            <span class="time">2018.11.22</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="zb_con">
                                    <p><b>开始时间:</b><span>2018.12.14 10:00</span></p>
                                    <p><b>结束时间:</b><span>2018.12.14 10:00</span></p>
                                    <p><b>直播时常:</b><span>4小时23分</span></p>
                                    <p><b>观看人数:</b><span>10862</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="per_con_li">
                            <div class="pcl_top">
                                <div class="pcl_left">
                                    <p>参与了教研活动</p>
                                    <p>《我三十万大军胜利度过黄河》</p>
                                </div>
                                <div class="pcl_right">
                                    <span>2018-10-05 20:15:10</span>
                                </div>
                            </div>
                            <div class="pcl_bottom">
                                <p class="ptext">1、只要让div的中心移动到红线的位置，那么整个div就居中了。那怎么让它中心移动到红线处呢？从图中可以观察到，从div的中心到红线的距离是div自身高度的一半。这时候，我们可以使用通过margin-top属性来设置</p>
                            </div>
                            <div class="more">
                                <span>查看更多</span>
                            </div>
                        </div>-->
          <img src="images/zwdt.png" alt=""></div>
        <div class="more userDynamic_more" onclick="userDynamic_more(this)" click_num="1">
          <span>查看更多</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    width 1200px
    margin 0 auto

    .main_left
      width 300px

      .per_common
        width: 100%;
        height: auto;
        background: #ffffff;
        border-radius: 7px;
        margin-bottom: 20px;
        padding-bottom: 20px;

        .per_info_title
          font-size: 15px;
          font-weight: 900;
          border-bottom: 1px solid #eee;
          line-height: 40px;
          color: #545f6c;

        .per_info_con
          padding: 10px 0;

          p
            font-size: 14px;
            display: none;
            height: 20px;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-bottom 10px

      .per_info
        min-height: 150px;
        padding: 0 20px 1px;
        box-sizing border-box

      .per_march
        height: 75px;
        box-sizing border-box

        > div
          height: 100%;
          text-align: center;
          padding-top: 12px;
          padding-right: 15px;
          padding-left: 15px;
          box-sizing border-box

          &:first-child
            border-right: 1px solid #eee;

          p
            margin-bottom: 0;
            font-size: 16px;

            &:first-child
              height: 22px
              line-height 22px

            &:last-child
              font-size: 22px;
              height 30px
              line-height 30px

        .col-md-6
          width: 45%;
          float: left

      .per_faser
        height: 490px;
        padding: 0 20px;
        position: relative;
        box-sizing border-box

        .per_info_title
          font-size: 15px;
          font-weight: 900;
          border-bottom: 1px solid #eee;
          line-height: 40px;
          color: #545f6c;

        .per_info_con
          padding: 10px 0;

          .zero_msg
            background: url(./images/zero_msg.png) no-repeat;
            text-align: center;
            width: 90px;
            height: 104px;
            position: absolute;
            top: 50%;
            margin-top: -50px;
            left: 50%;
            margin-left: -45px;
            line-height: 198px;


    .main_right
      margin-left 30px
      width 860px

      .per_common
        width: 100%;
        height: auto;
        background: #ffffff;
        border-radius: 7px;
        margin-bottom: 20px;
        padding-bottom: 20px;


      .per_info
        min-height: 150px;
        padding: 0 20px 1px;

        .per_info_title
          font-size: 15px;
          font-weight: 900;
          border-bottom: 1px solid #eee;
          line-height: 40px;
          color: #545f6c;

        .per_info_con
          padding: 10px 0;

          img
            display: block;
            margin: 90px auto 130px;

      .more
        width: 100%;
        border-radius: 5px;
        margin: 34px 0;
        cursor: pointer;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        color: #68728b;
        margin-top: 40px;
        border-radius: 4px;
        background: #fff;
        border: 1px solid #e8e8e8;
        box-sizing: border-box;


</style>
