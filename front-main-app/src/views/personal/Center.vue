<script setup lang="ts"></script>

<template>
  <div class="dashboardBoxBg">
    <div class="profileIntro">
      <h2>Your Profile</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form Ipsum available.
      </p>
    </div>
  </div>
  <div class="dashboardBoxBg mt30">
    <div class="profileIntro">
      <h3>About You</h3>
      <div class="row">
        <div class="form-group col-sm-6 col-xs-12">
          <label for="firstNameProfile">Fast Name</label>
          <input
            type="text"
            class="form-control"
            id="firstNameProfile"
            placeholder="Jane"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="lastNameProfile">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="lastNameProfile"
            placeholder="Doe"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="emailProfile">Email</label>
          <input
            type="text"
            class="form-control"
            id="emailProfile"
            placeholder="Jane@example.com"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="phoneProfile">Phone</label>
          <input
            type="text"
            class="form-control"
            id="phoneProfile"
            placeholder="254 - 265 - 3265"
          />
        </div>
        <div class="form-group col-md-12 col-xs-12">
          <label for="aboutYou">About You</label>
          <textarea
            class="form-control"
            rows="5"
            id="aboutYou"
            placeholder="About You"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
  <div class="dashboardBoxBg mt30">
    <div class="profileIntro">
      <h3>Social Network</h3>
      <div class="row">
        <div class="form-group col-sm-6 col-xs-12">
          <label for="linkedInUrl">Linked in URL</label>
          <input
            type="text"
            class="form-control"
            id="linkedInUrl"
            placeholder="http://linkedin.com/"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="facebookUrl">Facebook URL</label>
          <input
            type="text"
            class="form-control"
            id="facebookUrl"
            placeholder="http://facebook.com/"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="twitterUrl">Twitter URL</label>
          <input
            type="text"
            class="form-control"
            id="twitterUrl"
            placeholder="http://twitter.com/"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="youTubeUrl">You Tube URL</label>
          <input
            type="text"
            class="form-control"
            id="youTubeUrl"
            placeholder="http://youtube.com/"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="btn-area mt30">
    <button class="btn btn-primary" type="button">Save Change</button>
  </div>
  <div class="dashboardBoxBg mt30">
    <div class="profileIntro">
      <h3>Update password</h3>
      <div class="row">
        <div class="form-group col-md-12 col-xs-12">
          <label for="currentPassword">Current Password</label>
          <input
            type="password"
            class="form-control"
            id="currentPassword"
            placeholder="********"
          />
        </div>
        <div class="form-group col-md-12 col-xs-12">
          <label for="newPassword">New Password</label>
          <input
            type="password"
            class="form-control"
            id="newPassword"
            placeholder="New Password"
          />
        </div>
        <div class="form-group col-md-12 col-xs-12">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <div class="form-group col-md-12 col-xs-12">
          <button class="btn btn-primary" type="button">Change Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
