<script setup lang="ts"></script>

<template>
  <div class="dashboardBoxBg mt30">
    <div class="profileIntro">
      <h3>修改密码</h3>
      <div class="row">
        <div class="form-group col-md-12 col-xs-12">
          <label for="currentPassword">当前密码</label>
          <input
            type="password"
            class="form-control"
            id="currentPassword"
            placeholder="当前密码"
          />
        </div>
        <div class="form-group col-md-12 col-xs-12">
          <label for="newPassword">新密码</label>
          <input
            type="password"
            class="form-control"
            id="newPassword"
            placeholder="新密码"
          />
        </div>
        <div class="form-group col-md-12 col-xs-12">
          <label for="confirmPassword">确认密码</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            placeholder="再次输入密码"
          />
        </div>
        <div class="form-group col-md-12 col-xs-12">
          <button class="btn btn-primary" type="button">确认修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
