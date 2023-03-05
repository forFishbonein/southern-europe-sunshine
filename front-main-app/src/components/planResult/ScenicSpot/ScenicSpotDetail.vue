<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { theCityScenerysInfoType } from "@/apis/interface/myInterface";
const router = useRouter();
const props = defineProps<{
  sceneryDetailInfoString: string;
}>();
console.log("scenic detail页面");
console.log(props.sceneryDetailInfoString);
let sceneryDetailInfo = ref({} as theCityScenerysInfoType);
if (props.sceneryDetailInfoString) {
  sceneryDetailInfo.value = JSON.parse(props.sceneryDetailInfoString);
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
  <el-scrollbar max-height="390px" class="detail-main">
    <div class="detail-main-header">
      <div class="left-img">
        <img :src="sceneryDetailInfo.url" alt="" />
      </div>
      <div class="right-info">
        <p>{{ sceneryDetailInfo.name }}</p>
        <p>
          <span style="color: #303133">地址：</span>
          {{ sceneryDetailInfo.address }}
        </p>
        <p>
          <span style="color: #303133">票价：</span>
          {{ sceneryDetailInfo.ticket }}元
        </p>
        <p>
          <span style="color: #303133">开放时间：</span>
          {{ sceneryDetailInfo.opening }}
        </p>
      </div>
    </div>
    <div class="detail-main-body">
      <div class="title">
        <el-icon><Document /></el-icon>详情信息
      </div>
      <div class="content">
        <p>
          <span style="color: #303133">景区评分：</span>
          {{ sceneryDetailInfo.score }}
        </p>
        <p>
          <span style="color: #303133">简介：</span>
          {{ sceneryDetailInfo.introduction }}
        </p>
        <p>
          <span style="color: #303133">推荐理由：</span>
          {{ sceneryDetailInfo.season }}
        </p>
        <p>
          <span style="color: #303133">小贴士：</span>
          {{ sceneryDetailInfo.tips }}
        </p>
        <p>
          <span style="color: #303133">联系电话：</span>
          {{ sceneryDetailInfo.tele }}
        </p>
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
.detail-main {
  width: 100%;
  margin: 0 auto;
  height: 390px;
  .detail-main-header {
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
    // align-items: center;
    width: 420px;
    border: 1px #dcdfe6 solid;
    .left-img {
      width: 180px;
      height: 150px;
      // border: 1px #e8604c solid;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right-info {
      width: 240px;
      height: 150px;
      padding: 10px;
      // border: 1px #e8604c solid;
      p {
        margin: 0;
        line-height: 1.2em;
        margin: 3px 0;
        font-size: 12px;
      }
      p:first-child {
        font-size: 15px;
        color: #e8604c;
        font-weight: 700;
      }
    }
  }
  .detail-main-body {
    width: 420px;
    margin: 0 auto;
    .title {
      width: auto;
      height: 40px;
      // border: 1px #e8604c solid;
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #e8604c;
      border: 1px #dcdfe6 solid;
      i {
        margin: 0 5px;
      }
    }
    .content {
      width: auto;
      display: flex;
      flex-direction: column;
      min-height: 150px;
      // border: 1px #e8604c solid;
      border: 1px #dcdfe6 solid;
      border-top: 0;
      padding: 0 8px;
      p {
        margin: 0;
        line-height: 1.2em;
        margin: 3px 0;
        font-size: 12px;
      }
      // p:first-child {
      //   font-size: 15px;
      //   color: #e8604c;
      //   font-weight: 700;
      // }
    }
  }
}
</style>
