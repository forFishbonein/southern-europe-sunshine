<script setup lang="ts">
// import Home from "@/views/Home.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
// import { utilStore } from "@/store/util";
import { useRouter } from "vue-router";
// const store = utilStore();
const route = useRoute();
const router = useRouter();
const goToQuestion = () => {
  // router.push("/goTravel/question");
};

// @ts-ignore
// Message{
//   message:"1111"
// }
onMounted(() => {
  // alert(1111);
});
</script>
<script lang="ts">
var a_idx = 0;
(function ($) {
  $(document).ready(function () {
    // 监听滚动事件
    $(window).on("scroll", function () {
      //判断向下滑动的距离
      // if ($(window).scrollTop() >= 100) {
      //   //将顶部导航栏固定
      //   $(".header").addClass("fixed").fadeIn(1000);
      // } else {
      //   $(".header").removeClass("fixed");
      // }
      /*注：fadeIn和FadeOut必须同时使用，才可以无限产生效果，如果没有用fadeOut，那么下一次的fadeIn就没有用了*/
      if ($(window).scrollTop() >= 500) {
        $(".fixed-button").fadeIn(700).css("display", "flex");
      } else {
        $(".fixed-button").fadeOut(300, function () {
          $(".fixed-button").css("display", "none");
        });
      }
    });
  });
  //@ts-ignore
})(jQuery);
</script>
<template>
  <div class="page-wrapper">
    <BaseHeader></BaseHeader>
    <!-- <keep-alive>
    <router-view></router-view>
    </keep-alive> -->
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <router-view v-slot="{ Component }">
      <!-- <keep-alive v-if="$route.meta.keepAlive"> -->
      <!-- 只有在一个容器切换时alive才生效，并且只有include可以生效，meta不行 -->
      <keep-alive
        :include="[
          'Home',
          'Country',
          'CountryDetail',
          'ThemeTravel',
          'LocalPlay',
          'LocalTeam',
          'VisaInsurance',
          'News',
          'ContactUs',
        ]"
      >
        <component :is="Component" />
      </keep-alive>
      <!-- <component :is="Component" v-else /> -->
    </router-view>
    <BaseFooter></BaseFooter>
  </div>
  <!-- <div class="fixed-button">
    <el-tooltip
      effect="light"
      content="<span style='color:#c60b1e'><strong>人工客服</strong></span>"
      raw-content
      placement="top-start"
    >
      <a
        target="_blank"
        href="http://wpa.qq.com/msgrd?v=3&uin=1811142895&site=qq&menu=yes"
        class="go-qq"
        ><el-icon :size="20" @click="goToQuestion" :color="`#c60b1e`"
          ><Service /></el-icon
      ></a>
    </el-tooltip>
  </div> -->
  <el-backtop :right="10" :bottom="35" />
</template>

<style lang="scss" scoped>
.go-qq {
  display: flex;
  justify-content: center;
  align-items: center;
}
// ::v-deep .el-popper.is-customized {
//   padding: 6px 12px;
//   background: rgba(255, 255, 255, 0.8);
// }

// ::v-deep .el-popper.is-customized .el-popper__arrow::before {
//   background: rgba(255, 255, 255, 0.8);
//   right: 0;
// }
.fixed-button {
  width: 40px;
  height: 40px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: fixed;
  bottom: 100px;
  right: 10px;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.5);
  color: #c60b1e;
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}
.fixed-button:hover {
  background-color: #c63a48;
  color: #ffffff;
}
</style>
