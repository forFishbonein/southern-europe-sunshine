<script lang="ts">
//vue3中swiper的使用：https://blog.csdn.net/work_fei/article/details/125542537?spm=1001.2014.3001.5506
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
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
        <swiper
          class="swiper-container"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :pagination="{ clickable: true }"
          loop
        >
          <swiper-slide>
            <div class="col-lg-2 col-sm-6 col-xs-12">
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
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col-lg-2 col-sm-6 col-xs-12">
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
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="col-lg-2 col-sm-6 col-xs-12">
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
            </div></swiper-slide
          >
          <!-- 如果需要分页器 -->
          <!-- <div class="swiper-pagination"></div> -->
          <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <!-- 如果需要滚动条 -->
          <!-- <div class="swiper-scrollbar"></div> -->
        </swiper>
      </div>
    </div>
  </section>
  <router-view :key="$route.fullPath" />
</template>

<style lang="scss" scoped>
/* 第三步：修改轮播图swiper的大小  （可选） */
.swiper-container {
  width: 100%;
  height: 220px;
  // margin: 50px auto;
}
// /*
//         如果要更改轮播图的样式，
//           第一种方式可以直接选中对应的类名，进行修改
//           第二种方式：直接css文件修改（不推荐使用）
//        */
.swiper-slide {
  // width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
::v-deep .swiper-slide-duplicate {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.swiper-button-prev {
  color: #d54957;
  font-weight: 800;
  background-image: none !important;
  transition: all 0.1s linear;
}
.swiper-button-prev:hover {
  transform: translate(0px, -3px);
  font-weight: 1200;
  color: #c60b1e;
}
.swiper-button-next {
  color: #d54957;
  font-weight: 800;
  background-image: none !important;
  transition: all 0.1s linear;
}
.swiper-button-next:hover {
  transform: translate(0px, -3px);
  font-weight: 1200;
  color: #c60b1e;
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
