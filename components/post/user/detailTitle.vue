<template>
  <el-row class="detailTitle">
    <nuxt-link class="detailTitleLYGL" to="/post">旅游攻略</nuxt-link>
    <span class="detailTitleXG">/</span>
    <span class="detailTitleGLXQ">攻略详情</span>
  </el-row>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.detailTitle {
      font-size: 14px;
      .detailTitleLYGL {
         font-weight: 700;
         color: #303133;
         &:hover {
            color: #4b9fff;
         }
      }
      .detailTitleXG {
         margin: 0px 9px;
         color: #c0c4cc;
         font-weight: 700;
      }
      .detailTitleGLXQ {
         font-weight: 400;
         color: #606266;
      }
   }
</style>
