<template>
    <div class="container">
        <!-- 幻灯片 -->
        <!-- interval: 切换的间隔时间 -->
        <!-- arrow: 切换箭头的显示时机 -->
        <el-carousel 
        :interval="5000" 
        arrow="always">
            <!-- 幻灯片的没一项 -->
            <el-carousel-item 
            v-for="(item, index) in banners" 
            :key="index">
                <div class="banner-image" 
                :style="`
                background:url(${$axios.defaults.baseURL + item.url}) center center no-repeat;
                background-size:contain contain;
                `">
                </div>
            </el-carousel-item>
        </el-carousel>

         <!-- 搜索框 -->
        <div class="banner-content">
            <div class="search-bar">
                
                <!-- tab栏 -->
                <el-row 
                type="flex" 
                class="search-tab">
                    <!-- tab切换栏 -->
                    <span 
                    v-for="(item, index) in options"
                    :key="index"
                    :class="{active: currentOption == index}"
                    @click="handleOption(index)">
                        <i>{{ item.name }}</i>
                    </span>
                </el-row>
                
                <!-- 输入框 -->
                <el-row 
                type="flex" 
                align="middle" 
                class="search-input">
                    <input 
                    :placeholder="options[currentOption].placeholder"/>
                    <i class="el-icon-search" ></i>
                </el-row>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            // 轮播图数据
            banners: [
                // {
                //     url: "http://157.122.54.189:9095/assets/images/th03.jfif",
                // },
                // {
                //     url: "http://157.122.54.189:9095/assets/images/th04.jfif",
                // }
            ],

            options: [
                { 
                    name: "攻略", 
                    placeholder: "搜索城市"
                },
                {
                    name: "酒店", 
                    placeholder: "请输入城市搜索酒店",
                },
                {
                    name: "机票", 
                    placeholder: "请输入出发地"
                }
            ],
            
            // 搜索框当前高亮的tab栏
            currentOption: 0
        }
    },

    mounted(){
        // 请求轮播图接口
        this.$axios({
            url: "/scenics/banners",
            method: "GET"
        }).then(res => {
            const {data} = res.data;
            // 把数组保存到banners
            console.log(data);
            this.banners = data;
        });

        // console.log(this.$axios.defaults.baseURL)
    },

    methods: {
        // 点击tab的事件
        handleOption(index){
            this.currentOption = index;

            if(index == 2){
                this.$router.push("/air");
            }
        }
    },
}
</script>

<style scoped lang="less">
.container{
    min-width:1000px;
    margin:0 auto;
    position:relative;

    /deep/ .el-carousel__container{
        height:700px;
    }

    .banner-image{
        width:100%;
        height:100%;
    }

    .banner-content{
        z-index:9;
        width:1000px;
        position:absolute;
        left:50%;
        top:45%;
        margin-left: -500px;
        border-top:1px transparent solid;

        .search-bar{
            width:552px;
            margin:0 auto;
        }

        .search-tab{
            .active{
                i{
                color:#333;
                }
                &::after{
                background: #eee;
                }
            }

            span{
                width:82px;
                height:36px;
                display:block;
                position: relative;
                margin-right:8px;
                cursor: pointer;

                i{
                position:absolute;
                z-index:2;
                display: block;
                width:100%;
                height:100%;
                line-height:30px;
                text-align:center;
                color:#fff;
                }

                &:after{
                position: absolute;
                left:0;
                top:0;
                display:block;
                content: "";
                width:100%;
                height:100%;
                border: 1px rgba(255,255,255,.2) solid;
                border-bottom: none;
                transform: scale(1.1,1.3) perspective(.7em) rotateX(2.2deg);
                transform-origin: bottom left;
                background: rgba(0,0,0,.5);
                border-radius:1px 2px 0 0;
                box-sizing:border-box;
                }
            }
        }

        .search-input{
            width:550px;
            height:46px;
            background:#fff;
            border-radius: 0 4px 4px 4px;
            border: 1px rgba(255,255,255,.2) solid;
            border-top:none;
            box-sizing: unset;

            input{
                flex:1;
                height:20px;
                padding: 13px 15px;
                outline: none;
                border:0;
                font-size:16px;
            }

            .el-icon-search{
                cursor :pointer;
                font-size:22px;
                padding:0 10px;
                font-weight:bold;
            }
        }
    }
}
</style>