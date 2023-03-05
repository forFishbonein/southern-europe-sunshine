<script setup lang="ts"></script>

<template>
  <section class="Campaigns pt80 pb80 listingDetails">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <!-- About Listing-->

          <div class="text-block">
            <!-- Gallery-->
            <h3 class="mb-4">Gallery</h3>
            <div class="row gallery ml-n1 mr-n1">
              <div class="col-lg-4 col-6 px-1 mb-2">
                <a href="/images/restaurant-1.jpg"
                  ><img
                    src="/images/restaurant-1.jpg"
                    alt="..."
                    class="img-fluid"
                /></a>
              </div>
              <div class="col-lg-4 col-6 px-1 mb-2">
                <a href="/images/restaurant-2.jpg"
                  ><img
                    src="/images/restaurant-2.jpg"
                    alt="..."
                    class="img-fluid"
                /></a>
              </div>
              <div class="col-lg-4 col-6 px-1 mb-2">
                <a href="/images/restaurant-3.jpg"
                  ><img
                    src="/images/restaurant-3.jpg"
                    alt="..."
                    class="img-fluid"
                /></a>
              </div>
            </div>
          </div>
          <div class="text-block">
            <p class="text-primary">
              <i class="fa-map-marker-alt fa mr-1"></i> 183 Cali, Delhi, NY 1129
            </p>
            <h1>Panpacific Blue Hill Resturant &amp; Bar</h1>
            <ul class="list-inline text-sm mb-4">
              <li class="list-inline-item mr-3">
                <i class="fa fa-users mr-1 text-secondary"></i> 4 guests
              </li>
              <li class="list-inline-item mr-3">
                <i class="fa fa-door-open mr-1 text-secondary"></i> 1 bedroom
              </li>
              <li class="list-inline-item mr-3">
                <i class="fa fa-bed mr-1 text-secondary"></i> 3 beds
              </li>
              <li class="list-inline-item mr-3">
                <i class="fa fa-bath mr-1 text-secondary"></i> 1 bath
              </li>
            </ul>
            <p class="text-muted font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <p class="text-muted font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="text-muted font-weight-light">Also in the apartment:</p>
            <ul class="text-muted font-weight-light roomlist">
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>dolore eu fugiat nulla pariatur</li>
              <li>sed do eiusmod tempor incididunt</li>
              <li>Fresh Sheets and Towels</li>
              <li>dolore eu fugiat nulla pariatur</li>
            </ul>
            <p class="text-muted font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <!-- Amenities-->
          <div class="text-block">
            <h3 class="mb-4">Amenities</h3>
            <div class="row">
              <div class="col-md-6">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2">
                    <i
                      class="fa fa-wifi text-secondary w-1rem mr-3 text-center"
                    ></i>
                    <span class="text-sm">Wifi</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-tv text-secondary w-1rem mr-3 text-center"
                    ></i>
                    <span class="text-sm">Cable TV</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-snowflake text-secondary w-1rem mr-3 text-center"
                    ></i>
                    <span class="text-sm">Air conditioning</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-thermometer-three-quarters text-secondary w-1rem mr-3 text-center"
                    ></i>
                    <span class="text-sm">Heating</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-unstyled text-muted">
                  <li class="mb-2">
                    <i
                      class="fa fa-bath text-secondary w-1rem mr-3 text-center"
                    ></i
                    ><span class="text-sm">Toiletteries</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-utensils text-secondary w-1rem mr-3 text-center"
                    ></i
                    ><span class="text-sm">Equipped Kitchen</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-laptop text-secondary w-1rem mr-3 text-center"
                    ></i
                    ><span class="text-sm">Desk for work</span>
                  </li>
                  <li class="mb-2">
                    <i
                      class="fa fa-tshirt text-secondary w-1rem mr-3 text-center"
                    ></i
                    ><span class="text-sm">Washing machine</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 right_Details">
          <div class="p-4 shadow ml-lg-4 rounded sticky-top" style="top: 100px">
            <p class="text-muted">
              <span class="text-primary h2">$80</span>/ night
            </p>
            <hr class="my-4" />
            <form
              id="booking-form"
              method="get"
              action="#"
              autocomplete="off"
              class="form"
            >
              <div class="form-group">
                <label for="bookingDate" class="form-label">Your stay *</label>
                <div class="datepicker-container datepicker-container-right">
                  <input
                    type="text"
                    name="bookingDate"
                    id="bookingDate"
                    placeholder="Choose your dates"
                    required
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group mb-4">
                <label for="guests" class="form-label">Guests *</label>
                <select name="guests" id="guests" class="form-control">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                </select>
              </div>
              <div class="form-group mb-4">
                <label for="guests" class="form-label">Child *</label>
                <select name="guests" id="guests" class="form-control">
                  <option value="1">1 Child</option>
                  <option value="2">2 Child</option>
                  <option value="3">3 Child</option>
                </select>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">
                  Book your stay
                </button>
              </div>
            </form>
            <hr class="my-4" />
            <div class="text-center">
              <p>
                <a href="#" class="text-secondary text-sm">
                  <i class="fa fa-heart"></i> Bookmark This Listing</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
