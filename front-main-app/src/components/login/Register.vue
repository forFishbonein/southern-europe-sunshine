<script setup lang="ts">
import { onMounted, reactive, toRefs, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { mainStore } from "@/store/user";
const router = useRouter();
interface registerInfo {
  email: string;
  password: string;
  password2: string;
}
const registerData: registerInfo = reactive({
  email: "",
  password: "",
  password2: "",
});
const store = mainStore();
const { email, password, password2 } = toRefs(registerData);
const reg =
  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
const register = () => {
  if (email.value !== "" && password.value !== "" && password2.value !== "") {
    if (reg.test(email.value)) {
      if (password.value === password2.value) {
        store
          .register({
            email: email.value,
            password: password.value,
          })
          .then((res: any) => {
            // console.log(res.code != 2000);
            if (res.code != 2000) {
              //@ts-ignore
              ElMessage({
                type: "error",
                message: res.msg,
              });
            } else {
              // @ts-ignore
              ElMessage({
                type: "success",
                message: "欢迎加入南欧阳光！",
              });
              router.replace("/login");
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
          message: "两次输入的密码不一致！",
        });
      }
    } else {
      // @ts-ignore
      ElMessage({
        type: "warning",
        message: "请输入正确的邮箱地址！",
      });
    }
  } else {
    // @ts-ignore
    ElMessage({
      type: "warning",
      message: "请将信息填写完整！",
    });
  }
};
</script>

<template>
  <div class="container-fluid px-3 register">
    <div class="row min-vh-100">
      <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
        <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
          <div class="mb-4">
            <h2>注册</h2>
            <p class="text-muted">
              加入南欧阳光，我们将给您提供良好的旅游体验，带您打开足球文化的世界，享受欧洲娱乐！
              <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation -->
            </p>
          </div>
          <form
            class="form-validate"
            autocomplete="off"
            @submit.prevent="register"
          >
            <div class="form-group">
              <input
                name="loginUsername"
                id="loginUsername"
                type="email"
                placeholder="邮箱"
                autocomplete="off"
                required
                data-msg="请输入邮箱"
                class="form-control"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <input
                name="loginPassword"
                id="loginPassword"
                placeholder="密码"
                type="password"
                required
                data-msg="请输入密码"
                class="form-control"
                v-model="password"
              />
            </div>
            <div class="form-group mb-4">
              <input
                name="loginPassword2"
                id="loginPassword2"
                placeholder="再次输入密码"
                type="password"
                required
                data-msg="请再次输入密码"
                class="form-control"
                v-model="password2"
              />
            </div>
            <button type="submit" class="btn btn-lg btn-block btn-primary">
              注册
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
          style="
            background-image: url(/images/home2.jpg);
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
