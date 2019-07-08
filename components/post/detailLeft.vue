<template>
  <el-row class="left">
    <div v-for="(item, index) in data" :key="index">
      <DetailTitle></DetailTitle>
      <!-- 文章标题 -->
      <h1 class="contentTitle">{{item.title}}</h1>
      <!-- 发布日期和阅读量 -->
      <div type="flex" class="detailXinxi">
        <!-- 后台获取发布日期 -->
        <span>
          攻略：
          <i>{{ new Date(item.updated_at) }}</i>
        </span>
        <!-- 后台获取阅读量 -->
        <span>
          阅读：
          <i>{{item.watch}}</i>
        </span>
      </div>
      <!-- 文章内容 -->
      <div class="articleBody" v-html="item.content"></div>

      <!-- 分享收藏评论 -->
      <PostCtrl></PostCtrl>

      <!-- 文章评论 -->
      <CommentsArticles></CommentsArticles>
    </div>
  </el-row>
</template>

<script>
import PostCtrl from "@/components/post/user/postCtrl.vue";
import DetailTitle from "@/components/post/user/detailTitle.vue";
import CommentsArticles from "@/components/post/user/commentsArticles.vue";
export default {
  components: {
    PostCtrl,
    DetailTitle,
    CommentsArticles
  },
  data() {
    return {
      data: [],
      id: ""
    };
  },
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
    this.$axios({
      url: "/posts?id=" + this.id,
      method: "GET"
    }).then(res => {
      var { data } = res.data;
      this.data = data;
    });
  }
};
</script>

<style scoped lang="less">
.contentTitle {
  border-bottom: 1px solid #ddd;
}
.detailXinxi {
  color: #999999;
  padding: 20px;
  font-size: 16px;
  text-align: right;
  span {
    padding-left: 20px;
  }
}
.articleBody {
  width: 100%;
    /deep/ img {
      max-width: 700px;
    }
}
</style>
