<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const selection = ref("1");
watch(selection, (newValue, oldValue) => {
  if (Number(newValue) === 1) {
    router.push("/visaInsurance/visa/list");
  } else if (Number(newValue) === 2) {
    router.push("/visaInsurance/insurance/list");
  }
});
</script>

<template>
  <section class="breadcromb-top section_100">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ol class="text-white justify-content-center no-border mb-0">
            <li class="breadcrumb-item"><a href="index.html">首页</a></li>
            <li class="breadcrumb-item active">签证保险</li>
          </ol>
          <div class="breadcromb-box">
            <h3>签证保险</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div
    class="row mb-5"
    style="display: flex; justify-content: center; margin: 15px 20px !important"
  >
    <div class="col-md-8" style="display: flex; justify-content: center">
      <el-radio-group v-model="selection">
        <el-radio label="1" size="large" border>签证</el-radio>
        <el-radio label="2" size="large" border>保险</el-radio>
      </el-radio-group>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss" scoped></style>
