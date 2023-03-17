<script>
import initBingMap from "@/components/bingMap/initBingMap.vue";
export default {
  data() {
    return {
      lngNum: null, // 经度
      latNum: null, // 纬度
      map: null,
      infobox: null,
      directionsManager: null,
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
      // alert(111);
      let _this = this;
      initBingMap.init().then((Microsoft) => {
        _this.initMap(centerPoint, 10);
        // let lngList = [];
        // let latList = [];
        let pointList = [];
        let enNameList = [];
        let nameList = [];
        let typeList = [];
        if (wantTos && wantTos !== "") {
          wantTos.forEach((e) => {
            // lngList.push(Number(e.lng));
            // latList.push(Number(e.lat));
            pointList.push(e.point);
            enNameList.push(e.enName);
            nameList.push(e.name);
            typeList.push(e.selectType);
          });
          //   alert(8888);
          console.log("=========");
          // console.log(lngList);
          // console.log(latList);
          console.log(pointList);
          console.log(enNameList);
          console.log(nameList);
          console.log(typeList);
          console.log("=========");
          //信息窗口初始化
          _this.infobox = new Microsoft.Maps.Infobox(_this.map.getCenter(), {
            visible: false,
          });
          _this.infobox.setMap(_this.map);
          let pinList = [];
          //标记
          for (var i = 0; i < pointList.length; i++) {
            // var Location = new Microsoft.Maps.Location(latList[i], lngList[i]);
            var Location = new Microsoft.Maps.Location(
              pointList[i][1],
              pointList[i][0]
            );
            //标记初始化
            var pin = new Microsoft.Maps.Pushpin(Location, {
              icon: "/images/flag.png",
            });
            // {title : "我是地址"+i,subTitle: 'City Center',text: ''+i}
            // 设置标记信息
            pin.metadata = {
              // title: "马德里 " + (i + 1),
              // enName: "Discription" + (i + 1),
              // visible: true,
              title: nameList[i],
              description:
                "英文名:" + enNameList[i] + "</br> 类型:" + typeList[i],
              visible: true,
            };
            // 给标记设置点击事件触发函数显示对应窗口信息
            Microsoft.Maps.Events.addHandler(pin, "click", this.pushpinClicked);

            //鼠标停留在点标记上时，触发该事件
            // Microsoft.Maps.Events.addHandler(pin, "mouseover", function (e) {
            //   e.target.setOptions({ color: "red" });
            // });
            // //鼠标悬停在点标记上方，并单击鼠标左键时，触发该事件。
            // Microsoft.Maps.Events.addHandler(pin, "mousedown", function (e) {
            //   e.target.setOptions({ color: "blue" });
            // });
            // //当鼠标移除点标记覆盖区域时，触发该事件
            // Microsoft.Maps.Events.addHandler(pin, "mouseout", function (e) {
            //   e.target.setOptions({ color: "purple" });
            // });
            //添加标记
            _this.map.entities.push(pin);
            pinList.push(pin);
            // console.log(pin.getLocation());
          }
          if (pinList.length > 1) {
            // alert(111);
            // 创建折线对象，连接标记
            let tempList = [];
            pinList.forEach((e) => {
              tempList.push(e.getLocation());
            });
            //parseFloat
            console.log(tempList);
            var line = new Microsoft.Maps.Polyline(tempList, {
              strokeColor: "#c60b1e",
              strokeThickness: 2,
            });
            // 创建图层，将标记和折线添加到图层中
            // var layer = new Microsoft.Maps.PushpinLayer();
            // pinList.forEach((e) => {
            //   layer.add(e);
            // });
            // // 将图层添加到地图中
            // _this.map.layers.insert(layer);
            _this.map.entities.push(line);
            Microsoft.Maps.loadModule("Microsoft.Maps.Directions", function () {
              // 在这里使用DirectionsManager对象
              // 创建DirectionsManager对象
              _this.directionsManager =
                new Microsoft.Maps.Directions.DirectionsManager(_this.map);
              // 设置起点和终点的经度和纬度值
              // var start = tempList[0];
              // var end = tempList[1];
              // var startLatitude = 47.60357;
              // var startLongitude = -122.32945;
              // var endLatitude = 47.60621;
              // var endLongitude = -122.33207;
              // 创建起点和终点的位置对象 //添加所有节点
              for (let i = 0; i < tempList.length; i++) {
                var start = tempList[i];
                // var end = tempList[i + 1];
                var startLocation = new Microsoft.Maps.Directions.Waypoint({
                  address: "节点",
                  location: new Microsoft.Maps.Location(
                    start.latitude,
                    start.longitude
                  ),
                });
                // var endLocation = new Microsoft.Maps.Directions.Waypoint({
                //   address: "End",
                //   location: new Microsoft.Maps.Location(
                //     end.latitude,
                //     end.longitude
                //   ),
                // });
                // 将起点和终点添加到DirectionsManager对象中
                _this.directionsManager.addWaypoint(startLocation);
                // _this.directionsManager.addWaypoint(endLocation);
              }

              // // 添加其他途经点
              // var waypoint1 = new Microsoft.Maps.Directions.Waypoint({
              //   location: new Microsoft.Maps.Location(47.60382, -122.32891),
              // });
              // var waypoint2 = new Microsoft.Maps.Directions.Waypoint({
              //   location: new Microsoft.Maps.Location(47.6096, -122.34279),
              // });
              // directionsManager.addWaypoint(waypoint1);
              // directionsManager.addWaypoint(waypoint2);
              // 设置行程路线选项
              var routeOptions = {
                routeMode: Microsoft.Maps.Directions.RouteMode.driving,
                avoidTraffic: true,
                optimize: Microsoft.Maps.Directions.Optimize.time,
              };
              // 计算行程路线
              _this.directionsManager.calculateDirections(routeOptions);
            });
          }
        }
      });
    },
    //添加新的路径到地图
    // btn_AddPolyline_Click() {
    //   //新路径
    //   let polyline = new MapPolyline();
    //   //描边颜色
    //   polyline.Stroke = new System.Windows.Media.SolidColorBrush(
    //     System.Windows.Media.Colors.Green
    //   );
    //   //描边宽度
    //   polyline.StrokeThickness = 5;
    //   //透明度
    //   polyline.Opacity = 1;
    //   //通过Location集合来定义路径各个拐点的位置
    //   polyline.Locations = new LocationCollection();
    //   {
    //     new Location(34.9294740237661, 87),
    //       new Location(37.7814222409819, 85.979148275863),
    //       new Location(40.2865067209496, 89.219382650863),
    //       new Location(29.8104584489867, 95.943992025863);
    //   }
    //   //向Map控件中添加路径
    //   this.map.Children.Add(polyline);
    // },
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
    // this.btn_AddPolyline_Click();
  },
  mounted() {
    var worldMapContainer = document.getElementById("localMap");
    //用于使map自适应高度和宽度,通过窗体高宽计算容器高宽
    var resizeWorldMapContainer = function () {
      worldMapContainer.style.width = window.innerWidth + "px";
      worldMapContainer.style.height = window.innerHeight + "px";
    };
    //设置容器高宽
    resizeWorldMapContainer();
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
  height: 100%;
  // min-height: 100%;
}

// .bm_bottomLeftOverlay {
//   display: none !important;
//   visibility: hide !important;
// }
</style>
