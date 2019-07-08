<template>
  <el-row class="commentsArticles">
    <div class="articles">评论</div>

    <!-- 评论输入框 -->
    <el-input
      class="commentInput"
      placeholder="来碗鱼翅漱漱口..."
      v-model="comment"
      type="textarea"
      autocomplete="off"
      resize="none">
      </el-input>

    <!-- 上传图片 -->
    <el-row class="uploadPictures ">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </el-row>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
};
</script>

<style scoped lang="less">
.commentsArticles {
  width: 100%;
  .articles {
    margin-bottom: 20px;
  }
  .commentInput {
    margin-bottom: 10px;
  }
}
</style>
 