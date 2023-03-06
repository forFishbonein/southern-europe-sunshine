<script setup lang="ts">
import { ref } from "vue";

const selectTheme = ref("1");
</script>

<template>
  <section class="breadcromb-top section_100">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ol class="text-white justify-content-center no-border mb-0">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Edit Listing</li>
          </ol>
          <div class="breadcromb-box">
            <h3>Edit Listing</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pt80 pb80 listingDetails">
    <div class="container">
      <div class="row">
        <el-radio-group v-model="selectTheme" size="large">
          <div>
            <el-radio-button label="1">美食</el-radio-button>
            <el-radio-button label="Washington"></el-radio-button>
            <el-radio-button label="Los Angeles"></el-radio-button>
            <el-radio-button label="Chicago"></el-radio-button>
            <el-radio-button label="New York" />
            <el-radio-button label="Washington" />
            <el-radio-button label="Los Angeles" />
            <el-radio-button label="Chicago" />
          </div>
          <div style="width: 100%; height: 10px"></div>
          <!-- <div style="width: 100%; height: 10px"></div> -->
          <div>
            <el-radio-button label="New York" />
            <el-radio-button label="Washington" />
            <el-radio-button label="Los Angeles" />
            <el-radio-button label="Chicago" />
            <el-radio-button label="New York" />
            <el-radio-button label="Washington" />
            <el-radio-button label="Los Angeles" />
            <el-radio-button label="Chicago" />
          </div>
          <div style="width: 100%; height: 10px"></div>
          <!-- <div>

          </div>
          <div style="width: 100%; height: 10px"></div> -->
          <div>
            <el-radio-button label="New York" />
            <el-radio-button label="Washington" />
            <el-radio-button label="Los Angeles" />
            <el-radio-button label="Chicago" />
            <el-radio-button label="New York" />
            <el-radio-button label="Washington" />
            <el-radio-button label="Los Angeles" />
            <el-radio-button label="Chicago" />
          </div>
          <div style="width: 100%; height: 10px"></div>
        </el-radio-group>
      </div>
    </div>
  </section>

  <router-view />
</template>

<style lang="scss" scoped>
.el-radio-group {
  display: flex;
  justify-content: center;
}
.el-radio-button {
  margin-left: 5px;
  margin-right: 5px;
}
::v-deep .el-radio-button__inner {
  border-left: 1px solid #dcdfe6;
  border-radius: 2px;
  overflow: hidden;
  box-sizing: border-box;
  width: 120px;
  height: 40px;
}
.listingDetails {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
