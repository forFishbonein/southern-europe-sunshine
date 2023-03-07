import { defineConfig, loadEnv } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import pkg from "./package.json";
import dayjs from "dayjs";
const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
};
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  return {
    base: "./",
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // base: env.VITE_MODE === "production" ? "./" : "/",
    publicDir: "public", //这里很重要，配置了基础公共路径，保证我们获取的静态资源都是以static文件夹为基础的
    server: {
      https: false,
      open: true, //是否在浏览器自动打开
      //启动的ip
      host: "0.0.0.0",
      hrm: true,
      usePolling: true,
      // hmr:{
      //   overlay:false
      // }
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "@assets": resolve(__dirname, "src/assets"),
        "@request": resolve(__dirname, "src/request"),
        "@views": resolve(__dirname, "src/views"),
        "@components": resolve(__dirname, "src/components"),
        "@store": resolve(__dirname, "src/store"),
        "@apis": resolve(__dirname, "src/apis"),
        "@plugins": resolve(__dirname, "src/plugins"),
        "@styles": resolve(__dirname, "src/styles"),
        "@config": resolve(__dirname, "src/config"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false, // 避免出现: build时的 @charset 必须在第一行的警告
          // additionalData: `
          //   @import "@/styles/mixin.scss";
          //   @import "@/styles/variables.scss";
          //   `,
        },
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false,
      terserOption: {
        //生产环境移除console
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
});
