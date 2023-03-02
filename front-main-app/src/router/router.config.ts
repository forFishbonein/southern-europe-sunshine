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
// import TravelPlan from "@/views/makePlan/TravelPlan.vue";
// import TravelPlanResult from "@/views/makePlan/TravelPlanResult.vue";
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
    ]
    //   {
    //     path: "/goTravel",
    //     name: "GoTravel",
    //     component: GoTravel,
    //     meta: { title: "去旅游", keepAlive: false, showTab: true },
    //     // redirect: "/goTravel/city",
    //     children: [
    //       {
    //         path: "city",
    //         name: "City",
    //         // component: () => import("@/views/goTravel/city/City.vue"),
    //         component: City,
    //         meta: {
    //           title: "城市页",
    //           keepAlive: false,
    //           showTab: true,
    //         },
    //         redirect: "/goTravel/city/list",
    //         children: [
    //           {
    //             path: "list",
    //             name: "CityList",
    //             component: () => import("@/views/goTravel/city/CityList.vue"),
    //             meta: {
    //               title: "城市列表",
    //               keepAlive: false,
    //               showTab: true,
    //             },
    //             // beforeEnter: (to, from, next) => {
    //             //   alert("要进入了");
    //             //   next();
    //             // },
    //             //把route对象直接拆出属性
    //             /* params刷新一下就没了，更好 */
    //             props({ params: { keyword } }) {
    //               return {
    //                 keyword,
    //               };
    //             },
    //           },
    //           {
    //             path: "detail/:cityId",
    //             name: "CityDetail",
    //             component: () => import("@/views/goTravel/city/CityDetail.vue"),
    //             meta: {
    //               title: "城市详情",
    //               keepAlive: false,
    //               showTab: true,
    //             },
    //             props(route) {
    //               return {
    //                 cityId: route.params.cityId,
    //               };
    //             },
    //             // children: [
    //             //   {
    //             //     path: "canvas",
    //             //     name: "Canvas",
    //             //     component: () =>
    //             //       import("@/views/goTravel/city/CityCanvas.vue"),
    //             //     meta: {
    //             //       title: "知识图谱",
    //             //       keepAlive: false,
    //             //       showTab: true,
    //             //     },
    //             //   },
    //             // ],
    //           },
    //         ],
    //       },
    //       {
    //         path: "scenery",
    //         name: "Scenery",
    //         component: Scenery,
    //         meta: {
    //           title: "景区页",
    //           keepAlive: false,
    //           showTab: true,
    //         },
    //         redirect: "/goTravel/scenery/list",
    //         children: [
    //           {
    //             path: "list",
    //             name: "SceneryList",
    //             component: () =>
    //               import("@/views/goTravel/scenery/SceneryList.vue"),
    //             meta: {
    //               title: "景区列表",
    //               keepAlive: false,
    //               showTab: true,
    //             },
    //             props({ params: { keyword } }) {
    //               return {
    //                 keyword,
    //               };
    //             },
    //           },
    //           {
    //             path: "detail/:sceneryId",
    //             name: "SceneryDetail",
    //             component: () =>
    //               import("@/views/goTravel/scenery/SceneryDetail.vue"),
    //             meta: {
    //               title: "景区详情",
    //               keepAlive: false,
    //               showTab: true,
    //             },
    //             props(route) {
    //               return {
    //                 sceneryId: route.params.sceneryId,
    //               };
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     path: "/goTravel/question",
    //     name: "Question",
    //     component: () => import("@/views/goTravel/Question.vue"),
    //     meta: {
    //       title: "智能问答",
    //       keepAlive: false,
    //       showTab: true,
    //     },
    //   },
    //   {
    //     path: "/readTravel",
    //     name: "ReadTravel",
    //     component: ReadTravel,
    //     meta: { title: "阅旅游", keepAlive: false, showTab: true },
    //     children: [
    //       {
    //         path: "note",
    //         name: "Note",
    //         component: () => import("@/views/readTravel/note/Note.vue"),
    //         // component: Note,
    //         meta: { title: " 读游记", keepAlive: false, showTab: true },
    //         redirect: "/readTravel/note/list",
    //         children: [
    //           {
    //             path: "list",
    //             name: "NoteList",
    //             component: () => import("@/views/readTravel/note/NoteList.vue"),
    //             meta: {
    //               title: "游记列表",
    //               keepAlive: false,
    //               showTab: true,
    //             },
    //             props({ params: { keyword } }) {
    //               return {
    //                 keyword,
    //               };
    //             },
    //           },
    //           {
    //             path: "detail/:noteId",
    //             name: "NoteDetail",
    //             component: () =>
    //               import("@/views/readTravel/note/NoteDetail.vue"),
    //             meta: {
    //               title: "游记详情",
    //               keepAlive: false,
    //               showTab: true,
    //             },
    //             props(route) {
    //               return {
    //                 noteId: route.params.noteId,
    //               };
    //             },
    //           },
    //         ],
    //       },
    //       {
    //         path: "write",
    //         name: "Write",
    //         component: () => import("@/views/readTravel/write/Write.vue"),
    //         meta: {
    //           title: " 写游记",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //       },
    //       {
    //         path: "modify",
    //         name: "Modify",
    //         component: () => import("@/views/readTravel/write/Modify.vue"),
    //         meta: {
    //           title: " 编辑游记",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //         props(route) {
    //           return {
    //             noteDetailInfoString: route.params.noteDetailInfo,
    //           };
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     path: "/canvasTravel",
    //     name: "CanvasTravel",
    //     component: CanvasTravel,
    //     meta: { title: "知识图谱", keepAlive: false, showTab: true },
    //     redirect: "/canvasTravel/all",
    //     children: [
    //       {
    //         path: "all",
    //         name: "CanvasList",
    //         component: () => import("@/views/canvasTravel/CanvasList.vue"),
    //         meta: {
    //           title: "所有城市",
    //           keepAlive: false,
    //           showTab: true,
    //         },
    //       },
    //       {
    //         path: "detail/:cityName",
    //         name: "CanvasDetail",
    //         component: () => import("@/views/canvasTravel/CanvasDetail.vue"),
    //         meta: {
    //           title: "每个城市的知识图谱",
    //           keepAlive: false,
    //           showTab: true,
    //         },
    //         props(route) {
    //           return {
    //             cityName: route.params.cityName,
    //           };
    //         },
    //       },
    //       {
    //         path: "scenery/:sceneryName",
    //         name: "CanvasScenery",
    //         component: () => import("@/views/canvasTravel/CanvasScenery.vue"),
    //         meta: {
    //           title: "每个景区的知识图谱",
    //           keepAlive: false,
    //           showTab: true,
    //         },
    //         props(route) {
    //           return {
    //             sceneryName: route.params.sceneryName,
    //           };
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     path: "/groupTravel",
    //     name: "GroupTravel",
    //     component: GroupTravel,
    //     meta: { title: "组旅游", keepAlive: false, showTab: true },
    //     children: [
    //       {
    //         path: "team",
    //         name: "Team",
    //         component: () => import("@/views/groupTravel/team/Team.vue"),
    //         // component: Note,
    //         meta: { title: "队伍", keepAlive: false, showTab: true },
    //         redirect: "/groupTravel/team/list",
    //         children: [
    //           {
    //             path: "list",
    //             name: "TeamList",
    //             component: () =>
    //               import("@/views/groupTravel/team/TeamList.vue"),
    //             meta: {
    //               title: "队伍列表",
    //               keepAlive: false,
    //               showTab: true,
    //             },
    //           },
    //         ],
    //       },
    //       {
    //         path: "create",
    //         name: "Create",
    //         component: () => import("@/views/groupTravel/create/Create.vue"),
    //         // component: Note,
    //         meta: {
    //           title: "创建队伍",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     path: "/buyTravel",
    //     name: "BuyTravel",
    //     component: BuyTravel,
    //     meta: { title: "购旅游", keepAlive: false, showTab: true },
    //     children: [
    //       {
    //         path: "product",
    //         name: "Product",
    //         component: Product,
    //         meta: {
    //           title: "旅游产品页",
    //           keepAlive: false,
    //           showTab: true,
    //         },
    //         redirect: "/buyTravel/product/list",
    //         children: [
    //           {
    //             path: "list",
    //             name: "ProductList",
    //             component: () =>
    //               import("@/views/buyTravel/product/ProductList.vue"),
    //             meta: {
    //               title: "产品列表",
    //               keepAlive: false,
    //               showTab: true,
    //             },
    //           },
    //           {
    //             path: "detail/:productId",
    //             name: "ProductDetail",
    //             component: () =>
    //               import("@/views/buyTravel/product/ProductDetail.vue"),
    //             meta: {
    //               title: "产品详情",
    //               keepAlive: false,
    //               showTab: true,
    //             },
    //             props(route) {
    //               return {
    //                 productId: route.params.productId,
    //               };
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     path: "/personal",
    //     name: "Personal",
    //     component: PersonalIndex,
    //     meta: {
    //       title: "个人中心",
    //       keepAlive: false,
    //       showTab: true,
    //       requireLogin: true,
    //     },
    //     redirect: "/personal/center",
    //     children: [
    //       {
    //         path: "center",
    //         name: "Center",
    //         component: () => import("@/views/personal/Center.vue"),
    //         meta: {
    //           title: "首页",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //       },
    //       {
    //         path: "foot",
    //         name: "Foot",
    //         component: () => import("@/views/personal/Foot.vue"),
    //         meta: {
    //           title: "足迹",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //       },
    //       {
    //         path: "mynote",
    //         name: "MyNote",
    //         component: () => import("@/views/personal/MyNote.vue"),
    //         meta: {
    //           title: "游记",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //       },
    //       {
    //         path: "star",
    //         name: "Star",
    //         component: () => import("@/views/personal/Star.vue"),
    //         meta: {
    //           title: "我收藏的游记",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //       },
    //       {
    //         path: "myroute",
    //         name: "MyRoute",
    //         component: () => import("@/views/personal/MyRoute.vue"),
    //         meta: {
    //           title: "我的行程",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //       },
    //       {
    //         path: "myteam",
    //         name: "MyTeam",
    //         component: () => import("@/views/personal/myteam/MyTeam.vue"),
    //         meta: {
    //           title: "我的队伍",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //         redirect: "/personal/myteam/myjoin",
    //         children: [
    //           {
    //             path: "myjoin",
    //             name: "MyJoin",
    //             component: () => import("@/views/personal/myteam/MyJoin.vue"),
    //             // component: Note,
    //             meta: {
    //               title: "我加入的队伍",
    //               keepAlive: false,
    //               showTab: true,
    //               requireLogin: true,
    //             },
    //           },
    //           {
    //             path: "mycreate",
    //             name: "MyCreate",
    //             component: () => import("@/views/personal/myteam/MyCreate.vue"),
    //             // component: Note,
    //             meta: {
    //               title: "我创建的队伍",
    //               keepAlive: false,
    //               showTab: true,
    //               requireLogin: true,
    //             },
    //           },
    //         ],
    //       },
    //       {
    //         path: "follow",
    //         name: "Follow",
    //         component: () => import("@/views/personal/Follow.vue"),
    //         meta: {
    //           title: "我的粉丝和关注",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //       },
    //       {
    //         path: "buy",
    //         name: "Buy",
    //         component: () => import("@/views/personal/Buy.vue"),
    //         meta: {
    //           title: "我的订单",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //       },
    //       {
    //         path: "setup",
    //         name: "Setup",
    //         component: () => import("@/views/personal/Setup.vue"),
    //         meta: {
    //           title: "设置",
    //           keepAlive: false,
    //           showTab: true,
    //           requireLogin: true,
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     path: "/user/:userId",
    //     name: "User",
    //     component: User,
    //     meta: { title: "其他用户的主页", keepAlive: false, showTab: true },
    //     // beforeEnter: (to, from, next) => {
    //     //   if()
    //     //   next();
    //     // },
    //     props(route) {
    //       return {
    //         userId: route.params.userId,
    //       };
    //     },
    //   },
    //   {
    //     path: "/search",
    //     name: "Search",
    //     component: Search,
    //     meta: { title: "全局搜索结果页", keepAlive: false, showTab: true },
    //     // beforeEnter: (to, from, next) => {
    //     //   if()
    //     //   next();
    //     // },
    //     props(route) {
    //       return {
    //         keyword: route.params.keyword,
    //       };
    //     },
    //   },
    // ],
  },
];
