<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import {
  totalRouteInfoType,
  oneRouteDetailInfoType,
} from "@/apis/interface/plan";
import { getPlanRoutesByUserId } from "@/apis/plan";
import { mainStore } from "@/store/user";
import router from "@/router";
const store = mainStore();
let totalRoutesInfoList = ref([] as totalRouteInfoType[]);
// const routesList = ref([] as oneRouteDetailInfoType[]);
const getPlansByUserId = () => {
  getPlanRoutesByUserId(store.userInfo.userid)
    .then((res: any) => {
      if (res.code != 2000) {
        // @ts-ignore
        ElMessage({ type: "error", message: res.msg });
      } else {
        totalRoutesInfoList.value = res.data;
        console.log(totalRoutesInfoList.value);
      }
    })
    .catch((error) => {
      // @ts-ignore
      ElMessage({ type: "error", message: error.message });
    });
};
const goToViewRoutes = (id: string) => {
  router.push({
    name: "TrvalPlan",
    params: {
      planId: id,
    },
  });
};
const getName = (item) => {
  // alert(111);
  if (item.type === "酒店") {
    return item.hotelinfo.hotelNameCn;
  } else if (item.type === "景点") {
    return item.scenicspotinfo.scenicNameCn;
  } else {
    return "未知";
  }
};
onMounted(() => {
  getPlansByUserId();
});
</script>

<template>
  <el-card
    class="box-card"
    v-for="(i, k) in totalRoutesInfoList"
    :key="k"
    style="margin-bottom: 30px"
  >
    <template #header>
      <div class="card-header">
        <span>{{ i.title }}</span>
        <el-button class="button" text @click="goToViewRoutes(i.id)"
          >查看详情</el-button
        >
      </div>
    </template>
    <el-descriptions title="基本信息">
      <el-descriptions-item label="联系人">{{ i.title }}</el-descriptions-item>
      <el-descriptions-item label="联系电话">{{
        i.phone
      }}</el-descriptions-item>
      <el-descriptions-item label="出发日期">{{
        i.startDate
      }}</el-descriptions-item>
      <el-descriptions-item label="返回日期">{{
        i.returnDate
      }}</el-descriptions-item>
      <el-descriptions-item label="随行人数"
        >{{ i.num }}人</el-descriptions-item
      >
      <el-descriptions-item label="行程天数"
        >{{ i.days }}天</el-descriptions-item
      >
      <el-descriptions-item label="创建日期">{{
        i.createDate
      }}</el-descriptions-item>
    </el-descriptions>
    <div
      v-for="(item, index) in i.routeDetailsVoList"
      :key="index"
      class="text item"
    >
      时间：{{ item.date }}，城市：{{ item.cityinfoList[0].cityNameCn }}，{{
        item.type || "未知"
      }}：{{ getName(item) }}
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}
</style>
