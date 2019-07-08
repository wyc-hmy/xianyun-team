<template>
  <section class="container">
    <Bread></Bread>
    <!-- 标题部分 -->
    <div class="hotel-title">
      <el-row>
        <el-col :span="4">{{data.name}}</el-col>
        <el-col :span="4">
          <i v-for="index in data.hotellevel.level" :key="index" class="el-icon-star-off" />
        </el-col>
      </el-row>
      <el-row>{{data.alias}}</el-row>
      <el-row>
        <i class="el-icon-location"></i>
        {{data.address}}
      </el-row>
    </div>
    <!-- 图片预览部分 -->
    <el-row class="img-preview">
      <el-col :span="16">
        <el-image style="width: 640px;height:360px " :src="bigImg" fit="fill"></el-image>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="12" v-for="(item,index) in data.pics" :key="index">
            <el-image style="width: 160px;margin-bottom:10px "  @click="handleClickImg(index)" :src="`http://157.122.54.189:9093/images/hotel-pics/${index+1}.jpeg`" fit="fill"></el-image>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      :data="data.products"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="价格来源"
        width="180">
      </el-table-column>
      <el-table-column
        prop="bestType"
        label="低价房型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="最低价格/每晚">
      </el-table-column>
    </el-table>
    <!-- 地图 -->
    <Map></Map>
    <!-- 基本信息 -->
    <div class="info">
        <el-row class="assets-info">
            <el-col :span="4">基本信息</el-col>
            <el-col :span="20">
                <el-row>
                    <el-col :span="6">入住时间: 14:00之后</el-col>
                    <el-col :span="6">离店时间: 12:00之前</el-col>
                    <el-col :span="6">{{data.creation_time}}/{{data.renovat_time}}</el-col>
                    <el-col :span="6">酒店规模:{{data.roomCount}}间客房</el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="assets-info">
            <el-col :span="4">主要设施</el-col>
            <el-col :span="20">
               <span v-for="(item,index) in data.hotelassets" :key="index">{{item.name}}</span>
            </el-col>
        </el-row>
        <el-row class="assets-info">
            <el-col :span="4">停车服务</el-col>
            <el-col :span="20"></el-col>
        </el-row>
        <el-row class="assets-info">
            <el-col :span="4">品牌信息</el-col>
            <el-col :span="20"></el-col>
        </el-row>
    </div>

    <div class="commnet">
        <Comment :commentList="commentList" @getComments="getComments"></Comment>
    </div>
  </section>
</template>

<script>
import Bread from "@/components/hotel/bread.vue";
import Map from "@/components/hotel/map.vue";
import Comment from '@/components/hotel/comment.vue';
export default {
  data() {
    return {
      data: {
        name:"",
        hotellevel: {
          level: null
        },
        hotelassets:[{name:""}],//酒店服务
        products:[{
            name:"",
            price:"",
            bestType:"",
        }], //表格数据
        pics:[]
      }, //酒店详情数据
      bigImg:"http://157.122.54.189:9093/images/hotel-pics/1.jpeg",
      commentList:[],
    };
  },
  components: {
    Bread,
    Map,
    Comment
  },
  methods:{
      handleClickImg(index){
          this.bigImg=`http://157.122.54.189:9093/images/hotel-pics/${index+1}.jpeg`;
          console.log(this.bigImg)
      },
      //获取评论
      getComments(){
        this.$axios({
          url:"/hotels/comments?hotel="+this.$route.query.id,
          method:"get"
        }).then(res=>{
         let{
           data,status
         }=res;
         if(status==200){
           this.commentList=data.data;
           console.log(this.commentList);
         }
         else{
           this.$message(res.error.error);
         }
        })
      },
  },
  mounted() {
    console.log();
    //获取酒店详情数据
    this.$axios({
      url: "/hotels?id="+this.$route.query.id,
      method: "get"
    }).then(res => {
      let { data, status } = res;
      console.log(res);
      //请求成功
      if (status == 200) {
        this.data = data.data[0];
        
      }
    });
    this.getComments();
    
  }
};
</script>

 <style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}

.info{
  margin: 30px 0;
}

.assets-info{
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #eee;
}
</style>

