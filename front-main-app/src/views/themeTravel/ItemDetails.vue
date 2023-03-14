<script lang="ts">
// import { ref, watch, reactive, toRefs, onMounted } from "vue";
// import { useRouter, useRoute } from "vue-router";
import { getOneThemeDetailInfo } from "@/apis/theme";
import { themeListInfoType } from "@/apis/interface/resultType";
export default {
  data() {
    return {
      // route:useRoute(),
      itemId: this.$route.params.itemId,
      oneThemeDetailInfo: {} as themeListInfoType,
      lastPath: "",
    };
  },
  methods: {
    getTheOneThemeDetailInfo() {
      getOneThemeDetailInfo(this.itemId)
        .then((res: any) => {
          if (res.code != 2000) {
            //@ts-ignore
            ElMessage({
              type: "error",
              message: res.msg,
            });
          } else {
            this.oneThemeDetailInfo = res.data;
            console.log(this.oneThemeDetailInfo);
          }
        })
        .catch((error) => {
          //@ts-ignore
          ElMessage({
            type: "error",
            message: error.message,
          });
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // vm.$nextTick(() => {
      //@ts-ignore
      vm.lastPath = from.fullPath;
      //@ts-ignore
      // alert(vm.lastPath);
      // });
    });
  },
  mounted() {
    this.getTheOneThemeDetailInfo();
  },
};
</script>
<!-- <script setup lang="ts">
const route = useRoute();
const itemId = route.params.itemId;
const oneThemeDetailInfo = ref({} as themeListInfoType);
const getTheOneThemeDetailInfo = () => {
  getOneThemeDetailInfo(itemId)
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        oneThemeDetailInfo.value = res.data;
        console.log(oneThemeDetailInfo.value);
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
getTheOneThemeDetailInfo();
</script> -->
<template>
  <section class="Campaigns pt80 pb80 listingDetails">
    <div class="container">
      <div class="bread-container">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/themeTravel' }"
            >主题旅行</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: lastPath }"
            >上一页</el-breadcrumb-item
          >
          <el-breadcrumb-item>详情页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <!-- About Listing-->

          <div class="text-block">
            <!-- Gallery-->
            <!-- <h3 class="mb-4">西班牙美食之旅</h3> -->
            <div class="row gallery ml-n1 mr-n1">
              <div class="col-lg-4 col-6 px-1 mb-2 center-img">
                <a href="javascript:;"
                  ><img
                    :src="oneThemeDetailInfo.titlePic"
                    alt="..."
                    class="img-fluid"
                /></a>
              </div>
              <!-- <div class="col-lg-4 col-6 px-1 mb-2">
                <a href="/images/restaurant-2.jpg"
                  ><img
                    src="/images/restaurant-2.jpg"
                    alt="..."
                    class="img-fluid"
                /></a>
              </div>
              <div class="col-lg-4 col-6 px-1 mb-2">
                <a href="/images/restaurant-3.jpg"
                  ><img
                    src="/images/restaurant-3.jpg"
                    alt="..."
                    class="img-fluid"
                /></a>
              </div> -->
            </div>
          </div>
          <div class="text-block">
            <!-- <p class="text-primary">
              <i class="fa-map-marker-alt fa mr-1"></i> 马德里，巴萨，三天两夜
            </p> -->
            <h1>{{ oneThemeDetailInfo.themeTitle }}</h1>
            <ul class="list-inline text-sm mb-4">
              <li class="list-inline-item mr-3">
                <i class="fa fa-users mr-1 text-secondary"></i> 适合 4 人
              </li>
              <li class="list-inline-item mr-3">
                <i class="fa fa-door-open mr-1 text-secondary"></i> 2 间住宿
              </li>
              <li class="list-inline-item mr-3">
                <i class="fa fa-bed mr-1 text-secondary"></i> 3 张床
              </li>
              <li class="list-inline-item mr-3">
                <i class="fa fa-bath mr-1 text-secondary"></i> 2 个淋浴间
              </li>
            </ul>
            <p class="text-muted font-weight-light">
              {{ oneThemeDetailInfo.themeContent }}
            </p>
          </div>
          <div class="text-block">
            <h3 class="mb-4">行程路线</h3>
            <div class="row">
              <div class="col-md-12">
                <div class="pointsRule">
                  <!-- <span
                    >欢迎成为VIP
                    诚邀您參加VIP购物积分回馈活动，尊享精彩纷呈的购物体验及贵宾礼遇！</span
                  > -->
                  <ul>
                    <li v-for="(item, index) in oneThemeDetailInfo.cityinfos">
                      <a
                        ><span>{{ index + 1 }}.{{ item.cityNameCn }}</span
                        ><i></i
                      ></a>
                    </li>
                    <!-- <li>
                      <a><span>2.巴塞罗那</span><i></i></a>
                    </li>
                    <li>
                      <a><span>3.塞维利亚</span><i></i></a>
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Amenities-->
          <div class="text-block">
            <h3 class="mb-4">服务提供</h3>
            <div class="row">
              <div class="col-md-6">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2">
                    <i
                      class="fa fa-wifi text-secondary w-1rem mr-3 text-center"
                    ></i>
                    <span class="text-sm">无线网</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-tv text-secondary w-1rem mr-3 text-center"
                    ></i>
                    <span class="text-sm">电视</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-snowflake text-secondary w-1rem mr-3 text-center"
                    ></i>
                    <span class="text-sm">空调</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-thermometer-three-quarters text-secondary w-1rem mr-3 text-center"
                    ></i>
                    <span class="text-sm">供暖</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2">
                    <i
                      class="fa fa-bath text-secondary w-1rem mr-3 text-center"
                    ></i
                    ><span class="text-sm">卫生间</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-utensils text-secondary w-1rem mr-3 text-center"
                    ></i
                    ><span class="text-sm">设备齐全的厨房</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-laptop text-secondary w-1rem mr-3 text-center"
                    ></i
                    ><span class="text-sm">办公桌</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-tshirt text-secondary w-1rem mr-3 text-center"
                    ></i
                    ><span class="text-sm">洗衣机</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 right_Details">
          <div class="p-4 shadow ml-lg-4 rounded sticky-top" style="top: 100px">
            <!-- <p class="text-muted">
              <span class="text-primary h2">$800</span>预算
            </p> -->
            <!-- <hr class="my-4" /> -->
            <form
              id="booking-form"
              method="get"
              action="#"
              autocomplete="off"
              class="form"
            >
              <div class="form-group">
                <label for="bookingDate" class="form-label">你的出发日期</label>
                <div class="datepicker-container datepicker-container-right">
                  <input
                    type="text"
                    name="bookingDate"
                    id="bookingDate"
                    placeholder="填写日期"
                    required
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group mb-4">
                <label for="guests" class="form-label">出行人数</label>
                <select name="guests" id="guests" class="form-control">
                  <option value="1">1 人</option>
                  <option value="2">2 人</option>
                  <option value="3">3 人</option>
                  <option value="4">4 人</option>
                  <option value="5">其他</option>
                </select>
              </div>
              <div class="form-group mb-4">
                <label for="guests" class="form-label">儿童数量</label>
                <select name="guests" id="guests" class="form-control">
                  <option value="1">1 儿童</option>
                  <option value="2">2 儿童</option>
                  <option value="3">3 儿童</option>
                </select>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">
                  预约出行
                </button>
              </div>
            </form>
            <hr class="my-4" />
            <div class="text-center">
              <p>
                <a href="#" class="text-secondary text-sm">
                  <i class="fa fa-heart"></i> 喜欢就赶快预约吧！</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pointsRule {
  display: inline-block;
  font-size: 12px;
  margin-top: 20px;
  float: left;
  margin-left: 50px;
}

.pointsRule span {
  float: left;
  display: inline-block;
}

.pointsRule ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-block;
  float: left;
  width: 100%;
}

.pointsRule ul li {
  display: list-item;
  text-align: center;
  float: left;
  margin: 10px 0 0;
  background: #f8f9fa;
  border-top: 1px solid #c60b1e;
  border-bottom: 1px solid #c60b1e;
  height: 45px;
}

.pointsRule ul li:first-child {
  border-left: 1px solid #c60b1e;
}

.pointsRule ul li a {
  display: block;
  padding: 8px 0;
  cursor: pointer;
}
.pointsRule ul li span {
  vertical-align: middle;
  width: 150px;
  height: 18px;
  line-height: 25px;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  margin-left: 20px;
  font-size: 13px;
  font-weight: 800;
}
.pointsRule ul li i {
  float: right;
  border: #c60b1e solid;
  border-width: 1px 1px 0 0;
  width: 32px;
  height: 32px;
  margin: -2px -17px 0px 10px;
  top: 2px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  background-image: url("");
}
.bread-container {
  margin-bottom: 30px;
  margin-left: 0px;
}
// .center-img {
//   > a {
//     margin: 0 auto;
//   }
// }
</style>
