<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { onMounted } from "@vue/runtime-core";
// 引入中文包
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import bingMapsLayer from "@/components/bingMap/bingMap.vue";
import { User, Iphone } from "@element-plus/icons-vue";
const router = useRouter();
const getLocationNums = (...data) => {
  console.log("click");
  console.log(data);
  // 这里的data中即子组件bingMap返回的点击获取的经纬度值
};
const backToHome = () => {
  router.push("/");
};
const tocitys = [
  {
    lng: "-9.15561077008929",
    lat: "38.71216927583443",
    toCity: "里斯本头牛场",
  },
  {
    lng: "1.516512095495548",
    lat: "42.511873844695025",
    toCity: "安道尔大酒店",
  },
];
const centerPoint = [116.378517, 39.865246];
const addGood = ref(null);
//测试标点
// const marker = () => {
//   // alert(1);
//   // @ts-ignore
//   addGood.value.addMarkers(tocitys, centerPoint);
// };

//级联选择器选择城市
const countryAndCity = ref([]);

const props = {
  expandTrigger: "hover" as const,
};

const handleChangeCity = (value) => {
  // console.log(countryAndCity.value);
  console.log(value);
  // @ts-ignore //不传第一个参数
  addGood.value.addMarkers(null, value[1].point);
  //请求景点和酒店数据
};

const countryAndCityOptions = [
  {
    value: { name: "西班牙", point: [116.378517, 39.865246] },
    label: "西班牙",
    children: [
      {
        value: {
          name: "里斯本",
          img: "/images/home3.jpg",
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
    value: { name: "葡萄牙", point: [-9.15561077008929, 38.71216927583443] },
    label: "葡萄牙",
    children: [
      {
        value: {
          name: "里斯本",
          img: "/images/home3.jpg",
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
        value: "disciplines",
        label: "Disciplines",
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
        value: "disciplines",
        label: "Disciplines",
      },
      {
        value: "navigation",
        label: "Navigation",
      },
    ],
  },
];
let wantSceneryAndHotel = [];
//单选器
const scenery = ref("");
const handleChangeScenery = (value) => {
  // @ts-ignore
  wantSceneryAndHotel.push(value.point);
  // @ts-ignore
  addGood.value.addMarkers(wantSceneryAndHotel, value.point);
};
const sceneryOptions = [
  {
    value: {
      name: "里斯本斗牛场",
      point: [-9.15561077008929, 38.71216927583443],
    },
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
const hotel = ref("");
const handleChangeHotel = (value) => {
  // @ts-ignore
  wantSceneryAndHotel.push(value.point);
  // @ts-ignore
  addGood.value.addMarkers(wantSceneryAndHotel, value.point);
};
const hotelOptions = [
  {
    value: {
      name: "安道尔大酒店",
      point: [1.516512095495548, 42.511873844695025],
    },
    label: "安道尔大酒店",
  },
  {
    value: {
      name: "西班牙皇家酒店",
      point: [-8.15561077008929, 37.71216927583443],
    },
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
let oneRouteInfo = {
  city: "",
  cityImg: "",
  scenery: "",
  hotel: "",
  date: "",
};
let allRoutes = ref([]);
const addToRoutes = () => {
  // @ts-ignore
  oneRouteInfo.city = countryAndCity.value[1].name;
  // @ts-ignore
  oneRouteInfo.cityImg = countryAndCity.value[1].img;
  // @ts-ignore
  oneRouteInfo.scenery = scenery.value.name;
  // @ts-ignore
  oneRouteInfo.hotel = hotel.value.name;
  oneRouteInfo.date = theDate.value;
  console.log(oneRouteInfo);
  // @ts-ignore
  allRoutes.value.push(oneRouteInfo);
  alert(90900);
  console.log(allRoutes);
  // // @ts-ignore
  // oneRouteInfo.city = "";
  // // @ts-ignore
  // oneRouteInfo.cityImg = "";
  // oneRouteInfo.scenery = "";
  // oneRouteInfo.hotel = "";
  // oneRouteInfo.date = "";
};
//联系人
const contactName = ref("");
const contactPhone = ref("");
onMounted(() => {});
</script>

<template>
  <bing-maps-layer
    @getLocationNums="getLocationNums"
    ref="addGood"
  ></bing-maps-layer>
  <div class="back-button" @click="backToHome">
    <el-icon><Back /></el-icon>
  </div>
  <div class="main-left">
    <div class="left-title">
      <p>制定计划</p>
    </div>
    <div class="left-body">
      <div class="items">
        <el-cascader
          v-model="countryAndCity"
          :options="countryAndCityOptions"
          :props="props"
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
      <el-input
        v-model="contactName"
        class="w-50 m-2"
        placeholder="联系人姓名"
        :suffix-icon="User"
      />
      <el-input
        v-model="contactPhone"
        class="w-50 m-2"
        placeholder="联系人电话"
        :suffix-icon="Iphone"
      />
    </div>
    <div class="right-body">
      <el-scrollbar height="370px">
        <div class="timeline" v-for="(item, index) in allRoutes" :key="index">
          <div class="timeline-left">
            <div class="timeline-left-node"></div>
            <div class="timeline-left-line"></div>
          </div>
          <div class="timeline-card">
            <div class="timeline-card-title">{{ item.date }}</div>
            <div class="timeline-card-content">
              <div class="card-header-content">
                <div class="header-img"><img :src="item.cityImg" /></div>
                <div class="header-title">
                  <strong>今日安排</strong><br /><span>{{ item.city }}</span>
                </div>
              </div>
              <div class="content-words">
                酒店：{{ item.hotel }} 景点：{{ item.scenery }}
                哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
      <div class="button-to-submit">
        <el-button type="primary" round>提交行程</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  right: 20px;
  z-index: 1000;
  // height: 75%;
  float: right;
  // border: 1px #e8604c solid;
  border-radius: 5px;
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
  background-color: white;
  .right-header {
    height: 18%;
    width: 100%;
    border-bottom: 2px solid #e8604c;
    padding: 2px 20px;
    ::v-deep .el-input {
      width: 250px !important;
    }
  }
  .right-body {
    height: 82%;
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
</style>
