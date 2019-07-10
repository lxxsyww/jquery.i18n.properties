<template>
  <section class="wt-content">
    <!--轮播图start-->
    <div class="wt-imgs">
      <!--主轮播图 -->
      <div class="wt_nav" id="wt_nav">
        <div id="banner-container" class="swiper-container header_slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:void(0)">
                <img class="wt_live_img"
                     src="https://bj.bcebos.com/v1/wisdomedu-img/6A8B88DDB2CB46968B0CFFBD00FFC281?authorization=bce-auth-v1%2F7642b4b48046452697e90662eed41ace%2F2019-05-07T09%3A13%3A01Z%2F-1%2F%2F25c389a472c5176c92bb0ac06fee9516e2857595fe72f2970b6f6dc323aaf0b3">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="wt-navlist">
        <div class="trendsBox">
          <img src="./images/gb.png" alt="">
          <p>上传动态</p>
          <div id="resource-container"
               class="trendsConts swiper-container resource_wrapper swiper-container-horizontal swiper-container-vertical">
            <div class="swiper-wrapper" id="uploadResourceListUl"
                 style="height: 768px; transform: translate3d(0px, -384px, 0px); transition-duration: 0ms;">
              <div class="swiper-slide swiper-slide-duplicate"
                   onclick="WT.go_url('/resource/previewResource', {resourceId: 20939})" data-swiper-slide-index="9"
                   style="height: 64px; width: 648px;">
                <section>平台资源库最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>初中语文教育教学改革的几点思考.doc</section>
              </div>
              <div class="swiper-slide" onclick="WT.go_url('/resource/previewResource', {resourceId: 20942})"
                   data-swiper-slide-index="0" style="height: 64px; width: 648px;">
                <section>张国杰最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>桃花源记翻译</section>
              </div>
              <div class="swiper-slide" onclick="WT.go_url('/resource/previewResource', {resourceId: 20941})"
                   data-swiper-slide-index="1" style="height: 64px; width: 648px;">
                <section>平台资源库最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>微课《简介如何看图写话》.mp4</section>
              </div>
              <div class="swiper-slide" onclick="WT.go_url('/resource/previewResource', {resourceId: 20938})"
                   data-swiper-slide-index="2" style="height: 64px; width: 648px;">
                <section>平台资源库最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>爱莲说教学设计.doc</section>
              </div>
              <div class="swiper-slide" onclick="WT.go_url('/resource/previewResource', {resourceId: 20932})"
                   data-swiper-slide-index="3" style="height: 64px; width: 648px;">
                <section>平台资源库最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>《阿长与〈山海经〉》第三四学时导学案.doc</section>
              </div>
              <div class="swiper-slide swiper-slide-prev"
                   onclick="WT.go_url('/resource/previewResource', {resourceId: 20937})" data-swiper-slide-index="4"
                   style="height: 64px; width: 648px;">
                <section>平台资源库最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>爱莲说第二课时ＰＰ.ppt</section>
              </div>
              <div class="swiper-slide swiper-slide-active"
                   onclick="WT.go_url('/resource/previewResource', {resourceId: 20933})" data-swiper-slide-index="5"
                   style="height: 64px; width: 648px;">
                <section>平台资源库最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>《大自然的语言》导学案.docx</section>
              </div>
              <div class="swiper-slide swiper-slide-next"
                   onclick="WT.go_url('/resource/previewResource', {resourceId: 20935})" data-swiper-slide-index="6"
                   style="height: 64px; width: 648px;">
                <section>平台资源库最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>《马说》学案.doc</section>
              </div>
              <div class="swiper-slide" onclick="WT.go_url('/resource/previewResource', {resourceId: 20936})"
                   data-swiper-slide-index="7" style="height: 64px; width: 648px;">
                <section>平台资源库最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>《卖炭翁》课件.pptx</section>
              </div>
              <div class="swiper-slide" onclick="WT.go_url('/resource/previewResource', {resourceId: 20934})"
                   data-swiper-slide-index="8" style="height: 64px; width: 648px;">
                <section>平台资源库最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>《绿》.ppt</section>
              </div>
              <div class="swiper-slide" onclick="WT.go_url('/resource/previewResource', {resourceId: 20939})"
                   data-swiper-slide-index="9" style="height: 64px; width: 648px;">
                <section>平台资源库最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>初中语文教育教学改革的几点思考.doc</section>
              </div>
              <div class="swiper-slide swiper-slide-duplicate"
                   onclick="WT.go_url('/resource/previewResource', {resourceId: 20942})" data-swiper-slide-index="0"
                   style="height: 64px; width: 648px;">
                <section>张国杰最新上传了</section>
                <section>语文&nbsp;|&nbsp;</section>
                <section>桃花源记翻译</section>
              </div>
            </div>
          </div>

        </div>
        <div class="resourceUl">
          <div class="title">学科资源</div>
          <ul class="list">
            <li class="item d-item" :class="{currentItem:isShow===0}" id="forType0" @mouseenter="toggleIsShow(0)"
                @mouseleave="toggleIsShow(-1)">
              <div class="item-content">
                <p class="title icon_primary">小学<i class="icon icon-arrow-right"></i></p>
                <div class="type">
                  <span class="goTeachingResource" data-param="{forType: 1, typeId: 2}">课件</span>
                  <span class="goTeachingResource" data-param="{forType: 1, typeId: 6}">试卷</span>
                  <span class="goTeachingResource" data-param="{forType: 1, typeId: 3}">导学案</span>
                  <span class="goTeachingResource" data-param="{forType: 1, typeId: 1}">教案</span>
                </div>
              </div>

              <div class="desc-card" :class="{isShow : isShow === 0}">
                <div class="desc_li">
                  <div class="desc-title desc-title1">一年级 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType:1,gradeId:1,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:1,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:1,courseId:33}"><p>科学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:1,courseId:48}"><p>道德与法治</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:1,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
                <div class="desc_li">
                  <div class="desc-title desc-title1 ">二年级 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType:1,gradeId:2,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType:1,gradeId:2,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:2,courseId:33}"><p>科学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:2,courseId:48}"><p>道德与法治</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:2,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
                <div class="desc_li">
                  <div class="desc-title desc-title1">三年级 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:3,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:3,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:3,courseId:28}"><p>英语</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:3,courseId:48}"><p>道德与法治</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:3,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
                <div class="desc_li">
                  <div class="desc-title desc-title1">四年级 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType:1,gradeId:4,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:4,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:4,courseId:28}"><p>英语</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:1,courseId:48"><p>品德与社会</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:4,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
                <div class="desc_li">
                  <div class="desc-title desc-title1">五年级 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType:1,gradeId:5,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:5,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:5,courseId:28}"><p>英语</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:1,courseId:48}"><p>品德与社会</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:5,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
                <div class="desc_li">
                  <div class="desc-title desc-title1">六年级 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:6,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:6,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:6,courseId:28}"><p>英语</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:1,courseId:48}"><p>品德与社会</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 1,gradeId:6,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="item d-item" id="forType1" :class="{currentItem:isShow===1}" @mouseenter="toggleIsShow(1)"
                @mouseleave="toggleIsShow(-1)">
              <div class="item-content">
                <p class="title icon_primary">初中<i class="icon icon-arrow-right"></i></p>
                <div class="type">
                  <span class="goTeachingResource" data-param="{forType: 2, typeId: 2}">课件</span>
                  <span class="goTeachingResource" data-param="{forType: 2, typeId: 6}">试卷</span>
                  <span class="goTeachingResource" data-param="{forType: 2, typeId: 3}">导学案</span>
                  <span class="goTeachingResource" data-param="{forType: 2, typeId: 1}">教案</span>
                </div>
              </div>
              <div class="desc-card" :class="{isShow : isShow === 1}">
                <div class="desc_li">
                  <div class="desc-title desc-title1">七年级 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:7,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:7,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:7,courseId:28}"><p>英语</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:7,courseId:41}"><p>生物</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:7,courseId:36}"><p>地理</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:7,courseId:35}"><p>历史</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:7,courseId:48}"><p>道德与法治</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:7,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
                <div class="desc_li">
                  <div class="desc-title desc-title1">八年级 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:8,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:8,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:8,courseId:28}"><p>英语</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:8,courseId:41}"><p>生物</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:8,courseId:36}"><p>地理</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:8,courseId:35}"><p>历史</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:8,courseId:37}"><p>物理</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:8,courseId:48}"><p>道德与法治</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:8,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
                <div class="desc_li">
                  <div class="desc-title desc-title1">九年级 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:9,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:9,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:9,courseId:28}"><p>英语</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:9,courseId:37}"><p>物理</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:9,courseId:40}"><p>化学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:9,courseId:35}"><p>历史</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:9,courseId:48}"><p>道德与法治</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 2,gradeId:9,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="item d-item" id="forType2" :class="{currentItem:isShow===2}" @mouseenter="toggleIsShow(2)"
                @mouseleave="toggleIsShow(-1)">
              <div class="item-content">
                <p class="title icon_primary">高中<i class="icon icon-arrow-right"></i></p>
                <div class="type">
                  <span class="goTeachingResource" data-param="{forType: 3, typeId: 2}">课件</span>
                  <span class="goTeachingResource" data-param="{forType: 3, typeId: 6}">试卷</span>
                  <span class="goTeachingResource" data-param="{forType: 3, typeId: 3}">导学案</span>
                  <span class="goTeachingResource" data-param="{forType: 3, typeId: 1}">教案</span>
                </div>
              </div>
              <div class="desc-card" :class="{isShow : isShow === 2}">
                <div class="desc_li">
                  <div class="desc-title desc-title1">高一 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:10,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:10,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:10,courseId:28}"><p>英语</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:10,courseId:41}"><p>生物</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:10,courseId:36}"><p>地理</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:10,courseId:40}"><p>化学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:10,courseId:37}"><p>物理</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:10,courseId:35}"><p>历史</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:10,courseId:39}"><p>思想政治</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:10,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
                <div class="desc_li">
                  <div class="desc-title desc-title1">高二 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:11,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:11,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:11,courseId:28}"><p>英语</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:11,courseId:41}"><p>生物</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:11,courseId:36}"><p>地理</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:11,courseId:40}"><p>化学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:11,courseId:37}"><p>物理</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:11,courseId:35}"><p>历史</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:11,courseId:39}"><p>思想政治</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:11,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
                <div class="desc_li">
                  <div class="desc-title desc-title1">高三 :</div>
                  <div class="desc-content desc-content1 content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,typeId: 6,gradeId:12,courseId:26}"><p>语文</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:12,courseId:27}"><p>数学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:12,courseId:28}"><p>英语</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:12,courseId:41}"><p>生物</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:12,courseId:36}"><p>地理</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:12,courseId:40}"><p>化学</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:12,courseId:37}"><p>物理</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:12,courseId:35}"><p>历史</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:12,courseId:39}"><p>思想政治</p></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3,gradeId:12,courseId:0}"><p>其他</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="item d-item" id="forType3" :class="{currentItem:isShow===3}" @mouseenter="toggleIsShow(3)"
                @mouseleave="toggleIsShow(-1)">
              <div class="item-content">
                <p class="title icon_primary">中高考<i class="icon icon-arrow-right"></i></p>
                <div class="type">
                  <span class="goTeachingResource" data-param="{forType: 2, paperTypeId: 21, typeId: 6}">真题</span>
                  <span class="goTeachingResource" data-param="{forType: 2, paperTypeId: 22, typeId: 6}">模拟</span>
                  <span class="goTeachingResource" data-param="{forType: 2, paperTypeId: 23, typeId: 6}">预测</span>
                  <span class="goTeachingResource" data-param="{typeId: 35}">备考讲座</span>
                </div>
              </div>
              <div class="desc-card" :class="{isShow : isShow === 3}">
                <div class="desc-title">中考 :</div>
                <div class="desc-content content1">
                  <ul class="content1">
                    <li style="cursor: pointer" class="goTeachingResource"
                        data-param="{forType: 2, paperTypeId: 14, typeId: 6}"><p>单元测验</p><span>|</span></li>
                    <li style="cursor: pointer" class="goTeachingResource"
                        data-param="{forType: 2, paperTypeId: 15, typeId: 6}"><p>月考试卷</p><span>|</span></li>
                    <li style="cursor: pointer" class="goTeachingResource"
                        data-param="{forType: 2, paperTypeId: 16, typeId: 6}"><p>期中检测</p><span>|</span></li>
                    <li style="cursor: pointer" class="goTeachingResource"
                        data-param="{forType: 2, paperTypeId: 17, typeId: 6}"><p>期末试卷</p><span>|</span></li>
                    <li style="cursor: pointer" class="goTeachingResource"
                        data-param="{forType: 2, paperTypeId: 18, typeId: 6}"><p>水平测试</p><span>|</span></li>
                    <li style="cursor: pointer" class="goTeachingResource"
                        data-param="{forType: 2, paperTypeId: 21, typeId: 6}"><p>中考真题</p><span>|</span></li>
                    <li style="cursor: pointer" class="goTeachingResource"
                        data-param="{forType: 2, paperTypeId: 22, typeId: 6}"><p>中考模拟</p><span>|</span></li>
                    <li style="cursor: pointer" class="goTeachingResource"
                        data-param="{forType: 2, paperTypeId: 23, typeId: 6}"><p>中考预测</p><span>|</span></li>
                  </ul>
                  <div class="desc-title">高考 :</div>
                  <div class="desc-content content1">
                    <ul class="content1">
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3, paperTypeId: 14, typeId: 6}"><p>单元测验</p><span>|</span></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3, paperTypeId: 15, typeId: 6}"><p>月考试卷</p><span>|</span></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3, paperTypeId: 16, typeId: 6}"><p>期中检测</p><span>|</span></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3, paperTypeId: 17, typeId: 6}"><p>期末试卷</p><span>|</span></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3, paperTypeId: 18, typeId: 6}"><p>水平测试</p><span>|</span></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3, paperTypeId: 24, typeId: 6}"><p>高考真题</p><span>|</span></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3, paperTypeId: 25, typeId: 6}"><p>高考模拟</p><span>|</span></li>
                      <li style="cursor: pointer" class="goTeachingResource"
                          data-param="{forType: 3, paperTypeId: 26, typeId: 6}"><p>高考预测</p><span>|</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="resource_upload">
          <div class="wt-upload">
            <div class="show"><span>海量资源分享</span>
              <ul class="num" id="allResourceCount">
                <li style="width:20px;left:0px;top: 0px;height:330px;">
                  <div style="height:33px;line-height:33px;">0</div>
                  <div style="height:33px;line-height:33px;">1</div>
                  <div style="height:33px;line-height:33px;">2</div>
                  <div style="height:33px;line-height:33px;">3</div>
                  <div style="height:33px;line-height:33px;">4</div>
                  <div style="height:33px;line-height:33px;">5</div>
                  <div style="height:33px;line-height:33px;">6</div>
                  <div style="height:33px;line-height:33px;">7</div>
                  <div style="height:33px;line-height:33px;">8</div>
                  <div style="height:33px;line-height:33px;">9</div>
                </li>
                <li style="width:20px;left:20px;top: 0px;height:330px;">
                  <div style="height:33px;line-height:33px;">0</div>
                  <div style="height:33px;line-height:33px;">1</div>
                  <div style="height:33px;line-height:33px;">2</div>
                  <div style="height:33px;line-height:33px;">3</div>
                  <div style="height:33px;line-height:33px;">4</div>
                  <div style="height:33px;line-height:33px;">5</div>
                  <div style="height:33px;line-height:33px;">6</div>
                  <div style="height:33px;line-height:33px;">7</div>
                  <div style="height:33px;line-height:33px;">8</div>
                  <div style="height:33px;line-height:33px;">9</div>
                </li>
                <li style="width: 20px; left: 40px; top: -66px; height: 330px;">
                  <div style="height:33px;line-height:33px;">0</div>
                  <div style="height:33px;line-height:33px;">1</div>
                  <div style="height:33px;line-height:33px;">2</div>
                  <div style="height:33px;line-height:33px;">3</div>
                  <div style="height:33px;line-height:33px;">4</div>
                  <div style="height:33px;line-height:33px;">5</div>
                  <div style="height:33px;line-height:33px;">6</div>
                  <div style="height:33px;line-height:33px;">7</div>
                  <div style="height:33px;line-height:33px;">8</div>
                  <div style="height:33px;line-height:33px;">9</div>
                </li>
                <li style="width: 20px; left: 60px; top: -264px; height: 330px;">
                  <div style="height:33px;line-height:33px;">0</div>
                  <div style="height:33px;line-height:33px;">1</div>
                  <div style="height:33px;line-height:33px;">2</div>
                  <div style="height:33px;line-height:33px;">3</div>
                  <div style="height:33px;line-height:33px;">4</div>
                  <div style="height:33px;line-height:33px;">5</div>
                  <div style="height:33px;line-height:33px;">6</div>
                  <div style="height:33px;line-height:33px;">7</div>
                  <div style="height:33px;line-height:33px;">8</div>
                  <div style="height:33px;line-height:33px;">9</div>
                </li>
                <li style="width: 20px; left: 80px; top: -33px; height: 330px;">
                  <div style="height:33px;line-height:33px;">0</div>
                  <div style="height:33px;line-height:33px;">1</div>
                  <div style="height:33px;line-height:33px;">2</div>
                  <div style="height:33px;line-height:33px;">3</div>
                  <div style="height:33px;line-height:33px;">4</div>
                  <div style="height:33px;line-height:33px;">5</div>
                  <div style="height:33px;line-height:33px;">6</div>
                  <div style="height:33px;line-height:33px;">7</div>
                  <div style="height:33px;line-height:33px;">8</div>
                  <div style="height:33px;line-height:33px;">9</div>
                </li>
                <li style="width: 20px; left: 100px; top: -264px; height: 330px;">
                  <div style="height:33px;line-height:33px;">0</div>
                  <div style="height:33px;line-height:33px;">1</div>
                  <div style="height:33px;line-height:33px;">2</div>
                  <div style="height:33px;line-height:33px;">3</div>
                  <div style="height:33px;line-height:33px;">4</div>
                  <div style="height:33px;line-height:33px;">5</div>
                  <div style="height:33px;line-height:33px;">6</div>
                  <div style="height:33px;line-height:33px;">7</div>
                  <div style="height:33px;line-height:33px;">8</div>
                  <div style="height:33px;line-height:33px;">9</div>
                </li>
              </ul>
            </div>
            <div style="display:none;" id="Runnum">002818</div>
            <button class="btn-primary" type="button" id="sczjdj" style="display: none;">上传资源</button>
          </div>
        </div>
      </div>
    </div>
    <!--轮播图end-->

    <ul class="resourceNum">
      <li class="jczy">
        <span id="basic_id">2361</span>
        <span>基础型资源</span>
      </li>
      <p></p>
      <li>
        <span>277</span>
        <span>拓展型资源</span>
      </li>
      <p></p>
      <li>
        <span>1265</span>
        <span>研究型资源</span>
      </li>
      <p></p>
      <li>
        <span>736</span>
        <span>专题型资源</span>
      </li>
      <p></p>
      <li class="cklzy">
        <span>265</span>
        <span>创客型资源</span>
      </li>
    </ul>

    <!--专区轮播图start-->
    <div class="wt-cont_imgs">
      <div class="tabs-wrapper">
        <div class="tabs-content">
          <div class="swiper-container small-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="http://www.sxeduyun.com/" target="_blank">
                  <img class="wt_live_img"
                       src="https://bj.bcebos.com/v1/wisdomedu-img/E92179A30FDF4B07BEF05266527C1126?authorization=bce-auth-v1%2F7642b4b48046452697e90662eed41ace%2F2018-11-02T02%3A38%3A20Z%2F-1%2F%2Fd75ddeed30cdd40e13652748c044efa585ce1e1929739f02f96f3a2de2a49b53">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="http://www.sxeduyun.com/" target="_blank">
                  <img class="wt_live_img"
                       src="https://bj.bcebos.com/v1/wisdomedu-img/2820D51DF0E94F7CADA32CC75F588827?authorization=bce-auth-v1%2F7642b4b48046452697e90662eed41ace%2F2019-05-31T09%3A06%3A12Z%2F-1%2F%2F877caab4bdc955dd69243335ad6cd40e32bf4ccf1d3d2fb13c8eecb858098cc0">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="http://www.sxeduyun.com/" target="_blank">
                  <img class="wt_live_img"
                       src="https://bj.bcebos.com/v1/wisdomedu-img/E92179A30FDF4B07BEF05266527C1126?authorization=bce-auth-v1%2F7642b4b48046452697e90662eed41ace%2F2018-11-02T02%3A38%3A20Z%2F-1%2F%2Fd75ddeed30cdd40e13652748c044efa585ce1e1929739f02f96f3a2de2a49b53">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="http://www.sxeduyun.com/" target="_blank">
                  <img class="wt_live_img"
                       src="https://bj.bcebos.com/v1/wisdomedu-img/2820D51DF0E94F7CADA32CC75F588827?authorization=bce-auth-v1%2F7642b4b48046452697e90662eed41ace%2F2019-05-31T09%3A06%3A12Z%2F-1%2F%2F877caab4bdc955dd69243335ad6cd40e32bf4ccf1d3d2fb13c8eecb858098cc0">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="http://www.sxeduyun.com/" target="_blank">
                  <img class="wt_live_img"
                       src="https://bj.bcebos.com/v1/wisdomedu-img/E92179A30FDF4B07BEF05266527C1126?authorization=bce-auth-v1%2F7642b4b48046452697e90662eed41ace%2F2018-11-02T02%3A38%3A20Z%2F-1%2F%2Fd75ddeed30cdd40e13652748c044efa585ce1e1929739f02f96f3a2de2a49b53">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="http://www.sxeduyun.com/" target="_blank">
                  <img class="wt_live_img"
                       src="https://bj.bcebos.com/v1/wisdomedu-img/2820D51DF0E94F7CADA32CC75F588827?authorization=bce-auth-v1%2F7642b4b48046452697e90662eed41ace%2F2019-05-31T09%3A06%3A12Z%2F-1%2F%2F877caab4bdc955dd69243335ad6cd40e32bf4ccf1d3d2fb13c8eecb858098cc0">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="http://www.sxeduyun.com/" target="_blank">
                  <img class="wt_live_img"
                       src="https://bj.bcebos.com/v1/wisdomedu-img/E92179A30FDF4B07BEF05266527C1126?authorization=bce-auth-v1%2F7642b4b48046452697e90662eed41ace%2F2018-11-02T02%3A38%3A20Z%2F-1%2F%2Fd75ddeed30cdd40e13652748c044efa585ce1e1929739f02f96f3a2de2a49b53">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
          </div>
        </div>
      </div>
    </div>
    <!--专区轮播图end-->

    <ul class="resourceAll">
      <li class="basicRes">
        <div class="resTitle">
          <p>
            <i></i>
            <section>基础型资源</section>
            <section>2361条</section>
            <span id="house_resource_more">校本资源</span>
            <span id="resourceSchoolMore">名校资源</span>
          </p>
          <p id="baseResourceMore">
            更多
            <img src="./images/moreicon.png">
          </p>
        </div>
        <ul class="basicLists">
          <li>
            <div class="resTit">
              <img src="./images/basic-ja.png" alt="">
              <section>教案</section>
              <section>925条</section>
            </div>
            <ul id="basic_type_1">
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="桃花源记翻译">桃花源记翻译</span>
                </p>
                <span>2019-06-22</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="微课《简介如何看图写话》.mp4">微课《简介如何看图写话》.mp4</span>
                </p>
                <span>2019-06-21</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="《阿长与〈山海经〉》第三四学时导学案.doc">《阿长与〈山海经〉》第三四学时导学案.doc</span>
                </p>
                <span>2019-06-21</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="《卖炭翁》课件.pptx">《卖炭翁》课件.pptx</span>
                </p>
                <span>2019-06-21</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="《大自然的语言》导学案.docx">《大自然的语言》导学案.docx</span>
                </p>
                <span>2019-06-21</span>
              </li>
            </ul>
          </li>
          <li>
            <div class="resTit">
              <img src="./images/basic-dxa.png" alt="">
              <section>导学案</section>
              <section>182条</section>
            </div>
            <ul id="basic_type_3">
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="八年级上册语文【教材梳理】专项部分 习作（人教版八年级上）.pdf">八年级上册语文【教材梳理】专项部分 习作（人教版八年级上）.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="泥塑.pdf">泥塑.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="[25063]人教新课标十二册语文教案.pdf">[25063]人教新课标十二册语文教案.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="城市之肺.pdf">城市之肺.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="人教版八上轻叩诗歌大门(学文篇).pdf">人教版八上轻叩诗歌大门(学文篇).pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
            </ul>
          </li>
          <li>
            <div class="resTit">
              <img src="./images/basic-kj.png" alt="">
              <section>课件</section>
              <section>616条</section>
            </div>
            <ul id="basic_type_2">
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="人教社语文八上年级第三、四单元教材解读和教学建议.pdf">人教社语文八上年级第三、四单元教材解读和教学建议.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="人教社语文八上年级第一、二单元教材解读和教学建议.pdf">人教社语文八上年级第一、二单元教材解读和教学建议.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="人教社语文八上年级第七、八单元教材解读和教学建议.pdf">人教社语文八上年级第七、八单元教材解读和教学建议.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="人教版 语文九年级上册 教材介绍.pdf">人教版 语文九年级上册 教材介绍.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="人教社语文九年级上第五、六单元教材解读和教学建议.pdf">人教社语文九年级上第五、六单元教材解读和教学建议.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
            </ul>
          </li>
          <li>
            <div class="resTit">
              <img src="./images/basic-wk.png" alt="">
              <section>微课</section>
              <section>105条</section>
            </div>
            <ul id="basic_type_4">
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span
                    title="[1488809]八年级上册语文【教材梳理】专项部分 阅读（人教版六年级上）.pdf">[1488809]八年级上册语文【教材梳理】专项部分 阅读（人教版六年级上）.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="八年级上语文专项复习测-专项复习-综合性学习-人教版.pdf">八年级上语文专项复习测-专项复习-综合性学习-人教版.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span
                    title="[1488812]八年级上册语文【教材梳理】专项部分 古诗文（人教版八年级上）.pdf">[1488812]八年级上册语文【教材梳理】专项部分 古诗文（人教版八年级上）.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="[1488811]八年级上册语文【教材梳理】专项部分 口语交际（人教版八年级上）.pdf">[1488811]八年级上册语文【教材梳理】专项部分 口语交际（人教版八年级上）.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="九年级上册语文【教材梳理】专项部分 句子（人教版八年级上）.pdf">九年级上册语文【教材梳理】专项部分 句子（人教版八年级上）.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
            </ul>
          </li>
          <li>
            <div class="resTit">
              <img src="./images/basic-ktsl.png" alt="">
              <section>课堂实录</section>
              <section>61条</section>
            </div>
            <ul id="basic_type_9">
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="语文八年级上册近、反义词汇总.pdf">语文八年级上册近、反义词汇总.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="八年级语文上册学习重点1-11课.pdf">八年级语文上册学习重点1-11课.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="九年级上册语文【教材梳理】专项部分 字词（人教版八年级上）.pdf">九年级上册语文【教材梳理】专项部分 字词（人教版八年级上）.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="葬花词诗集.pdf">葬花词诗集.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="中考20篇文言文重点字词句.doc">中考20篇文言文重点字词句.doc</span>
                </p>
                <span>2019-05-31</span>
              </li>
            </ul>
          </li>
          <li>
            <div class="resTit">
              <img src="./images/basic-qt.png" alt="">
              <section>习题和试卷</section>
              <section>276条</section>
            </div>
            <ul id="basic_type_6">
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="九年级上册课内阅读+答案.pdf">九年级上册课内阅读+答案.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="(人教版新课标)八年级语文上册 全册同步练习.pdf">(人教版新课标)八年级语文上册 全册同步练习.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="八年级语文知识竞赛测试卷.pdf">八年级语文知识竞赛测试卷.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="2013学年度八年级语文上册词语盘点 人教新课标版 【全册】.pdf">2013学年度八年级语文上册词语盘点 人教新课标版 【全册】.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
              <li>
                <p>
                  <img src="./images/icon_mv.png" alt="">
                  <section>语文&nbsp;|</section>
                  <span title="八年级语文试卷.pdf">八年级语文试卷.pdf</span>
                </p>
                <span>2019-05-31</span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <div class="resTitle">
          <p>
            <i></i>
            <section>拓展型资源</section>
            <section>227条</section>
          </p>
          <p>
            更多
            <img src="./images/moreicon.png" alt="">
          </p>
        </div>
        <ul class="noResContLists">
          <!--<img src="./images/images/courseImg/kzRes.jpg" alt="">-->
          <!--展示版-->
          <div class="yz_ty">
            <ul>
              <li><a href="/resource/previewResource?resourceId=20821"><img src="./images/ty1.png" alt=""></a>
              </li>
              <li><a href="/resource/previewResource?resourceId=20791"><img src="./images/ty2.png" alt=""></a>
              </li>
              <li><a href="/resource/previewResource?resourceId=20792"><img src="./images/ty3.png" alt=""></a>
              </li>
              <li><a href="/resource/previewResource?resourceId=20793"><img src="./images/ty4.png" alt=""></a>
              </li>
              <li><a href="/resource/previewResource?resourceId=20794"><img src="./images/ty5.png" alt=""></a>
              </li>
              <li><a href="/resource/previewResource?resourceId=20795"><img src="./images/ty6.png" alt=""></a>
              </li>
              <li><a href="/resource/previewResource?resourceId=20796"><img src="./images/ty7.png" alt=""></a>
              </li>
              <li><a href="/resource/previewResource?resourceId=20798"><img src="./images/ty8.png" alt=""></a>
              </li>
              <li><a href="/resource/previewResource?resourceId=20569"><img src="./images/ty9.png" alt=""></a>
              </li>
              <li><a href="/resource/previewResource?resourceId=20800"><img src="./images/ty10.png" alt=""></a>
              </li>
            </ul>
          </div>
        </ul>
      </li>
      <li>
        <div class="resTitle">
          <p>
            <i></i>
            <section>研究型资源</section>
            <section>1,265条</section>
          </p>
          <p>
            更多
            <img src="./images/moreicon.png" alt="">
          </p>
        </div>
        <ul class="noResContLists">
          <!--<img src="./images/images/courseImg//yjRes.jpg" alt="">-->
          <div class="yz_yj">
            <ul>
              <li><a href="/resource/previewResource?resourceId=20813"><img src="./images/yj1.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20807"><img src="./images/yj2.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20801"><img src="./images/yj3.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20808"><img src="./images/yj4.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20809"><img src="./images/yj5.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20803"><img src="./images/yj6.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20814"><img src="./images/yj7.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20815"><img src="./images/yj8.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20816"><img src="./images/yj9.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20802"><img src="./images/yj10.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20812"><img src="./images/yj11.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20804"><img src="./images/yj12.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20810"><img src="./images/yj13.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20811"><img src="./images/yj14.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20807"><img src="./images/yj15.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20805"><img src="./images/yj16.png" alt=""></a></li>
            </ul>
          </div>
        </ul>
      </li>
      <li>
        <div class="resTitle">
          <p>
            <i></i>
            <section>专题型资源</section>
            <section>736条</section>
          </p>
          <p>
            更多
            <img src="./images/moreicon.png" alt="">
          </p>
        </div>
        <ul class="noResContLists">
          <div class="yz_zt">
            <ul>
              <li><a href="/resource/previewResource?resourceId=20817"><img src="./images/zt1.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20818"><img src="./images/zt2.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20819"><img src="./images/zt3.png" alt=""></a></li>
              <li><a href="/resource/previewResource?resourceId=20820"><img src="./images/zt4.png" alt=""></a></li>
            </ul>
          </div>
        </ul>
      </li>
      <li>
        <h3 class="wt_title" style="height:54px;line-height: 54px;padding-right: 32px;">
          <p style="font-size: 24px;"><span style="height: 24px;margin-top: 16px;"></span>创客型资源</p>
          <a id="resourceChannelMore" href="javascript:void(0)" style="line-height:54px;"><p style="font-size: 18px;">
            更多<img
            src="./images/moreicon.png" alt=""></p></a>
        </h3>
        <div class="wt-channel-other">
          <div class="channel-content">
            <ul id="resourceChannelUl_0"><h5
              onclick="WT.go_url('/resource/outSideResource', {channelId: 65,sortType:1,page: 1})"><a
              href="javascript:void(0)"><img
              src="https://bj.bcebos.com/v1/wisdomedu-img/2686EFE888424ED292F7C7D1A96E072C?authorization=bce-auth-v1%2F7642b4b48046452697e90662eed41ace%2F2019-05-31T08%3A34%3A04Z%2F-1%2F%2Fccda0173263ab3917dd25abb68873f9c134f2df955591793954f430911223a99"></a>
            </h5>
              <li onclick="goResourceDetail(20886)"><a href="javascript:void(0)"><i
                class="disk_file_icon_mv"></i>
                <p><span>创客资源</span><span>|</span><span>L2_课件.pptx</span></p>
                <p><span>贡献者：</span><span title="平台资源库">平台资源库</span><span>|</span><span>2019-05-31</span></p></a></li>
              <li onclick="goResourceDetail(20921)"><a href="javascript:void(0)"><i
                class="disk_file_icon_mv"></i>
                <p><span>创客资源</span><span>|</span><span>示范笔记_C语言.docx</span></p>
                <p><span>贡献者：</span><span title="平台资源库">平台资源库</span><span>|</span><span>2019-06-03</span></p></a></li>
              <li onclick="goResourceDetail(20920)"><a href="javascript:void(0)"><i
                class="disk_file_icon_mv"></i>
                <p><span>创客资源</span><span>|</span><span>示范笔记_电子技术.docx</span></p>
                <p><span>贡献者：</span><span title="平台资源库">平台资源库</span><span>|</span><span>2019-06-03</span></p></a></li>
              <li onclick="goResourceDetail(20922)"><a href="javascript:void(0)"><i
                class="disk_file_icon_mv"></i>
                <p><span>创客资源</span><span>|</span><span>电学基础课件.pptx</span></p>
                <p><span>贡献者：</span><span title="平台资源库">平台资源库</span><span>|</span><span>2019-06-03</span></p></a></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>

  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'ResourceCenter',
    data () {
      return {
        isShow: -1
      }
    },
    mounted () {
      var mySwiper = new Swiper('.header_slider', {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: true,
        loop: true
      })

      var slidesGrid = new Swiper('.small-slider', {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: true,
        slidesPerView: 4,
        loop: true
      })
    },
    methods: {
      toggleIsShow (isShowNum) {
        this.isShow = isShowNum
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wt-content
    padding-bottom: 45px;
    width: 100%;
    background: #fff;

    .wt-imgs
      position: relative;
      height: 410px;
      width: 100%;
      margin-top: 20px;

      .wt_nav
        width: 100%;
        height: 350px;
        overflow: hidden;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 99;
        background: #083ef5;

        .swiper-container
          width: 1200px;
          height: 100%;

          .swiper-wrapper
            .swiper-slide
              font-size: 18px;

              a
                .wt_live_img
                  height: 400px;
                  width: 100%;
                  display: block;
                  border-radius: 4px;

      .wt-navlist
        width: 1200px;
        height: 464px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 998;

        .trendsBox
          width: 100%;
          height: 60px;
          border: 2px solid #ECEEF1;
          border-bottom: 0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          padding: 0 100px 0 310px;
          line-height: 60px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;

          img
            flex: 0 0 auto;
            display: flex;
            width: 30px;
            margin-right: 12px;

          p
            flex: 0 0 auto;
            display: flex;
            font-size: 20px;
            font-weight: bold;
            color: #334D7A;
            margin-right: 16px;

          .trendsConts
            flex: 0 1 auto;
            display: flex;
            width: 100%;
            font-size: 16px;
            color: #68728B;

            .swiper-wrapper
              display: flex;
              flex-flow: row nowrap;
              justify-content: flex-start;
              cursor: pointer;
              section-align: center;
              font-size: 18px;
              background: #fff;
              height: 64px !important;
              line-height: 64px !important;
              align-items: center;

              section
                &:nth-of-type(1)
                  flex: 0 0 auto;
                  display: flex;
                  margin-right: 14px;

                &:nth-of-type(2)
                  flex: 0 0 auto;
                  display: flex;
                  color: #347EFF;

                &:nth-of-type(3)
                  flex: 0 1 auto;
                  white-space: nowrap;
                  overflow: hidden;
                  section-overflow: ellipsis;

        .resourceUl
          width: 280px;
          height: 464px;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;

          > .title
            width: 100%;
            height: 60px;
            line-height: 60px;
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            color: #fff;
            background: #347eff;
            border-top-left-radius: 4px;

          .list
            width: 100%;
            height: 350px;
            background: #fff;
            color: #334d7a;
            border: 1px solid #347eff;
            position: relative;

            .item
              height: 87.5px;
              box-sizing: border-box;

              &.currentItem
                background-color #E2ECF7

              &:hover
                background-color #E2ECF7

              .item-content
                width: 100%;
                height: 100%;
                color: #334d7a;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: flex-start;

                .title
                  width: 280px;
                  font-size: 16px;
                  font-weight: bold;
                  display: flex;
                  flex-flow: row nowrap;
                  padding 0 20px 5px
                  margin-bottom 5px
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 6px;
                  background-size: 24px 24px;
                  box-sizing border-box

                  .icon-arrow-right
                    background: url(./images/icon_right_white.png) no-repeat;
                    background-position: center;
                    -webkit-background-size: cover;
                    background-size: cover;
                    width: 16px;
                    height: 16px;

                .type
                  font-size: 16px;
                  padding: 0 20px;
                  width: 100%;
                  display: flex;
                  flex-flow: row nowrap;
                  justify-content: space-between;
                  box-sizing border-box

                  span
                    cursor pointer

              .desc-card
                display none
                width: 400px;
                height: 350px;
                overflow: auto;
                position: absolute;
                color: #262831;
                padding: 20px;
                left: 279px;
                top: -1px;
                z-index: 11;
                border-radius: 4px;
                background: #e2ecf7;

                &.isShow
                  display block

                .desc_li
                  overflow hidden

                  .desc-title
                    font-size: 16px;
                    color: #334d7a;
                    line-height: 50px;

                    &.desc-title1
                      font-size: 16px;
                      color: #334d7a;
                      line-height: 50px;

                  .desc-content
                    width: 100%

                    &.desc-content1
                      width: 81% !important;
                      float: left;

                      > ul
                        > li
                          line-height: 50px !important;

                    > ul
                      width: 100%;
                      display: flex;
                      flex-flow: row wrap;
                      justify-content: flex-start;
                      align-items: center;

                      > li
                        margin-right: 16px;
                        font-size: 16px;
                        line-height: 36px;
                        display: flex;
                        flex-flow: row nowrap;
                        justify-content: flex-start;

                .desc-title
                  font-size: 16px;
                  color: #334d7a;
                  line-height: 50px;

                  &.desc-title1
                    font-size: 16px;
                    color: #334d7a;
                    line-height: 50px;

                .desc-content
                  width: 100%

                  &.desc-content1
                    width: 81% !important;
                    float: left;

                    > ul
                      > li
                        line-height: 50px !important;

                  > ul
                    width: 100%;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: flex-start;
                    align-items: center;

                    > li
                      margin-right: 16px;
                      font-size: 16px;
                      line-height: 36px;
                      display: flex;
                      flex-flow: row nowrap;
                      justify-content: flex-start;

                      span
                        color: #334d7a;
                        padding 0 20px

        .resource_upload
          width: 238px;
          height: 250px;
          position: absolute;
          right: 0;
          top: 116px;
          margin: auto;

          .wt-upload
            width: 238px;
            height: 249px;
            background: url(./images/resbg.png) no-repeat;
            background-size: 100% 100%;
            padding: 42px 0 36px;
            border-radius: 4px;
            /* box-shadow: 0 0 2px #f4f4f4; */
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: center;
            box-sizing border-box

            .show
              display inline-block

              span
                &:nth-of-type(1)
                  font-size: 22px;
                  color: #347eff;
                  display: block;
                  text-align: center;

              ul
                margin: 30px auto 0;
                padding: 0;
                overflow: hidden;
                height: 33px;
                line-height: 33px;
                text-align: center;
                font-weight: bold;
                position: relative;
                width: 200px;
                font-weight bold

                li
                  list-style: none;
                  width: 20px;
                  float: left;
                  position: absolute;
                  color: #347eff;
                  font-size: 24px;

                  &:nth-of-type(1)
                    left: 7px !important;

                  &:nth-of-type(2)
                    left: 38px !important;

                  &:nth-of-type(3)
                    left: 70px !important;

                  &:nth-of-type(4)
                    left: 114px !important;

                  &:nth-of-type(5)
                    left: 146px !important;

                  &:nth-of-type(6)
                    left: 178px !important;

    .resourceNum
      width: 1200px;
      height: 100px;
      margin: 0 auto;
      border: 2px solid #ECEEF1;
      border-top: 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;

      li
        width: 20%;
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        span
          display inline-block
            padding 10px 0

          &:nth-of-type(1)
            font-size 28px
            color #3974FF
            font-weight bold

          &:nth-of-type(2)
            font-size: 18px;
            color: #8695B2;

      p
        width: 2px;
        height: 54px;
        background-color: #ECEEF1;

    .wt-cont_imgs
      width: 1200px;
      margin: 25px auto 0;
      overflow: hidden;

      .tabs-wrapper
        position: relative;
        width: 100%;

        .tabs-content
          .swiper-container
            width: 1200px;
            height: 100%;

            .swiper-wrapper
              .swiper-slide
                font-size: 18px;

                a
                  img
                    height: 120px;
                    width: 285px;
                    display: block;
                    border-radius: 4px;

    .resourceAll
      width: 1200px;
      margin: 20px auto;

      > li
        width: 100%;
        margin-bottom: 13px;

        &:nth-of-type(4)
          .noResContLists
            margin-bottom: 20px;
            height: 276px;

        .resTitle
          width: 100%;
          height: 54px;
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
          padding-right: 32px;
          margin-bottom: 20px

          > p
            height: 100%;
            display: flex;
            flex-flow: row;
            justify-content: flex-start;
            align-items: center;

            &:nth-of-type(1)
              i
                display: inline-block;
                width: 4px;
                height: 24px;
                border-radius: 4px;
                background: linear-gradient(to bottom, #FC4470, #FF664C);
                margin-right: 5px;

              section
                &:nth-of-type(1)
                  font-size: 24px;
                  font-weight: bold;
                  color: #334D7A;
                  margin-right: 10px;

                &:nth-of-type(2)
                  font-size: 22px;
                  color: #68728B;
                  margin-right: 20px;


              span
                padding: 2px 6px;
                background-color: #347EFF;
                border-radius: 4px;
                font-size: 16px;
                color: #fff;
                text-align: center;
                line-height: 24px;
                cursor: pointer;
                margin-right: 10px;

            &:nth-of-type(2)
              font-size: 18px;
              color: #68728B;
              font-weight: bold;
              cursor: pointer;

              img
                vertical-align middle

        .basicLists
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
          align-items: flex-start;

          > li
            width: 31.3%;
            padding: 5px 0px 10px 0;

            &:nth-of-type(3n-1)
              margin 0 36px


            > .resTit
              width: 100%;
              padding: 5px 0;
              display: flex;
              flex-flow: row;
              justify-content: flex-start;
              align-items: center;

              img
                margin-right: 6px;

              section
                &:nth-of-type(1)
                  font-size: 20px;
                  font-weight: bold;
                  color: #334D7A;
                  margin-right: 8px;

                &:nth-of-type(2)
                  font-size: 18px;
                  color: #68728B;

            > ul
              width: 100%

              > li
                width: 100%;
                padding: 10px 0;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;

                > p
                  width: 75%;
                  display: flex;
                  flex-flow: row nowrap;
                  justify-content: flex-start;
                  align-items: center;

                  img
                    flex: 0 0 auto;
                    margin-right: 8px;

                  section
                    flex: 0 0 auto;
                    font-size: 16px;
                    color: #347EFF;
                    margin-right: 6px;

                  span
                    flex: 0 1 auto;
                    font-size: 16px;
                    color: #334D7A;
                    cursor: pointer;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                > span {
                  font-size: 16px;
                  color: #334D7A;
                }


        .noResContLists
          margin-bottom: 20px;
          height: 445px;

          > .yz_ty
            > ul
              > li
                float: left;
                margin-left 85px
                margin-bottom 30px

                &:nth-of-type(5n+1)
                  margin-left 0

                > a
                  img
                    width: 171px;
                    height: 206px;
                    vertical-align: bottom;


          > .yz_yj
            > ul
              > li
                float: left;
                margin-left 40px
                margin-bottom 30px

                &:nth-of-type(4n+1)
                  margin-left 0

                > a
                  img
                    width: 268px;
                    height: 90px;
                    vertical-align: bottom;


          > .yz_zt
            > ul
              > li
                float: left;
                margin-left 20px
                margin-bottom 30px

                &:nth-of-type(4n+1)
                  margin-left 0

                > a
                  img
                    width: 285px;
                    height: 275px;
                    vertical-align: bottom;

        .wt_title
          height: 54px;
          line-height: 54px;
          padding-right: 32px;
          width 100%
          overflow: hidden;

          > p
            float: left;
            font-size: 24px;
            color: #334d7a;
            font-weight: bold;

            span
              width: 4px;
              display: block;
              float: left;
              background: linear-gradient(to bottom, #fc4470, #ff684e);
              border-radius: 4px;
              margin-right: 5px;
              height: 24px;
              margin-top: 16px;

          > a
            float: right;
            font-size: 14px;
            color: #68728b;
            display: block;
            line-height: 54px;

            > p
              color: #334d7a;
              font-weight: bold;
              float: left;
              font-size: 18px;

            img
              vertical-align middle
              margin-top -3px

        .wt-channel-other
          width: 100%;
          box-sizing: border-box;
          padding-bottom: 70px;

          .channel-content
            width: 100%;
            box-sizing: inherit;

            ul
              height: 130px;
              margin: 18px 5px 36px;
              border: 1px solid #c9def5;
              border-radius: 4px;
              background: url(./images/wt_channel_other_bg.png) no-repeat right;
              position: relative;
              padding: 2px 0;

              h5
                width: 42%;
                float: left;
                height: 100%;

                a
                  img
                    display: block;
                    width: 42%;
                    height: 150px;
                    position: absolute;
                    top: -10px;

              li
                height: 16px;
                margin-top: 7.5px;
                margin-bottom: 7.5px;
                margin-left: 32px;
                width: 52%;
                float: left;
                line-height: 16px;

                a
                  i
                    float: left;

                  .disk_file_icon_mv
                    width: 16px;
                    height: 16px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-image: url(./images/icon_mv.png);

                  p
                    &:nth-of-type(1)
                      float: left;
                      font-size: 14px;
                      color: #334d7a;
                      width: 61%;
                      span
                        &:nth-of-type(1)
                          color: #347eff;
                          width: 56px;
                          white-space: nowrap;
                          text-overflow: ellipsis;
                          overflow: hidden;
                          float: left;
                          margin-left: 10px;

                        &:nth-of-type(2)
                          margin: 0 5px;
                          color: #347eff;
                          float: left;

                        &:nth-of-type(3)
                          width: 78%;
                          white-space: nowrap;
                          text-overflow: ellipsis;
                          overflow: hidden;
                          float: left;



                    &:nth-of-type(2)
                      float: right;
                      font-size: 12px;
                      color: #68728b;


</style>
