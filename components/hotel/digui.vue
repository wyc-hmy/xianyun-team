<template>
  <div class="div">
    <div
      v-for="(item,index) in data"
      :key="index"
      class="big"
      @mouseenter.stop="handleShowbtn(item.id)"
      @mouseleave.stop="handleHiddenbtn(item.id)"
    >
      <el-row type="flex" justify="space-between" class="title">
        <el-col :span="20">
          <img class="touxiang" :src="'http://157.122.54.189:9095'+item.account.defaultAvatar" alt />
          {{item.account.nickname}}{{new Date(item.updated_at)}}
        </el-col>
        <el-col :span="4">{{item.level}}</el-col>
      </el-row>

      <digui :data="item.followed" v-if="item.followed"></digui>
      <el-row class="content">{{item.content}}</el-row>
      <el-row type="flex" >
          <el-col :span="6" v-for="(itemImg,indexImg) in item.pics" :key="indexImg">
              <img class="imgList" :src="'http://localhost:1337'+itemImg.url" alt="">
          </el-col>
      </el-row>
      <el-row type="flex" justify="end">
        <el-link :underline="false" @click="handdleClick(item.id,item.account.nickname)" v-if="true">回复</el-link>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: null
    };
  },
  name: "digui",
  props: ["data"],
  methods: {
    handdleClick(id,name) {
      //设置用户ID数据给vuex
      this.$store.commit("hotel/setUserInfo", id);
     //修改显示值
    this.$store.commit("hotel/setIsShow", true);
    // console.log(this.$store.state.hotel.isShow);
    },
    handleShowbtn(index) {
      this.currentIndex = index;
    },
    handleHiddenbtn(index) {
      this.currentIndex = null;
    }
  }
};
</script>

<style lang="less" scoped>
.div > .big {
  border-bottom: 1px dashed #ddd;
  padding: 30px;
  font-size: 12px;
   .content{
        padding: 5px;
        font-size: 16px;
    }
  .big{
      background-color: #f9f9f9;
      padding: 10px;
      border: 1px solid #ccc;
  }
}
.imgList{
    width: 200px;
    height: 200px;
}
.title{
    padding: 5px;
}
.touxiang {
  width: 20px;
  height: 20px;
}
</style>

