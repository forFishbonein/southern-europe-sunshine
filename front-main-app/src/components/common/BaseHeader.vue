<script lang="ts" setup>
import { onMounted } from "vue";
import { mainStore } from "@/store/user";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let loginFlag = ref(false);
const store = mainStore();
const displayText = () => {
  if (store.token === "") {
    loginFlag.value = false;
    return "登录 / 注册";
  }
  loginFlag.value = true;
  return "个人中心";
};
const toLoginOrOwnCenter = () => {
  if (store.token === "") {
    router.push("/personal");
  } else {
    router.push("/personal");
  }
};
onMounted(() => {
  // @ts-ignore
  (function ($) {
    $(document).ready(function () {
      /* Header Sticky
		========================================================*/
      $(window).on("scroll", function () {
        // @ts-ignore
        if ($(this).scrollTop() > 70) {
          // alert(111);
          $(".header-sticky").addClass("is-sticky");
        } else {
          $(".header-sticky").removeClass("is-sticky");
        }
      });

      // Nav Active Code
      /*==============================================================*/
      if ($.fn.getfundNav) {
        $("#listingNav").getfundNav({
          theme: "light",
        });
      }
    });
    //@ts-ignore
  })(jQuery);
});
</script>

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
                      <a
                        class="btn btn-primary"
                        @click="toLoginOrOwnCenter"
                        v-text="displayText()"
                      >
                      </a>
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
//把.is-sticky有关的css都复制过来，否则识别不到
.header-sticky.is-sticky {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.4);
  -webkit-animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
}
.is-sticky .main-header-area {
  width: 100%;
  z-index: 10000 !important;
  height: 90px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .is-sticky .main-header-area {
    height: 70px;
  }
  .light .getfundnav ul li .dropdown,
  .light .getfundnav ul li .megamenu,
  .light.breakpoint-on .getfundnav > ul > li > a,
  .light.breakpoint-on .getfund-navbar .getfund-menu {
    background-color: #000000;
  }
}
@media only screen and (max-width: 767px) {
  .is-sticky .main-header-area {
    height: 70px;
  }
  .light .getfundnav ul li .dropdown,
  .light .getfundnav ul li .megamenu,
  .light.breakpoint-on .getfundnav > ul > li > a,
  .light.breakpoint-on .getfund-navbar .getfund-menu {
    background-color: #000000;
  }
}
</style>
