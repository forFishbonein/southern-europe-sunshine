<script setup lang="ts"></script>

<template>
  <section class="contact-pg-section pt60 pb60">
    <div class="container">
      <div class="row">
        <div class="col col-lg-12 col-md-12 col-sm-12">
          <div class="section-title-s4">
            <h2>Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7 col-md-6 col-sm-12">
          <form
            method="post"
            class="contact-validation-active"
            id="contact-form-main"
            novalidate="novalidate"
          >
            <div>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="Name*"
              />
            </div>
            <div>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Email*"
              />
            </div>
            <div>
              <input
                type="text"
                class="form-control"
                name="phone"
                id="phone"
                placeholder="Phone*"
              />
            </div>
            <div>
              <select name="subject" class="form-control">
                <option disabled="disabled" selected="">Contact subject</option>
                <option>Subject 1</option>
                <option>Subject 2</option>
                <option>Subject 3</option>
              </select>
            </div>
            <div class="fullwidth">
              <textarea
                class="form-control"
                name="note"
                id="note"
                placeholder="Case Description..."
              ></textarea>
            </div>
            <div class="submit-area">
              <button type="submit" class="theme-btn-s4">Submit Now</button>
              <div id="loader">
                <i class="ti-reload"></i>
              </div>
            </div>
          </form>
        </div>

        <div class="col-lg-5 col-md-6 col-sm-12">
          <div class="contact-info">
            <div>
              <div class="icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <div class="details">
                <h5>Call us</h5>
                <p>+65482456147485, 012574854</p>
              </div>
            </div>
            <div>
              <div class="icon">
                <i class="far fa-envelope"></i>
              </div>
              <div class="details">
                <h5>Mail us</h5>
                <p>demo@mail.com</p>
              </div>
            </div>
            <div>
              <div class="icon">
                <i class="fas fa-headphones-alt"></i>
              </div>
              <div class="details">
                <h5>Fax</h5>
                <p>+5+654651654</p>
              </div>
            </div>
            <div>
              <div class="icon">
                <i class="fas fa-street-view"></i>
              </div>
              <div class="details">
                <h5>Find us</h5>
                <p>45, street melabo direm aduto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end container -->
  </section>
</template>

<style lang="scss" scoped></style>
