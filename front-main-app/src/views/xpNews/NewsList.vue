<script setup lang="ts"></script>
<!-- <script lang="ts">
//@ts-ignore
(function ($) {
  $(document).ready(function () {
    // =====================================================
    //      Detail slider
    // =====================================================

    //@ts-ignore
    var detailSlider = new Swiper(".detail-slider", {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        991: {
          slidesPerView: 4,
        },
        565: {
          slidesPerView: 3,
        },
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
  //@ts-ignore
})(jQuery);
</script> -->
<template>
  <section class="Campaigns pt80 pb80 ListingList">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="row ListriBox">
                <div class="col-md-2 col-sm-6 col-xs-12 Nopadding">
                  <figure class="img-container">
                    <router-link to="/news/detail/1"
                      ><img src="/images/hotel1.jpg" class="img-fluid" alt="" />
                    </router-link>
                  </figure>
                </div>
                <div class="col-md-9 col-sm-6 col-xs-12 Nopadding">
                  <div class="ListriBoxmain">
                    <h2>
                      <router-link to="/news/detail/1"
                        >西甲第23轮巴萨1:0小胜皇马，梅西任意球绝杀</router-link
                      >
                      <p class="describe">
                        好的好的好的好的好的好的好的好的好的好的好的好的好的好的好的好的好的好的好的好的好的好的
                      </p>
                    </h2>
                  </div>
                  <div class="route-container">
                    <div>2020-10-08 12:02:52</div>
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
.Campaigns {
  padding-bottom: 0px;
}
.img-container {
  width: 180px;
  height: 180px;
}
.ListriBox figure a img {
  // left: 0% !important;
  top: 30% !important;
}
.describe {
  margin: 20px 0;
}
// .Nopadding {
//   width: 250px !important;
// }
.route-container {
  width: 100%;
  height: 50px;
  // padding: 15px 25px;
  border-top: 1px solid #ededed;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: right;
  // > div {
  //   float: right;
  // }
}
</style>
