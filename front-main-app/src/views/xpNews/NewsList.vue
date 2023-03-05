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
  <!-- <section class="Campaigns pt80 pb80 ListingList">
    <div class="swiper-container detail-slider slider-gallery">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a data-toggle="gallery-top" title="Our street"
            ><img
              src="images/room-details1.jpg"
              alt="Our street"
              class="img-fluid"
          /></a>
        </div>
        <div class="swiper-slide">
          <a data-toggle="gallery-top" title="Outside"
            ><img
              src="images/room-details2.jpg"
              alt="Outside"
              class="img-fluid"
          /></a>
        </div>
        <div class="swiper-slide">
          <a data-toggle="gallery-top" title="Rear entrance"
            ><img
              src="images/room-details3.jpg"
              alt="Rear entrance"
              class="img-fluid"
          /></a>
        </div>
        <div class="swiper-slide">
          <a data-toggle="gallery-top" title="Kitchen"
            ><img
              src="images/room-details4.jpg"
              alt="Kitchen"
              class="img-fluid"
          /></a>
        </div>
        <div class="swiper-slide">
          <a data-toggle="gallery-top" title="Bedroom"
            ><img
              src="images/room-details1.jpg"
              alt="Bedroom"
              class="img-fluid"
          /></a>
        </div>
        <div class="swiper-slide">
          <a data-toggle="gallery-top" title="Bedroom"
            ><img
              src="images/room-details3.jpg"
              alt="Bedroom"
              class="img-fluid"
          /></a>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
    </div>
  </section> -->
  <section class="Blog-list pt80 pb80">
    <div class="container">
      <div class="row">
        <!-- blog item-->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
          <div class="card shadow border-0 h-100">
            <a href="post.html"
              ><img
                src="/images/b1.jpg"
                alt="..."
                class="img-fluid card-img-top"
            /></a>
            <div class="card-body">
              <h5 class="my-2">
                <a href="post.html" class="text-dark"
                  >Autumn fashion tips and tricks
                </a>
              </h5>
              <p class="text-gray-500 text-sm my-3">
                <i class="far fa-clock mr-2"></i>January 16, 2019
              </p>
              <p class="my-2 text-muted text-sm">
                Pellentesque habitant morbi tristique senectus. Vestibulum
                tortor quam, feugiat vitae, ultricies ege...
              </p>
              <a href="post.html" class="btn btn-link pl-0"
                >Read more<i class="fa fa-long-arrow-alt-right ml-2"></i
              ></a>
            </div>
          </div>
        </div>
        <!-- blog item-->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
          <div class="card shadow border-0 h-100">
            <a href="post.html"
              ><img
                src="/images/b2.jpg"
                alt="..."
                class="img-fluid card-img-top"
            /></a>
            <div class="card-body">
              <h5 class="my-2">
                <a href="post.html" class="text-dark">Newest photo apps </a>
              </h5>
              <p class="text-gray-500 text-sm my-3">
                <i class="far fa-clock mr-2"></i>January 16, 2019
              </p>
              <p class="my-2 text-muted text-sm">
                ellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibu...
              </p>
              <a href="post.html" class="btn btn-link pl-0"
                >Read more<i class="fa fa-long-arrow-alt-right ml-2"></i
              ></a>
            </div>
          </div>
        </div>
        <!-- blog item-->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
          <div class="card shadow border-0 h-100">
            <a href="post.html"
              ><img
                src="/images/b3.jpg"
                alt="..."
                class="img-fluid card-img-top"
            /></a>
            <div class="card-body">
              <h5 class="my-2">
                <a href="post.html" class="text-dark"
                  >Best books about Photography
                </a>
              </h5>
              <p class="text-gray-500 text-sm my-3">
                <i class="far fa-clock mr-2"></i>January 16, 2019
              </p>
              <p class="my-2 text-muted text-sm">
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                sit amet, ante. Mauris placerat eleif...
              </p>
              <a href="post.html" class="btn btn-link pl-0"
                >Read more<i class="fa fa-long-arrow-alt-right ml-2"></i
              ></a>
            </div>
          </div>
        </div>

        <!-- blog item-->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
          <div class="card shadow border-0 h-100">
            <a href="post.html"
              ><img
                src="/images/b1.jpg"
                alt="..."
                class="img-fluid card-img-top"
            /></a>
            <div class="card-body">
              <h5 class="my-2">
                <a href="post.html" class="text-dark"
                  >Autumn fashion tips and tricks
                </a>
              </h5>
              <p class="text-gray-500 text-sm my-3">
                <i class="far fa-clock mr-2"></i>January 16, 2019
              </p>
              <p class="my-2 text-muted text-sm">
                Pellentesque habitant morbi tristique senectus. Vestibulum
                tortor quam, feugiat vitae, ultricies ege...
              </p>
              <a href="post.html" class="btn btn-link pl-0"
                >Read more<i class="fa fa-long-arrow-alt-right ml-2"></i
              ></a>
            </div>
          </div>
        </div>
        <!-- blog item-->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
          <div class="card shadow border-0 h-100">
            <a href="post.html"
              ><img
                src="/images/b2.jpg"
                alt="..."
                class="img-fluid card-img-top"
            /></a>
            <div class="card-body">
              <h5 class="my-2">
                <a href="post.html" class="text-dark">Newest photo apps </a>
              </h5>
              <p class="text-gray-500 text-sm my-3">
                <i class="far fa-clock mr-2"></i>January 16, 2019
              </p>
              <p class="my-2 text-muted text-sm">
                ellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibu...
              </p>
              <a href="post.html" class="btn btn-link pl-0"
                >Read more<i class="fa fa-long-arrow-alt-right ml-2"></i
              ></a>
            </div>
          </div>
        </div>
        <!-- blog item-->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
          <div class="card shadow border-0 h-100">
            <a href="post.html"
              ><img
                src="/images/b3.jpg"
                alt="..."
                class="img-fluid card-img-top"
            /></a>
            <div class="card-body">
              <h5 class="my-2">
                <a href="post.html" class="text-dark"
                  >Best books about Photography
                </a>
              </h5>
              <p class="text-gray-500 text-sm my-3">
                <i class="far fa-clock mr-2"></i>January 16, 2019
              </p>
              <p class="my-2 text-muted text-sm">
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                sit amet, ante. Mauris placerat eleif...
              </p>
              <a href="post.html" class="btn btn-link pl-0"
                >Read more<i class="fa fa-long-arrow-alt-right ml-2"></i
              ></a>
            </div>
          </div>
        </div>

        <!-- blog item-->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
          <div class="card shadow border-0 h-100">
            <a href="post.html"
              ><img
                src="/images/b1.jpg"
                alt="..."
                class="img-fluid card-img-top"
            /></a>
            <div class="card-body">
              <h5 class="my-2">
                <a href="post.html" class="text-dark"
                  >Autumn fashion tips and tricks
                </a>
              </h5>
              <p class="text-gray-500 text-sm my-3">
                <i class="far fa-clock mr-2"></i>January 16, 2019
              </p>
              <p class="my-2 text-muted text-sm">
                Pellentesque habitant morbi tristique senectus. Vestibulum
                tortor quam, feugiat vitae, ultricies ege...
              </p>
              <a href="post.html" class="btn btn-link pl-0"
                >Read more<i class="fa fa-long-arrow-alt-right ml-2"></i
              ></a>
            </div>
          </div>
        </div>
        <!-- blog item-->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
          <div class="card shadow border-0 h-100">
            <a href="post.html"
              ><img
                src="/images/b2.jpg"
                alt="..."
                class="img-fluid card-img-top"
            /></a>
            <div class="card-body">
              <h5 class="my-2">
                <a href="post.html" class="text-dark">Newest photo apps </a>
              </h5>
              <p class="text-gray-500 text-sm my-3">
                <i class="far fa-clock mr-2"></i>January 16, 2019
              </p>
              <p class="my-2 text-muted text-sm">
                ellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibu...
              </p>
              <a href="post.html" class="btn btn-link pl-0"
                >Read more<i class="fa fa-long-arrow-alt-right ml-2"></i
              ></a>
            </div>
          </div>
        </div>
        <!-- blog item-->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
          <div class="card shadow border-0 h-100">
            <a href="post.html"
              ><img
                src="/images/b3.jpg"
                alt="..."
                class="img-fluid card-img-top"
            /></a>
            <div class="card-body">
              <h5 class="my-2">
                <a href="post.html" class="text-dark"
                  >Best books about Photography
                </a>
              </h5>
              <p class="text-gray-500 text-sm my-3">
                <i class="far fa-clock mr-2"></i>January 16, 2019
              </p>
              <p class="my-2 text-muted text-sm">
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                sit amet, ante. Mauris placerat eleif...
              </p>
              <a href="post.html" class="btn btn-link pl-0"
                >Read more<i class="fa fa-long-arrow-alt-right ml-2"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.Campaigns {
  padding-bottom: 0px;
}
</style>
