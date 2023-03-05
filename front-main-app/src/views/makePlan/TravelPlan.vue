<script lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader"; // 使用加载器加载JSAPI，可以避免异步加载、重复加载等常见错误加载错误
import { shallowRef } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { onMounted } from "@vue/runtime-core";
// 引入中文包
import zhCn from "element-plus/lib/locale/lang/zh-cn";
export default {
  props: ["fromCity", "backCity", "arriveCountry"],
  // 简单功能的实现
  setup(props, context) {
    console.log(props);
    const fromCity = props.fromCity;
    const backCity = props.backCity;
    const arriveCountry = props.arriveCountry;
    const router = useRouter();
    // let planCityInfo = reactive({
    //   fromTheCity: fromCity,
    //   backTheCity: backCity,
    //   wantCitys: [] as Array<String>,
    //   goTheDate: "",
    //   budget: "",
    // });

    // let citysInfo = ref(["西班牙", "葡萄牙", "安道尔", "南法"]);
    // 初始化右边的数据
    // const initWantConutryInfo = () => {
    //   if (arriveCountry) {
    //     //要加一下toCity.cityName
    //     planCityInfo.wantCitys.push(arriveCountry);
    //     // console.log(planCityInfo.wantCitys);
    //     // console.log(planCityInfo);
    //   }
    // };

    const backToHome = () => {
      router.push("/");
    };
    //@ts-ignore
    // window._AMapSecurityConfig = {
    //   securityJsCode: "8971dc628d403fc5523045a0919d8a98",
    // };
    /* 高德地图实现 */
    const map = shallowRef(null);
    // 初始化地图方法
    function initMap(toCitys?) {
      AMapLoader.load({
        key: "17921af6912991af8e884ca64d0bf583", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          "AMap.Scale", //工具条，控制地图的缩放、平移等
          "AMap.ToolBar",
        ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          // @ts-ignore
          let map = new AMap.Map("map", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 5, //初始化地图级别
            // center: [1.45, 40.25], //初始化地图中心点位置：马德里附近
            center: [116.378517, 39.865246], //初始化地图中心点位置：马德里附近
            dragEnable: true, //禁止鼠标拖拽
            scrollWheel: true, //鼠标滚轮放大缩小
            doubleClickZoom: true, //双击放大缩小
            keyboardEnable: true, //键盘控制放大缩小移动旋转
          });
          //@ts-ignore
          map.setDefaultCursor("pointer"); //使用CSS默认样式定义地图上的鼠标样式（default/pointer/move/crosshair）
          //@ts-ignore
          map.addControl(new AMap.Scale()); //异步同时加载多个插件
          //@ts-ignore
          map.addControl(new AMap.ToolBar());

          let Obj = {
            markerList: [],
            windowList: [],
          };
          if (toCitys) {
            // alert(111);
            console.log(toCitys);
            // 封装一下
            toCitys.forEach((e) => {
              // var weather = new AMap.Weather();
              // let info = {};
              // //执行实时天气信息查询
              // weather.getLive(e.toCity, function (err, data) {
              //   console.log(err, data);
              //   info = data;
              // });
              Obj.markerList.push(
                // @ts-ignore
                new AMap.Marker({
                  position: new AMap.LngLat(e.lng, e.lat),
                  title: e.toCity,
                })
              );
              Obj.windowList.push(
                // @ts-ignore
                new AMap.InfoWindow({
                  //创建信息窗体
                  isCustom: false, //使用自定义窗体
                  anchor: "top-right", //信息窗体的三角所在位置
                  content: `<p style="color:#e8604c;margin:0">目的地：${e.toCity}</p>
                <p style="color:#e8604c;margin:0">经度：${e.lng}</p>
                <p style="color:#e8604c;margin:0">纬度：${e.lat}</p>`, //信息窗体的内容可以是任意html片段
                  offset: new AMap.Pixel(0, 0), //不需要偏移量
                })
              );
            });
            //@ts-ignore
            map.add(Obj.markerList); // 地图添加标记
            // alert(111);
            for (let i = 0; i < Obj.markerList.length; i++) {
              // @ts-ignore
              Obj.markerList[i].on("click", () => {
                // @ts-ignore
                Obj.windowList[i].open(map, Obj.markerList[i].getPosition());
                //@ts-ignore
                map.on("click", () => {
                  // @ts-ignore
                  Obj.windowList[i] && Obj.windowList[i].close();
                });
              });
            }
          }
          // @ts-ignore
          AMapLoader.load({
            //可多次调用load
            plugins: ["AMap.MapType"],
          })
            .then((AMap) => {
              map.addControl(new AMap.MapType());
            })
            .catch((e) => {
              console.error(e);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    }
    const tocitys = [
      {
        lng: "103.834228",
        lat: "36.060798",
        toCity: "北京",
      },
      {
        lng: "116.378517",
        lat: "39.865246",
        toCity: "北京",
      },
    ];
    onMounted(() => {
      initMap(tocitys);
    });
    return {
      map,
      backToHome,
    };
  },
  // methods: {

  // },
  // mounted() {
  //   //DOM初始化完成进行地图初始化
  //   this.initMap([
  //     {
  //       lng: "103.834228",
  //       lat: "36.060798",
  //       toCity: "北京",
  //     },
  //   ]);
  // },
  // created() {
  //   //@ts-ignore
  //   window._AMapSecurityConfig = {
  //     securityJsCode: "8971dc628d403fc5523045a0919d8a98",
  //   };
  // },
};
</script>

<template>
  <div id="map"></div>
  <div class="back-button" @click="backToHome">
    <el-icon><Back /></el-icon>
  </div>
  <div class="main-left">
    <div class="left-title">
      <p>制定计划</p>
    </div>
    <div class="left-body">
      <div class="items">
        <el-scrollbar height="460px"></el-scrollbar>
      </div>
    </div>
  </div>
  <div class="main-right"></div>
</template>

<style lang="scss" scoped>
#map {
  margin: 0px;
  width: 100%;
  height: 700px;
  // height: 100%;
  padding: 0px;
}
.main-left {
  width: 260px;
  height: 75%;
  position: fixed;
  top: 5%;
  left: 20px;
  z-index: 1000;
  border-radius: 5px;
  overflow: hidden; //这个必须要加，要不然圆角失效

  float: left;
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
  // border: 1px #e8604c solid;
  .left-title {
    background-color: #c60b1e;
    width: 100%;
    height: 10%;
    // line-height: 50px;
    border: 1px #c60b1e solid;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      display: flex;
      align-items: center;
      font-size: 23px;
      font-weight: 1000;
      color: white;
      // margin-top: 8px;
      // margin-left: 20px;
      margin: 0;
    }
  }
  .left-body {
    box-sizing: border-box;
    padding-top: 20px;
    width: 100%;
    height: 90%;
    background-color: white;
  }
  .items {
    margin: 10px auto;
    width: 90%;
    height: 80%;
    // border: 1px #e8604c solid;
  }
}

.main-right {
  width: 300px;
  height: 90%;
  position: fixed;
  top: 5%;
  right: 20px;
  z-index: 1000;
  // height: 75%;
  float: right;
  // border: 1px #e8604c solid;
  border-radius: 5px;
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
  background-color: white;
}
.back-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  // border: 1px #e8604c solid;
  border-radius: 30px;
  background-color: #4ec483;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;
  font-weight: 700;
  z-index: 99999;
}
.back-button:hover {
  background-color: rgba(78, 196, 131, 0.8);
  color: #e0e0e0;
}
</style>
