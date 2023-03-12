<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import emitter from "@/mitt/event";
const route = useRoute();
const themeId = route.params.themeId;
if (themeId && themeId !== "") {
  emitter.emit("synOptions", themeId);
}
/* 实现搜索功能 */
// const onSearchFlag = ref(false);
// const notOnSearchFlag = ref(true);
// const keyword = ref("");
// // let timer = null;
// const searchResultcitysInfo = ref([] as citysInfoType[]);
// watch(keyword, (newValue, oldValue) => {
//   // alert(newValue);
//   searchResultcitysInfo.value = [] as citysInfoType[];
//   notOnSearchFlag.value = false;
//   onSearchFlag.value = true;
//   // if (timer) {
//   //   clearTimeout(timer);
//   // }
//   if (!newValue) {
//     //如果新的值为空的，即清空了
//     searchResultcitysInfo.value = [] as citysInfoType[];
//     onSearchFlag.value = false;
//     notOnSearchFlag.value = true;
//     return;
//   }
//   citysInfo.value.forEach((e) => {
//     if (e.cityName.indexOf(newValue) !== -1) {
//       //!==-1那就说明包含
//       searchResultcitysInfo.value.push(e);
//     }
//   });
//   // @ts-ignore
//   // timer = setTimeout(async () => {

//   // }, 100);
// });
</script>

<template>
  <section class="Campaigns pt80 pb80 ListingList">
    <div class="container">
      <div class="input-box">
        <input type="text" class="search-input" placeholder="搜索" />
        <span class="search-span">
          <el-icon><Search /></el-icon>
        </span>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="row ListriBox">
                <div class="col-md-5 col-sm-6 col-xs-12 Nopadding">
                  <figure>
                    <router-link to="/themeTravel/item/1"
                      ><img src="/images/hotel1.jpg" class="img-fluid" alt="" />
                      <div class="read_more"><span>查看详情</span></div>
                    </router-link>
                  </figure>
                </div>
                <div class="col-md-7 col-sm-6 col-xs-12 Nopadding">
                  <div class="ListriBoxmain">
                    <h3>
                      <router-link to="/themeTravel/item/1"
                        >西班牙美食之旅</router-link
                      >
                    </h3>
                    <p class="content-hidden">
                      给您提供全方面的精致服务，让您充分体验当地特色美食给您提供全方面的精致服务，让您充分体验当地特色美食给您提供全方面的精致服务，让您充分体验当地特色美食给您提供全方面的精致服务，让您充分体验当地特色美食
                    </p>
                    <p><span class="click-rate-span">点击率: 50%</span></p>
                  </div>
                  <div class="route-container">
                    <div class="R_retings">
                      <span>Day1</span><strong>马德里</strong>
                    </div>
                    <div class="R_retings">
                      <span>Day1</span><strong>马德里</strong>
                    </div>
                    <div class="R_retings">
                      <span>Day1</span><strong>马德里</strong>
                    </div>
                    <div class="R_retings">
                      <span>Day1</span><strong>马德里</strong>
                    </div>
                    <div class="R_retings">
                      <span>Day1</span><strong>马德里</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="row ListriBox">
                <div class="col-md-5 col-sm-6 col-xs-12 Nopadding">
                  <figure>
                    <a
                      href="listings-single-page-3.html"
                      class="wishlist_bt"
                    ></a>
                    <a href="listings-single-page-3.html"
                      ><img src="/images/hotel2.jpg" class="img-fluid" alt="" />
                      <div class="read_more"><span>Read more</span></div>
                    </a>
                  </figure>
                </div>
                <div class="col-md-7 col-sm-6 col-xs-12 Nopadding">
                  <div class="ListriBoxmain">
                    <h3>
                      <a href="listings-single-page-3.html"
                        >Blue Hill Restaurant</a
                      >
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do
                    </p>
                    <a class="address" href="">Get directions</a>
                  </div>
                  <ul>
                    <li><span class="Ropen">Now Open</span></li>
                    <li>
                      <div class="R_retings">
                        <span>Blue Hill<em>122 Reviews</em></span
                        ><strong>8.2</strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="row ListriBox">
                <div class="col-md-5 col-sm-6 col-xs-12 Nopadding">
                  <figure>
                    <a
                      href="listings-single-page-3.html"
                      class="wishlist_bt"
                    ></a>
                    <a href="listings-single-page-3.html"
                      ><img src="/images/hotel3.jpg" class="img-fluid" alt="" />
                      <div class="read_more"><span>Read more</span></div>
                    </a>
                  </figure>
                </div>
                <div class="col-md-7 col-sm-6 col-xs-12 Nopadding">
                  <div class="ListriBoxmain">
                    <h3>
                      <a href="listings-single-page-3.html"
                        >Blue Hill Restaurant</a
                      >
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do
                    </p>
                    <a class="address" href="">Get directions</a>
                  </div>
                  <ul>
                    <li><span class="Ropen">Now Open</span></li>
                    <li>
                      <div class="R_retings">
                        <span>Blue Hill<em>122 Reviews</em></span
                        ><strong>8.2</strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="row ListriBox">
                <div class="col-md-5 col-sm-6 col-xs-12 Nopadding">
                  <figure>
                    <a
                      href="listings-single-page-3.html"
                      class="wishlist_bt"
                    ></a>
                    <a href="listings-single-page-3.html"
                      ><img src="/images/hotel4.jpg" class="img-fluid" alt="" />
                      <div class="read_more"><span>Read more</span></div>
                    </a>
                  </figure>
                </div>
                <div class="col-md-7 col-sm-6 col-xs-12 Nopadding">
                  <div class="ListriBoxmain">
                    <h3>
                      <a href="listings-single-page-3.html"
                        >Blue Hill Restaurant</a
                      >
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do
                    </p>
                    <a class="address" href="">Get directions</a>
                  </div>
                  <ul>
                    <li><span class="Ropen">Now Open</span></li>
                    <li>
                      <div class="R_retings">
                        <span>Blue Hill<em>122 Reviews</em></span
                        ><strong>8.2</strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="row ListriBox">
                <div class="col-md-5 col-sm-6 col-xs-12 Nopadding">
                  <figure>
                    <a
                      href="listings-single-page-3.html"
                      class="wishlist_bt"
                    ></a>
                    <a href="listings-single-page-3.html"
                      ><img src="/images/hotel5.jpg" class="img-fluid" alt="" />
                      <div class="read_more"><span>Read more</span></div>
                    </a>
                  </figure>
                </div>
                <div class="col-md-7 col-sm-6 col-xs-12 Nopadding">
                  <div class="ListriBoxmain">
                    <h3>
                      <a href="listings-single-page-3.html"
                        >Blue Hill Restaurant</a
                      >
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do
                    </p>
                    <a class="address" href="">Get directions</a>
                  </div>
                  <ul>
                    <li><span class="Ropen">Now Open</span></li>
                    <li>
                      <div class="R_retings">
                        <span>Blue Hill<em>122 Reviews</em></span
                        ><strong>8.2</strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="paginationCommon blogPagination categoryPagination">
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true"
                      ><i class="fa fa-angle-left" aria-hidden="true"></i
                    ></span>
                  </a>
                </li>
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i
                    ></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ListingList {
  padding-top: 50px;
}
.route-container {
  float: left;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55px;
  padding: 5px 25px;
  border-top: 1px solid #ededed;
  display: flex;
  align-items: center;
}
.R_retings {
  float: left;
  margin-right: 15px;
  margin-bottom: 5px;
  display: flex;
  // align-items: center;
  strong {
    background-color: #c63a48;
    padding: 7px;
    font-size: 14px;
  }
}
.ListriBoxmain {
  width: 100%;
  height: 150px;
  padding-top: 20px;
  padding-bottom: 0;
}
/* 段落显示2行，多余的用...省略，并且首行缩进2字符 */
.content-hidden {
  text-indent: 2em;
  text-align: justify;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.click-rate-span {
  display: block;
  float: right;
  font-size: 12px;
  color: #b1b3b8;
}

.input-box {
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  border-radius: 40px;
  transition: all 0.3s linear;
  .search-input {
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    transition: width 0.5s;
    transition-delay: 0.1s;
  }
  .search-input:focus {
    width: 350px;
    outline: none;
    box-shadow: none;
  }
  .search-input:focus + .search-span {
    background-color: #c63a48;
    color: #fff;
  }
  .search-span {
    position: absolute;
    top: 4px;
    right: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    padding: 0;
    color: #d4d7de;
    text-align: center;
    background: #c60b1e;
    border-radius: 50%;
    font-size: 15px;
    cursor: pointer;
    i {
      height: 30px; /* 让图标居中的方案 */
    }
  }
}
.input-box:hover {
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
  // box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);
}
</style>
