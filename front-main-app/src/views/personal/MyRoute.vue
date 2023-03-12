<script setup lang="ts"></script>

<template>
  <!-- <div
    class="sidebar__single sidebar__category"
    v-for="(cell, index1) in userAllPlansInfo"
    :key="index1"
  >
    <h3 class="sidebar__title">行程表{{ index1 + 1 }}</h3>
    <ul class="sidebar__category-list list-unstyled">
      <li style="font-size: 16px">总预算:{{ cell.budget }}元</li>
      <li>
        <span class="span-style text-amber">行程信息</span>
        <el-scrollbar max-height="300px">
          <el-collapse accordion>
            <el-collapse-item
              :name="index2"
              v-for="(item, index2) in cell.subPlans"
              :key="index2"
            >
              <template #title>
                <div class="plan-note-header">
                  {{ item.city
                  }}<el-icon class="header-icon" size="16px">
                    <Place />
                  </el-icon>
                  <span style="margin-left: 10px">预算:</span
                  >{{ item.budget }}元
                </div>
              </template>
              <ul>
                <li v-for="(i, index3) in item.days" :key="index3">
                  第{{ index3 + 1 }}天
                  <span v-for="(k, index4) in i.route" :key="index4">
                    {{ k.originName }}({{ k.departTime }}小时)
                    <el-icon><Right /></el-icon>
                  </span>
                  结束
                  <el-button
                    type="primary"
                    size="small"
                    style="margin-left: 10px"
                    @click="openTheMapForOneDay(i.route)"
                    >查看地图</el-button
                  >
                </li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-scrollbar>
      </li>
    </ul>
  </div>
  <el-dialog v-model="theMapVisible" :show-close="false" align-center>
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">景区行程地图</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          关闭
        </el-button>
      </div>
    </template>
    <div id="map"></div>
  </el-dialog> -->
</template>

<style lang="scss" scoped></style>
