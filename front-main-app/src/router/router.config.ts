import { RouteRecordRaw } from "vue-router";
import Index from "../Index.vue";
import Login from "@components/login/Login.vue";
import Register from "@components/login/Register.vue";
import Home from "@views/Home.vue";
import TravelPlan from "@/views/makePlan/TravelPlan.vue";
import AllCountry from "@/views/country/AllCountry.vue";
import ThemeTravel from "@/views/themeTravel/ThemeTravel.vue";
import LocalPlay from "@/views/localPlay/LocalPlay.vue";
import LocalTeam from "@/views/localTeam/LocalTeam.vue";
import News from "@/views/xpNews/News.vue";
import ContactUs from "@/views/contact/ContactUs.vue";
import VisaInsurance from "@/views/visaInsurance/VisaInsurance.vue";
import PersonalIndex from "@/views/personal/Index.vue";
// import Visa from "@/views/visaInsurance/Visa.vue";
// import Insurance from "@/views/visaInsurance/Insurance.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index", //App中包裹Index
    meta: {
      title: "首页",
      keepAlive: true,
      // requireLogin: true, //先加在这里，表示需要登录！
    },
    component: () => import("@/Index.vue"),
    // component: Index,
    redirect: "/home", //Index中包裹Home等组件
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"), //这个不行，会加载不出来
        // component: Home,
        meta: { title: "首页", keepAlive: true, showTab: true },
      },
      {
        path: "/country",
        name: "Country",
        component: AllCountry,
        meta: { title: "出行国家", keepAlive: true, showTab: true },
        redirect: "/country/countryDetail/1",
        children: [
          {
            path: "countryDetail/:countryId",
            name: "CountryDetail",
            component: () => import("@/views/country/CountryDetail.vue"),
            meta: {
              title: "出行国家",
              keepAlive: false,
              showTab: true,
            },
            // props(route) {
            //   return {
            //     sceneryId: route.params.sceneryId,
            //   };
            // },
          },
        ],
      },
      {
        path: "/themeTravel",
        name: "ThemeTravel",
        component: ThemeTravel,
        meta: { title: "主题旅行", keepAlive: true, showTab: true },
        redirect: "/themeTravel/items/0",
        children: [
          {
            path: "items/:themeId",
            name: "PlayItems",
            component: () => import("@/views/themeTravel/PlayItems.vue"),
            meta: {
              title: "主题旅行",
              keepAlive: false,
              showTab: true,
            },
          },
          {
            path: "item/:itemId",
            name: "ItemDetails",
            component: () => import("@/views/themeTravel/ItemDetails.vue"),
            meta: {
              title: "主题旅行详情",
              keepAlive: false,
              showTab: true,
            },
          },
        ],
      },
      {
        path: "/localPlay",
        name: "LocalPlay",
        component: LocalPlay,
        meta: { title: "当地玩乐", keepAlive: true, showTab: true },
        redirect: "/localPlay/items/足球赛事",
        children: [
          {
            path: "items/:localType",
            name: "LocalItems",
            component: () => import("@/views/localPlay/LocalItems.vue"),
            meta: {
              title: "当地玩乐",
              keepAlive: false,
              showTab: true,
            },
          },
        ],
      },
      {
        path: "/localTeam",
        name: "LocalTeam",
        component: LocalTeam,
        meta: { title: "当地参团", keepAlive: true, showTab: true },
      },
      {
        path: "/visaInsurance",
        name: "VisaInsurance",
        component: VisaInsurance,
        meta: { title: "签证保险", keepAlive: true, showTab: true },
        redirect: "/visaInsurance/visa",
        children: [
          {
            path: "visa",
            name: "Visa",
            component: () => import("@/views/visaInsurance/visa/Visa.vue"),
            meta: {
              title: "签证",
              keepAlive: true,
              showTab: true,
            },
            redirect: "/visaInsurance/visa/list",
            children: [
              {
                path: "list",
                name: "VisaList",
                component: () =>
                  import("@/views/visaInsurance/visa/VisaList.vue"),
                meta: {
                  title: "签证",
                  keepAlive: false,
                  showTab: true,
                },
              },
              {
                path: "detail/:visaId",
                name: "VisaDetail",
                component: () =>
                  import("@/views/visaInsurance/visa/VisaDetail.vue"),
                meta: {
                  title: "签证详情",
                  keepAlive: false,
                  showTab: true,
                },
              },
            ],
          },
          {
            path: "insurance",
            name: "Insurance",
            component: () =>
              import("@/views/visaInsurance/insurance/Insurance.vue"),
            meta: {
              title: "保险",
              keepAlive: true,
              showTab: true,
            },
            redirect: "/visaInsurance/insurance/list",
            children: [
              {
                path: "list",
                name: "InsuranceList",
                component: () =>
                  import("@/views/visaInsurance/insurance/InsuranceList.vue"),
                meta: {
                  title: "保险",
                  keepAlive: false,
                  showTab: true,
                },
              },
              {
                path: "detail/:insuranceId",
                name: "InsuranceDetail",
                component: () =>
                  import("@/views/visaInsurance/insurance/InsuranceDetail.vue"),
                meta: {
                  title: "保险详情",
                  keepAlive: false,
                  showTab: true,
                },
              },
            ],
          },
        ],
      },
      {
        path: "/news",
        name: "News",
        component: News,
        meta: { title: "西葡资讯", keepAlive: true, showTab: true },
        redirect: "/news/list",
        children: [
          {
            path: "list",
            name: "NewsList",
            component: () => import("@/views/xpNews/NewsList.vue"),
            meta: {
              title: "西葡资讯",
              keepAlive: false,
              showTab: true,
            },
          },
          {
            path: "detail/:newsId",
            name: "NewsDetail",
            component: () => import("@/views/xpNews/NewsDetail.vue"),
            meta: {
              title: "资讯详情",
              keepAlive: false,
              showTab: true,
            },
          },
        ],
      },
      {
        path: "/contact",
        name: "ContactUs",
        component: ContactUs,
        meta: { title: "联系我们", keepAlive: true, showTab: true },
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
          title: "登录",
          keepAlive: false,
          showTab: true,
        },
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
          title: "注册",
          keepAlive: false,
          showTab: true,
        },
      },
      {
        path: "/personal",
        name: "Personal",
        component: PersonalIndex,
        meta: {
          title: "个人中心",
          keepAlive: false,
          showTab: true,
          requireLogin: true,
        },
        redirect: "/personal/center",
        children: [
          {
            path: "center",
            name: "Center",
            component: () => import("@/views/personal/Center.vue"),
            meta: {
              title: "我的中心",
              keepAlive: false,
              showTab: true,
              requireLogin: true,
            },
          },
          {
            path: "myroute",
            name: "MyRoute",
            component: () => import("@/views/personal/MyRoute.vue"),
            meta: {
              title: "我的行程",
              keepAlive: false,
              showTab: true,
              requireLogin: true,
            },
          },
          {
            path: "star",
            name: "Star",
            component: () => import("@/views/personal/Star.vue"),
            meta: {
              title: "我的收藏",
              keepAlive: false,
              showTab: true,
              requireLogin: true,
            },
          },
          {
            path: "myteam",
            name: "MyTeam",
            component: () => import("@/views/personal/MyTeam.vue"),
            meta: {
              title: "我的队伍",
              keepAlive: false,
              showTab: true,
              requireLogin: true,
            },
          },
          {
            path: "advance",
            name: "Advance",
            component: () => import("@/views/personal/Advance.vue"),
            meta: {
              title: "我的预定",
              keepAlive: false,
              showTab: true,
              requireLogin: true,
            },
          },
          {
            path: "setup",
            name: "Setup",
            component: () => import("@/views/personal/Setup.vue"),
            meta: {
              title: "设置",
              keepAlive: false,
              showTab: true,
              requireLogin: true,
            },
          },
        ],
      },
    ],
  },

  {
    path: "/plan",
    name: "TrvalPlan",
    component: TravelPlan,
    meta: {
      title: "行程制定",
      keepAlive: false,
      showTab: true,
      requireLogin: true,
    },
    //把route对象直接拆出属性
    props({ params: { routeTitle, peopleNum, arriveCity, planId } }) {
      return {
        routeTitle,
        peopleNum,
        arriveCity,
        planId,
      };
    },
  },
];
