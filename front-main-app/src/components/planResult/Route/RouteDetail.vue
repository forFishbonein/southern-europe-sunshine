<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { everyCityPlansInfoType } from "@/apis/interface/myInterface";
const router = useRouter();
const props = defineProps<{
  routeDetailInfoString: string;
}>();
console.log("route detail页面");
console.log(props.routeDetailInfoString);
let routeDetailInfo = ref({} as everyCityPlansInfoType);
if (props.routeDetailInfoString) {
  routeDetailInfo.value = JSON.parse(props.routeDetailInfoString);
}
const backToList = () => {
  router.go(-1);
};
</script>

<template>
  <div class="detail-header">
    <div class="back-button" @click="backToList">
      <el-icon :size="30"><Close /></el-icon>
    </div>
  </div>
  <el-scrollbar max-height="300px" class="right-scrollbar-item2">
    <div class="route-body">
      <div class="body-left">
        <el-icon :size="30"><Collection /></el-icon>
      </div>
      <div class="body-right">
        <p class="body-title">
          {{ routeDetailInfo.city }}{{ routeDetailInfo.days.length }}日游
        </p>
        <div class="body-content">
          预算消费：{{ routeDetailInfo.budget }}元 &nbsp;&nbsp; 预计时长：{{
            routeDetailInfo.days.length
          }}天
        </div>
      </div>
      <div class="content-main">
        <p class="title">路线规划详情</p>
        <div
          v-for="(item, index) in routeDetailInfo.days"
          :key="index"
          class="content-item"
        >
          <p>第{{ index + 1 }}天</p>
          <p v-for="(i, index) in item.route" :key="index">
            目的地：{{ i.originName }} &nbsp; &nbsp;交通工具：{{
              i.vehicle
            }}
            &nbsp;&nbsp;停留时间：{{ i.departTime }}小时
          </p>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
.detail-header {
  width: 100%;
  height: 50px;
  border: 1px #dcdfe6 solid;
  .back-button {
    width: 50px;
    height: 50px;
    float: left;
    // border: 1px #e8604c solid;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .back-button:hover {
    background-color: #f48f80;
    i {
      color: white;
    }
  }
}
.right-scrollbar-item2 {
  float: left;
  height: 300px;
  width: 450px;
  margin: 0 auto;
  // border: 1px #dcdfe6 solid;
  padding: 10px;
  .route-body {
    border: 1px #dcdfe6 solid;
    // border: 1px #e8604c solid;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    flex-wrap: wrap;
    .body-left {
      width: 40px;
      height: 40px;
      padding-top: 20px;
      padding-left: 10px;
      // border: 1px #e8604c solid;
      float: left;
      margin-top: 10px;
      i {
        color: #e8604c;
      }
    }
    .body-right {
      width: 350px;
      height: 120px;
      // border: 1px #e8604c solid;
      padding-top: 20px;
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: start;
      .body-title {
        width: 200px;
        height: 40px;
        float: left;
        // border: 1px #e8604c solid;
        text-align: left;
        margin: 0;
        color: #303133;
      }
      .body-content {
        width: 350px;
        height: 80px;
        float: left;
        // border: 1px #e8604c solid;
        font-size: 14px;
        text-align: left;
        line-height: 1.5em;
        overflow: hidden;
      }
    }

    .content-main {
      width: 400px;
      display: flex;
      min-height: 150px;
      flex-direction: column;
      .title {
        width: 400px;
        border-top: 1px #dcdfe6 solid;
        border-bottom: 1px #dcdfe6 solid;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #303133;
        font-size: 18px;
        font-weight: 700;
      }
      .content-item {
        > p {
          margin: 0;
          line-height: 1.6em;
          font-size: 14px;
        }
        > p:first-child {
          color: #e8604c;
          font-weight: 700;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
