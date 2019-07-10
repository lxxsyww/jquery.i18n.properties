<template>
  <section class="h_content">
    <section class="pro_content">
      <div>
        <h4 class="user_title"><span>ta的说说</span>
          <p class="count_num">共0条资源</p>
        </h4>

        <article class="list_box">
          <img src="./images/zwzy.png">
        </article>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Resource'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .h_content
    width: 1200px;
    margin: 0 auto;
    margin-top 40px
    overflow: hidden;
    z-index: 10;
    position: relative;
    background: #fff;
    padding-bottom: 30px;

    .pro_content
      overflow: hidden;
      border-radius: 4px;
      margin-bottom: 100px;

      > div
        .user_title
          font-size: 20px;
          color: #2C3745;
          margin: 25px 52px 0;
          line-height: 50px;
          border-bottom: 1px solid #E5EAF5;

          span
            height: 50px;
            border-bottom: 2px solid #347EFF;
            display: inline-block;

          .count_num
            font-size: 12px;
            color: #68728b;
            float: right;
        .list_box
          display: block;
          margin: 0 50px;
          img
            margin: 90px auto 130px;
            display: block;
            vertical-align middle

</style>
