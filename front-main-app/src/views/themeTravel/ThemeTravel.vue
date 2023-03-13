<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import emitter from "@/mitt/event";
import { getAllThemeTypeInfo } from "@/apis/theme";
import { themeTypesType } from "@/apis/interface/resultType";
const router = useRouter();
const allTypes = ref([] as themeTypesType[]);
const getAllTypes = () => {
  getAllThemeTypeInfo()
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        allTypes.value = res.data;
      }
    })
    .catch((error) => {
      //@ts-ignore
      ElMessage({
        type: "error",
        message: error.message,
      });
    });
};
getAllTypes();
const selectTheme = ref("1");
emitter.on("synOptions", (value) => {
  if (selectTheme.value !== value) {
    // @ts-ignore
    selectTheme.value = value;
  }
});
watch(selectTheme, (newValue, oldValue) => {
  // if (Number(newValue) === 1) {
  router.push(`/themeTravel/items/${newValue}`);
  //   } else if (Number(newValue) === 2) {
  //     router.push("/themeTravel/items/2");
  //   } else if (Number(newValue) === 3) {
  //     router.push("/themeTravel/items/3");
  //   }
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
        <el-radio-group v-model="selectTheme" size="large" class="warp-types">
          <div>
            <el-radio-button label="0" class="item-button-type"
              >全部</el-radio-button
            >
            <el-radio-button
              v-for="(item, index) in allTypes"
              :key="index"
              :label="item.themeTypeId"
              class="item-button-type"
              >{{ item.typeName }}</el-radio-button
            >
          </div>
        </el-radio-group>
      </div>
    </div>
  </section>

  <router-view :key="$route.fullPath" />
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
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.2);
  // animation: tittlemove alternate infinite 3s ease-in-out;
  transition: 0.4s cubic-bezier(1, -2.02, 0.38, 2.05);
}
// @keyframes tittlemove {
//   0% {
//   }
//   50% {
//     transform: translateY(-5px);
//   }
//   100% {
//     transform: translateY(5px);
//   }
// }
::v-deep .el-radio-button:hover {
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);
  transform: translate(0px, -5px);
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
::v-deep .el-radio-button__inner {
  font-weight: 600;
}
.warp-types {
  width: 100%;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  .item-button-type {
    margin-right: 16px;
    margin-bottom: 12px;
  }
}
</style>
