<script setup lang="ts"></script>

<template>
  <!-- Start Main Menu Area -->
  <div class="main-header-area header-sticky">
    <div class="container">
      <div class="getfund-nav-container breakpoint-off">
        <!-- getfund Menu -->
        <nav class="getfund-navbar justify-content-between" id="listingNav">
          <!-- Logo -->
          <router-link class="nav-brand" to="/home"
            ><img src="/images/logo.jpg" alt="logo"
          /></router-link>

          <!-- Navbar Toggler -->
          <div class="getfund-navbar-toggler">
            <span class="navbarToggler"
              ><span></span><span></span><span></span
            ></span>
          </div>

          <!-- Menu -->
          <div class="getfund-menu">
            <!-- close btn -->
            <div class="getfundcloseIcon">
              <div class="cross-wrap">
                <span class="top"></span><span class="bottom"></span>
              </div>
            </div>

            <!-- Nav Start -->
            <div class="getfundnav">
              <ul id="responsive">
                <li>
                  <router-link
                    class="current sf-with-ul"
                    to="/home"
                    active-class="active-nav"
                    >首页</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="sf-with-ul"
                    to="/country"
                    active-class="active-nav"
                    >出行国家</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="sf-with-ul"
                    to="/themeTravel"
                    active-class="active-nav"
                    >主题旅行</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="sf-with-ul"
                    to="/localPlay"
                    active-class="active-nav"
                    >当地玩乐</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="sf-with-ul"
                    to="/localTeam"
                    active-class="active-nav"
                    >当地参团</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="sf-with-ul"
                    to="/visaInsurance"
                    active-class="active-nav"
                    >签证保险</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="sf-with-ul"
                    to="/news"
                    active-class="active-nav"
                    >西葡资讯</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="sf-with-ul"
                    to="/contact"
                    active-class="active-nav"
                    >联系我们</router-link
                  >
                </li>
                <li class="right-side">
                  <ul>
                    <li>
                      <router-link to="/plan" class="btn btn-primary"
                        >定制服务
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Nav End -->
          </div>
        </nav>
      </div>
    </div>
  </div>
  <!-- End Main Menu Area -->
</template>

<style lang="scss" scoped>
#responsive {
  li {
    margin-left: 8px;
    margin-right: 8px;
    a {
      font-size: 15px;
    }
  }
}
.nav-brand {
  max-width: 240px;
  img {
    display: block !important;
    width: 240px !important;
    height: 75px !important;
  }
}
.active-nav {
  color: #c60b1e !important;
}
.main-header-area {
  z-index: 99999999;
  position: relative;
}
</style>
