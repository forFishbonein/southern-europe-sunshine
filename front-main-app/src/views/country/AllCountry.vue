<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
import { getCountrysInfo } from "@/apis/country";
import { conutryInfoType } from "@/apis/interface/resultType";
const countryInfo = ref([] as conutryInfoType[]);

let countryEnName = ref("");
let countryImg = ref("");
let countryName = ref("");
const getAllCountryInfo = async () => {
  await getCountrysInfo()
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        countryInfo.value = res.data;
      }
    })
    .catch((error) => {
      //@ts-ignore
      ElMessage({
        type: "error",
        message: error.message,
      });
    });
  countryInfo.value.forEach((e) => {
    if (e.ciid === 1) {
      countryEnName.value = e.countryNameEn;
      countryName.value = e.countryNameCn;
      countryImg.value = e.nationalPic;
      return;
    }
  });
};
getAllCountryInfo();

const selectConutry = (countryId) => {
  countryInfo.value.forEach((e) => {
    if (e.ciid === countryId) {
      countryName.value = e.countryNameCn;
      countryEnName.value = e.countryNameEn;
      countryImg.value = e.nationalPic;
    }
  });
  // if (countryId === 1) {
  //   countryName.value = "西班牙王国";
  //   countryEnName.value = "Spain";
  //   countryImg.value = "./images/home2.jpg";
  // } else if (countryId === 2) {
  //   countryName.value = "葡萄牙共和国";
  //   countryEnName.value = "Portgual";
  //   countryImg.value = "./images/home3.jpg";
  // } else if (countryId === 3) {
  //   countryName.value = "南法";
  //   countryEnName.value = "South France";
  //   countryImg.value = "./images/home4.jpg";
  // } else if (countryId === 4) {
  //   countryName.value = "安道尔公国";
  //   countryEnName.value = "Andorra";
  //   countryImg.value = "./images/home1.jpg";
  // }
};
</script>

<template>
  <section class="breadcromb-top section_100">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ol class="text-white justify-content-center no-border mb-0">
            <li class="breadcrumb-item">
              <router-link to="/home">首页</router-link>
            </li>
            <li class="breadcrumb-item active">出行国家</li>
          </ol>
          <div class="breadcromb-box">
            <h3>出行国家</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="Categories pt80 pb50">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <a href="javascript:;">
            <div class="list-mig-like-com">
              <div class="list-mig-lc-img list-img2">
                <img
                  :src="
                    'http://182.92.103.154/static/images/upload/' + countryImg
                  "
                  alt=""
                />
              </div>
              <div class="list-mig-lc-con">
                <h5>{{ countryName }}</h5>
                <p>{{ countryEnName }}</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div
              class="col-md-6"
              v-for="(item, index) in countryInfo"
              :key="index"
            >
              <router-link
                :to="`/country/countryDetail/${item.ciid}`"
                @click="selectConutry(item.ciid)"
              >
                <div class="list-mig-like-com">
                  <div class="list-mig-lc-img list-img1">
                    <img
                      :src="
                        'http://182.92.103.154/static/images/upload/' +
                        item.nationalPic
                      "
                      alt=""
                    />
                  </div>
                  <div class="list-mig-lc-con list-mig-lc-con2">
                    <h5>{{ item.countryNameCn }}</h5>
                    <p>{{ item.countryNameEn }}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss" scoped>
.list-img1 {
  width: 255px;
  height: 160px;
  img {
    width: 100%;
    height: 100%;
  }
}
.list-img2 {
  width: 540px;
  height: 338px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
