<template>
  <el-pagination
    background
    layout="prev, pager, next"
    @current-change="paginationData.handleCurrentChange"
    :current-page="paginationData.currentPage"
    :page-sizes="paginationData.pageSizes"
    :page-size="paginationData.pageSize"
    :total="paginationData.total">
  >
  </el-pagination>

</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      paginationData: Object
    },
    mounted(){

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .el-pagination
    display flex
    justify-content center
    padding: 20px 5px;
</style>
