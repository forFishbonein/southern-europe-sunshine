<script setup lang="ts">
import { ref } from "vue";
import { getRouteList } from "@apis/travelService/route";
import { onMounted } from "@vue/runtime-core";
import {
  everyCityPlansInfoType,
  everyDayRoutesType,
} from "@/apis/interface/myInterface";
import emitter from "@/mitt/event";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps<{
  id: string;
}>();
// alert(props.id);
console.log("route页面" + props);
const cityId = props.id;
const routeListInfo = ref([] as everyCityPlansInfoType[]);
const requestRouteListInfo = async () => {
  await getRouteList(cityId)
    .then((res: any) => {
      if (res.code != 0) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        routeListInfo.value = res.data;
        console.log(routeListInfo.value);
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
/* 要在详情页展示的数据 */
let routeDetailInfo = {} as everyCityPlansInfoType;

/* 查看行程详细信息 */
const seeTheDetail = (index: number) => {
  routeDetailInfo = routeListInfo.value[index]; //这里必须要.value才可以
  console.log(routeDetailInfo);
  console.log(JSON.stringify(routeDetailInfo));
  router.push({
    name: "RouteDetail",
    params: {
      routeDetailInfo: JSON.stringify(routeDetailInfo),
    },
  });
};
/* 添加推荐行程信息到行程 */
const dialogVisible = ref(false);
let theRouteIndex: number;
const openTheWarnDialog = (index: number) => {
  dialogVisible.value = true;
  theRouteIndex = index;
  // alert(theRouteIndex);
};
//但是传到结果页时的应该只需要里面的days即可！！！，要重新赋值
//要定义一个新的类型，不应该直接用routeListInfo[theRouteIndex]
let daysPlanInfo = [] as everyDayRoutesType[];
const addToTheCityPlan = () => {
  dialogVisible.value = false;
  daysPlanInfo = routeListInfo.value[theRouteIndex].days;
  // console.log(daysPlanInfo);
  emitter.emit("addPlan", daysPlanInfo);
};
onMounted(() => {
  requestRouteListInfo();
});
</script>

<template>
  <el-scrollbar max-height="480px">
    <div
      v-for="(item, index) in routeListInfo"
      :key="index"
      class="right-scrollbar-item2"
    >
      <div class="route-body">
        <div class="body-left">
          <el-icon :size="30"><Collection /></el-icon>
        </div>
        <div class="body-right">
          <p class="body-title">{{ item.city }}{{ item.days.length }}日游</p>
          <div class="body-content">
            {{ item.budget }}元{{ item.days.length }}天游{{
              item.city
            }}，爱旅游带你Fall in Love with
            Travel，点击下方添加到行程就可以用我作为你的行程模板啦！
          </div>
        </div>
      </div>
      <div class="route-buttons">
        <div @click="seeTheDetail(index)">
          <el-icon :size="15"><Document /></el-icon>
          查看详情
        </div>
        <div @click="openTheWarnDialog(index)">+ 添加到行程</div>
      </div>
    </div>
  </el-scrollbar>
  <el-dialog v-model="dialogVisible" title="警告" width="30%">
    <span>此操作会覆盖此前制定的行程，确定要继续吗？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addToTheCityPlan"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.el-scrollbar__view {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.right-scrollbar-item2 {
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin: 10px;
  width: 420px;
  text-align: center;
  background: #fff;
  overflow: hidden;
  position: relative;
  border: 1px #dcdfe6 solid;
  .route-body {
    width: 100%;
    height: 160px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    .body-left {
      width: 50px;
      height: 40px;
      //   border: 1px #e8604c solid;
      float: left;
      margin-top: 10px;
      i {
        color: #e8604c;
      }
    }
    .body-right {
      width: 350px;
      height: 120px;
      //   border: 1px #e8604c solid;
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
  }
  .route-buttons {
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: 0;
    border-top: 1px #dcdfe6 solid;
    > div {
      width: 50%;
      height: 40px;
      cursor: pointer;
      transition: all 0.2s linear;
      line-height: 40px;
      color: #606266;
      font-size: 16px;
    }
    > div:hover {
      background-color: #e8604c;
      color: #ffffff;
    }
    > div:first-child {
      float: left;
      border-right: 1px #dcdfe6 solid;
      display: flex; //为了让图标居中
      align-items: center;
      justify-content: center;
      i {
        margin-right: 5px;
      }
    }
    > div:last-child {
      float: right;
      //   border: 1px #e8604c solid;
    }
  }
}
</style>
