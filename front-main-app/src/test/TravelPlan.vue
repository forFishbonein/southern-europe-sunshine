<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { onMounted } from "@vue/runtime-core";
// 引入中文包
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import bingMapsLayer from "@/components/bingMap/bingMap.vue";
import { User, Iphone } from "@element-plus/icons-vue";
const router = useRouter();
const props = defineProps<{
  routeTitle: string;
  peopleNum: string;
  arriveCity: string;
}>();
const routeTitle = ref("");
const peopleNum = ref("");
//初始化一些内容
let arriveCountry = "";
let arriveCity = "";
if (props.arriveCity && props.arriveCity !== "") {
  arriveCountry = props.arriveCity.split("+")[0];
  arriveCity = props.arriveCity.split("+")[1];
}
routeTitle.value = props.routeTitle;
peopleNum.value = props.peopleNum;
//得到点击的地图坐标位置
const lat = ref("");
const lng = ref("");
const clickFlag = ref(false);
const getLocationNums = (...data) => {
  console.log("click");
  console.log(data);
  lat.value = data[0].latNum.toFixed(2);
  lng.value = data[0].lngNum.toFixed(2);
  if (clickFlag.value === false) {
    clickFlag.value = true;
  }
  // 这里的data中即子组件bingMap返回的点击获取的经纬度值
};
const backToHome = () => {
  router.push("/");
};
//地图dom子对象
const bingMapObject = ref(null);
//测试标点
// const marker = () => {
//   // alert(1);
//   // @ts-ignore
//   bingMapObject.value.addMarkers(tocitys, centerPoint);
// };

//级联选择器选择国家和城市
//请求选项内容 //TODO
const countryAndCityOptions = [
  {
    value: { name: "西班牙", point: [116.378517, 39.865246] },
    label: "西班牙",
    children: [
      {
        value: {
          name: "马德里",
          img: "./images/home3.jpg",
          point: [-9.15561077008929, 38.71216927583443],
        },
        label: "马德里",
      },
      {
        value: "navigation",
        label: "Navigation",
      },
    ],
  },
  {
    value: { name: "葡萄牙", point: [-9.15561077008929, 38.71216927583443] },
    label: "葡萄牙",
    children: [
      {
        value: {
          name: "里斯本",
          img: "./images/home3.jpg",
          point: [-9.15561077008929, 38.71216927583443],
        },
        label: "里斯本",
      },
      {
        value: "navigation",
        label: "Navigation",
      },
    ],
  },
  {
    value: "南法",
    label: "南法",
    children: [
      {
        value: {
          name: "巴黎",
          img: "./images/home3.jpg",
          point: [-9.15561077008929, 38.71216927583443],
        },
        label: "巴黎",
      },
      {
        value: "navigation",
        label: "Navigation",
      },
    ],
  },
  {
    value: "安道尔",
    label: "安道尔",
    children: [
      {
        value: {
          name: "安道尔城",
          img: "./images/home3.jpg",
          point: [-9.15561077008929, 38.71216927583443],
        },
        label: "安道尔城",
      },
      {
        value: "navigation",
        label: "Navigation",
      },
    ],
  },
];
//国家和城市组合的列表
const countryAndCity = ref([]);
//选择方式
const propsSelect = {
  expandTrigger: "hover" as const,
};
//进行选择后的回调
const handleChangeCity = (value) => {
  // console.log(countryAndCity.value);
  console.log(value);
  // @ts-ignore //不传第一个参数，这样就只是初始化一下中心点
  bingMapObject.value.addMarkers("", value[1].point);
  //请求景点和酒店的数据 //TODO
};
//初始化想去的国家选项
const initCountrySelected = () => {
  // alert(arriveCountry);
  // alert(arriveCity);
  if (
    arriveCountry &&
    arriveCity &&
    arriveCountry !== "" &&
    arriveCity !== ""
  ) {
    countryAndCityOptions.forEach((e) => {
      // @ts-ignore
      if (e.value.name === arriveCountry) {
        // @ts-ignore
        countryAndCity.value.push(e.value);
        e.children.forEach((e2) => {
          // @ts-ignore
          if (e2.value.name === arriveCity) {
            // @ts-ignore
            countryAndCity.value.push(e2.value);
            console.log(countryAndCity.value);
            return;
          }
        });
      }
    });
  }
};
initCountrySelected();
//所有想去的景点和酒店的坐标列表
let wantSceneryAndHotel = [];
//单选器
//添加景点
//写成""即可，后面怎么赋值都可以
const scenery = ref("");
const handleChangeScenery = (value) => {
  const value1 = JSON.parse(value);
  // @ts-ignore
  wantSceneryAndHotel.push({
    name: value1.name,
    description: value1.description,
    point: value1.point,
  });
  // @ts-ignore
  bingMapObject.value.addMarkers(wantSceneryAndHotel, value1.point);
};
const sceneryOptions = [
  {
    //value类型必须和上面定义的数据类型一致
    value: JSON.stringify({
      name: "里斯本斗牛场",
      description: "很刺激",
      point: [-9.15561077008929, 38.71216927583443],
    }),
    label: "里斯本斗牛场",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
//添加酒店
const hotel = ref("");
const handleChangeHotel = (value) => {
  const value1 = JSON.parse(value);
  // @ts-ignore
  wantSceneryAndHotel.push({
    name: value1.name,
    description: value1.description,
    point: value1.point,
  });
  // @ts-ignore
  bingMapObject.value.addMarkers(wantSceneryAndHotel, value1.point);
};
const hotelOptions = [
  {
    value: JSON.stringify({
      name: "安道尔大酒店",
      description: "很舒服",
      point: [1.516512095495548, 42.511873844695025],
    }),
    label: "安道尔大酒店",
  },
  {
    value: JSON.stringify({
      name: "西班牙皇家酒店",
      description: "很舒服",
      point: [-8.15561077008929, 37.71216927583443],
    }),
    label: "西班牙皇家酒店",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
//选择日期
const theDate = ref("");
// const backDate = ref("");
const shortcuts = [
  {
    text: "Today",
    value: new Date(),
  },
  {
    text: "Yesterday",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: "A week ago",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];
//添加到行程的方法
const addRouteFlag = ref(false);
//每一个行程
let oneRouteInfo = {
  city: {
    name: "",
    image: "",
  },
  scenery: {
    name: "",
    description: "",
  },
  hotel: {
    name: "",
    description: "",
  },
  date: "",
};
//所有的行程
let allRoutes = ref([]);
const addToRoutes = () => {
  // @ts-ignore
  oneRouteInfo.city.name = countryAndCity.value[1].name;
  // @ts-ignore
  oneRouteInfo.city.image = countryAndCity.value[1].img;
  // @ts-ignore
  oneRouteInfo.scenery.name = JSON.parse(scenery.value).name;
  // @ts-ignore
  oneRouteInfo.scenery.description = JSON.parse(scenery.value).description;
  // @ts-ignore
  oneRouteInfo.hotel.name = JSON.parse(hotel.value).name;
  // @ts-ignore
  oneRouteInfo.hotel.description = JSON.parse(hotel.value).description;
  oneRouteInfo.date = theDate.value;
  console.log(oneRouteInfo);
  // @ts-ignore
  allRoutes.value.push(oneRouteInfo);
  if (addRouteFlag.value === false) {
    addRouteFlag.value = true;
  }
  //重置所有内容！
  oneRouteInfo = {
    city: {
      name: "",
      image: "",
    },
    scenery: {
      name: "",
      description: "",
    },
    hotel: {
      name: "",
      description: "",
    },
    date: "",
  };
  countryAndCity.value = [];
  scenery.value = "";
  hotel.value = "";
  theDate.value = "";
  //重置结束
  console.log(allRoutes);
};
//预算
const budget = ref("");
//联系人
const contactName = ref("");
const contactPhone = ref("");
onMounted(() => {
  console.log(countryAndCity.value);
  // @ts-ignore //如果在首页选择了国家城市，那么要初始化一下
  // 对于列表，判断是否为空只能用.length > 0，不能用!==[]
  if (countryAndCity.value && countryAndCity.value.length > 0) {
    // @ts-ignore //初始化一下中心点
    bingMapObject.value.addMarkers(
      "",
      // @ts-ignore
      countryAndCity.value[1].point
    );
  }
  //@ts-ignore
  (function ($) {
    $(document).ready(function () {
      $(".change-model-button").on("click", function () {
        // console.log($(".main-left").attr("transform"));
        console.log($(".main-left").css("transform"));
        if ($(".main-left").css("transform") === "matrix(1, 0, 0, 1, 0, 0)") {
          // @ts-ignore
          $(this).html(
            `<i data-v-f86fb796="" class="el-icon" style="--color:#e0e0e0;"><svg data-v-f86fb796="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M384 192v640l384-320.064z"></path></svg></i>`
          );
          $(".main-left").css("transform", "translateX(-85%)");
          $(".main-right").css("transform", "translateX(130%)");
        } else {
          // @ts-ignore
          $(this).html(
            `<i data-v-f86fb796="" class="el-icon" style="--color:#e0e0e0;"><svg data-v-f86fb796="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M672 192 288 511.936 672 832z"></path></svg></i>`
          );
          $(".main-left").css("transform", "translateX(0%)");
          $(".main-right").css("transform", "translateX(0%)");
        }
      });
    });
    //@ts-ignore
  })(jQuery);
});
</script>
<template>
  <!-- <BaseHeader></BaseHeader> -->
  <bing-maps-layer
    @getLocationNums="getLocationNums"
    ref="bingMapObject"
  ></bing-maps-layer>
  <!-- <div class="back-button" @click="backToHome">
    <el-icon><Back /></el-icon>
  </div> -->
  <div class="logo-back" @click="backToHome">
    <div class="img-con"><img src="/images/logo-transparent.png" /></div>
  </div>
  <div class="main-left">
    <div class="left-title">
      <p>制定计划</p>
      <div class="change-model-button">
        <el-icon color="#e0e0e0"> <CaretLeft /></el-icon>
      </div>
    </div>
    <div class="left-body">
      <div class="items">
        <el-cascader
          v-model="countryAndCity"
          :options="countryAndCityOptions"
          :props="propsSelect"
          @change="handleChangeCity"
          placeholder="请选择国家和城市"
          size="large"
        />
        <el-select
          v-model="scenery"
          clearable
          @change="handleChangeScenery"
          placeholder="请选择景点"
          size="large"
        >
          <el-option
            v-for="item in sceneryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select
          v-model="hotel"
          clearable
          @change="handleChangeHotel"
          placeholder="请选择酒店"
          size="large"
        >
          <el-option
            v-for="item in hotelOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-config-provider :locale="zhCn">
          <el-date-picker
            v-model="theDate"
            type="datetime"
            placeholder="选择行程日期"
            :shortcuts="shortcuts"
            size="large"
          />
        </el-config-provider>
        <!-- <el-config-provider :locale="zhCn">
          <el-date-picker
            v-model="backDate"
            type="datetime"
            placeholder="选择返回日期"
            :shortcuts="shortcuts"
            size="large"
          />
        </el-config-provider> -->
        <div class="button-to-add">
          <el-button type="primary" size="large" @click="addToRoutes" plain
            >加入行程</el-button
          >
        </div>
      </div>
    </div>
  </div>
  <div class="main-right">
    <div class="right-header">
      <div>
        <el-input
          v-model="routeTitle"
          class="w-50 m-2 short"
          placeholder="行程标题"
        />
        <el-input
          v-model="peopleNum"
          oninput="value=value.replace(/[^\d]/g,'')"
          class="w-50 m-2 short"
          placeholder="随行人数"
        />
      </div>
      <el-input
        v-model="budget"
        oninput="value=value.replace(/[^\d]/g,'')"
        class="w-50 m-2 short"
        placeholder="行程预算"
      />
      <el-input
        v-model="contactName"
        class="w-50 m-2 short"
        placeholder="联系人"
      />
      <el-input
        v-model="contactPhone"
        class="w-50 m-2 long"
        placeholder="联系人电话"
        :suffix-icon="Iphone"
      />
    </div>
    <div class="right-body">
      <el-scrollbar min-height="200px" v-if="addRouteFlag">
        <div class="timeline" v-for="(item, index) in allRoutes" :key="index">
          <div class="timeline-left">
            <div class="timeline-left-node"></div>
            <div class="timeline-left-line"></div>
          </div>
          <div class="timeline-card">
            <div class="timeline-card-title">{{ item.date }}</div>
            <div class="timeline-card-content">
              <div class="card-header-content">
                <div class="header-img">
                  <img
                    :src="
                      'http://182.92.103.154/static/images/upload/' +
                      item.city.image
                    "
                  />
                </div>
                <div class="header-title">
                  <strong>今日安排</strong><br /><span>{{
                    item.city.name
                  }}</span>
                </div>
              </div>
              <div class="content-words">
                今天，您想要去的景点：{{ item.scenery.name }}，描述：{{
                  item.scenery.description
                }}<br />
                您想要入住：{{ item.hotel.name }} ，描述：{{
                  item.hotel.description
                }}<br />
                南欧阳光祝您享受一段美好的旅程！
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
      <el-empty description="您还没有添加行程" :image-size="150" v-else />
      <div class="button-to-submit">
        <el-button type="primary" round>提交行程</el-button>
      </div>
    </div>
  </div>
  <div class="panel-border" v-if="clickFlag">
    <p>{{ lng }}°，{{ lat }}°</p>
  </div>
</template>

<style lang="scss" scoped>
.logo-back {
  width: 260px;
  height: 12%;
  position: fixed;
  top: 3%;
  left: 20px;
  z-index: 1000;
  // border: 1px #e8604c solid;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .img-con {
    width: 240px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.main-left {
  width: 260px;
  height: 63%;
  position: fixed;
  top: 17%;
  left: 20px;
  z-index: 1000;
  border-radius: 5px;
  overflow: hidden; //这个必须要加，要不然圆角失效

  float: left;
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
  transition: all 0.6s linear;
  transform: translateX(0%);
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
    background-color: rgba(255, 255, 255, 0.8);
  }
  .items {
    margin: 10px auto;
    width: 80%;
    height: 80%;
    // border: 1px #e8604c solid;
  }
}

.main-right {
  width: 300px;
  height: 90%;
  position: fixed;
  top: 5%;
  right: 80px;
  z-index: 1000;
  // height: 75%;
  float: right;
  // border: 1px #e8604c solid;
  border-radius: 5px;
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
  transform: translateX(0%);
  transition: all 0.8s linear;
  background-color: rgba(255, 255, 255, 0.8);
  .right-header {
    height: 29%;
    width: 100%;
    border-bottom: 2px solid #e8604c;
    padding: 2px 20px;
    .long {
      width: 250px !important;
    }
    .short {
      width: 114px !important;
    }
  }
  .right-body {
    height: 73%;
    width: 100%;
    padding: 20px 10px;
  }
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
::v-deep .el-input__inner {
  border: 0 !important;
}
::v-deep .el-input {
  margin-bottom: 20px;
}
::v-deep .el-button {
  font-weight: 800;
  font-size: 17px;
}
.button-to-add {
  width: 205px;
  margin: 0 auto;
  position: absolute;
  bottom: 15px;
  display: flex;
  justify-content: center;
}
.button-to-submit {
  width: 280px;
  margin: 0 auto;
  position: absolute;
  bottom: 15px;
  display: flex;
  justify-content: center;
}
// ::v-deep .el-scrollbar {
//   padding: 5px !important;
// }
.timeline {
  padding-left: 20px;
  display: flex;
  width: 100%;
  &-left {
    margin-right: 5px;

    &-node {
      z-index: 5;
      position: relative;
      bottom: 1px;
      left: -5px;
      width: 15px;
      height: 15px;
      background-color: #ffffff;
      border: 2px solid #c60b1e;
      border-radius: 50%;
    }

    &-line {
      position: relative;
      bottom: 15px;
      height: 100%;
      border-left: 3px solid #e4e7ed;
    }
  }

  &-card {
    height: 100%;

    &-title {
      font-size: 15px;
      color: rgb(0, 0, 0);
      margin-bottom: 10px;
      color: rgb(172, 172, 172);
    }

    &-content {
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0 0 10px 1px lightgray;
      margin-bottom: 20px;
      width: 220px;
      height: auto;
      .card-header-content {
        width: 200px;
        height: 70px;
        background-color: rgba(0, 0, 0, 0.03);
        padding: 5px;
        .header-img {
          width: 80px;
          height: 60px;
          img {
            width: 100%;
            height: 100%;
          }
          float: left;
        }
        .header-title {
          padding-left: 10px;
          width: 100px;
          height: 70px;
          float: right;
          span {
            font-size: 14px;
          }
        }
      }
      .content-words {
        padding: 10px;
        font-size: 14px;
      }
      &:hover {
        cursor: pointer;
        position: relative;
        bottom: 4px;
      }
    }
  }
}
//经纬度面板
.panel-border {
  width: 260px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 10000;
  bottom: 25px;
  left: 20px;
  color: #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
  transition: all 0.2s linear;
  p {
    width: 100%;
    line-height: 50px;
    text-align: center;
  }
}
.panel-border:hover {
  cursor: pointer;
  bottom: 27px;
}
//切换模式的按钮
.change-model-button {
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background-color: #d75663;
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.2);
  position: absolute;
  right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.1s linear;
}
.change-model-button:hover {
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.3);
  // background-color: #cc0033;
}
</style>
