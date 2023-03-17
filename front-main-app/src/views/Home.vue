<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
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
const getAllTypes = async () => {
  await getAllThemeTypeInfo()
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        allTypes.value = res.data.slice(0, 6);
        console.log(allTypes.value);
      }
    })
    .catch((error) => {
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
  });
};

onMounted(() => {
  getAllTypes();
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

/* 分页查询的实现 */
let newsListInfo = ref([] as newsInfoType[]);
//为了构造一个响应式对象pageParams
const pageParams = reactive({
  total: 0,
  page: 1,
  limit: 3,
});
//为了把pageParams拆开，直接用在页面上
const { total, page, limit } = toRefs(pageParams);
//总页数
const totalPageNum = ref();
//按钮数为5个
const count = 5;
let start = 0;
let end = 0;
const btnArr = ref([]);
//得到分页数据
const getTheNewsList = () => {
  getNewsListInfo(page.value, limit.value)
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        // alert(page.value);
        newsListInfo.value = res.data.records;
        total.value = res.data.total;
        console.log(newsListInfo.value);
        //处理输出新的按钮列表
        totalPageNum.value = Math.ceil(total.value / limit.value);
        //按钮个数和当前页码 ====> 起始按钮 结束按钮 按钮数组
        // 1.理想情况下：
        const offset = Math.floor(count / 2);
        start = page.value - offset;
        end = start + count - 1;
        // 2.如果其实页码小于1 需要处理
        if (start < 1) {
          start = 1;
          end =
            start + count - 1 > totalPageNum.value
              ? totalPageNum.value
              : start + count - 1;
        }
        // 3.如果结束页码大于总页数
        if (end > totalPageNum.value) {
          end = totalPageNum.value;
          start = end - count + 1 < 1 ? 1 : end - count + 1;
        }
        for (let i = start; i <= end; i++) {
          // @ts-ignore
          btnArr.value.push(i);
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
};
//开始获取分页数据
getTheNewsList();

/* 分页查询的实现 */
let insuranceListInfo = ref([] as newsInfoType[]);
//为了构造一个响应式对象pageParams
const pageParams2 = reactive({
  total2: 0,
  page2: 1,
  limit2: 1,
});
//为了把pageParams拆开，直接用在页面上
const { total2, page2, limit2 } = toRefs(pageParams2);
//总页数
const totalPageNum2 = ref();
//按钮数为5个
const count2 = 5;
let start2 = 0;
let end2 = 0;
const btnArr2 = ref([]);
//得到分页数据
const getTheInsuranceList = () => {
  getInsuranceListInfo(1, page2.value, limit2.value)
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        // alert(page.value);
        insuranceListInfo.value = res.data.records;
        total2.value = res.data.total;
        console.log(insuranceListInfo.value);
        //处理输出新的按钮列表
        totalPageNum2.value = Math.ceil(total2.value / limit2.value);
        //按钮个数和当前页码 ====> 起始按钮 结束按钮 按钮数组
        // 1.理想情况下：
        const offset = Math.floor(count / 2);
        start2 = page.value - offset;
        end2 = start2 + count - 1;
        // 2.如果其实页码小于1 需要处理
        if (start < 1) {
          start2 = 1;
          end2 =
            start2 + count - 1 > totalPageNum.value
              ? totalPageNum.value
              : start2 + count - 1;
        }
        // 3.如果结束页码大于总页数
        if (end2 > totalPageNum.value) {
          end2 = totalPageNum.value;
          start2 = end2 - count + 1 < 1 ? 1 : end - count + 1;
        }
        for (let i = start2; i <= end2; i++) {
          // @ts-ignore
          btnArr.value.push(i);
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
};
//开始获取分页数据
getTheInsuranceList();

/* 分页查询的实现 */
let visaListInfo = ref([] as newsInfoType[]);
//为了构造一个响应式对象pageParams
const pageParams3 = reactive({
  total3: 0,
  page3: 1,
  limit3: 1,
});
//为了把pageParams拆开，直接用在页面上
const { total3, page3, limit3 } = toRefs(pageParams3);
//总页数
const totalPageNum3 = ref();
//按钮数为5个
const count3 = 5;
let start3 = 0;
let end3 = 0;
const btnArr3 = ref([]);
//得到分页数据
const getTheVisaList = () => {
  getVisaListInfo(0, page.value, limit.value)
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        // alert(page.value);
        visaListInfo.value = res.data.records;
        total.value = res.data.total;
        console.log(visaListInfo.value);
        //处理输出新的按钮列表
        totalPageNum.value = Math.ceil(total.value / limit.value);
        //按钮个数和当前页码 ====> 起始按钮 结束按钮 按钮数组
        // 1.理想情况下：
        const offset = Math.floor(count / 2);
        start = page.value - offset;
        end = start + count - 1;
        // 2.如果其实页码小于1 需要处理
        if (start < 1) {
          start = 1;
          end =
            start + count - 1 > totalPageNum.value
              ? totalPageNum.value
              : start + count - 1;
        }
        // 3.如果结束页码大于总页数
        if (end > totalPageNum.value) {
          end = totalPageNum.value;
          start = end - count + 1 < 1 ? 1 : end - count + 1;
        }
        for (let i = start; i <= end; i++) {
          // @ts-ignore
          btnArr.value.push(i);
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
};
//开始获取分页数据
getTheVisaList();
</script>

<template>
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
                        class="form-control border-0 shadow-0"
                        v-model="planInfo.routeTitle"
                      />
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
                        确定
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
                  src="/images/photo/1.jpg"
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
                  src="/images/photo/2.jpg"
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
                  src="/images/photo/3.jpg"
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
                  src="/images/photo/4.jpg"
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
              <div class="row ListriBox">
                <div class="col-md-3 col-sm-6 col-xs-12 Nopadding">
                  <figure class="img-container">
                    <router-link :to="`/news/detail/${item.newsId}`"
                      ><img :src="item.titlePic" class="img-fluid" alt="" />
                    </router-link>
                  </figure>
                </div>
                <div class="col-md-9 col-sm-6 col-xs-12 Nopadding">
                  <div class="ListriBoxmain">
                    <h2>
                      <router-link :to="`/news/detail/${item.newsId}`">{{
                        item.newsTitle
                      }}</router-link>
                      <p class="describe">
                        {{ item.newsContent }}
                      </p>
                    </h2>
                  </div>
                  <div class="route-container">
                    <div>{{ item.createDate }}</div>
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
                    :src="item.titlePic"
                    alt="..."
                    class="img-fluid card-img-top"
                /></router-link> -->
                <div class="card-body">
                  <h5 class="my-2">
                    <router-link
                      :to="`/visaInsurance/insurance/detail/${item.newsId}`"
                      class="text-dark"
                      >{{ item.newsTitle }}
                    </router-link>
                  </h5>
                  <p class="text-gray-500 text-gray-500-aaa text-sm my-3">
                    <i class="far fa-clock mr-2"></i>{{ item.createDate }}
                  </p>
                  <p class="my-2 text-muted text-muted-aaa text-sm">
                    {{ item.newsContent }}
                  </p>
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
                    :src="item.titlePic"
                    alt="..."
                    class="img-fluid card-img-top"
                /></router-link> -->
                <div class="card-body">
                  <h5 class="my-2">
                    <router-link
                      :to="`/visaInsurance/visa/detail/${item.newsId}`"
                      class="text-dark"
                      >{{ item.newsTitle }}
                    </router-link>
                  </h5>
                  <p class="text-gray-500 text-gray-500-aaa text-sm my-3">
                    <i class="far fa-clock mr-2"></i>{{ item.createDate }}
                  </p>
                  <p class="my-2 text-muted text-muted-aaa text-sm">
                    {{ item.newsContent }}
                  </p>
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
              <img src="/images/featured/1.jpg" alt="" />
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
  <div class="contact-to-us">联系我们</div>
</template>

<style lang="scss" scoped>
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
.ListriBox {
  display: flex;
  justify-content: space-between;
}
.ListriBoxmain {
  padding-top: 0;
}
.img-container {
  width: 120px;
  height: 120px;
}
.ListriBox figure a img {
  // left: 0% !important;
  top: 30% !important;
}
.describe {
  margin: 10px 0;
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
  justify-content: right;
  // > div {
  //   float: right;
  // }
}
.no-padding {
  padding: 0;
}
.visa-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
// .text-muted-aaa {
//   margin: 0 !important;
// }
.text-gray-500-aaa {
  margin-bottom: 0 !important;
}
.container-aaa {
  margin-top: 15px !important;
  margin-bottom: 15px !important;
}
// .card-body {
//   // padding-bottom: 0;
// }
.main-banner {
  cursor: pointer;
}
.contact-to-us {
  width: 100px;
  height: 40px;
  cursor: pointer;
  // background-color: rgba(177, 179, 184, 0.5);
  cursor: pointer;
  background-color: rgba(198, 11, 30, 0.3);
  color: #ffffff;
  font-weight: 800;
  position: absolute;
  top: 120px;
  right: 30px;
  z-index: 1000000;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: tittlemove alternate infinite 3s ease-in-out;
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
</style>
