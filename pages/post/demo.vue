<template>
    <div style="padding:50px;">
        <h2>测试组件的递归</h2>

        <!-- <div v-for="(item, index) in list" :key="index" class="item">
            {{item.type}}

            <div v-for="(item2, index2) in item.children" :key="index2">
                {{item2.type}}

                 <div v-for="(item3, index3) in item2.children" :key="index3">
                    {{item3.type}}
 
                </div>
            </div>
        </div> -->

        <Digui :data="list"/>
    </div>
</template>

<script>
import Digui from "@/components/post/digui.vue";

export default {
    components: {
        Digui
    },

    data(){
        return {
            list: [
                {
                    type: "衣服",
                    children: [
                        { 
                            type: "男装",
                            children: [
                                { type: "上衣"},
                                { type: "裤衩" },
                            ]
                        },
                        {
                            type: "女装",
                            children: [
                                { type: "比基尼", }
                            ]
                        }
                    ]
                },
                {
                    type: "电器",
                    children: [
                        { type: "电脑"},
                        { type: "冰箱" },
                        { type: "洗衣机" }
                    ]
                }
            ]
        }
    }
}
</script>

<style>

</style>
