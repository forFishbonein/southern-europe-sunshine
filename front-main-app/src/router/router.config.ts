import { RouteRecordRaw } from "vue-router";
import Index from "../Index.vue";
// import LoginAndRegister from "@views/LoginAndRegister.vue";
import Home from "@views/Home.vue";
// import GoTravel from "@views/goTravel/GoTravel.vue";
// import GroupTravel from "@views/groupTravel/GroupTravel.vue";
// import ReadTravel from "@/views/readTravel/ReadTravel.vue";
// import BuyTravel from "@/views/buyTravel/BuyTravel.vue";
// import Product from "@/views/buyTravel/product/Product.vue";
// import City from "@/views/goTravel/city/City.vue";
// import Scenery from "@/views/goTravel/scenery/Scenery.vue";
import TravelPlan from "@/views/makePlan/TravelPlan.vue";
import TravelPlanResult from "@/views/makePlan/TravelPlanResult.vue";
import AllCountry from "@/views/country/AllCountry.vue";
import ThemeTravel from "@/views/themeTravel/ThemeTravel.vue";
import LocalPlay from "@/views/localPlay/LocalPlay.vue";
import LocalTeam from "@/views/localTeam/LocalTeam.vue";
import News from "@/views/xpNews/News.vue";
import ContactUs from "@/views/contact/ContactUs.vue";
import VisaInsurance from "@/views/visaInsurance/VisaInsurance.vue";
import Visa from "@/views/visaInsurance/Visa.vue";
import Insurance from "@/views/visaInsurance/Insurance.vue";
// import PassLogin from "@/components/passOrCode/PassLogin.vue";
// import CodeLogin from "@/components/passOrCode/CodeLogin.vue";
// import PersonalIndex from "@/views/personal/Index.vue";
// import User from "@/views/user/User.vue";
// import Search from "@/views/search/Search.vue";
// import CanvasTravel from "@/views/canvasTravel/CanvasTravel.vue";
// import NotFound from "@/views/error/NotFound.vue";

// import Note from "@/views/readTravel/note/Note.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index", //App中包裹Index
    meta: {
      title: "首页",
      keepAlive: false,
      // requireLogin: true, //先加在这里，表示需要登录！
    },
    component: Index,
    redirect: "/home", //Index中包裹Home等组件
    children: [
      {
        path: "/home",
        name: "Index",
        // component: () => import("@/views/Home.vue"), //这个不行，会加载不出来
        component: Home,
        meta: { title: "首页", keepAlive: false, showTab: true },
      },
      {
        path: "/country",
        name: "Country",
        component: AllCountry,
        meta: { title: "国家页", keepAlive: false, showTab: true },
        redirect: "/country/countryDetail/1",
        children: [
          {
            path: "countryDetail/:countryId",
            name: "CountryDetail",
            component: () => import("@/views/country/CountryDetail.vue"),
            meta: {
              title: "国家详情页",
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
        meta: { title: "主题旅行页", keepAlive: false, showTab: true },
        redirect: "/themeTravel/items/1",
        children: [
          {
            path: "items/:themeId",
            name: "PlayItems",
            component: () => import("@/views/themeTravel/PlayItems.vue"),
            meta: {
              title: "主题的相关玩乐列表页",
              keepAlive: false,
              showTab: true,
            },
          },
          {
            path: "item/:itemId",
            name: "ItemDetails",
            component: () => import("@/views/themeTravel/ItemDetails.vue"),
            meta: {
              title: "相关玩乐详情页",
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
        meta: { title: "当地玩乐页", keepAlive: false, showTab: true },
        redirect: "/localPlay/items/1",
        children: [
          {
            path: "items/:localId",
            name: "LocalItems",
            component: () => import("@/views/localPlay/LocalItems.vue"),
            meta: {
              title: "当地的相关玩乐列表页",
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
        meta: { title: "当地参团页", keepAlive: false, showTab: true },
      },
      {
        path: "/visaInsurance",
        name: "VisaInsurance",
        component: VisaInsurance,
        meta: { title: "签证保险页", keepAlive: false, showTab: true },
        redirect: "/visaInsurance/visa",
        children: [
          {
            path: "visa",
            name: "Visa",
            component: () => import("@/views/visaInsurance/visa/Visa.vue"),
            meta: {
              title: "签证页",
              keepAlive: false,
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
                  title: "签证列表页",
                  keepAlive: false,
                  showTab: true,
                },
              },
              {
                path: "detail/:visaId",
                name: "VisaDetail",
                component: () =>
                  import("@/visaInsurance/insurance/VisaDetail.vue"),
                meta: {
                  title: "签证详情页",
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
              title: "保险页",
              keepAlive: false,
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
                  title: "保险列表页",
                  keepAlive: false,
                  showTab: true,
                },
              },
              {
                path: "detail/:insuranceId",
                name: "InsuranceDetail",
                component: () =>
                  import("@/visaInsurance/insurance/InsuranceDetail.vue"),
                meta: {
                  title: "保险详情页",
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
        meta: { title: "西葡资讯页", keepAlive: false, showTab: true },
        redirect: "/news/list",
        children: [
          {
            path: "list",
            name: "NewsList",
            component: () => import("@/views/xpNews/NewsList.vue"),
            meta: {
              title: "资讯列表页",
              keepAlive: false,
              showTab: true,
            },
          },
          {
            path: "detail/:newsId",
            name: "NewsDetail",
            component: () => import("@/views/xpNews/NewsDetail.vue"),
            meta: {
              title: "资讯详情页",
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
        meta: { title: "联系我们", keepAlive: false, showTab: true },
      },
    ],
  },
  {
    path: "/plan",
    name: "TrvalPlan",
    component: TravelPlan,
    meta: {
      title: "行程制定地图页",
      keepAlive: false,
      showTab: true,
      requireLogin: true,
    },
    //把route对象直接拆出属性
    props({ params: { fromCity, backCity, arriveCity } }) {
      return {
        fromCity,
        backCity,
        arriveCity,
      };
    },
  },
  {
    path: "/result",
    name: "TrvalPlanResult",
    component: TravelPlanResult,
    meta: {
      title: "行程制定结果页",
      keepAlive: false,
      showTab: true,
      requireLogin: true,
    },
    // redirect: "/result/route/list", //这里不能重定向，否则下面传的props就没了
    // 把route对象直接拆出属性
    props({ params: { fromTheCity, wantCitys, backCity, goTheDate, budget } }) {
      return {
        fromTheCity,
        wantCitys,
        backCity,
        goTheDate,
        budget,
      };
    },
    children: [
      {
        path: "route",
        name: "Route",
        component: () => import("@/components/planResult/Route/Route.vue"),
        meta: { title: "路线", keepAlive: false, showTab: true },
        // redirect: "/result/route/list",
        children: [
          {
            path: "list/:searchCityId",
            name: "RouteList",
            component: () =>
              import("@/components/planResult/Route/RouteList.vue"),
            meta: {
              title: "路线列表",
              keepAlive: false,
              showTab: true,
              requireLogin: true,
            },
            beforeEnter: (to, from, next) => {
              // 路由独享守卫
              // alert(99999);
              next();
            },
            props(route) {
              return {
                id: route.params.searchCityId,
              };
            },
          },
          {
            path: "detail",
            name: "RouteDetail",
            component: () =>
              import("@/components/planResult/Route/RouteDetail.vue"),
            meta: {
              title: "路线详情",
              keepAlive: false,
              showTab: true,
              requireLogin: true,
            },
            props(route) {
              return {
                routeDetailInfoString: route.params.routeDetailInfo,
              };
            },
          },
        ],
      },
      {
        path: "scenicSpot",
        name: "ScenicSpot",
        component: () =>
          import("@/components/planResult/ScenicSpot/ScenicSpot.vue"),
        meta: {
          title: "景区",
          keepAlive: false,
          showTab: true,
          requireLogin: true,
        },
        // redirect: "/result/route/detail",
        children: [
          {
            path: "list/:searchCityId",
            name: "ScenicSpotList",
            component: () =>
              import("@/components/planResult/ScenicSpot/ScenicSpotList.vue"),
            meta: {
              title: "景区列表",
              keepAlive: false,
              showTab: true,
              requireLogin: true,
            },
            props(route) {
              return {
                id: route.params.searchCityId,
              };
            },
          },
          {
            path: "detail",
            name: "ScenicSpotDetail",
            component: () =>
              import("@/components/planResult/ScenicSpot/ScenicSpotDetail.vue"),
            meta: {
              title: "景区详情",
              keepAlive: false,
              showTab: true,
              requireLogin: true,
            },
            props(route) {
              return {
                sceneryDetailInfoString: route.params.sceneryDetailInfo,
              };
            },
          },
        ],
      },
    ],
  },
];
