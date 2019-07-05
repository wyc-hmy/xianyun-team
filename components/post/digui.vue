<template>
    <div>
        <div v-for="(item, index) in data" :key="index" class="item">
            {{item.type}}

            <!-- 自已调用自己,可以通过组件名name属性可以再次调用自己 -->
            <digui :data="item.children" v-if="item.children"></digui>
        </div>
    </div>
</template>

<script>
export default {
    // 需要定义name
    name: "digui",

    props: ["data"]
}
</script>

<style>
.item > div{
    margin-left:20px;
}
</style>
