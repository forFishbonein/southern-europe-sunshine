<script setup lang="ts"></script>
<script lang="ts">
/* 控制日历弹出 */
//@ts-ignore
(function ($) {
  $(document).ready(function () {
    // =====================================================
    //      Items slider
    // =====================================================
    //@ts-ignore
    var guidesSlider = new Swiper(".guides-slider", {
      slidesPerView: 4,
      spaceBetween: 15,
      loop: true,
      roundLengths: true,
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        400: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    });
    //Setting hero slider
    function heroSlider() {
      if ($(".hero-slider").length) {
        $(".hero-slider").slick({
          autoplay: true,
          autoplaySpeed: 8000,
          arrows: true,
          prevArrow:
            '<button type="button" class="slick-prev">Previous</button>',
          nextArrow: '<button type="button" class="slick-next">Next</button>',
          dots: true,
          fade: true,
          cssEase: "linear",
        });
      }
    }
    // Hero slider background setting
    function sliderBgSetting() {
      if ($(".hero-slider .slide").length) {
        $(".hero-slider .slide").each(function () {
          var $this = $(this);
          var img = $this.find(".slider-bg").attr("src");

          $this.css({
            backgroundImage: "url(" + img + ")",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          });
        });
      }
    }
    //Active heor slider
    heroSlider();
  });
  jQuery(window).on("load", function () {
    // $(".preloader-area").fadeOut();
    sliderBgSetting();
  });
  //@ts-ignore
})(jQuery);
</script>

<template>
  <!-- start of hero -->
  <section class="hero hero-style-2">
    <div class="hero-slider">
      <div class="slide">
        <div class="container">
          <img src="/images/slider/slide-4.jpg" alt class="slider-bg" />
          <div class="row">
            <div class="col col-md-8 slide-caption">
              <div class="slide-title">
                <h2>The Varaus Hotel & Resort</h2>
              </div>
              <div class="slide-subtitle">
                <p>Make Your Life Better and Bright! You must trip with Us!</p>
              </div>
              <div class="btns">
                <a href="#" class="theme-btn">Book A Room</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <img src="/images/slider/slide-5.jpg" alt class="slider-bg" />
          <div class="row">
            <div class="col col-md-8 slide-caption">
              <div class="slide-title">
                <h2>The Varaus Hotel & Resort</h2>
              </div>
              <div class="slide-subtitle">
                <p>Make Your Life Better and Bright! You must trip with Us!</p>
              </div>
              <div class="btns">
                <a href="#" class="theme-btn">Book A Room</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <img src="/images/slider/slide-6.jpg" alt class="slider-bg" />
          <div class="row">
            <div class="col col-md-8 slide-caption">
              <div class="slide-title">
                <h2>The Varaus Hotel & Resort</h2>
              </div>
              <div class="slide-subtitle">
                <p>Make Your Life Better and Bright! You must trip with Us!</p>
              </div>
              <div class="btns">
                <a href="#" class="theme-btn">Book A Room</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <img src="/images/slider/slide-7.jpg" alt class="slider-bg" />
          <div class="row">
            <div class="col col-md-8 slide-caption">
              <div class="slide-title">
                <h2>The Varaus Hotel & Resort</h2>
              </div>
              <div class="slide-subtitle">
                <p>Make Your Life Better and Bright! You must trip with Us!</p>
              </div>
              <div class="btns">
                <a href="#" class="theme-btn">Book A Room</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end of hero slider -->
  <!-- <div class="main-banner digital-agency-banner">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="row h-100 align-items-center">
            <div class="col-lg-12 col-md-12">
              <div class="hero-content">
                <h1 class="wow fadeInUp">FIND NEARBY RESTAUTRANT</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-12"></div>
          </div>
          <div class="row h-100 align-items-center">
            <div class="col-lg-12 col-md-12">
              <div class="search-bar mt-5 p-3 p-lg-1 pl-lg-4">
                <form action="#">
                  <div class="row">
                    <div class="col-lg-4 d-flex align-items-center form-group">
                      <input
                        type="text"
                        name="search"
                        placeholder="What are you searching for?"
                        class="form-control border-0 shadow-0"
                      />
                    </div>
                    <div class="col-lg-3 d-flex align-items-center form-group">
                      <div
                        class="input-label-absolute input-label-absolute-right w-100"
                      >
                        <label for="location" class="label-absolute"
                          ><i class="fa fa-crosshairs"></i
                          ><span class="sr-only">City</span></label
                        >
                        <input
                          type="text"
                          name="location"
                          placeholder="Location"
                          id="location"
                          class="form-control border-0 shadow-0"
                        />
                      </div>
                    </div>
                    <div
                      class="col-lg-3 d-flex align-items-center form-group no-divider"
                    >
                      <div class="bootstrap-select">
                        <select
                          title="Categories"
                          data-style="btn-form-control"
                          class="selectpicker"
                          tabindex="-98"
                        >
                          <option class="bs-title-option" value="">
                            Restaurants
                          </option>
                          <option value="small">Restaurants</option>
                          <option value="medium">Hotels</option>
                          <option value="large">Cafes</option>
                          <option value="x-large">Garages</option>
                        </select>
                        <div class="dropdown-menu">
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                          >
                            <ul class="dropdown-menu inner show"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <button
                        type="submit"
                        class="btn btn-primary btn-block rounded-xl h-100"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <section class="Categories pt80 pb80">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8">
          <p class="subtitle text-secondary nopadding">
            Stay and eat like a local
          </p>
          <h1 class="paddtop1 font-weight lspace-sm">Most Popular guides</h1>
        </div>
        <div class="col-md-4 d-lg-flex align-items-center justify-content-end">
          <a href="" class="blist text-sm ml-2">
            See all Categories<i class="fas fa-angle-double-right ml-2"></i
          ></a>
        </div>
      </div>
      <div class="row">
        <div class="swiper-container guides-slider">
          <!-- Additional required wrapper-->
          <div class="swiper-wrapper">
            <!-- Slides-->
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-4 mb-lg-0">
                <a href="#" class="tile-link"></a
                ><img
                  src="/images/photo/1.jpg"
                  alt="Card image"
                  class="bg-image"
                />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">
                    New York
                  </h6>
                  <p class="card-text text-sm">The big apple</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-4 mb-lg-0">
                <a href="#" class="tile-link"></a
                ><img
                  src="/images/photo/2.jpg"
                  alt="Card image"
                  class="bg-image"
                />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Paris</h6>
                  <p class="card-text text-sm">Artist capital of Europe</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-4 mb-lg-0">
                <a href="#" class="tile-link"></a
                ><img
                  src="/images/photo/3.jpg"
                  alt="Card image"
                  class="bg-image"
                />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">
                    Barcelona
                  </h6>
                  <p class="card-text text-sm">Dali, Gaudi, Barrio</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-4 mb-lg-0">
                <a href="#" class="tile-link"></a
                ><img
                  src="/images/photo/4.jpg"
                  alt="Card image"
                  class="bg-image"
                />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">
                    New York
                  </h6>
                  <p class="card-text text-sm">City of hundred towers</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-4 mb-lg-0">
                <a href="#" class="tile-link"></a
                ><img
                  src="/images/photo/5.jpg"
                  alt="Card image"
                  class="bg-image"
                />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Canada</h6>
                  <p class="card-text text-sm">Artist capital of Europe</p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination d-md-none"></div>
        </div>
      </div>
    </div>
  </section>
  <div class="featured-area featured-sub">
    <div class="container-fluid">
      <div class="row grid">
        <div class="col-lg-4 items col-md-6 col-sm-6 col-12">
          <div class="featured-wrap">
            <div class="featured-img">
              <img src="/images/featured/1.jpg" alt="" />
              <div class="featured-content">
                <a href="room-single.html">Delicious Food</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 items col-md-6 col-sm-6 col-12">
          <div class="featured-wrap">
            <div class="featured-img">
              <img src="/images/featured/2.jpg" alt="" />
              <div class="featured-content">
                <a href="room-single.html">Swimming Pool</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 items col-md-6 col-sm-6 col-12">
          <div class="featured-wrap">
            <div class="featured-img">
              <img src="/images/featured/3.jpg" alt="" />
              <div class="featured-content">
                <a href="room-single.html">Spa salon</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 items col-md-6 col-sm-6 col-12">
          <div class="featured-wrap">
            <div class="featured-img">
              <img src="images/featured/4.jpg" alt="" />
              <div class="featured-content">
                <a href="room-single.html">Game Room</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 items col-md-6 col-sm-6 col-12">
          <div class="featured-wrap">
            <div class="featured-img">
              <img src="images/featured/5.jpg" alt="" />
              <div class="featured-content">
                <a href="room-single.html">Airport Taxi</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 items col-md-6 col-sm-6 col-12">
          <div class="featured-wrap">
            <div class="featured-img">
              <img src="images/featured/6.jpg" alt="" />
              <div class="featured-content">
                <a href="room-single.html">Breakfast</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="Campaigns pt80 pb40">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8">
          <p class="subtitle text-secondary nopadding">
            Stay and eat like a local
          </p>
          <h1 class="paddtop1 font-weight lspace-sm">Most Recents</h1>
        </div>
        <div class="col-md-4 d-lg-flex align-items-center justify-content-end">
          <a href="" class="blist text-sm ml-2">
            See all deals<i class="fas fa-angle-double-right ml-2"></i
          ></a>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <div class="ListriBox">
            <figure>
              <a href="listings-single-page-3.html" class="wishlist_bt"></a>
              <a href="listings-single-page-3.html"
                ><img src="images/hotel1.jpg" class="img-fluid" alt="" />
                <div class="read_more"><span>Read more</span></div>
              </a>
            </figure>
            <div class="ListriBoxmain">
              <h3>
                <a href="listings-single-page-3.html">Blue Hill Restaurant</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
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
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <div class="ListriBox">
            <figure>
              <a href="listings-single-page-3.html" class="wishlist_bt"></a>
              <a href="listings-single-page-3.html"
                ><img src="images/hotel2.jpg" class="img-fluid" alt="" />
                <div class="read_more"><span>Read more</span></div>
              </a>
            </figure>
            <div class="ListriBoxmain">
              <h3>
                <a href="listings-single-page-3.html">Blue Hill Restaurant</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              </p>
              <a class="address" href="">Get directions</a>
            </div>
            <ul>
              <li><span class="Rclosed">Closed</span></li>
              <li>
                <div class="R_retings">
                  <span>Blue Hill<em>122 Reviews</em></span
                  ><strong>8.2</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <div class="ListriBox">
            <figure>
              <a href="listings-single-page-3.html" class="wishlist_bt"></a>
              <a href="listings-single-page-3.html"
                ><img src="images/hotel3.jpg" class="img-fluid" alt="" />
                <div class="read_more"><span>Read more</span></div>
              </a>
            </figure>
            <div class="ListriBoxmain">
              <h3>
                <a href="listings-single-page-3.html">Blue Hill Restaurant</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
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
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <div class="ListriBox">
            <figure>
              <a href="listings-single-page-3.html" class="wishlist_bt"></a>
              <a href="listings-single-page-3.html"
                ><img src="images/hotel4.jpg" class="img-fluid" alt="" />
                <div class="read_more"><span>Read more</span></div>
              </a>
            </figure>
            <div class="ListriBoxmain">
              <h3>
                <a href="listings-single-page-3.html">Blue Hill Restaurant</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
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
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <div class="ListriBox">
            <figure>
              <a href="listings-single-page-3.html" class="wishlist_bt"></a>
              <a href="listings-single-page-3.html"
                ><img src="images/hotel5.jpg" class="img-fluid" alt="" />
                <div class="read_more"><span>Read more</span></div>
              </a>
            </figure>
            <div class="ListriBoxmain">
              <h3>
                <a href="listings-single-page-3.html">Blue Hill Restaurant</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              </p>
              <a class="address" href="">Get directions</a>
            </div>
            <ul>
              <li><span class="Rclosed">Closed</span></li>
              <li>
                <div class="R_retings">
                  <span>Blue Hill<em>122 Reviews</em></span
                  ><strong>8.2</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <div class="ListriBox">
            <figure>
              <a href="listings-single-page-3.html" class="wishlist_bt"></a>
              <a href="listings-single-page-3.html"
                ><img src="images/hotel6.jpg" class="img-fluid" alt="" />
                <div class="read_more"><span>Read more</span></div>
              </a>
            </figure>
            <div class="ListriBoxmain">
              <h3>
                <a href="listings-single-page-3.html">Blue Hill Restaurant</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
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
  </section>
  <section class="how-we-do features pt80 pb80" id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="section-title text-center">
            <h2>Welcome To Listri</h2>
            <h3>Booking with <span>us is easy</span></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>
      </div>
      <div class="row pb-90">
        <div class="col-md-4">
          <div class="feat-item">
            <span class="fab fa-renren"></span>
            <h4>Find the perfect rental</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry simply dummy text typesetting.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feat-item">
            <span class="fas fa-tools"></span>
            <h4>Book with confidence</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry simply dummy text typesetting.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feat-item">
            <span class="fas fa-rocket"></span>
            <h4>Enjoy your vacation</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry simply dummy text typesetting.
            </p>
          </div>
        </div>
      </div>
      <div class="dots-feat"><img src="images/dots-2.png" alt="dots" /></div>
      <div class="cercil"></div>
    </div>
  </section>
  <section class="Categories Campaigns pt80 pb40">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8">
          <p class="subtitle text-secondary nopadding">
            Stay and eat like a local
          </p>
          <h1 class="paddtop1 font-weight lspace-sm">Popular listings</h1>
        </div>
        <div class="col-md-4 d-lg-flex align-items-center justify-content-end">
          <a href="" class="blist text-sm ml-2">
            See all listings<i class="fas fa-angle-double-right ml-2"></i
          ></a>
        </div>
      </div>
      <div class="row">
        <div class="swiper-container guides-slider-popular">
          <!-- Additional required wrapper-->
          <div class="swiper-wrapper">
            <!-- Slides-->

            <div class="swiper-slide h-auto px-2">
              <div class="ListriBox">
                <figure>
                  <a href="listings-single-page-3.html" class="wishlist_bt"></a>
                  <a href="listings-single-page-3.html"
                    ><img src="images/room1.jpg" class="img-fluid" alt="" />
                    <div class="read_more"><span>Read more</span></div>
                  </a>
                </figure>
                <div class="ListriBoxmain">
                  <h3>
                    <a href="listings-single-page-3.html"
                      >Modern, Well-Appointed Room</a
                    >
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a class="address" href="">Get directions</a>
                </div>
                <ul>
                  <li>
                    <p class="card-text text-muted">
                      <span class="h4 text-primary">$80</span>/ night
                    </p>
                  </li>
                  <li>
                    <div class="R_retings">
                      <div class="list-rat-ch list-room-rati">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="swiper-slide h-auto px-2">
              <div class="ListriBox">
                <figure>
                  <a href="listings-single-page-3.html" class="wishlist_bt"></a>
                  <a href="listings-single-page-3.html"
                    ><img src="images/room2.jpg" class="img-fluid" alt="" />
                    <div class="read_more"><span>Read more</span></div>
                  </a>
                </figure>
                <div class="ListriBoxmain">
                  <h3>
                    <a href="listings-single-page-3.html"
                      >Modern, Well-Appointed Room</a
                    >
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a class="address" href="">Get directions</a>
                </div>
                <ul>
                  <li>
                    <p class="card-text text-muted">
                      <span class="h4 text-primary">$80</span>/ night
                    </p>
                  </li>
                  <li>
                    <div class="R_retings">
                      <div class="list-rat-ch list-room-rati">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="swiper-slide h-auto px-2">
              <div class="ListriBox">
                <figure>
                  <a href="listings-single-page-3.html" class="wishlist_bt"></a>
                  <a href="listings-single-page-3.html"
                    ><img src="images/room3.jpg" class="img-fluid" alt="" />
                    <div class="read_more"><span>Read more</span></div>
                  </a>
                </figure>
                <div class="ListriBoxmain">
                  <h3>
                    <a href="listings-single-page-3.html"
                      >Modern, Well-Appointed Room</a
                    >
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a class="address" href="">Get directions</a>
                </div>
                <ul>
                  <li>
                    <p class="card-text text-muted">
                      <span class="h4 text-primary">$80</span>/ night
                    </p>
                  </li>
                  <li>
                    <div class="R_retings">
                      <div class="list-rat-ch list-room-rati">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="swiper-slide h-auto px-2">
              <div class="ListriBox">
                <figure>
                  <a href="listings-single-page-3.html" class="wishlist_bt"></a>
                  <a href="listings-single-page-3.html"
                    ><img src="images/room4.jpg" class="img-fluid" alt="" />
                    <div class="read_more"><span>Read more</span></div>
                  </a>
                </figure>
                <div class="ListriBoxmain">
                  <h3>
                    <a href="listings-single-page-3.html"
                      >Modern, Well-Appointed Room</a
                    >
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a class="address" href="">Get directions</a>
                </div>
                <ul>
                  <li>
                    <p class="card-text text-muted">
                      <span class="h4 text-primary">$80</span>/ night
                    </p>
                  </li>
                  <li>
                    <div class="R_retings">
                      <div class="list-rat-ch list-room-rati">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="swiper-slide h-auto px-2">
              <div class="ListriBox">
                <figure>
                  <a href="listings-single-page-3.html" class="wishlist_bt"></a>
                  <a href="listings-single-page-3.html"
                    ><img src="images/room5.jpg" class="img-fluid" alt="" />
                    <div class="read_more"><span>Read more</span></div>
                  </a>
                </figure>
                <div class="ListriBoxmain">
                  <h3>
                    <a href="listings-single-page-3.html"
                      >Modern, Well-Appointed Room</a
                    >
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a class="address" href="">Get directions</a>
                </div>
                <ul>
                  <li>
                    <p class="card-text text-muted">
                      <span class="h4 text-primary">$80</span>/ night
                    </p>
                  </li>
                  <li>
                    <div class="R_retings">
                      <div class="list-rat-ch list-room-rati">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="swiper-slide h-auto px-2">
              <div class="ListriBox">
                <figure>
                  <a href="listings-single-page-3.html" class="wishlist_bt"></a>
                  <a href="listings-single-page-3.html"
                    ><img src="images/room6.jpg" class="img-fluid" alt="" />
                    <div class="read_more"><span>Read more</span></div>
                  </a>
                </figure>
                <div class="ListriBoxmain">
                  <h3>
                    <a href="listings-single-page-3.html"
                      >Modern, Well-Appointed Room</a
                    >
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a class="address" href="">Get directions</a>
                </div>
                <ul>
                  <li>
                    <p class="card-text text-muted">
                      <span class="h4 text-primary">$80</span>/ night
                    </p>
                  </li>
                  <li>
                    <div class="R_retings">
                      <div class="list-rat-ch list-room-rati">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="swiper-pagination d-md-none"></div>
        </div>
      </div>
    </div>
  </section>
  <section class="client-section">
    <div class="section-overlay bg-opacity">
      <div class="container pt80 pb80">
        <div class="row">
          <div class="col-md-8 col-centered">
            <div class="col-xs-12 text-center">
              <h6 class="nopadding lspace text-white">
                Our dear customers said about us
              </h6>
              <h1 class="paddtop1 dosis font-weight text-white lspace-sm">
                TESTIMONIALS
              </h1>
              <div class="title-line white align-center"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-centered">
            <!-- Slider main container-->
            <div class="swiper-container testimonials-slider testimonials">
              <!-- Additional required wrapper-->
              <div class="swiper-wrapper pt-2 pb-5">
                <!-- Slides-->
                <div class="swiper-slide px-3">
                  <div class="testimonial card rounded-lg shadow border-0">
                    <div class="testimonial-avatar">
                      <img
                        src="images/avatar/avatar-3.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="text">
                      <div class="testimonial-quote">
                        <i class="fas fa-quote-right"></i>
                      </div>
                      <p class="testimonial-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                      <strong>Jessica Watson</strong>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide px-3">
                  <div class="testimonial card rounded-lg shadow border-0">
                    <div class="testimonial-avatar">
                      <img
                        src="images/avatar/avatar-3.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="text">
                      <div class="testimonial-quote">
                        <i class="fas fa-quote-right"></i>
                      </div>
                      <p class="testimonial-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                      <strong>Jessica Watson</strong>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide px-3">
                  <div class="testimonial card rounded-lg shadow border-0">
                    <div class="testimonial-avatar">
                      <img
                        src="images/avatar/avatar-3.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="text">
                      <div class="testimonial-quote">
                        <i class="fas fa-quote-right"></i>
                      </div>
                      <p class="testimonial-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                      <strong>Jessica Watson</strong>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide px-3">
                  <div class="testimonial card rounded-lg shadow border-0">
                    <div class="testimonial-avatar">
                      <img
                        src="images/avatar/avatar-3.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="text">
                      <div class="testimonial-quote">
                        <i class="fas fa-quote-right"></i>
                      </div>
                      <p class="testimonial-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                      <strong>Jessica Watson</strong>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide px-3">
                  <div class="testimonial card rounded-lg shadow border-0">
                    <div class="testimonial-avatar">
                      <img
                        src="images/avatar/avatar-3.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="text">
                      <div class="testimonial-quote">
                        <i class="fas fa-quote-right"></i>
                      </div>
                      <p class="testimonial-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                      <strong>Jessica Watson</strong>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide px-3">
                  <div class="testimonial card rounded-lg shadow border-0">
                    <div class="testimonial-avatar">
                      <img
                        src="images/avatar/avatar-3.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="text">
                      <div class="testimonial-quote">
                        <i class="fas fa-quote-right"></i>
                      </div>
                      <p class="testimonial-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                      <strong>Jessica Watson</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="Blog-list pt80 pb50">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8">
          <p class="subtitle text-secondary nopadding">
            Stories from around the globe
          </p>
          <h1 class="paddtop1 font-weight lspace-sm">From our blog</h1>
        </div>
        <div class="col-md-4 d-md-flex align-items-center justify-content-end">
          <a href="blog_grid.html" class="blist text-sm">
            See all articles<i class="fas fa-angle-double-right ml-2"></i
          ></a>
        </div>
      </div>
      <div class="row">
        <!-- blog item-->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
          <div class="card shadow border-0 h-100">
            <a href="post.html"
              ><img
                src="images/b1.jpg"
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
                src="images/b2.jpg"
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
                src="images/b3.jpg"
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
    </div>
  </section>
  <section class="section-less-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="clientlogo-list">
            <li><img src="images/client-logo1.png" alt="" /></li>
            <li><img src="images/client-logo2.png" alt="" /></li>
            <li><img src="images/client-logo3.png" alt="" /></li>
            <li><img src="images/client-logo4.png" alt="" /></li>
            <li><img src="images/client-logo5.png" alt="" /></li>
            <li><img src="images/client-logo6.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
