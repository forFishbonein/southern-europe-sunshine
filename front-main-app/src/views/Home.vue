<script setup lang="ts">
import { ref, reactive, defineExpose } from "vue";
import { useRouter } from "vue-router";
// import { utilStore } from "@/store/util";
// test
import { onMounted } from "@vue/runtime-core";
import { getAllThemeTypeInfo, getPageThemeInfo } from "@/apis/theme";
import {
  themeTypesType,
  themeTypesRankingType,
} from "@/apis/interface/resultType";
import { getNewsListInfo } from "@/apis/news";
import { newsInfoType } from "@/apis/interface/resultType";
import { getInsuranceListInfo } from "@/apis/news";
import { getVisaListInfo } from "@/apis/news";
import { getAllLocalListInfo } from "@/apis/local";
import { localListInfoType } from "@/apis/interface/resultType";
import Loading from "@/components/loading/Loading.vue";
const allTypesAndListInfo = ref([] as themeTypesRankingType[]);
const allTypes = ref([] as themeTypesType[]);
// const store = utilStore();
// import { citysInfoType, planInfoType } from "@/apis/interface/myInterface";
const router = useRouter();
const planInfo = reactive({
  routeTitle: "",
  peopleNum: "",
  arriveCity: "",
});

const createPlan = () => {
  console.log(planInfo);
  router.push({
    name: "TrvalPlan",
    params: {
      routeTitle: planInfo.routeTitle,
      peopleNum: planInfo.peopleNum,
      arriveCity: planInfo.arriveCity,
    },
  });
};
const getThemeListInfoByTypeIdPromise = () => {
  return new Promise((resolve, reject) => {
    //进行的次数
    let num = 0;
    for (let i = 0; i < allTypes.value.length; i++) {
      getPageThemeInfo(allTypes.value[i].themeTypeId, 1, 1)
        .then((res: any) => {
          if (res.code != 2000) {
            //@ts-ignore
            ElMessage({
              type: "error",
              message: res.msg,
            });
          } else {
            let tempObj = {} as themeTypesRankingType;
            tempObj.createDate = allTypes.value[i].createDate;
            tempObj.themeTypeId = allTypes.value[i].themeTypeId;
            tempObj.remark = allTypes.value[i].remark;
            tempObj.typeName = allTypes.value[i].typeName;
            tempObj.themeListInfo = res.data.records[0];
            allTypesAndListInfo.value.push(tempObj);
            num += 1;
            if (num === allTypes.value.length) {
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
    }
  });
};
const getAllTypes = () => {
  return new Promise(async (resolve, reject) => {
    await getAllThemeTypeInfo()
      .then((res: any) => {
        if (res.code != 2000) {
          reject();
          //@ts-ignore
          ElMessage({
            type: "error",
            message: res.msg,
          });
        } else {
          allTypes.value = res.data.slice(0, 6);
          console.log(allTypes.value);
          resolve(1);
        }
      })
      .catch((error) => {
        reject();
        //@ts-ignore
        ElMessage({
          type: "error",
          message: error.message,
        });
      });
    await getThemeListInfoByTypeIdPromise().then((res: any) => {
      console.log("完成");
      console.log(allTypesAndListInfo.value);
      // alert(333);
      resolve(2);
    });
  });
};

/* 分页查询的实现 */
let newsListInfo = ref([] as newsInfoType[]);
//得到分页数据
const getTheNewsList = () => {
  return new Promise(async (resolve, reject) => {
    getNewsListInfo(1, 3)
      .then((res: any) => {
        if (res.code != 2000) {
          reject();
          //@ts-ignore
          ElMessage({
            type: "error",
            message: res.msg,
          });
        } else {
          resolve(3);
          // alert(page.value);
          newsListInfo.value = res.data.records;
        }
      })
      .catch((error) => {
        reject();
        //@ts-ignore
        ElMessage({
          type: "error",
          message: error.message,
        });
      });
  });
};
//开始获取分页数据
// getTheNewsList();

/* 分页查询的实现 */
let insuranceListInfo = ref([] as newsInfoType[]);
//得到分页数据
const getTheInsuranceList = () => {
  return new Promise((resolve, reject) => {
    getInsuranceListInfo(1, 1, 2)
      .then((res: any) => {
        if (res.code != 2000) {
          reject();
          //@ts-ignore
          ElMessage({
            type: "error",
            message: res.msg,
          });
        } else {
          // alert(page.value);
          insuranceListInfo.value = res.data.records;
          resolve(4);
        }
      })
      .catch((error) => {
        reject();
        //@ts-ignore
        ElMessage({
          type: "error",
          message: error.message,
        });
      });
  });
};
//开始获取分页数据
// getTheInsuranceList();

/* 分页查询的实现 */
let visaListInfo = ref([] as newsInfoType[]);
//得到分页数据
const getTheVisaList = () => {
  return new Promise((resolve, reject) => {
    getVisaListInfo(0, 1, 2)
      .then((res: any) => {
        if (res.code != 2000) {
          reject();
          //@ts-ignore
          ElMessage({
            type: "error",
            message: res.msg,
          });
        } else {
          // alert(page.value);
          visaListInfo.value = res.data.records;
          resolve(5);
        }
      })
      .catch((error) => {
        reject();
        //@ts-ignore
        ElMessage({
          type: "error",
          message: error.message,
        });
      });
  });
};
//开始获取分页数据
// getTheVisaList();

let localListInfo = ref([] as localListInfoType[]);
const requestAllLocalListInfo = () => {
  return new Promise((resolve, reject) => {
    getAllLocalListInfo()
      .then((res: any) => {
        if (res.code != 2000) {
          reject();
          //@ts-ignore
          ElMessage({
            type: "error",
            message: res.msg,
          });
        } else {
          // alert(page.value);
          localListInfo.value = res.data.slice(0, 3);
          console.log(localListInfo.value);
          resolve(6);
        }
      })
      .catch((error) => {
        reject();
        //@ts-ignore
        ElMessage({
          type: "error",
          message: error.message,
        });
      });
  });
};
// requestAllLocalListInfo();
const isLoading = ref(true);
// 等待所有请求完成后，隐藏加载圈 //注意不能写在Mounted中
Promise.all([
  getAllTypes(),
  getTheNewsList(),
  getTheInsuranceList(),
  getTheVisaList(),
  requestAllLocalListInfo(),
])
  .then(([res1, res2, res3, res4, res5]) => {
    console.log(res1);
    console.log(res2);
    console.log(res3);
    console.log(res4);
    console.log(res5);
    // // @ts-ignore
    // insuranceListInfo.value = res1.data.records;
    // // @ts-ignore
    // visaListInfo.value = res2.data.records;
    // // @ts-ignore
    // localListInfo.value = res3.data.slice(0, 6);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    isLoading.value = false;
  });
const themeTitleList = ref([
  "我的毕业旅行",
  "我们的蜜月之行",
  "十岁儿子的亲子之游",
]);
const assignTheTitle = (value) => {
  // alert(11);
  planInfo.routeTitle = value;
};
onMounted(() => {
  // getAllTypes();
  // isLoading.value = true;
  // isLoading.value = false;
  // window.addEventListener("load", () => {
  //   isLoading.value = false;
  // });
  //@ts-ignore
  (function ($) {
    $(document).ready(function () {
      // =====================================================
      //      Items slider
      // =====================================================
      //@ts-ignore
      var guidesSlider = new Swiper(".guides-slider", {
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        roundLengths: true,
        breakpoints: {
          1200: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 1,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
      });
    });
    //@ts-ignore
  })(jQuery);
});
// 监听路由进入事件
// const beforeRouteEnter = (to, from, next) => {
//   isLoading.value = true; // 显示加载圈
//   // return new Promise((resolve) => {
//   //   setTimeout(() => {
//   //     isLoading.value = false; // 隐藏加载圈
//   //     resolve(1);
//   //   }, 2000); // 延迟2秒后隐藏加载圈
//   // });
//   next();
// };
// // 监听路由离开事件
// const beforeRouteLeave = () => {
//   isLoading.value = false; // 隐藏加载圈
// };
// // 导出变量和生命周期钩子
// // 暴露组件属性和方法
// defineExpose({
//   isLoading,
//   beforeRouteEnter,
//   beforeRouteLeave,
// });
</script>
<template>
  <Loading :showLoading="isLoading"></Loading>
  <div class="main-banner digital-agency-banner">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="row h-100 align-items-center">
            <div class="col-lg-12 col-md-12">
              <div class="hero-content">
                <h1 class="wow fadeInUp">开启南欧奇幻之旅!</h1>
                <p>Start the fantastic journey of southern Europe!</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-12"></div>
          </div>
          <div class="row h-100 align-items-center">
            <div class="col-lg-12 col-md-12">
              <div class="search-bar mt-5 p-3 p-lg-1 pl-lg-4">
                <form autocomplete="off" @submit.prevent="createPlan">
                  <div class="row">
                    <div class="col-lg-4 d-flex align-items-center form-group">
                      <input
                        type="text"
                        name="search"
                        placeholder="本次旅行的主题?"
                        class="form-control border-0 shadow-0 theme-title-input"
                        v-model="planInfo.routeTitle"
                      />
                      <ul class="option-title">
                        <li
                          v-for="(item, key) in themeTitleList"
                          :key="key"
                          @click="assignTheTitle(item)"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-3 d-flex align-items-center form-group">
                      <div
                        class="input-label-absolute input-label-absolute-right w-100"
                      >
                        <label for="location" class="label-absolute"
                          ><i class="fa fa-crosshairs"></i
                          ><span class="sr-only">City</span></label
                        >
                        <input
                          type="text"
                          name="location"
                          placeholder="行程人数"
                          v-model="planInfo.peopleNum"
                          id="location"
                          class="form-control border-0 shadow-0"
                        />
                      </div>
                    </div>
                    <div
                      class="col-lg-3 d-flex align-items-center form-group no-divider"
                    >
                      <div class="bootstrap-select">
                        <select
                          title="目的地"
                          data-style="btn-form-control"
                          class="selectpicker"
                          tabindex="-98"
                          v-model="planInfo.arriveCity"
                        >
                          <option class="bs-title-option" value="">
                            热门城市
                          </option>
                          <option value="西班牙+马德里">西班牙•马德里</option>
                          <option value="葡萄牙+里斯本">葡萄牙•里斯本</option>
                          <option value="南法+巴黎">南法•巴黎</option>
                          <option value="安道尔+安道尔城">
                            安道尔•安道尔城
                          </option>
                        </select>
                        <div class="dropdown-menu">
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                          >
                            <ul class="dropdown-menu inner show"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <button
                        type="submit"
                        class="btn btn-primary btn-block rounded-xl h-100"
                      >
                        定制行程
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="Categories pt80 pb80">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8">
          <p class="subtitle text-secondary nopadding">Country Of Travel</p>
          <h1 class="paddtop1 font-weight lspace-sm">出行国家</h1>
        </div>
        <div class="col-md-4 d-lg-flex align-items-center justify-content-end">
          <router-link to="/country" class="blist text-sm ml-2">
            查看详细信息<i class="fas fa-angle-double-right ml-2"></i
          ></router-link>
        </div>
      </div>
      <div class="row">
        <div class="swiper-container guides-slider">
          <!-- Additional required wrapper-->
          <div class="swiper-wrapper">
            <!-- Slides-->
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-4 mb-lg-0">
                <router-link
                  to="/country/countryDetail/1"
                  class="tile-link"
                ></router-link
                ><img
                  src="/images/country/xibanya.jpg"
                  alt="Card image"
                  class="bg-image"
                />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">西班牙</h6>
                  <p class="card-text text-sm">Spain</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-4 mb-lg-0">
                <router-link
                  to="/country/countryDetail/2"
                  class="tile-link"
                ></router-link
                ><img
                  src="/images/country/putaoya.jpg"
                  alt="Card image"
                  class="bg-image"
                />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">葡萄牙</h6>
                  <p class="card-text text-sm">Portugal</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-4 mb-lg-0">
                <router-link
                  to="/country/countryDetail/3"
                  class="tile-link"
                ></router-link
                ><img
                  src="/images/country/nanfa.png"
                  alt="Card image"
                  class="bg-image"
                />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">南法</h6>
                  <p class="card-text text-sm">South France</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-4 mb-lg-0">
                <router-link
                  to="/country/countryDetail/4"
                  class="tile-link"
                ></router-link
                ><img
                  src="/images/country/andaoer.jpg"
                  alt="Card image"
                  class="bg-image"
                />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">安道尔</h6>
                  <p class="card-text text-sm">Andorra</p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination d-md-none"></div>
        </div>
      </div>
    </div>
  </section>
  <section class="Categories pt80 pb80 vertical-container Blog-list">
    <div class="container">
      <div class="row mb-5 vertical-wapper">
        <div class="col-md-6">
          <p class="subtitle text-secondary nopadding">
            Spanish and Portuguese News
          </p>
          <h1 class="paddtop1 font-weight lspace-sm">西葡资讯</h1>
          <div>
            <div
              class="col-md-12 col-sm-12 col-xs-12 no-padding"
              v-for="(item, index) in newsListInfo"
              :key="index"
            >
              <div class="row ListriBox ListriBox2">
                <div class="col-md-3 col-sm-6 col-xs-12 Nopadding">
                  <figure class="img-container">
                    <router-link :to="`/news/detail/${item.newsId}`"
                      ><img
                        :src="
                          'http://182.92.103.154/static/images/upload/' +
                          item.titlePic
                        "
                        class="img-fluid"
                        alt=""
                      />
                    </router-link>
                  </figure>
                </div>
                <div class="col-md-9 col-sm-6 col-xs-12 Nopadding">
                  <div class="ListriBoxmain ListriBoxmain2">
                    <h2>
                      <router-link
                        :to="`/news/detail/${item.newsId}`"
                        class="content-hidden"
                        style="font-weight: 800;margin-bottom:5px"
                        >{{ item.newsTitle }}</router-link
                      >
                      <p
                        class="describe content-hidden"
                        v-html="item.newsContent"
                      ></p>
                    </h2>
                  </div>
                  <div class="route-container">
                    <div style="font-size: 0.875rem">
                      <el-icon><Pointer /></el-icon>{{ item.clickRate }}
                    </div>
                    <div style="font-size: 0.875rem">
                      <i class="far fa-clock mr-2"></i>{{ item.createDate }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <p class="subtitle text-secondary nopadding">Visa and Insurance</p>
          <h1 class="paddtop1 font-weight lspace-sm">签证保险</h1>
          <div class="visa-container">
            <div
              class="col-md-6 col-sm-6 col-xs-12 mb-4 container-aaa"
              v-for="(item, index) in insuranceListInfo"
              :key="index"
            >
              <div class="card shadow border-0 h-100">
                <!-- <router-link
                  :to="`/visaInsurance/insurance/detail/${item.newsId}`"
                  class="img-container"
                  ><img
                    :src="
                    'http://182.92.103.154/static/images/upload/'+item.titlePic"
                    alt="..."
                    class="img-fluid card-img-top"
                /></router-link> -->
                <div class="card-body card-body2">
                  <h5 class="my-2">
                    <router-link
                      :to="`/visaInsurance/insurance/detail/${item.newsId}`"
                      class="text-dark content-hidden title-block color-red"
                      >{{ item.newsTitle }}
                    </router-link>
                  </h5>
                  <p class="text-gray-500 text-gray-500-aaa text-sm my-3">
                    <div style="font-size: 0.875rem">
                      <el-icon><Pointer /></el-icon>{{ item.clickRate }}
                    </div>
                    <div style="font-size: 0.875rem">
                      <i class="far fa-clock mr-2"></i>{{ item.createDate }}
                    </div>
                  </p>
                  <p
                    class="my-2 text-muted text-muted-aaa text-sm content-hidden2"
                    v-html="item.newsContent"
                  ></p>
                  <router-link
                    :to="`/visaInsurance/insurance/detail/${item.newsId}`"
                    class="btn btn-link pl-0"
                    >查看详情<i class="fa fa-long-arrow-alt-right ml-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-sm-6 col-xs-12 mb-4 container-aaa"
              v-for="(item, index) in visaListInfo"
              :key="index"
            >
              <div class="card shadow border-0 h-100">
                <!-- <router-link
                  :to="`/visaInsurance/visa/detail/${item.newsId}`"
                  class="img-container"
                  ><img
                    :src="
                    'http://182.92.103.154/static/images/upload/'+item.titlePic"
                    alt="..."
                    class="img-fluid card-img-top"
                /></router-link> -->
                <div class="card-body card-body2">
                  <h5 class="my-2">
                    <router-link
                      :to="`/visaInsurance/visa/detail/${item.newsId}`"
                      class="text-dark content-hidden title-block color-red"
                      >{{ item.newsTitle }}
                    </router-link>
                  </h5>
                  <p class="text-gray-500 text-gray-500-aaa text-sm my-3">
                    <div style="font-size: 0.875rem">
                      <el-icon><Pointer /></el-icon>{{ item.clickRate }}
                    </div>
                    <div style="font-size: 0.875rem">
                      <i class="far fa-clock mr-2"></i>{{ item.createDate }}
                    </div>
                  </p>
                  <p
                    class="my-2 text-muted text-muted-aaa text-sm content-hidden2"
                    v-html="item.newsContent"
                  ></p>
                  <router-link
                    :to="`/visaInsurance/visa/detail/${item.newsId}`"
                    class="btn btn-link pl-0"
                    >查看详情<i class="fa fa-long-arrow-alt-right ml-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="Categories pt80 pb80 theme-travel">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8">
          <p class="subtitle text-secondary nopadding">Theme Travel</p>
          <h1 class="paddtop1 font-weight lspace-sm">主题旅行</h1>
        </div>
        <div class="col-md-4 d-lg-flex align-items-center justify-content-end">
          <router-link to="/themeTravel" class="blist text-sm ml-2">
            查看所有分类<i class="fas fa-angle-double-right ml-2"></i
          ></router-link>
        </div>
      </div>
      <div class="row flex-wapper">
        <div
          class="col-lg-3 items col-md- col-sm-6 col-12 theme-wapper"
          v-for="(item, index) in allTypesAndListInfo"
          :key="index"
        >
          <div class="featured-wrap">
            <div class="featured-img">
              <img
                :src="
                  'http://182.92.103.154/static/images/upload/' +
                  item.themeListInfo.titlePic
                "
                alt=""
                v-if="item.themeListInfo"
                style="width: 300px; height: 185px"
              />
              <!-- <img src="/images/home3.jpg" alt="" /> -->
              <div class="featured-content">
                <router-link :to="`/themeTravel/items/${item.themeTypeId}`">{{
                  item.typeName
                }}</router-link>
              </div>
            </div>
          </div>

          <div class="route-container2" v-if="item.themeListInfo">
            <p>
              <span>最热项目</span>
              <router-link
                :to="`/themeTravel/item/${item.themeListInfo.themeId}`"
                class="content-wapper"
                style="font-weight: 800"
                >{{ item.themeListInfo.themeTitle }}</router-link
              >
            </p>
            <div class="route-city">
              <div v-for="(i, k) in item.themeListInfo.cityinfos" :key="k">
                <span>Day{{ k + 1 }}</span
                ><strong>{{ i.cityNameCn }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="Categories pt80 pb80 local-play">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8">
          <p class="subtitle text-secondary nopadding">Local Play</p>
          <h1 class="paddtop1 font-weight lspace-sm">本地玩乐</h1>
        </div>
        <div class="col-md-4 d-lg-flex align-items-center justify-content-end">
          <router-link to="/localPlay" class="blist text-sm ml-2">
            查看所有分类<i class="fas fa-angle-double-right ml-2"></i
          ></router-link>
        </div>
      </div>
      <div class="row flex-wapper">
        <div
          class="col-md-4 col-sm-6 col-xs-12"
          v-for="(item, index) in localListInfo"
          :key="index"
        >
          <div class="ListriBox ListriBox3">
            <figure>
              <a href="javascript:;"
                ><img src="/images/hotel1.jpg" class="img-fluid" alt="" />
              </a>
            </figure>
            <div class="ListriBoxmain ListriBoxmain3">
              <h3 style="height: 43px">
                <a href="javascript:;">{{ item.playTitle }}</a>
              </h3>
              <p class="describe-words content-hidden">
                {{ item.playContent }}
              </p>
              <a
                class="address"
                href="javascript:;"
                v-if="item.cityinfos[0] !== null"
                >城市：<span
                  v-for="(i, k) in item.cityinfos"
                  :key="k"
                  style="margin-right: 10px"
                  >{{ i.cityNameCn }}</span
                ></a
              >
            </div>
            <ul>
              <li>
                <span class="Ropen">适合季节：{{ item.playSeason }}</span>
              </li>
              <li>
                <div class="R_retings">
                  <span>官方<em>参考价格</em></span
                  ><strong>{{ item.playPrice }}元</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="Categories pt80 pb80 local-play">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8">
          <p class="subtitle text-secondary nopadding">Local Team</p>
          <h1 class="paddtop1 font-weight lspace-sm">当地参团</h1>
        </div>
        <div class="col-md-4 d-lg-flex align-items-center justify-content-end">
          <router-link to="/localTeam" class="blist text-sm ml-2">
            查看所有<i class="fas fa-angle-double-right ml-2"></i
          ></router-link>
        </div>
      </div>
      <div class="row flex-wapper">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="ListriBox">
            <figure>
              <a href="javascript:;"
                ><img src="/images/room1.jpg" class="img-fluid" alt="" />
                <div class="read_more"><span>加入队伍</span></div>
              </a>
            </figure>
            <div class="ListriBoxmain">
              <h3>
                <a href="javascript:;">里斯本一日旅游</a>
              </h3>
              <p>
                好玩的好玩的好玩的好玩的好玩的好玩的好玩的好玩的好玩的好玩的
              </p>
              <a class="address" href="">葡萄牙</a>
            </div>
            <ul>
              <li>
                <p class="card-text text-muted">
                  <span class="h4 text-primary">$100</span>- 预算
                </p>
              </li>
              <li>
                <div class="R_retings"><strong>加入队伍</strong></div>
                <!-- <div class="R_retings">
                  <div class="list-rat-ch list-room-rati">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                </div> -->
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="ListriBox">
            <figure>
              <a href="listings-single-page-3.html" class="wishlist_bt"></a>
              <a href="listings-single-page-3.html"
                ><img src="/images/room4.jpg" class="img-fluid" alt="" />
                <div class="read_more"><span>Read more</span></div>
              </a>
            </figure>
            <div class="ListriBoxmain">
              <h3>
                <a href="listings-single-page-3.html"
                  >Modern, Well-Appointed Room</a
                >
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              </p>
              <a class="address" href="">Get directions</a>
            </div>
            <ul>
              <li>
                <p class="card-text text-muted">
                  <span class="h4 text-primary">$80</span>/ night
                </p>
              </li>
              <li>
                <div class="R_retings">
                  <div class="list-rat-ch list-room-rati">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="ListriBox">
            <figure>
              <a href="listings-single-page-3.html" class="wishlist_bt"></a>
              <a href="listings-single-page-3.html"
                ><img src="/images/room5.jpg" class="img-fluid" alt="" />
                <div class="read_more"><span>Read more</span></div>
              </a>
            </figure>
            <div class="ListriBoxmain">
              <h3>
                <a href="listings-single-page-3.html"
                  >Modern, Well-Appointed Room</a
                >
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              </p>
              <a class="address" href="">Get directions</a>
            </div>
            <ul>
              <li>
                <p class="card-text text-muted">
                  <span class="h4 text-primary">$80</span>/ night
                </p>
              </li>
              <li>
                <div class="R_retings">
                  <div class="list-rat-ch list-room-rati">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="contact-to-us-container">
    <div class="contact-to-us">联系我们</div>
    <div class="panel-hidden">
      <!-- <p><span>腾讯QQ</span></p> -->
      <p>
        <img src="/images/qq.jpg" /><span>Liz</span>
        <a
          target="_blank"
          href="http://wpa.qq.com/msgrd?v=3&uin=1507809850&site=qq&menu=yes"
          class="go-qq"
          >1507809850</a
        >
      </p>
      <p>
        <img src="/images/qq.jpg" /><span>Shirley</span>
        <a
          target="_blank"
          href="http://wpa.qq.com/msgrd?v=3&uin=3179232029&site=qq&menu=yes"
          class="go-qq"
          >3179232029</a
        >
      </p>
      <p>
        <img src="/images/qq.jpg" /><span>Jose</span>
        <a
          target="_blank"
          href="http://wpa.qq.com/msgrd?v=3&uin=1794696686&site=qq&menu=yes"
          class="go-qq"
          >1794696686</a
        >
      </p>
      <p><span style="color: #c60b1e">旅行管家</span></p>
      <div class="img-wapper">
        <img src="/images/erweima.jpg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.local-play {
  padding-top: 0 !important;
}
.flex-wapper {
  justify-content: space-around;
}
.theme-travel {
  padding-top: 80px !important;
}
.route-container2 {
  width: 100%;
  height: 80px;
  // padding: 15px 25px;
  border-top: 1px solid #ededed;
  // position: absolute;
  // bottom: 0;
  p {
    margin-top: 5px;
    // margin-left: 10px;
    display: flex;
    align-items: center;
    span {
      padding: 2px 5px;
      background-color: #c60b1e;
      color: #ffffff;
      font-weight: 800;
      font-size: 14px;
      border-radius: 5px;
      margin: 5px 10px;
    }
  }
  .route-city {
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 5px;
    //溢出显示省略号
    overflow: hidden;
    white-space: nowrap;
    height: 27px;
    div {
      margin: 0 5px;
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
        color: #73767a;
        margin-right: 5px;
      }
      strong {
        font-size: 16px;
      }
    }
  }
}
.theme-wapper {
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15) !important;
  padding: 0;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  // box-sizing: border-box;
}
.vertical-container {
  padding-top: 30px;
  padding-bottom: 30px;
}
.vertical-wapper {
  margin-bottom: 0 !important;
}
.ListriBox2 {
  width: 540px;
  height: 185px;
  display: flex;
  justify-content: space-between;
}
.ListriBoxmain2 {
  padding-top: 0;
}
.img-container {
  width: 120px;
  height: 120px;
}
.ListriBox2 figure a img {
  // left: 0% !important;
  top: 30% !important;
}
.describe {
  width: 332.5px;
  height: 73px;
  // margin: 10px 0;
  overflow: hidden;
  margin-bottom: 0 !important;
}
// .Nopadding {
//   width: 250px !important;
// }
.route-container {
  width: 100%;
  height: 35px;
  // padding: 15px 25px;
  border-top: 1px solid #ededed;
  // position: absolute;
  // bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // > div {
  //   float: right;
  // }
  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.no-padding {
  padding: 0;
}
.visa-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
// .text-muted-aaa {
//   margin: 0 !important;
// }
.text-gray-500-aaa {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0 !important;
  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.container-aaa {
  margin-top: 15px !important;
  margin-bottom: 15px !important;
  padding: 0;
  display: flex;
  justify-content: center;
}
.card-body2 {
  width: 240px;
  height: 275px;
}
.main-banner {
  cursor: pointer;
}
@keyframes tittlemove {
  0% {
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
}
.content-wapper {
  width: 180px;
  // overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  height: 27px;
}

.ListriBox3 {
  width: 350px;
  height: 460px;
}
.ListriBoxmain3 {
  width: 320px;
  height: 178px;
}
.describe-words {
  width: 270px;
  height: 52px;
}
.content-hidden {
  // text-indent: 2em;
  text-align: justify;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.contact-to-us-container {
  width: auto;
  position: fixed;
  top: 120px;
  right: 30px;
  z-index: 10000;
}
.contact-to-us {
  width: 100px;
  height: 40px;
  // background-color: rgba(177, 179, 184, 0.5);
  cursor: pointer;
  // background-color: rgba(198, 11, 30, 0.3);
  background-color: rgba(255, 255, 255, 0.7);
  color: #c60b1e;
  font-weight: 800;
  position: relative;
  top: 0;
  right: 0;
  z-index: 10000;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: tittlemove alternate infinite 3s ease-in-out;
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
}
.panel-hidden {
  opacity: 0;
  position: absolute;
  top: 40px;
  right: -10px;
  width: 120px;
  background-color: rgba(255, 255, 255, 0.7);
  transition: all 0.7s linear;
  height: 300px;
  // padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
}
.panel-hidden:hover {
  opacity: 1;
  padding: 10px;
  > .img-wapper {
    opacity: 1;
  }
  > p {
    // visibility: visible;
    opacity: 1;
  }
}
.contact-to-us:hover + .panel-hidden {
  // height: 280px;
  opacity: 1;
  padding: 10px;
}
.contact-to-us:hover + .panel-hidden > .img-wapper {
  // height: 80px;
  // display: block;
  // visibility: visible;
  opacity: 1;
}
.contact-to-us:hover + .panel-hidden > p {
  // display: block;
  // visibility: visible;
  opacity: 1;
}
.panel-hidden p {
  // display: none;
  // visibility: hidden;
  opacity: 0;
  // margin: 0 5px;
  color: #000000;
  img {
    display: inline-block;
    width: 18px;
    height: 20px;
    margin-right: 5px;
  }
  a {
    display: block;
  }
  a:hover {
    color: #c60b1e;
  }
  span {
    color: #c60b1e;
    font-weight: 800;
  }
}
.img-wapper {
  transition: all 0.5s linear;
  width: 80px;
  height: 80px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
  // position: absolute;
  // visibility: hidden;
  opacity: 0;
  // display: none;
}
.theme-title-input {
  position: relative;
}
.option-title {
  width: 370px;
  height: auto;
  position: absolute;
  top: 50px;
  left: 0;
  // border: 1px #e8604c solid;
  background-color: rgba(255, 255, 255, 0.3);
  display: none;
  transition: all 0.3s linear;
  border-radius: 10px;
  li {
    line-height: 2em;
    color: #ffffff;
    border-radius: 10px;
  }
  li:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: #e8604c;
  }
}
.theme-title-input:focus + .option-title {
  display: block;
}
.option-title:hover {
  display: block;
}
.featured-content > a {
  color: #000000;
  background-color: #e64d5c;
}
.featured-content:hover > a {
  color: #ffffff;
  background-color: #c60b1e;
}
/* 段落显示2行，多余的用...省略，并且首行缩进2字符 */
.content-hidden {
  // text-indent: 2em;
  text-align: justify;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 18px;
}
.content-hidden2 {
  // text-indent: 2em;
  text-align: justify;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 4;
  overflow: hidden;
  width: 200px;
  height: 90px;
}
.title-block {
  width: 200px;
  height: 43px;
}
.color-red:hover{
  color: #c60b1e !important;
}
</style>
