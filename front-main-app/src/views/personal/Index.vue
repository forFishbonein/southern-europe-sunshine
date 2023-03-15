<script setup lang="ts">
import { ref, reactive } from "vue";
import { mainStore } from "@/store/user";
import moment from "moment";
const store = mainStore();
const activeIndex = ref("/personal/center");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <section class="breadcromb-top section_100">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ol class="text-white justify-content-center no-border mb-0">
            <li class="breadcrumb-item">
              <router-link to="/home">首页</router-link>
            </li>
            <li class="breadcrumb-item active">个人中心</li>
          </ol>
          <div class="breadcromb-box">
            <h3>个人中心</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="clearfix bg-dark profileSection pt80 pb80 admin-page">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-5 col-xs-12">
          <div class="dashboardBoxBg mb30">
            <div class="profileImage">
              <img
                :src="store.userInfo.imageUrl"
                alt="Image User"
                class="img-circle"
              />
              <div class="file-upload profileImageUpload">
                <div class="upload-area">
                  <input type="file" name="img[]" class="file" />
                  <button class="browse" type="button">
                    更换头像 <i class="icon-listy icon-upload"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="profileUserInfo bt profileName">
              <!-- <p>Your Current Plan</p> -->
              <h2>{{ store.userInfo.userName }}</h2>
              <h5>
                注册时间:
                <span>{{
                  moment(store.userInfo.createDate).format("YYYY-MM-DD")
                }}</span>
              </h5>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-sm-7 col-xs-12">
          <div class="header-nav-container">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              router="true"
            >
              <el-menu-item index="/personal/center">首页</el-menu-item>
              <el-menu-item index="/personal/myroute">行程</el-menu-item>
              <el-menu-item index="/personal/star">收藏</el-menu-item>
              <el-menu-item index="/personal/myteam">队伍</el-menu-item>
              <el-menu-item index="/personal/advance">预定</el-menu-item>
              <el-menu-item index="/personal/setup">改密</el-menu-item>
            </el-menu>
          </div>
          <form><router-view :key="$route.fullPath" /></form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header-nav-container {
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  // margin: 0 auto;
  // border: 1px #e8604c solid;
  .el-menu-demo {
    font-weight: 800;
    display: flex;
    justify-content: space-around;
    // > li:first-child {
    //   margin-left: 400px;
    // }
  }
}
// .btn-primary {
//   padding: 0;
//   display: flex;
//   justify-content: center;
//   margin: 0 auto;
// }
</style>
