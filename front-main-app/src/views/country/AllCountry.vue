<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
let countryEnName = ref("Spain");
let countryImg = ref("./images/home2.jpg");
let countryName = ref("西班牙王国");
const selectConutry = (countryId) => {
  if (countryId === 1) {
    countryName.value = "西班牙王国";
    countryEnName.value = "Spain";
    countryImg.value = "./images/home2.jpg";
  } else if (countryId === 2) {
    countryName.value = "葡萄牙共和国";
    countryEnName.value = "Portgual";
    countryImg.value = "./images/home3.jpg";
  } else if (countryId === 3) {
    countryName.value = "南法";
    countryEnName.value = "South France";
    countryImg.value = "./images/home4.jpg";
  } else if (countryId === 4) {
    countryName.value = "安道尔公国";
    countryEnName.value = "Andorra";
    countryImg.value = "./images/home1.jpg";
  }
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
          <a href="#">
            <div class="list-mig-like-com">
              <div class="list-mig-lc-img">
                <img :src="countryImg" alt="" />
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
            <div class="col-md-6">
              <router-link
                to="/country/countryDetail/1"
                @click="selectConutry(1)"
              >
                <div class="list-mig-like-com">
                  <div class="list-mig-lc-img">
                    <img src="/images/home2.jpg" alt="" />
                  </div>
                  <div class="list-mig-lc-con list-mig-lc-con2">
                    <h5>西班牙</h5>
                    <p>Spain</p>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6">
              <router-link
                to="/country/countryDetail/2"
                @click="selectConutry(2)"
              >
                <div class="list-mig-like-com">
                  <div class="list-mig-lc-img">
                    <img src="/images/home3.jpg" alt="" />
                  </div>
                  <div class="list-mig-lc-con list-mig-lc-con2">
                    <h5>葡萄牙</h5>
                    <p>Portugal</p>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6">
              <router-link
                to="/country/countryDetail/3"
                @click="selectConutry(3)"
              >
                <div class="list-mig-like-com">
                  <div class="list-mig-lc-img">
                    <img src="/images/home4.jpg" alt="" />
                  </div>
                  <div class="list-mig-lc-con list-mig-lc-con2">
                    <h5>南法</h5>
                    <p>South France</p>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6">
              <router-link
                to="/country/countryDetail/4"
                @click="selectConutry(4)"
              >
                <div class="list-mig-like-com">
                  <div class="list-mig-lc-img">
                    <img src="/images/home1.jpg" alt="" />
                  </div>
                  <div class="list-mig-lc-con list-mig-lc-con2">
                    <h5>安道尔</h5>
                    <p>Andorra</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="Categories pt80 pb50"> -->
  <div class="container">
    <router-view :key="$route.fullPath" />
  </div>
  <!-- </section> -->
</template>

<style lang="scss" scoped></style>
