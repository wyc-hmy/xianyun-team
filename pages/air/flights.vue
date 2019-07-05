<template>
    <section class="contianer">
        <el-row  type="flex" justify="space-between">
            
            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <!-- 传递一个方法，并且这个方法是要修改dataList -->
                <FlightsFilters 
                :data="cacheflightsData" 
                @setDataList="setDataList"/>
                
                <!-- 航班头部布局 -->
                <FightsListHead/>
                
                <!-- 航班信息 -->
                <div>
                    <!-- 航班列表 -->
                    <FlightsItem 
                    v-for="(item, index) in dataList" 
                    :key="index"
                    :data="item"/>

                    <!-- 分页 -->
                    <!-- size-change：切换条数时候触发 -->
                    <!-- current-change：页数切换时候触发 -->
                    <!-- current-page: 当前页数 -->
                    <!-- total:总数 -->
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-sizes="[5, 10, 15, 20]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                    </el-pagination>
                </div>
            </div>

            <!-- 侧边栏 -->
            <FlightsAside/>
        </el-row>
    </section>
</template>

<script>

import FightsListHead from "@/components/air/fightsListHead.vue";
import FlightsItem from "@/components/air/flightsItem.vue";
import FlightsFilters from "@/components/air/flightsFilters.vue";
import FlightsAside from "@/components/air/flightsAside.vue";

export default {
    data(){
        return {
            // 默认机票列表总数据,会被修改
            flightsData: {
                // 默认机票列表
                flights: [],
                info: {},
                options: {}
            },

            // 总数据，一旦赋值之后不会被修改
            cacheflightsData: {
                // 默认机票列表
                flights: [],
                info: {},
                options: {}
            },

            pageIndex: 1,   // 默认显示第一页
            pageSize: 5,    // 默认显示多少条数据
            total: 0,       // 总条数
            dataList: []    // 分页之后的数据列表
        }
    },

    components: {
        FightsListHead,
        FlightsItem,
        FlightsFilters,
        FlightsAside
    },

    watch: {
        $route(){
            // 请求机票列表的数据
            this.getData();
        }
    },

    methods: {
        // 分页切换条数触发
        handleSizeChange(value){
            this.pageSize = value;
        },
        
        // 页数切换时候触发
        handleCurrentChange(value){
            this.pageIndex = value;

            this.setDataList();
        },

        // 修改dataList
        setDataList(arr){

            if(arr){
                this.flightsData.flights = arr;
                // 初始化分页变量
                this.total = arr.length;
                this.pageIndex = 1;
            }

            // 计算截图列表的数据
            this.dataList = this.flightsData.flights.slice(
                (this.pageIndex - 1) * this.pageSize,
                this.pageIndex * this.pageSize
            );
        },

        getData(){
            // 请求机票列表的数据
            this.$axios({
                url: "/airs",
                params: this.$route.query
            }).then(res => {
                this.flightsData = res.data;

                // 缓存总数据，值和flightsData是相等的，一旦赋值之后不得修改
                this.cacheflightsData = {...res.data};

                // 总条数
                this.total = res.data.total;
                // 初始化数据
                this.pageIndex = 1;
                
                // 获取第一到第5条
                this.dataList = res.data.flights.slice(0, 5);
            });
        }
    },

    mounted(){
        // 请求机票列表的数据
        this.getData();
    }
}
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }

    .flights-content{
        width:745px;
        font-size:14px;
    }

    .aside{
        width:240px;
    } 
</style>