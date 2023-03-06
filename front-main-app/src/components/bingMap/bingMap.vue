<script>
import initBingMap from "@/components/bingMap/initBingMap.vue";
export default {
  data() {
    return {
      lngNum: null, // 经度
      latNum: null, // 纬度
      map: null,
      infobox: null,
    };
  },
  //   props: [tocitys],
  methods: {
    initMap(centerPoint, zoomLevel) {
      let _this = this;
      console.log(centerPoint);
      console.log(zoomLevel);
      this.map = new Microsoft.Maps.Map("#localMap", {
        credentials:
          "Ar7gJ_yIAdMvmtZRji31MbMmetaUlWh_2fLkQL_QbV75HzkZPWgaSdzy66dctjF4",
        zoom: zoomLevel,
        center: new Microsoft.Maps.Location(centerPoint[1], centerPoint[0]), //这个是先纬度再经度
      });
      Microsoft.Maps.Events.addHandler(
        this.map,
        "click",
        _this.getClickLocation
      );
    },
    addMarkers(wantTos, centerPoint) {
      let _this = this;
      initBingMap.init().then((Microsoft) => {
        _this.initMap(centerPoint, 10);
        // let lngList = [];
        // let latList = [];
        if (wantTos) {
          // toCitys.forEach((e) => {
          //   lngList.push(Number(e.lng));
          //   latList.push(Number(e.lat));
          // });
          //   alert(8888);
          console.log("=========");
          // console.log(lngList);
          // console.log(latList);
          console.log("=========");
          //信息窗口初始化
          _this.infobox = new Microsoft.Maps.Infobox(_this.map.getCenter(), {
            visible: false,
          });
          _this.infobox.setMap(_this.map);
          //标记
          for (var i = 0; i < wantTos.length; i++) {
            // var Location = new Microsoft.Maps.Location(latList[i], lngList[i]);
            var Location = new Microsoft.Maps.Location(
              wantTos[i][1],
              wantTos[i][0]
            );
            //标记初始化
            var pin = new Microsoft.Maps.Pushpin(Location);
            // {title : "我是地址"+i,subTitle: 'City Center',text: ''+i}
            // 设置标记信息
            pin.metadata = {
              title: "马德里 " + (i + 1),
              description: "Discription" + (i + 1),
              visible: true,
            };
            // 给标记设置点击事件触发函数显示对应窗口信息
            Microsoft.Maps.Events.addHandler(pin, "click", this.pushpinClicked);

            //鼠标停留在点标记上时，触发该事件
            Microsoft.Maps.Events.addHandler(pin, "mouseover", function (e) {
              e.target.setOptions({ color: "red" });
            });
            //鼠标悬停在点标记上方，并单击鼠标左键时，触发该事件。
            Microsoft.Maps.Events.addHandler(pin, "mousedown", function (e) {
              e.target.setOptions({ color: "blue" });
            });
            //当鼠标移除点标记覆盖区域时，触发该事件
            Microsoft.Maps.Events.addHandler(pin, "mouseout", function (e) {
              e.target.setOptions({ color: "purple" });
            });
            //添加标记
            _this.map.entities.push(pin);
          }
        }
      });
    },
    //信息窗口
    pushpinClicked(e) {
      console.log("+++++++");
      console.log(e);
      console.log("+++++++");
      console.log(e.target.getLocation());
      if (e.target.metadata) {
        this.infobox.setOptions({
          location: e.target.getLocation(),
          title: e.target.metadata.title,
          description: e.target.metadata.description,
          visible: true, //显示
        });
      }
    },
    getClickLocation(e) {
      //若点击到地图的标记上，而非地图上
      let [_this, loc] = [this, null];
      if (e.targetType == "pushpin") {
        loc = e.target.getLocation();
      }
      //若点击到地图上
      else {
        var point = new Microsoft.Maps.Point(e.pageX, e.pageY);
        loc = e.target.tryPixelToLocation(
          point,
          Microsoft.Maps.PixelReference.page
        );
      }
      console.log(loc.latitude + ", " + loc.longitude);
      console.log(loc);
      _this.lngNum = loc.longitude;
      _this.latNum = loc.latitude;
      let data = {
        lngNum: _this.lngNum,
        latNum: _this.latNum,
      };
      this.$emit("getLocationNums", data);
    },
  },
  created: function () {
    let _this = this;
    initBingMap.init().then((Microsoft) => {
      console.log(Microsoft);
      console.log("加载成功...");
      _this.initMap([-3.7360839843750093, 40.419503062300386], 6);
    });
  },
};
</script>

<template>
  <div class="map-container">
    <div id="localMap"></div>
  </div>
</template>

<style lang="scss" scoped>
.map-container {
  width: 100%;
  height: 610px;
  //   height: 100%;
}
// .bm_bottomLeftOverlay {
//   display: none !important;
//   visibility: hide !important;
// }
</style>
