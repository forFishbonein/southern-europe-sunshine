<script lang="ts" setup>
import Swiper from "swiper";
import { onMounted } from "vue";
onMounted(() => {
  // @ts-ignore
  var mySwiper = new Swiper(".swiper", {
    autoplay: {
      //设置自动切换，可以更改切换时间
      delay: 2000,
    },
    // direction: "vertical", // 垂直切换选项
    // loop: true, // 循环模式选项
    loop: true, // 循环模式选项
    effect: "cards", //设置切换的方式

    // 如果需要分页器
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true, //设置小圆点点击切换图片
    // },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
</script>

<template>
  <section class="how-we-do features pt80 pb80" id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="section-title text-center">
            <h2>欢迎来到当地玩乐</h2>
            <h3>在南欧，我们是生活旅行的<span>引领者</span>！</h3>
            <p>
              想要深度体验异域风情，感受人文脉络，那就快跟上我们的步伐!<br />
              不用说是看建筑，观美景，玩摄影，激情四射的狂欢节就让你酣畅淋漓，缤纷欢乐的音乐节会让你神恰心醉，美食和美酒也令你回味无穷;<br />
              午后的时光，你还可以浸步老城，信步而行，听老街道娓娓道来一个个故事;<br />
              亦或是在沙滩上嬉戏打闹，在世界上最明媚的阳光下尽情挥洒热情!<br />
              来吧，我们的玩乐达人带你一起嗨翻南欧!
            </p>
          </div>
        </div>
      </div>
      <div class="dots-feat"><img src="/images/dots-2.png" alt="dots" /></div>
      <div class="cercil"></div>
    </div>
  </section>
  <section class="Categories pt50 pb50">
    <div class="container">
      <div class="row cate-button">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/images/home3.jpg" alt="" />
              <!-- <div class="col-lg-2 col-sm-6 col-xs-12">
                <router-link
                  to="/localPlay/items/足球赛事"
                  class="box_cat_home"
                  active-class="box_cat_home_active"
                >
                  <img src="/images/cicon1.png" alt="" />
                  <h3>足球赛事</h3>
                  <ul>
                    <li><strong>2548</strong>Listings</li>
                  </ul>
                </router-link>
              </div>
              <div class="col-lg-2 col-sm-6 col-xs-12">
                <router-link
                  to="/localPlay/items/景点门票"
                  class="box_cat_home"
                  active-class="box_cat_home_active"
                >
                  <img src="/images/cicon2.png" alt="" />
                  <h3>TAPS之旅</h3>
                  <ul>
                    <li><strong>2548</strong>Listings</li>
                  </ul>
                </router-link>
              </div>
              <div class="col-lg-2 col-sm-6 col-xs-12">
                <router-link
                  to="/localPlay/items/户外体验"
                  class="box_cat_home"
                  active-class="box_cat_home_active"
                >
                  <img src="/images/cicon3.png" alt="" />
                  <h3>游艇PARTY</h3>
                  <ul>
                    <li><strong>2548</strong>Listings</li>
                  </ul>
                </router-link>
              </div>
              <div class="col-lg-2 col-sm-6 col-xs-12">
                <router-link
                  to="/localPlay/items/4"
                  class="box_cat_home"
                  active-class="box_cat_home_active"
                >
                  <img src="/images/cicon4.png" alt="" />
                  <h3>网红旅拍</h3>
                  <ul>
                    <li><strong>2548</strong>Listings</li>
                  </ul>
                </router-link>
              </div> -->
            </div>
            <div class="swiper-slide">
              <img src="/images/home1.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="/images/home2.jpg" alt="" />
            </div>
          </div>

          <!-- 如果需要分页器  小圆点  -->
          <!-- <div class="swiper-pagination"></div> -->

          <!-- 如果需要导航按钮  上一张  下一张 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </section>
  <router-view :key="$route.fullPath" />
</template>

<style lang="scss" scoped>
/* 第三步：修改轮播图swiper的大小  （可选） */
.swiper {
  width: 100%;
  height: 250px;
  // margin: 50px auto;
}
/*
        如果要更改轮播图的样式，
          第一种方式可以直接选中对应的类名，进行修改
          第二种方式：直接css文件修改（不推荐使用）
       */
.swiper-slide {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.swiper-pagination-bullet {
  background-color: turquoise;
  width: 20px;
  height: 20px;
}

.how-we-do {
  padding-bottom: 50px;
}
.Categories {
  border-top: 1px #dcdfe6 dashed;
}
.cate-button {
  display: flex;
  justify-content: space-around;
}
.box_cat_home {
  width: 160px;
  height: 200px;
}
.box_cat_home_active {
  background-color: #c60b1e;
  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  strong {
    color: #fff;
  }
  h3 {
    color: #fff;
  }
  ul li {
    color: #fff;
  }
}
</style>
