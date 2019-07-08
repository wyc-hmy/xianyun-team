<template>
<div>
   <el-row type='flex' class="father">

      <DetailLeft class="left"></DetailLeft>
      <DetailRight class="right"></DetailRight>

   </el-row>
   </div>
</template>

<script>
import DetailLeft from '@/components/post/detailLeft.vue';
import DetailRight from '@/components/post/detailRight.vue';
export default {
   components: {
      DetailLeft,
      DetailRight
   }
}
</script>

<style scoped lang="less">
   .father{
      margin: 0 auto;
      width: 1000px;
      padding-top: 20px;
      .left {
         width: 700px;
         margin-right: 20px;
      }
      .right {
         width: 280px;
      }
   }
</style>
