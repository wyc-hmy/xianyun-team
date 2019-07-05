<template>
    <div style="padding:50px;">
        高德地图
        <div id="container"></div>
        <div id="panel"></div>
        <div>
            <select v-model="city">
                <option value="广州">广州</option>
            </select>
            <input type="text" v-model="start" placeholder="起点位置">
            <input type="text" v-model="end" placeholder="你要去哪">
            <button @click="handleSearch">开车</button>
            <button @click="handleSearch">公交</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            city: "",
            start: "",
            end: "",
            map: null
        }
    },

    methods: {
        handleSearch(){
            this.map = new AMap.Map('container', {
                zoom:11,//放大级别
            });

            // 查询驾车的路线
            var driving = new AMap.Driving({
                // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
                policy: AMap.DrivingPolicy.LEAST_TIME,
                map: this.map,
                panel: "panel"
            });

            var points = [
                { keyword: this.start,city: this.city },
                { keyword: this.end,city:  this.city  }
            ]

            driving.search(points, function (status, result) {
                // 未出错时，result即是对应的路线规划方案
                console.log(result);
            })
        }     
    },

    mounted(){
        // 页面全部加装完毕之后执行
        window.onLoad = function(){
            var map = new AMap.Map('container', {
                zoom:11,//放大级别
                center: [116.39, 39.90],//中心点坐标
                viewMode:'3D'//使用3D视图
            });

            this.map = map;

            // 工具条插件
            var toolbar = new AMap.ToolBar();
            map.addControl(toolbar);

            // 点标记
            // var marker1 = new AMap.Marker({
            //     // 自定义图片内容
            //     //content: '<div class="marker-route marker-marker-bus-from">1</div>',
            //     position: new AMap.LngLat(118.871, 31.328),   // 经纬度对象
            //     title: '高淳县淳溪镇镇'
            // });

            // var marker2 = new AMap.Marker({
            //     //content: '<div class="marker-route marker-marker-bus-from">2</div>',
            //     position: new AMap.LngLat(118.971, 31.428),   // 经纬度对象
            //     title: '高淳县淳溪镇镇'
            // });

            // // 将创建的点标记添加到已有的地图实例：
            // map.add([marker1, marker2]);
        }

        // 引入高德地图的js文件
        var url = `https://webapi.amap.com/maps?v=1.4.15&key=${"763aebf096e7824f4d4e14237beddac0"}&callback=onLoad&plugin=AMap.ToolBar,AMap.Driving`;
        var jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);


    }
}
</script>

<style> 
#container{
    width:500px;
    height:500px;
}

#panel {
    position: fixed;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 280px;
}
#panel .amap-call {
    background-color: #009cf9;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
#panel .amap-lib-driving {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
}
</style>
