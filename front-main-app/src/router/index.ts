import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { mainStore } from "@/store/user";
import { UserInfo } from "@/apis/user/uInterface";

// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
// import countIndex from "../pages/count/countIndex.vue";

// 2. 定义路由配置
import { routes } from "./router.config";

// 3. 创建路由实例
const router = createRouter({
  // history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载 icon
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});

// 4. 配置路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    // @ts-ignore
    document.title = to.meta.title;
  }
  NProgress.start();
  const store = mainStore(); //移动到了路由守卫里面，否则persist不生效
  // 如果本地存在token;
  if (store.token !== "") {
    if (to.path === "/login" || to.path === "/register") {
      next({ path: "/" });
    } else {
      if (
        //@ts-ignore
        store.getUserFlag === false
      ) {
        store
          .getUserInfo() // 获取用户信息
          .then(async (res) => {
            // alert("获取用户信息成功");
            console.log("用户信息：");
            console.log(store.userInfo);
            console.log(store.userInfo.email);
            store.getUserFlag = true;
            next();
          })
          .catch(() => {
            //@ts-ignore
            ElMessage({
              type: "warning",
              message: "你的登录已过期！",
            });
            store.getUserFlag = false;
            store.userInfo = {} as UserInfo;
            next();
          });
      } else {
        // 如果已经获取到了用户信息
        next();
      }
    }
  } else {
    //如果本地不存在token //但如果是要去到需要登录的页面
    if (to.matched.some((r) => r.meta.requireLogin)) {
      store.getUserFlag = false;
      //@ts-ignore
      ElMessage({
        type: "warning",
        message: "登录后才能打开新天地哦！",
      });
      //@ts-ignore //不知道会不会出错
      router.push(-1);
    } else {
      next(); //其余不需要登录的页面就直接放开
    }
  }
});

router.afterEach((to, from, next) => {
  NProgress.done();
});

// 5. 导出router
export default router;
