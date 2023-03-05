<script setup lang="ts"></script>

<template>
  <!-- 绑定key保证路由参数变换时可以进行刷新 -->
  <router-view :key="$route.fullPath"></router-view>
</template>

<style lang="scss" scoped></style>
