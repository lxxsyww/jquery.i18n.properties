<template>
  <section class="classes_zz">
    <div class="load-container load5 load_bf">
      <div class="loader">Loading...</div>
      <a href="#load5">加载中...</a>
    </div>
    <div class="stone_table">
      <ul>
        <li data-val="3" class="stone_active">账号设置</li>
      </ul>
    </div>
    <div class="stone_box">
      <div class="avatar_box clear">
        <div class="avatar_left lf">
          头 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 像：
        </div>
        <div class="avatar_right lf">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AccountSettings',
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .classes_zz
    background: #fff;
    min-height: 520px;
    float: right;
    height: 580px;
    width: 970px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px #e6ecf3;

    .load-container
      width: 960px;
      min-height: 100%;
      float: left;
      position: absolute;
      overflow: hidden;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      z-index: 99;
      background: #d8d8d8;
      opacity: 0.8;
      display: none;

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
          line-height: 57px;
          cursor: pointer;
          font-size: 12px;

          &.stone_active
            border-bottom: 1px solid #347eff;
            color: #347eff;

    .stone_box
      padding 36px

      .avatar_box

        .avatar_left
          width 160px
          height 32px
          line-height 32px


</style>

<style lang="stylus" rel="stylesheet/stylus">
  .avatar_right
    .avatar-uploader
      .el-upload
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

        &:hover
          border-color: #409EFF;


      .avatar
        width: 178px;
        height: 178px;
        display: block;

      .avatar-uploader-icon
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
</style>
