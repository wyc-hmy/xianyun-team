<template>
    <div id="container"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    
    window.onLoad = function() {
      var map = new AMap.Map("container", {
      zoom: 11, //级别
      center: [116.397428, 39.90923], //中心点坐标
      viewMode: "3D" //使用3D视图
    });
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=68a619be185fd5435f033927f61b9c2a&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style>
    #container{
        width: 500px;
        height: 500px;;
    }
</style>
