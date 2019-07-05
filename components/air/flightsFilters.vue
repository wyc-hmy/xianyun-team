<template>
    <div class="filters">
        <el-row type="flex" class="filters-top" justify="space-between" align="middle">
            <el-col :span="8">
                单程： 
                {{data.info.departCity}} - {{data.info.destCity}}
                / 
                {{data.info.departDate}}
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="airport" placeholder="起飞机场" @change="handleAirport">
                    <el-option
                    :label="item"
                    :value="item"
                    v-for="(item, index) in data.options.airport"
                    :key="index"
                    >
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="flightTimes"  placeholder="起飞时间" @change="handleFlightTimes">
                    <el-option
                    v-for="(item, index) in data.options.flightTimes"
                    :key="index"
                    :label="`${item.from}:00 - ${item.to}:00`"
                    :value="`${item.from},${item.to}`"
                    >
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="company"  placeholder="航空公司" @change="handleCompany">
                    <el-option
                    :label="item"
                    :value="item"
                    v-for="(item, index) in data.options.company"
                    :key="index"
                    >
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="airSize" placeholder="机型" @change="handleAirSize">
                    <el-option
                    :label="item.name"
                    :value="item.type"
                    v-for="(item, index) in airSizeList"
                    :key="index"
                    >
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <div class="filter-cancel">
            筛选：
            <el-button 
                       type="primary" 
                       round 
                       plain 
                       size="mini" 
                       @click="handleFiltersCancel">
                撤销
    		</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            airport: "",        // 机场
            flightTimes: "",    // 出发时间
            company: "",        // 航空公司
            airSize: "",        // 机型大小

            // 机型的大小选项
            airSizeList: [
                { name:"大", type: "L" },
                { name:"中", type: "M" },
                { name:"小", type: "S" },
            ]
        }
    },

    props: {
        // 接收外部的对象数据
        data: {
            type: Object,
            default: {}
        }
    },

    methods: {
        // 选择机场时候触发
        handleAirport(value){
            
        },

        // 选择起飞时间时候触发
        handleFlightTimes(value){
            const [from, to] = value.split(","); // [6,12]

            const arr = this.data.flights.filter(v => {
                // 出发时间小时
                const start = +v.dep_time.split(":")[0];

                return start >= from && start < to;
            });

            this.$emit("setDataList", arr);
        },

        // 选择航空公司时候触发
        handleCompany(value){
            // console.log(value)
            // console.log(this.data.flights);

            const arr = this.data.flights.filter(v => {
                // 过滤航空公司值等于value
                let hasValue = false; // 当前这个机票是否合适

                if(v.airline_name === value){

                    hasValue = true;
                    
                    // 多选
                    // const [from, to] = this.flightTimes.split(","); // [6,12]
                    // const start = +v.dep_time.split(":")[0];
                    
                    // if( from && start <= from || start > to){
                    //     hasValue = false;
                    // }
                }

                return hasValue;
            });

            this.$emit("setDataList", arr);
        },

         // 选择机型时候触发
        handleAirSize(value){
            const arr = this.data.flights.filter(v => {
                // 过滤航空公司值等于value
                return v.plane_size === value;
            });

            this.$emit("setDataList", arr);
        },
        
        // 撤销条件时候触发
        handleFiltersCancel(){
            this.airport = "";
            this.flightTimes = "";
            this.company = "";
            this.airSize = "";

            this.$emit("setDataList", this.data.flights);
        },
    }
}
</script>

<style scoped lang="less">
    .filters{
        margin-bottom:20px;
    }

    .filters-top{
        > div{
            /deep/ .el-select{
                margin-left:10px;
            }
        }
    }

    .filter-cancel{
        margin-top:10px;
    }
</style>