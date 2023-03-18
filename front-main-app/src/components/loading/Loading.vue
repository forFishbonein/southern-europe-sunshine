<template>
  <div class="loading-container" v-if="showLoading">
    <div class="sk-wave">
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
    </div>
  </div>
</template>
<style>
/* .loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999999999;
}
.sk-wave {
  margin: auto;
  width: 80px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
}
.sk-wave-rect {
  background-color: #ffffff;
  height: 100%;
  width: 6px;
  display: inline-block;
  animation: sk-wave 1.2s ease-in-out infinite;
}
@keyframes sk-wave {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
} */
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999999999;
}
.sk-wave {
  margin: auto;
  width: 80px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999999;
}
.sk-wave-rect {
  background-color: #ffffff;
  height: 100%;
  width: 6px;
  display: inline-block;
  animation: sk-wave 1.2s ease-in-out infinite;
}
@keyframes sk-wave {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>
<script>
import "spinkit/spinkit.min.css";
export default {
  props: {
    showLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
