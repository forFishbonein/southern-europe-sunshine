<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import emitter from "@/mitt/event";
const router = useRouter();
const selectTheme = ref("1");
emitter.on("synOptions", (value) => {
  if (selectTheme.value !== value) {
    // @ts-ignore
    selectTheme.value = value;
  }
});
watch(selectTheme, (newValue, oldValue) => {
  if (Number(newValue) === 1) {
    router.push("/themeTravel/items/1");
  } else if (Number(newValue) === 2) {
    router.push("/themeTravel/items/2");
  } else if (Number(newValue) === 3) {
    router.push("/themeTravel/items/3");
  }
});
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
            <li class="breadcrumb-item active">主题旅行</li>
          </ol>
          <div class="breadcromb-box">
            <h3>主题旅行</h3>
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
            <el-radio-button label="2">建筑</el-radio-button>
            <el-radio-button label="3">红酒</el-radio-button>
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
  transition: all 0.2s linear;
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);
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
::v-deep .el-radio-button:hover {
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.2);
}
</style>
