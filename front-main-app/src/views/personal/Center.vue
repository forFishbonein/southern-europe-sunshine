<script setup lang="ts">
import { ref, reactive } from "vue";
import { modifyUserInfo } from "@/apis/user/user";
import { UserInfo } from "@/apis/user/uInterface";
import { mainStore } from "@/store/user";
import { useRouter } from "vue-router";
const router = useRouter();
const store = mainStore();
let userInfo = reactive(store.userInfo);
const updateFlag = ref(false);
const changeTheFlag = () => {
  if (updateFlag.value === false) {
    updateFlag.value = true;
  } else {
    updateFlag.value = false;
  }
};
const updateTheUserInfo = () => {
  modifyUserInfo(userInfo)
    .then((res: any) => {
      if (res.code != 2000) {
        // @ts-ignore
        ElMessage({ type: "error", message: res.msg });
      } else {
        // @ts-ignore
        ElMessage({ type: "success", message: "修改成功，请重新登录！" });
        updateFlag.value = false;
        store.logout();
        setTimeout(() => {
          router.replace("/login");
        }, 1000);
      }
    })
    .catch((error) => {
      // @ts-ignore
      ElMessage({ type: "error", message: error.message });
    });
};
</script>

<template>
  <!-- <div class="dashboardBoxBg">
    <div class="profileIntro">
      <h2>Your Profile</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form Ipsum available.
      </p>
    </div>
  </div> -->
  <div class="dashboardBoxBg mt30">
    <div class="profileIntro">
      <h3>个人信息</h3>
      <div class="row">
        <div class="form-group col-sm-6 col-xs-12">
          <label for="firstNameProfile">用户名</label>
          <input
            type="text"
            class="form-control"
            id="firstNameProfile"
            v-model="userInfo.userName"
            :disabled="updateFlag === false"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="lastNameProfile">性别</label>
          <input
            type="text"
            class="form-control"
            id="lastNameProfile"
            v-model="userInfo.sex"
            :disabled="updateFlag === false"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="emailProfile">邮箱</label>
          <input
            type="text"
            class="form-control"
            id="emailProfile"
            v-model="userInfo.email"
            :disabled="updateFlag === false"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="phoneProfile">电话</label>
          <input
            type="text"
            class="form-control"
            id="phoneProfile"
            v-model="userInfo.phone"
            :disabled="updateFlag === false"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="emailProfile">生日</label>
          <input
            type="text"
            class="form-control"
            id="emailProfile"
            v-model="userInfo.birthday"
            :disabled="updateFlag === false"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="phoneProfile">地址</label>
          <input
            type="text"
            class="form-control"
            id="phoneProfile"
            v-model="userInfo.address"
            :disabled="updateFlag === false"
          />
        </div>
        <div class="form-group col-sm-6 col-xs-12">
          <label for="emailProfile">教育背景</label>
          <input
            type="text"
            class="form-control"
            id="emailProfile"
            v-model="userInfo.education"
            :disabled="updateFlag === false"
          />
        </div>
        <div class="form-group col-md-12 col-xs-12">
          <label for="aboutYou">兴趣爱好</label>
          <textarea
            class="form-control"
            rows="5"
            id="aboutYou"
            v-model="userInfo.interest"
            :disabled="updateFlag === false"
          ></textarea>
        </div>
        <a
          href="javascript:;"
          class="btn btn-primary btn-primary-update"
          v-if="updateFlag"
          @click="updateTheUserInfo"
          >保存修改</a
        >
        <a
          href="javascript:;"
          class="btn btn-primary btn-primary-update"
          v-else
          @click="changeTheFlag"
          >修改信息</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-primary-update {
  margin-left: 20px;
  height: 2em;
  line-height: 2em;
}
</style>
