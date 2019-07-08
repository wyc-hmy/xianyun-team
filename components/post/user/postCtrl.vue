<template>
    <el-row type='flex' class="post-ctrl">

            <div class="ctrl-item">
               <i class="el-icon-edit-outline"></i>
               <!-- 评论数量 -->
               <span :v-model="total">评论({{this.total}})</span>
            </div>
            
            <div class="ctrl-item" 
            @click='handleCollectThis'>
               <i class="el-icon-star-off"></i>
               <span>收藏</span>
            </div>

            <div class="ctrl-item">
               <i class="el-icon-share"></i>
               <span>分享</span>
            </div>
            
            <div class="ctrl-item" 
            @click='handleLickThis' >
               <i class="iconfont iconding"></i>
               <!-- 点赞数量 -->
               <span>点赞({{}})</span>
            </div>
         </el-row>
</template>

<script>
export default {
   data() {
      return {
         total:0,
      }
   },
   methods: {
      // 点击收藏事件之后触发
      handleCollectThis() {

      },
      // 点击点赞事件之后触发
      handleLickThis() {

      }
   },
   mounted() {
      // 下面的需要修改，改为点击提交按钮之后，发送请求
      this.$axios({
         url:'/posts/comments',
         method:'GET',
      }).then( res => {
         this.total = res.data.total
      })
   },
}
</script>

<style scoped lang="less">
   .post-ctrl {
      padding-top: 50px;
      padding-bottom: 30px; 
      justify-content: center;
      .ctrl-item {
         cursor: pointer;
         margin: 0px 20px;
         text-align: center;
         i {
            display: block;
            font-size: 30px;
            color: orange;
         }
         span {
            font-size: 14px;
         }
      }
   }
</style>
