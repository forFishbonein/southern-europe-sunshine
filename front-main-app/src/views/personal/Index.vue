<script setup lang="ts">
import { ref } from "vue";
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
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Profile</li>
          </ol>
          <div class="breadcromb-box">
            <h3>Profile</h3>
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
                src="/images/avatar/avatar-8.jpg"
                alt="Image User"
                class="img-circle"
              />
              <div class="file-upload profileImageUpload">
                <div class="upload-area">
                  <input type="file" name="img[]" class="file" />
                  <button class="browse" type="button">
                    Upload a Picture <i class="icon-listy icon-upload"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="profileUserInfo bt profileName">
              <p>Your Current Plan</p>
              <h2>Platinum Package</h2>
              <h5>Next Payment: <span>28/11/2020</span></h5>
              <a href="#" class="btn btn-primary">Change</a>
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
              <el-menu-item index="/personal/setup">修改</el-menu-item>
            </el-menu>
          </div>
          <form><router-view /></form>
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
</style>
