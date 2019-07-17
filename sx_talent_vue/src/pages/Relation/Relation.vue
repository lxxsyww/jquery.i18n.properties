<template>
  <div id="main">
    <div class="relation_top">联系我们</div>
    <div class="relation_content">
      <div>主办单位：山西省人力资源社会保障厅</div>
        <div>地址：山西省太原市迎泽区</div>
        <div>邮编：030000</div>
        <div>联系电话：0351-6666666</div>
        <div>邮箱：22222@163.com</div>
    </div>
    <div class="map">
      <img src="./images/map.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Relation'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./../../common/variable.styl"
  #main
    .relation_top
      border-bottom: 1px solid #d7d7d7;
      font-size: 18px;
      height: 38px;
      line-height: 38px;
      color: #045aea;
      font-weight: bold;
      box-sizing border-box

    .relation_content
      display flex
      flex-direction column
      justify-content space-around
      padding 10px
      box-sizing border-box

      div
        font-size 16px
        line-height 32px

    .map
      width: 850px;
      height: 420px;
      margin 60px auto
      img
        display inline-block
        width 100%
        height auto
</style>
