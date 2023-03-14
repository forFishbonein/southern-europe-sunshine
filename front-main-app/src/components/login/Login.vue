<script setup lang="ts">
/**
 * @description  密码登录
 */
import { mainStore } from "@/store/user";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

interface passLoginInfo {
  email: string;
  password: string;
}
const passData: passLoginInfo = reactive({
  email: "",
  password: "",
});
const { email, password } = toRefs(passData);
const store = mainStore();
const passLogin = () => {
  if (email.value !== "" && password.value !== "") {
    store
      .passLogin(passData)
      .then((res: any) => {
        if (res.code != 2000) {
          //@ts-ignore
          ElMessage({
            type: "error",
            message: res.msg,
          });
        } else {
          //@ts-ignore
          ElMessage({
            type: "success",
            message: "登录成功！",
          });
          router.replace("/");
        }
      })
      .catch((error) => {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: error.message,
        });
      });
  } else {
    // @ts-ignore
    ElMessage({
      type: "warning",
      message: "请将信息填写完整！！",
    });
  }
};
</script>

<template>
  <div class="container-fluid px-3 register">
    <div class="row min-vh-100">
      <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
        <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
          <div class="mb-5">
            <h2>欢迎来到南欧阳光！</h2>
          </div>
          <form
            class="form-validate"
            autocomplete="off"
            @submit.prevent="passLogin"
          >
            <div class="form-group">
              <input
                name="loginUsername"
                id="loginUsername"
                type="email"
                placeholder="邮箱"
                autocomplete="off"
                required
                data-msg="请输入你的邮箱"
                class="form-control"
                v-model="email"
              />
            </div>
            <div class="form-group mb-4">
              <div class="row">
                <div class="col"></div>
                <div class="col-auto">
                  <a href="javascript:;" class="form-text small">忘记密码?</a>
                </div>
              </div>
              <input
                name="loginPassword"
                id="loginPassword"
                placeholder="密码"
                type="password"
                required
                data-msg="请输入你的密码"
                class="form-control"
                v-model="password"
              />
            </div>
            <!-- <div class="form-group mb-4">
              <div class="custom-control custom-checkbox">
                <input
                  id="loginRemember"
                  type="checkbox"
                  class="custom-control-input"
                />
                <label
                  for="loginRemember"
                  class="custom-control-label text-muted"
                >
                  <span class="text-sm">Remember me for 30 days</span></label
                >
              </div>
            </div> -->
            <!-- Submit-->
            <button class="btn btn-lg btn-block btn-primary">登录</button>
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
            <p class="text-center">
              <small class="text-muted text-center"
                >还没有账号?
                <router-link to="/register">点击注册</router-link></small
              >
            </p>
          </form>
        </div>
      </div>
      <div class="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
        <!-- Image-->
        <div
          style="
            background-image: url(/images/home1.jpg);
            background-size: cover;
            width: 100%;
            background-position: center center !important;
          "
          class="bg-cover h-100 mr-n3"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
