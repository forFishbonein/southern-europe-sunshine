<script setup lang="ts"></script>

<template>
  <div class="container-fluid px-3 register">
    <div class="row min-vh-100">
      <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
        <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
          <div class="mb-4">
            <h2>Sign up</h2>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
          <form class="form-validate">
            <div class="form-group">
              <input
                name="loginUsername"
                id="loginUsername"
                type="email"
                placeholder="name@address.com"
                autocomplete="off"
                required=""
                data-msg="Please enter your email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                name="loginPassword"
                id="loginPassword"
                placeholder="Password"
                type="password"
                required=""
                data-msg="Please enter your password"
                class="form-control"
              />
            </div>
            <div class="form-group mb-4">
              <input
                name="loginPassword2"
                id="loginPassword2"
                placeholder="Password"
                type="password"
                required=""
                data-msg="Please enter your password"
                class="form-control"
              />
            </div>
            <button type="submit" class="btn btn-lg btn-block btn-primary">
              Sign up
            </button>
            <hr data-content="OR" class="my-3 hr-text letter-spacing-2" />
            <button
              class="btn btn btn-outline-primary btn-block btn-social mb-3"
            >
              <i class="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect
              <span class="d-none d-sm-inline">with Facebook</span>
            </button>
            <button class="btn btn btn-outline-muted btn-block btn-social mb-3">
              <i class="fa-2x fa-google fab btn-social-icon"> </i>Connect
              <span class="d-none d-sm-inline">with Google</span>
            </button>
            <hr class="my-4" />
          </form>
        </div>
      </div>
      <div class="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
        <!-- Image-->
        <div
          style="background-image: url(images/register.jpg)"
          class="bg-cover h-100 mr-n3"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
