<template>
  <section class="container">
    <div class="title_hotel" type="flex" justify="space-between">
      <span>酒店</span>
      <i class="el-icon-arrow-right"></i>
      
      <span>{{state1}}酒店预订</span>
    </div>
    <form class="el-form">
      <el-row :gutter="20" class="gutterFather">
        <!-- 目的地输入框 -->
        <el-col :span="4">
          <div class="grid-content bg-purple">
              <el-autocomplete
                class="inline-input"
                v-model="state1"
                :fetch-suggestions="querySearch"
                placeholder="波士顿"
                @select="handleSelect"
                ></el-autocomplete>
          </div>
        </el-col>

        <!-- 入住离开选择框 -->
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="block">
              <el-date-picker
                type="daterange"
                range-separator="至"
                start-placeholder="入住日期"
                end-placeholder="离店日期"
              ></el-date-picker>
            </div>
          </div>
        </el-col>

        <!-- 未定人数输入框 -->
        <el-col :span="6" class="people_amount">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="人数未定" class="placeholder_left"></el-input>
            <i class="el-icon-s-custom"></i>
          </div>
        </el-col>

        <!-- 查询按钮 -->
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="primary">查看价格</el-button>
          </div>
        </el-col>
      </el-row>
    </form>

    <div class="hotel_option_row">
      <!-- 酒店介绍的左部分 -->
      <div class="hotel_option_left">
        <!-- 区域部分 -->
        <div class="hotel_option_area">
          <el-row :gutter="24">
            <el-col :span="3">
              <div class="grid-content bg-purple">区域：</div>
            </el-col>

            <el-col :span="21">
              <div class="grid-content bg-purple">
                <a href="#">全部：</a>
                <a href="#" v-for="(item, index) in scenic" :key="index">{{item.name}}</a>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 攻略部分 -->
        <div class="hotel_option_strategy">
          <el-row :gutter="24">
            <el-col :span="3">
              <div class="grid-content bg-purple">攻略：</div>
            </el-col>

            <el-col :span="21">
              <div class="grid-content bg-purple">
                北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。
                景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。
                由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 均价部分 -->
        <div class="hotel_option_price">
          <el-row :gutter="24">
            <el-col :span="3">
              <div class="grid-content bg-purple">
                均价
                <i class="el-icon-grape"></i>
              </div>
            </el-col>

            <el-col :span="21">
              <div class="grid-content bg-purple">
                <el-row :gutter="24">
                  <el-col :span="8">
                    <span style="color:orange">￥523</span> 
                    <span style="color:orange">
                        <i v-for="(items, index) in 3" :key="index" class="el-icon-ship"></i>
                    </span>
                  </el-col>
                  <el-col :span="8">
                    <span style="color:orange">￥523</span> 
                    <span style="color:orange">
                        <i v-for="(items, index) in 4" :key="index" class="el-icon-ship"></i>
                    </span>
                  </el-col>
                  <el-col :span="8">
                    <span style="color:orange">￥523</span> 
                    <span style="color:orange">
                        <i v-for="(items, index) in 5" :key="index" class="el-icon-ship"></i>
                    </span>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <!-- 酒店介绍的右边地图部分 -->
      <div class="hotel_option_right">
            <div id="containerMap"></div>
      </div>
    </div>

    <!-- 酒店筛选部分 -->
    <div class="list_filter">
           <el-row :gutter="48" type= "flex">
               <!-- 这里是住宿筛选开关 -->
            <el-col :span="12">
              <div class="grid-content bg-purple  list_filter_slider">
                    <div class="slider_top">
                        <el-row :gutter="24">
                            <el-col :span='12'>
                               <div class="grid-content bg-purple">价格</div> 
                            </el-col>
                            <el-col :span='12'>
                               <div class="grid-content bg-purple">0-4000</div> 
                            </el-col>
                        </el-row>
                    </div>
                   
                   <div class="block slider_bottom">
                        <el-slider v-model="value1"></el-slider>
                    </div>
              </div>
            </el-col>
            <!-- 这里是住宿等级部分 -->
             <el-col :span="7">
              <div class="grid-content bg-purple lister_filter_level">
                   <div class="level_top">
                       住宿等级
                    </div>
                   
                   <div class="block level_bottom">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                不限<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon='el-icon-ice-tea'
                                    v-for='( items,index) in levels'
                                    :key="index"
                                >
                                    {{items.name}}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
              </div>
            </el-col>

            <!-- 这里是住宿类型 -->
             <el-col :span="7">
                  <div class="grid-content bg-purple lister_filter_types">
                    <div class="types_top">
                       住宿类型
                    </div>
                   
                    <div class="block types_bottom">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                不限<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon='el-icon-loading'
                                    v-for='( items,index) in types'
                                    :key="index"
                                >
                                    {{items.name}}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
              </div>
            </el-col>

            <!-- 这里是酒店设施 -->
             <el-col :span="7">
            <div class="grid-content bg-purple lister_filter_assets">
                <div class="assets_top">
                    住宿设施
                </div>
                <div class="block assets_bottom">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            不限<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon='el-icon-loading'
                                v-for='( items,index) in assets'
                                :key="index"
                            >
                                {{items.name}}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
              </div>
            </el-col>

            <!-- 这里是酒店设备 -->
             <el-col :span="7">
                <div class="grid-content bg-purple lister_filter_brands">
                    <div class="brands_top">
                        住宿品牌
                    </div>
                    <div class="block brands_bottom">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                不限<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu >
                                <el-dropdown-item icon='el-icon-loading'
                                aria-haspopup="list" aria-controls="dropdown-menu-6549" role='button' tabindex="0"
                                    v-for='( items,index) in brands'
                                    :key="index"
                                >
                                    {{items.name}}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
              </div>
            </el-col>
          </el-row>
    </div>

    <!-- 酒店列表 -->
    <div class="hotel_list">
        <div  v-for='(items2,index) in hotels' :key='index' class="hotels_room">
            <el-row :gutter="24">
                <el-col :span='8'>
                    <div class='hotel_img   grid-content bg-purple'
                        :style="`
                        background:url(${items2.photos}) center center ;
                        background-size:contain contain;
                        `"
                    >
                        <!-- <img :src= " `${items2.photos}` "  alt=""> -->
                    </div>
                </el-col>
                 <el-col :span='10'>
                    <div class="hotel_title   grid-content bg-purple">
                        <!-- 这里是酒店名字 -->
                        <div class="hotel_names" @click='handleClick()'> {{items2.name}}</div>
                        <div class="hotel_xiangqin">
                            <!-- 酒店的小英文介绍 -->
                            <span class="hotel_alias">
                                {{items2.alias}}
                            </span>
                            <span>
                                <!-- 酒店的星星评分图标 -->
                                <span style="color:orange">
                                    <i class="el-icon-star-off" v-for='(items,index) in 3' :key='index'></i>
                                </span>
                                {{items2.stars}}
                            </span>
                            <!-- 酒店类型的名字 -->
                            <span>{{items2.hoteltype.name}}</span>
                        </div>
                        <!-- 酒店评论 -->
                        <div class="hotel_comment">
                            <el-row :gutter="24">
                                <!-- 三个小星星的地方，我写死了 -->
                                <el-col :span='8'>
                                    <div class="grid-content bg-purple">
                                         <span style="color:orange">
                                            <i class="el-icon-star-on" v-for='(items,index) in 3' :key='index'></i>
                                            <span>3.5分</span>
                                        </span>
                                    </div>
                                </el-col>
                                <!-- 几条评论的地方 -->
                                <el-col :span='8'>
                                    <div class="grid-content bg-purple">
                                        <span style="color:orange">{{items2.num_collected}}</span>条评价
                                    </div>
                                </el-col>
                                <!-- 几条游记的地方 -->
                                <el-col :span='8'>
                                    <div class="grid-content bg-purple">
                                        <span style="color:orange">{{items2.m_city_id}}</span>篇游记
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <!-- 酒店地址 -->
                        <div class="hotel_address">
                           <span>
                                <i class="el-icon-s-promotion"></i>
                                <span>位于：{{items2.address}}</span>
                           </span>
                        </div>
                    </div>
                </el-col>
                <!-- 酒店价格的位置 -->
                 <el-col :span='6'>
                    <div class="hotel_price   grid-content bg-purple">
                        <ul>
                            <li>
                                <a href=" https://www.ctrip.com">
                                    <span>携程</span>
                                   <span class="right">
                                        <span style="color:orange">
                                            ￥{{items2.price}}
                                        </span>
                                        <span>元起
                                            <i class="el-icon-arrow-right"></i>
                                        </span>
                                   </span>
                                </a>
                            </li>
                             <hr style="background-color:#ccc;height: 1px;width:90%;border: none;"/>
                            <li>
                                 <a href=" https://www.elong.com">
                                    <span>艺龙</span>
                                    <span class="right">
                                         <span style="color:orange">
                                            ￥{{items2.price}}
                                        </span>
                                        <span>元起
                                            <i class="el-icon-arrow-right"></i>
                                        </span>
                                    </span>
                                </a>
                            </li>
                             <hr style="background-color:#ccc;height: 1px;width:90%;border: none;"/>
                            <li>
                                <a href=" https://hlddz.qq.com">
                                    <span>Hotel</span>
                                    <span class="right">
                                         <span style="color:orange">
                                            ￥{{items2.price}}
                                        </span>
                                        <span>元起
                                            <i class="el-icon-arrow-right"></i>
                                        </span>
                                    </span>
                                </a>
                            </li>
                            <hr style="background-color:#ccc;height: 1px;width:90%;border: none;"/>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>

    <!-- 酒店分页 -->
    <div class="hotel_footer">
        <div class="block hotel_footer_block">
            <el-pagination
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
            </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
        inputCity:"",
        input: "",
        scenic: [],
        city: "",
        start: "",
        end: "",
        map: null,
        value1:4000,
        levels: [],   // 酒店等级
        types: [],    // 酒店类型
        assets: [],   // 酒店设施
        brands: [],    // 酒店品牌
        hotels:[],   //酒店名字
        restaurants: [],
        state1: '波士顿',
        products:[],
    };
  },

  methods: {
       querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
       loadAll() {
        return [
          { "value": "北京市", "address": "长宁区新渔路144号" },
          { "value": "杭州", "address": "上海市长宁区淞虹路661号" },
          { "value": "上海", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        ]},
        handleSelect(item) {
            console.log(item);
        },

         handleClick(){
             this.$router.push({
               path: "/hotel/map",
               query: this.form
           })
         }
  },

  mounted() {
     // 页面全部加装完毕之后执行
        window.onLoad = function(){
            var map = new AMap.Map('containerMap', {
                zoom:11,//放大级别
                center: [116.397428, 39.90923],//中心点坐标
                viewMode:'3D'//使用3D视图
            });
        },
        this.restaurants = this.loadAll();
    // 引入高德地图的js文件
    var url = `https://webapi.amap.com/maps?v=1.4.15&key=${"763aebf096e7824f4d4e14237beddac0"}&callback=onLoad`;
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);


    this.$axios({
      url: "/hotels"
    }).then(res => {
      const { data } = res.data;
      console.log(data);
      data.map(v=>{
          let products =v.products;
        console.log(products);
      })
      
    //   console.log(data[0].scenic);
      this.scenic = data[0].scenic;
      this.hotels=data;
      
    });


    this.$axios({
        url:'/hotels/options'
    }).then(res=>{
        const {data}= res.data
        // console.log(data);
        // console.log(data.levels);
        this.levels=data.levels
        this.types=data.types
        this.assets=data.assets
        this.brands=data.brands
    })
  }
};
</script>

<style scoped lang="less">
.container {
    position: relative;
    width:1000px;
    margin: 0 auto;
    .title_hotel {
    font-size: 14px;
    color: #666;
    padding: 20px 0;
  }
  .gutterFather {
        .inline-input{
            color: #dcdfe6; 
            font-size: 14px; 
        }
    .people_amount {
      margin-left: 15px;
      .placeholder_left {
        position: relative;
      }
      .el-icon-s-custom {
        position: absolute;
        right: 260px;
        top: 14px;
        color: #dcdfe6;
      }
    }
  }
  .hotel_option_row {
    width: 1010px;
    height: 310px;
    // background-color: aqua;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 14px;
    color: #666;
    .hotel_option_left {
      width: 58%;
      height: 100%;
      display: inline-block;
      // background-color: lawngreen;
      .hotel_option_area {
        height: 171px;
        a {
          display: inline-block;
          color: #666;
          margin-left: 15px;
        }
      }
      .hotel_option_strategy {
        height: 57px;
      }
      .hotel_option_price {
        height: 22px;
        margin-top: 10px;
      }
    }
    .hotel_option_right {
       width: 41%;
      height: 310px;
      display: inline-block;
    //   background-color: pink;
      position: absolute;
      margin-left: 10px;
        #containerMap{
            width: 420px;
            height: 260px;
            margin-left: 5px;
            margin-right: 5px;
        }
    }
  }
  .list_filter{
      height: 80px;
      color: #666;
      font-size: 14px;
      border: 1px solid #ddd;
      padding: 5px 20px;

      .list_filter_slider{
          text-align: center;
          height: 80px;
          border-right: 1px solid #ddd;
            .slider_top{
                height: 40px;
                line-height: 40px;
            }
            .slider_bottom{
                height: 40px;
                width: 80%;
                margin-left: 20px;
            }
      }
      .lister_filter_level{
          height: 80px;
          border-right: 1px solid #ddd;
          font-size: 14px;
           .level_top{
                height: 40px;
                line-height: 40px;
            }
            .level_bottom{
            height: 40px;
            width: 100px;
        }
      }
        .lister_filter_types{
            height: 80px;
            border-right: 1px solid #ddd;
            font-size: 14px;
            .types_top{
                height: 40px;
                line-height: 40px;
            }
            .types_bottom{
            height: 40px;
            width: 100px;
            }
        }
        .lister_filter_assets{
            height: 80px;
            border-right: 1px solid #ddd;
            font-size: 14px;
            .assets_top{
                height: 40px;
                line-height: 40px;
            }
            .assets_bottom{
            height: 40px;
            width: 100px;
            }
        }
        .lister_filter_brands{
            height: 80px;
            font-size: 14px;
            .brands_top{
                height: 40px;
                line-height: 40px;
            }
            .brands_bottom{
            height: 40px;
            width: 100px;
            }
        }
  }
  .hotel_list{
      width: 1000px;
      margin-top: 40px;
      .hotel_img{
          width: 320px;
          height: 210px;
      }
      .hotels_room{
          .hotel_title{
              .hotel_names{
                  cursor: pointer;
                  font-weight: 400px;
                  font-size: x-large;
                    }
            }
            height: 214px;
            margin-top: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            .hotel_xiangqin{
                    margin-top: 20xp;
                    margin-bottom: 10px;
                 .hotel_alias{       
                    color:#999;
                    font-size: 14px; 
                }
            }
            .hotel_comment{
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .hotel_address{
                span{
                    font-size: 14px;
                    color: #666;
                }
            }
            .hotel_price{
                height: 214px;
                    ul{
                        //  display: flex;
                        // justify-content: space-between;
                        margin-left: 30px;
                        margin-top: 20px;
                        :hover{
                                background-color: #eee;
                            }
                        li{
                            height: 50px;
                            line-height: 50px;
                            font-size: 14px;
                            color: #606266;
                            list-style: none;
                            text-decoration: #ccc;
                            .right{
                                margin-left: 70px;
                            }
                        }
                    }
                }
            }
    }
    .hotel_footer{
        height: 100px;
        margin-top: 10px;
        position: relative;
            .hotel_footer_block{
                margin-top: 40px;
                position: absolute;
                right: 0;
            }
    }
}
</style>
