import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from "path";
const port = 8080;
const host = "0.0.0.0";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  return {
    plugins: [vue()],
    base: env.VITE_MODE === "production" ? "./" : "/",
    resolve: {
      alias: {
        //resolve.alias设置别称 解决@绝对路径引入问题
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/assets/images"),
        "@views": path.resolve(__dirname, "src/views"),
        "@store": path.resolve(__dirname, "src/store"),
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        less: {
          modifyVars: {
            // 全局less变量存储路径(配置less的全局变量)
            hack: `true; @import (reference) "${resolve(
              "src/public/config.less"
            )}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets", //指定静态资源存放路径
      sourcemap: false, //是否构建source map 文件
      // terserOptions: {
      //   // 生产环境移除console
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: true,
      //   },
      // },
    },
    server: {
      https: false, // 是否开启 https
      open: true, // 是否自动在浏览器打开
      port: port, // 端口号
      host: host,
      proxy: {
        "/api": {
          target: env.VITE_RES_URL, // 后台接口
          changeOrigin: true,
          secure: false, // 如果是https接口，需要配置这个参数
          ws: true, //websocket支持
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
