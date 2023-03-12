<script setup lang="ts"></script>

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
        <div class="col-lg-2 col-sm-6 col-xs-12">
          <router-link
            to="/localPlay/items/1"
            class="box_cat_home"
            active-class="box_cat_home_active"
          >
            <img src="/images/cicon1.png" alt="" />
            <h3>LAGOS-海船出游</h3>
            <ul>
              <li><strong>2548</strong>Listings</li>
            </ul>
          </router-link>
        </div>
        <div class="col-lg-2 col-sm-6 col-xs-12">
          <router-link
            to="/localPlay/items/2"
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
            to="/localPlay/items/3"
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
        </div>
      </div>
    </div>
  </section>
  <router-view />
</template>

<style lang="scss" scoped>
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
