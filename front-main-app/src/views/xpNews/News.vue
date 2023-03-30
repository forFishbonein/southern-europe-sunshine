<script setup lang="ts"></script>

<template>
  <section class="breadcromb-top section_100">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ol class="text-white justify-content-center no-border mb-0">
            <li class="breadcrumb-item">
              <router-link to="/home">首页</router-link>
            </li>
            <li class="breadcrumb-item active">西葡资讯</li>
          </ol>
          <div class="breadcromb-box">
            <h3>西葡资讯</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <router-view :key="$route.fullPath" />
</template>

<style lang="scss" scoped></style>
