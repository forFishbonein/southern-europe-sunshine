<script setup lang="ts"></script>

<template>
  <section class="Categories pt80 pb50">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <a href="#">
            <div class="list-mig-like-com">
              <div class="list-mig-lc-img">
                <img src="/images/home.jpg" alt="" />
              </div>
              <div class="list-mig-lc-con">
                <h5>南欧</h5>
                <p>southern Europe</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <router-link to="/country/countryDetail/1">
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
              <router-link to="/country/countryDetail/2">
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
              <router-link to="/country/countryDetail/3">
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
              <router-link to="/country/countryDetail/4">
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
