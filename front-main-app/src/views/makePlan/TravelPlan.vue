<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { reactive, ref } from "vue";
import { onMounted } from "@vue/runtime-core";
// 引入中文包
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import bingMapsLayer from "@/components/bingMap/bingMap.vue";
import { conutryInfoType, cityInfoType } from "@/apis/interface/resultType";
import {
  totalRouteInfoType,
  totalRouteInfoTypeVo,
  oneRouteDetailInfoType,
  oneRouteDetailInfoTypeVo,
  scenicInfoType,
  hotelInfoType,
} from "@/apis/interface/plan";
import { getCountrysInfo } from "@/apis/country";
import {
  getCityListByCountryId,
  getScenicListByCityId,
  getHotelListByCityId,
  saveTotalRoutes,
  getOnePlanById,
} from "@/apis/plan";
import moment from "moment";
import { User, Phone } from "@element-plus/icons-vue";
import { mainStore } from "@/store/user";
const route = useRoute();
const store = mainStore();
// YYYY-MM-DD HH:mm:ss
// alert(moment("Wed Mar 22 2023 00:00:00 GMT+0800 (中国标准时间)").format("YYYY-MM-DD"));
// alert(moment("Wed Mar 22 2023 00:00:00 GMT+0800 (中国标准时间)").format("HH:mm:ss"));
const router = useRouter();
const props = defineProps<{
  routeTitle: string;
  peopleNum: string;
  arriveCity: string;
  planId: string;
}>();
//初始化一些基本信息内容
let arriveCountry = "";
let arriveCity = "";
if (props.arriveCity && props.arriveCity !== "") {
  arriveCountry = props.arriveCity.split("+")[0];
  arriveCity = props.arriveCity.split("+")[1];
}
const routeTitle = ref("");
const peopleNum = ref("");
routeTitle.value = props.routeTitle;
peopleNum.value = props.peopleNum;
//初始化想去的国家城市选项
const initCountrySelected = () => {
  if (
    arriveCountry &&
    arriveCity &&
    arriveCountry !== "" &&
    arriveCity !== ""
  ) {
    // alert(333);
    // alert(arriveCountry);
    // alert(arriveCity);
    console.log(countryAndCityOptions);
    // console.log(countryAndCity.value);
    countryAndCityOptions.forEach((e: oneOption) => {
      if (e.value.name === arriveCountry) {
        // console.log(countryAndCity.value);
        // @ts-ignore //更换0的值即可，因为默认为[{},{}]
        countryAndCity.value[0] = e.value;
        e.children.forEach((e2) => {
          if (e2.value.name === arriveCity) {
            // alert(111);
            // @ts-ignore
            countryAndCity.value[1] = e2.value;
            console.log(countryAndCity.value);
            return;
          }
        });
      }
    });
  }
  console.log(countryAndCity.value);
  // @ts-ignore //如果在首页选择了国家城市，那么要初始化一下
  // 对于列表，判断是否为空只能用.length > 0，不能用!==[]
  if (
    JSON.stringify(countryAndCity.value[0]) != "{}" &&
    JSON.stringify(countryAndCity.value[1]) != "{}"
  ) {
    // alert(222);
    // @ts-ignore //初始化一下中心点
    bingMapObject.value.addMarkers(
      "",
      // @ts-ignore
      countryAndCity.value[1].point
    );
  }
};

//地图dom子对象
const bingMapObject = ref(null);
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
// 返回首页按钮
const backToHome = () => {
  router.push("/");
};

//级联选择器选择国家和城市开始
//请求选项内容
const allCountrysInfo = ref([] as conutryInfoType[]);
interface oneOption {
  value: { id: Number; name: string; point: Array<Number> };
  label: string;
  children: oneChildren[];
}
interface oneChildren {
  value: {
    id: Number;
    name: string;
    point: Array<Number>;
  };
  label: string;
}
const countryAndCityOptions = reactive([] as oneOption[]);
const getAllCityPromise = () => {
  return new Promise((resolve, reject) => {
    //进行的次数
    let num = 0;
    allCountrysInfo.value.forEach((e) => {
      getCityListByCountryId(e.ciid)
        .then((res: any) => {
          if (res.code != 2000) {
            //@ts-ignore
            ElMessage({
              type: "error",
              message: res.msg,
            });
          } else {
            // alert(222);
            console.log(res.data);
            let tempList1 = [] as cityInfoType[];
            tempList1 = res.data;
            let tempList2 = [] as oneChildren[];
            tempList1.forEach((e2) => {
              tempList2.push({
                value: {
                  id: e2.cityID,
                  name: e2.cityNameCn,
                  point:
                    e2.cityCoordinate && e2.cityCoordinate.length > 0
                      ? e2.cityCoordinate.split(",").map((item) => Number(item))
                      : [],
                },
                label: e2.cityNameCn,
              });
            });
            countryAndCityOptions.push({
              value: {
                id: e.ciid,
                name: e.countryNameCn,
                point:
                  e.countryCoord && e.countryCoord.length > 0
                    ? e.countryCoord.split(",").map((item) => Number(item))
                    : [],
              },
              label: e.countryNameCn,
              children: tempList2,
            });
            num += 1;
            if (num === allCountrysInfo.value.length) {
              resolve(res);
            }
          }
        })
        .catch((error) => {
          //@ts-ignore
          ElMessage({
            type: "error",
            message: error.message,
          });
        });
    });
  });
};
const getAllCountryAndCityInfo = async () => {
  await getCountrysInfo()
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        console.log(res.data);
        // alert(111);
        allCountrysInfo.value = res.data;
      }
    })
    .catch((error) => {
      //@ts-ignore
      ElMessage({
        type: "error",
        message: error.message,
      });
    });
  await getAllCityPromise().then((res: any) => {
    console.log("完成");
    console.log(countryAndCityOptions);
    // alert(333);
  });
};
interface oneCityOrCountryInfo {
  id: string;
  name: string;
  point: Array<Number>;
}
//国家和城市组合的列表
const countryAndCity = ref([
  {} as oneCityOrCountryInfo,
  {} as oneCityOrCountryInfo,
]);
//或者：
// const countryAndCity = ref([] as oneCityOrCountryInfo[]);
//级联选择方式
const propsSelect = {
  expandTrigger: "hover" as const,
};
//进行级联选择后的回调
const handleChangeCity = (value) => {
  // console.log(countryAndCity.value);
  console.log(value);
  // @ts-ignore //不传第一个参数，这样就只是初始化一下中心点
  bingMapObject.value.addMarkers("", value[1].point);
  //请求景点和酒店的数据 //放在单选回调里面了
};
//级联选择器选择国家和城市结束

//选择某个城市的景点或者酒店开始
interface oneCell {
  value: string;
  label: string;
}
const sceneryOrHotelOptions = ref([] as oneCell[]);
//单选框
const selectSceneryOrHotel = ref("");
const handleSelectChange = async () => {
  // sceneryOrHotel.value = ""; //必须要清空一下，否则保存的可能有问题（用户可能在保存之前切换了选项
  if (Number(selectSceneryOrHotel.value) == 1) {
    let tempList = [] as scenicInfoType[];
    console.log(countryAndCity.value);
    await getScenicListByCityId(countryAndCity.value[1].id)
      .then((res: any) => {
        if (res.code != 2000) {
          //@ts-ignore
          ElMessage({
            type: "error",
            message: res.msg,
          });
        } else {
          tempList = res.data;
        }
      })
      .catch((error) => {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: error.message,
        });
      });
    //一定要清空一下，不然会追加，而不是重新添加
    sceneryOrHotelOptions.value = [];
    tempList.forEach((e) => {
      sceneryOrHotelOptions.value.push({
        value: JSON.stringify({
          id: e.scenicsid,
          name: e.scenicNameCn,
          enName: e.scenicNameEn,
          point:
            e.scenicCoord && e.scenicCoord.length > 0
              ? e.scenicCoord.split(",").map((item) => Number(item))
              : [],
        }),
        label: e.scenicNameCn,
      });
    });
  } else if (Number(selectSceneryOrHotel.value) == 2) {
    let tempList2 = [] as hotelInfoType[];
    await getHotelListByCityId(countryAndCity.value[1].id)
      .then((res: any) => {
        if (res.code != 2000) {
          //@ts-ignore
          ElMessage({
            type: "error",
            message: res.msg,
          });
        } else {
          tempList2 = res.data;
        }
      })
      .catch((error) => {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: error.message,
        });
      });
    sceneryOrHotelOptions.value = [];
    tempList2.forEach((e) => {
      sceneryOrHotelOptions.value.push({
        value: JSON.stringify({
          id: e.hotelID,
          name: e.hotelNameCn,
          enName: e.hotelNameEn,
          point:
            e.hotelCoord && e.hotelCoord.length > 0
              ? e.hotelCoord.split(",").map((item) => Number(item))
              : [],
        }),
        label: e.hotelNameCn,
      });
    });
  }
};
//所有想去的景点和酒店的坐标列表
interface markPointInfoType {
  id: string;
  name: string;
  enName: string;
  selectType: string;
  point: string;
}
let wantSceneryAndHotel = [] as markPointInfoType[];

//添加景点或者酒店
//写成""即可，后面怎么赋值都可以
const confirmSceneryOrHotelSelected = ref("");
const sceneryOrHotel = ref("");
//选中景点或者酒店后的回调
const handleChangeSceneryOrHotel = (value) => {
  const value1 = JSON.parse(value); //value就是sceneryOrHotel
  if (Number(selectSceneryOrHotel.value) == 1) {
    confirmSceneryOrHotelSelected.value = "景点";
  } else if (Number(selectSceneryOrHotel.value) == 2) {
    confirmSceneryOrHotelSelected.value = "酒店";
  }
  wantSceneryAndHotel.push({
    id: value1.id,
    name: value1.name,
    enName: value1.enName,
    selectType: confirmSceneryOrHotelSelected.value,
    point: value1.point,
  });
  // @ts-ignore
  bingMapObject.value.addMarkers(wantSceneryAndHotel, value1.point);
  confirmSceneryOrHotelSelected.value = "";
};
//选择日期
const theDate = ref("");
const shortcuts = [
  {
    text: "今天",
    value: new Date(),
  },
  {
    text: "昨天",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: "一周前",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];
//添加到行程的方法
//标志
const addRouteFlag = ref(false);
//每一个行程
interface displayInfoType {
  country: {
    id: string;
  };
  city: {
    id: string;
    name: string;
  };
  sceneryOrHotel: {
    id: string;
    name: string;
    enName: string;
    type: string;
    point: Array<Number>;
  };
  date: string;
}
let oneDisplayInfo: displayInfoType = {
  country: {
    id: "",
  },
  city: {
    id: "",
    name: "",
  },
  sceneryOrHotel: {
    id: "",
    name: "",
    enName: "",
    type: "",
    point: [],
  },
  date: "",
};
//所有的要展示的行程
let allRoutesToDisplay = ref([] as displayInfoType[][]);
//对象数组排序算法
const compareTime = (prop: string) => {
  return function (obj1: displayInfoType, obj2: displayInfoType) {
    var val1 = new Date(obj1[prop]).getTime();
    var val2 = new Date(obj2[prop]).getTime();
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  };
};
const compareDate = (prop: string) => {
  return function (obj1: displayInfoType, obj2: displayInfoType) {
    var val1 = new Date(obj1[0][prop]).getTime();
    var val2 = new Date(obj2[0][prop]).getTime();
    // alert(333);
    console.log(val1);
    console.log(val2);
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  };
};
//加入到右边的方法
const addToDisplayRoutes = () => {
  oneDisplayInfo.country.id = countryAndCity.value[0].id;
  oneDisplayInfo.city.id = countryAndCity.value[1].id;
  oneDisplayInfo.city.name = countryAndCity.value[1].name;
  oneDisplayInfo.sceneryOrHotel.id = JSON.parse(sceneryOrHotel.value).id;
  oneDisplayInfo.sceneryOrHotel.name = JSON.parse(sceneryOrHotel.value).name;
  oneDisplayInfo.sceneryOrHotel.point = JSON.parse(sceneryOrHotel.value).point;
  oneDisplayInfo.sceneryOrHotel.enName = JSON.parse(
    sceneryOrHotel.value
  ).enName;
  oneDisplayInfo.sceneryOrHotel.type = confirmSceneryOrHotelSelected.value;
  oneDisplayInfo.date = moment(theDate.value).format("YYYY-MM-DD HH:mm:ss");
  console.log(oneDisplayInfo);
  // console.log(theDate.value);

  if (allRoutesToDisplay.value.length > 0) {
    try {
      allRoutesToDisplay.value.forEach((e) => {
        let addFlag = false;
        e.forEach((e2) => {
          if (
            new Date(
              moment(oneDisplayInfo.date).format("YYYY-MM-DD")
            ).getTime() ===
              new Date(moment(e2.date).format("YYYY-MM-DD")).getTime() &&
            addFlag === false
          ) {
            e.push(oneDisplayInfo);
            e.sort(compareTime("date"));
            // alert(111);
            addFlag = true;
            if (addFlag === true) {
              throw Error(); //直接到error
            }
          }
        });
        let tempList = [] as displayInfoType[];
        tempList.push(oneDisplayInfo);
        allRoutesToDisplay.value.push(tempList);
        // alert(222);
        // @ts-ignore //二维数组对象排序
        allRoutesToDisplay.value.sort(compareDate("date"));
        addFlag = true;
        if (addFlag === true) {
          throw Error(); //直接到error
        }
      });
    } catch (error) {
      console.log("跳出循环");
    }
  } else {
    //如果是第一次添加
    let tempList = [] as displayInfoType[];
    tempList.push(oneDisplayInfo);
    allRoutesToDisplay.value.push(tempList);
  }
  if (addRouteFlag.value === false) {
    addRouteFlag.value = true;
  }
  //必须重置所有内容
  oneDisplayInfo = {
    country: {
      id: "",
    },
    city: {
      id: "",
      name: "",
    },
    sceneryOrHotel: {
      id: "",
      name: "",
      enName: "",
      type: "",
      point: [],
    },
    date: "",
  };
  countryAndCity.value = [];
  sceneryOrHotel.value = "";
  theDate.value = "";
  selectSceneryOrHotel.value = "";
  sceneryOrHotelOptions.value = [];
  //重置结束
  console.log(allRoutesToDisplay);
};
//删除某条行程的方法
const deleteOneRouteFromDisplayRoutes = (index1, index2) => {
  allRoutesToDisplay.value[index1].splice(index2, 1); //删除第index1个数组的第index2的元素
  if (allRoutesToDisplay.value[index1].length === 0) {
    allRoutesToDisplay.value.splice(index1, 1);
  }
  console.log(allRoutesToDisplay.value);
};
//其余基本信息
// 上面有 const routeTitle = ref("");  和 const peopleNum = ref("");
//预算
const budget = ref("");
//联系人
const contactName = ref("");
//联系方式
const contactPhone = ref("");
//出发返回时间
const startAndBackDay = ref([] as string[]);
const startDay = ref("");
const backDay = ref("");
const selectTheDate = () => {
  // console.log(startAndBackDay.value[0]);
  // console.log(startAndBackDay.value[1]);
  startDay.value = moment(startAndBackDay.value[0]).format("YYYY-MM-DD");
  backDay.value = moment(startAndBackDay.value[1]).format("YYYY-MM-DD");
};
//还差days
//保存全部行程
const dialogFormVisible = ref(false);
const totalRoutesInfo = ref({} as totalRouteInfoTypeVo);
const routesList = ref([] as oneRouteDetailInfoTypeVo[]);
const openTheConfirmDialog = () => {
  dialogFormVisible.value = true;
};
const saveTheTotalRoutes = () => {
  let tempList = [] as displayInfoType[];
  tempList = allRoutesToDisplay.value.flat();
  tempList.forEach((e) => {
    routesList.value.push({
      cityId: e.city.id,
      countryId: e.country.id,
      date: e.date,
      itineraryId: e.sceneryOrHotel.id,
      type: e.sceneryOrHotel.type,
      userId: store.userInfo.userid,
    });
  });
  totalRoutesInfo.value.routeDetailsList = routesList.value;
  //保证一下时间格式
  startDay.value = moment(startDay.value).format("YYYY-MM-DD");
  backDay.value = moment(backDay.value).format("YYYY-MM-DD");
  totalRoutesInfo.value.budget = budget.value;
  totalRoutesInfo.value.contacts = contactName.value;
  totalRoutesInfo.value.days =
    Math.floor(
      (new Date(backDay.value).getTime() - new Date(startDay.value).getTime()) /
        (24 * 3600 * 1000)
    ) + "";

  totalRoutesInfo.value.num = Number(peopleNum.value);
  totalRoutesInfo.value.phone = contactPhone.value;
  totalRoutesInfo.value.returnDate = backDay.value;
  totalRoutesInfo.value.startDate = startDay.value;
  totalRoutesInfo.value.title = routeTitle.value;
  totalRoutesInfo.value.userId = store.userInfo.userid;
  saveTotalRoutes(totalRoutesInfo.value)
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        //@ts-ignore
        ElMessage({
          type: "success",
          message: "保存成功！",
        });
        router.push("/personal/myroute");
      }
    })
    .catch((error) => {
      //@ts-ignore
      ElMessage({
        type: "error",
        message: error.message,
      });
    });
};
//查看详情时的初始化
let planId = "";
if (props.planId && props.planId !== "") {
  planId = props.planId;
}
const totalViewRouteInfo = ref({} as totalRouteInfoType);
const getOneViewPlan = async () => {
  await getOnePlanById(planId)
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        totalViewRouteInfo.value = res.data;
        console.log(totalViewRouteInfo.value);
      }
    })
    .catch((error) => {
      //@ts-ignore
      ElMessage({
        type: "error",
        message: error.message,
      });
    });
  budget.value = totalViewRouteInfo.value.budget;
  contactName.value = totalViewRouteInfo.value.contacts;
  peopleNum.value = totalViewRouteInfo.value.num + "";
  contactPhone.value = totalViewRouteInfo.value.phone;
  startDay.value = new Date(
    new Date(totalViewRouteInfo.value.startDate).getTime()
  ).toString();
  backDay.value = new Date(
    new Date(totalViewRouteInfo.value.returnDate).getTime()
  ).toString();
  // 批量添加元素：在首元素的前面添加startDay和backDay两个元素
  startAndBackDay.value.splice(0, 0, startDay.value, backDay.value);
  // startAndBackDay.value.push(startDay.value);
  // startAndBackDay.value.push(backDay.value);
  routeTitle.value = totalViewRouteInfo.value.title;
  if (totalViewRouteInfo.value.routeDetailsList.length > 0) {
    for (let i = 0; i < totalViewRouteInfo.value.routeDetailsList.length; i++) {
      if (i === 0) {
        let tempList = [] as displayInfoType[];
        let temObj: oneRouteDetailInfoType =
          totalViewRouteInfo.value.routeDetailsList[i];
        tempList.push({
          country: {
            id: temObj.countryId,
          },
          city: {
            id: temObj.cityId,
            name: "cityName",
          },
          sceneryOrHotel: {
            id: temObj.itineraryId,
            name: "122",
            enName: "enName",
            type: temObj.type,
            point: [1, 1],
          },
          date: temObj.date,
        });
        allRoutesToDisplay.value.push(tempList);
      } else {
        try {
          allRoutesToDisplay.value.forEach((e) => {
            let addFlag = false;
            e.forEach((e2) => {
              if (
                new Date(
                  moment(
                    totalViewRouteInfo.value.routeDetailsList[i].date
                  ).format("YYYY-MM-DD")
                ).getTime() ===
                  new Date(moment(e2.date).format("YYYY-MM-DD")).getTime() &&
                addFlag === false
              ) {
                let temObj: oneRouteDetailInfoType =
                  totalViewRouteInfo.value.routeDetailsList[i];
                e.push({
                  country: {
                    id: temObj.countryId,
                  },
                  city: {
                    id: temObj.cityId,
                    name: "cityName",
                  },
                  sceneryOrHotel: {
                    id: temObj.itineraryId,
                    name: "122",
                    enName: "enName",
                    type: temObj.type,
                    point: [1, 1],
                  },
                  date: temObj.date,
                });
                e.sort(compareTime("date"));
                // alert(111);
                addFlag = true;
                if (addFlag === true) {
                  throw Error(); //直接到error
                }
              }
            });
            let tempList = [] as displayInfoType[];
            let temObj: oneRouteDetailInfoType =
              totalViewRouteInfo.value.routeDetailsList[i];
            tempList.push({
              country: {
                id: temObj.countryId,
              },
              city: {
                id: temObj.cityId,
                name: "cityName",
              },
              sceneryOrHotel: {
                id: temObj.itineraryId,
                name: "122",
                enName: "enName",
                type: temObj.type,
                point: [1, 1],
              },
              date: temObj.date,
            });
            allRoutesToDisplay.value.push(tempList);
            // alert(222);
            // @ts-ignore //二维数组对象
            allRoutesToDisplay.value.sort(compareDate("date"));
            addFlag = true;
            if (addFlag === true) {
              throw Error(); //直接到error
            }
          });
        } catch (error) {
          console.log("跳出循环");
        }
      }
    }
    addRouteFlag.value = true;
    console.log("=========");
    console.log(allRoutesToDisplay.value);
    console.log("=========");
  }
};
const initAwaitMethod = async () => {
  if (props.planId && props.planId !== "") {
    getOneViewPlan();
  }
  await getAllCountryAndCityInfo();
  initCountrySelected();
};
onMounted(() => {
  //总控初始化方法
  initAwaitMethod();
  //@ts-ignore //伸缩控制面板
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
        <el-radio-group
          v-model="selectSceneryOrHotel"
          class="ml-4"
          @change="handleSelectChange"
        >
          <el-radio label="1" size="large">景点</el-radio>
          <el-radio label="2" size="large">酒店</el-radio>
        </el-radio-group>
        <el-select
          v-model="sceneryOrHotel"
          clearable
          @change="handleChangeSceneryOrHotel"
          placeholder="请选择"
          size="large"
        >
          <el-option
            v-for="item in sceneryOrHotelOptions"
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
        <div class="button-to-add">
          <el-button
            type="primary"
            size="large"
            @click="addToDisplayRoutes"
            plain
            >加入行程</el-button
          >
        </div>
      </div>
    </div>
  </div>
  <div class="main-right">
    <div class="right-header">
      <el-input
        v-model="routeTitle"
        class="w-50 m-2 long"
        placeholder="行程标题"
      />
      <el-input
        v-model="peopleNum"
        oninput="value=value.replace(/[^\d]/g,'')"
        class="w-50 m-2 short"
        placeholder="随行人数"
      />
      <el-input
        v-model="budget"
        oninput="value=value.replace(/[^\d]/g,'')"
        class="w-50 m-2 short"
        placeholder="预算(元)"
      />
      <div>
        <el-date-picker
          v-model="startAndBackDay"
          type="daterange"
          range-separator="—"
          start-placeholder="出发"
          end-placeholder="返回"
          size="default"
          @change="selectTheDate"
        />
      </div>
      <!-- <el-input
        v-model="contactName"
        class="w-50 m-2 short"
        placeholder="联系人"
      />
      <el-input
        v-model="contactPhone"
        class="w-50 m-2 long"
        placeholder="联系人电话"
        :suffix-icon="Iphone"
      /> -->
    </div>
    <div class="right-body">
      <el-scrollbar v-if="addRouteFlag">
        <div
          class="timeline"
          v-for="(item, index) in allRoutesToDisplay"
          :key="index"
        >
          <div class="timeline-left">
            <div class="timeline-left-node"></div>
            <div class="timeline-left-line"></div>
          </div>
          <div class="timeline-card">
            <div class="timeline-card-title">
              Day{{ index + 1 }}
              {{
                moment(allRoutesToDisplay[index][0].date).format("YYYY-MM-DD")
              }}
            </div>
            <div class="timeline-card-content">
              <!-- <div class="card-header-content">
                <div class="header-img"><img :src="item.city.image" /></div>
                <div class="header-title">
                  <strong>今日安排</strong><br /><span>{{
                    item.city.name
                  }}</span>
                </div>
              </div> -->
              <div class="one-item" v-for="(i, k) in item" :key="k">
                <el-icon
                  :size="23"
                  :color="`#A8ABB2`"
                  @click="deleteOneRouteFromDisplayRoutes(index, i)"
                  ><CircleCloseFilled /></el-icon
                >安排{{ k + 1 }}: 今日{{ moment(i.date).format("HH:mm") }} 前往
                {{ i.city.name }}的
                {{
                  i.sceneryOrHotel.name + "(" + i.sceneryOrHotel.enName + ")"
                }}
              </div>
              <!-- <div class="content-words" v-for="(i, k) in item" :key="k">
                安排{{ k + 1 }}: 今日{{ moment(i.date).format("HH:mm") }} 前往
                {{ i.city.name }}的
                {{
                  i.sceneryOrHotel.name + "(" + i.sceneryOrHotel.enName + ")"
                }} -->
              <!-- 今天，您想要去的景点：{{ item.sceneryOrHotel.name }}，描述：{{
                  item.sceneryOrHotel.enName
                }}<br />
                您想要入住：{{ item.hotel.name }} ，描述：{{ item.hotel.enName
                }}<br />
                南欧阳光祝您享受一段美好的旅程！ -->
              <!-- </div> -->
            </div>
          </div>
        </div>
      </el-scrollbar>
      <el-empty enName="您还没有添加行程" :image-size="150" v-else />
      <div class="button-to-submit">
        <el-button type="primary" round @click="openTheConfirmDialog"
          >保存行程</el-button
        >
      </div>
    </div>
  </div>
  <div class="panel-border" v-if="clickFlag">
    <p>{{ lng }}°，{{ lat }}°</p>
  </div>
  <el-dialog v-model="dialogFormVisible" title="完善信息">
    <div class="dialog-body">
      <el-input
        v-model="contactName"
        class="w-50 m-2"
        placeholder="联系人"
        :suffix-icon="User"
      />
    </div>
    <div class="dialog-body">
      <el-input
        v-model="contactPhone"
        class="w-50 m-2"
        placeholder="联系方式"
        :suffix-icon="Phone"
      />
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="saveTheTotalRoutes">
          确认保存
        </el-button>
      </span>
    </template>
  </el-dialog>
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
  height: 350px;
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
    height: 150px;
    width: 100%;
    border-bottom: 2px solid #e8604c;
    padding: 2px 20px;
    .long {
      width: 250px !important;
    }
    .short {
      width: 114px !important;
    }
    ::v-deep .el-date-editor {
      width: 245px !important;
      margin: 8px !important;
      .el-input__wrapper {
        width: 245px !important;
      }
    }
  }
  .right-body {
    height: 100%;
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
.dialog-body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.one-item {
  // border: 1px #cc0033 solid;
  width: 100%;
  max-height: 80px;
  font-size: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  // color: #000000;
  i {
    border-radius: 16px;
    transition: all 0.3s linear;
    cursor: pointer;
    margin-right: 5px;
  }
  i:hover {
    box-shadow: 0 12px 5px -10px rgba(0, 0, 0, 0.1),
      0 0 4px 0 rgba(0, 0, 0, 0.1);
    color: #cc0033;
  }
}
//滚动的长度！
::v-deep .el-scrollbar {
  height: 60%;
  // .el-scrollbar__view {
  //   height: 300px;
  // }
}
</style>
