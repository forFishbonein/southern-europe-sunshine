<script setup lang="ts">
import { ref, watch, reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import emitter from "@/mitt/event";
import {
  getPageThemeInfo,
  getAllPageThemeInfo,
  getAllThemeInfo,
} from "@/apis/theme";
import { themeListInfoType } from "@/apis/interface/resultType";
const route = useRoute();
const themeId = route.params.themeId;
if (themeId && themeId !== "") {
  emitter.emit("synOptions", themeId);
}
const isAll = ref(false);

if (Number(themeId) === 0) {
  isAll.value = true;
} else {
  isAll.value = false;
}
/* 分页查询的实现 */
let themeListInfo = ref([] as themeListInfoType[]);
//为了构造一个响应式对象pageParams
const pageParams = reactive({
  total: 0,
  page: 1,
  limit: 5,
});
//为了把pageParams拆开，直接用在页面上
const { total, page, limit } = toRefs(pageParams);
//总页数
const totalPageNum = ref();
//按钮数为5个
const count = 5;
let start = 0;
let end = 0;
const btnArr = ref([]);
//得到分页数据
const requestPageThemeListInfo = async () => {
  if (Number(themeId) === 0) {
    // alert(111);
    await getAllPageThemeInfo(page.value, limit.value)
      .then((res: any) => {
        if (res.code != 2000) {
          //@ts-ignore
          ElMessage({
            type: "error",
            message: res.msg,
          });
        } else {
          // alert(page.value);
          themeListInfo.value = res.data.records;
          total.value = res.data.total;
          console.log(themeListInfo.value);
        }
      })
      .catch((error) => {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: error.message,
        });
      });
  } else {
    await getPageThemeInfo(themeId, page.value, limit.value)
      .then((res: any) => {
        if (res.code != 2000) {
          //@ts-ignore
          ElMessage({
            type: "error",
            message: res.msg,
          });
        } else {
          // alert(page.value);
          themeListInfo.value = res.data.records;
          total.value = res.data.total;
          console.log(themeListInfo.value);
        }
      })
      .catch((error) => {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: error.message,
        });
      });
  }
  //处理输出新的按钮列表
  totalPageNum.value = Math.ceil(total.value / limit.value);
  //按钮个数和当前页码 ====> 起始按钮 结束按钮 按钮数组
  // 1.理想情况下：
  const offset = Math.floor(count / 2);
  start = page.value - offset;
  end = start + count - 1;
  // 2.如果其实页码小于1 需要处理
  if (start < 1) {
    start = 1;
    end =
      start + count - 1 > totalPageNum.value
        ? totalPageNum.value
        : start + count - 1;
  }
  // 3.如果结束页码大于总页数
  if (end > totalPageNum.value) {
    end = totalPageNum.value;
    start = end - count + 1 < 1 ? 1 : end - count + 1;
  }
  for (let i = start; i <= end; i++) {
    // @ts-ignore
    btnArr.value.push(i);
  }
};
//开始获取分页数据
requestPageThemeListInfo();
// 回调函数1：每页记录数改变时调用，size：回调参数，表示当前选中的“每页条数”
// const changePageSize = (size: number) => {
//   limit.value = size; //将页面大小改变
//   requestPageThemeListInfo(); //请求新的数据
// };
// 回调函数2：改变页码时调用，page：回调参数，表示当前选中的“页码”
const changeCurrentPage = (p: number) => {
  if (p > 0 && p <= totalPageNum.value) {
    btnArr.value = [];
    page.value = p; //将当前页数改变
    requestPageThemeListInfo(); //请求新的数据
  }
};
/* 分页查询结束 */

/* 实现搜索功能 */
let allThemeListInfo = ref([] as themeListInfoType[]);
const getAllInfo = () => {
  getAllThemeInfo()
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        // alert(page.value);
        allThemeListInfo.value = res.data;
      }
    })
    .catch((error) => {
      //@ts-ignore
      ElMessage({
        type: "error",
        message: error.message,
      });
    });
};
if (Number(themeId) === 0) {
  getAllInfo();
}
const onSearchFlag = ref(false);
const notOnSearchFlag = ref(true);
const keyword = ref("");
const searchResultcitysInfo = ref([] as themeListInfoType[]);
watch(keyword, (newValue, oldValue) => {
  searchResultcitysInfo.value = [] as themeListInfoType[];
  notOnSearchFlag.value = false;
  onSearchFlag.value = true;
  if (!newValue) {
    //如果新的值为空的，即清空了
    searchResultcitysInfo.value = [] as themeListInfoType[];
    onSearchFlag.value = false;
    notOnSearchFlag.value = true;
    return;
  }
  allThemeListInfo.value.forEach((e) => {
    if (
      e.themeTitle.indexOf(newValue) !== -1 &&
      searchResultcitysInfo.value.length < 10
    ) {
      //!==-1那就说明包含
      searchResultcitysInfo.value.push(e);
    } else {
      return;
    }
  });
});
</script>

<template>
  <section class="Campaigns pt80 pb80 ListingList">
    <div class="container">
      <div class="input-box" v-if="isAll">
        <input
          type="text"
          class="search-input"
          placeholder="搜索"
          v-model="keyword"
        />
        <span class="search-span">
          <el-icon><Search /></el-icon>
        </span>
      </div>
      <div class="row" v-show="notOnSearchFlag">
        <div class="col-md-12">
          <div class="row">
            <div
              class="col-md-12 col-sm-12 col-xs-12"
              v-for="(item, index) in themeListInfo"
              :key="index"
            >
              <div class="row ListriBox">
                <div class="col-md-5 col-sm-6 col-xs-12 Nopadding">
                  <figure>
                    <router-link :to="`/themeTravel/item/${item.themeId}`"
                      ><img
                        :src="
                          'http://182.92.103.154/static/images/upload/' +
                          item.titlePic
                        "
                        class="img-fluid"
                        alt=""
                      />
                      <div class="read_more"><span>查看详情</span></div>
                    </router-link>
                  </figure>
                </div>
                <div class="col-md-7 col-sm-6 col-xs-12 Nopadding">
                  <div class="ListriBoxmain">
                    <h3>
                      <router-link :to="`/themeTravel/item/${item.themeId}`">{{
                        item.themeTitle
                      }}</router-link>
                    </h3>
                    <p class="content-hidden" v-html="item.themeContent"></p>
                    <p>
                      <span class="click-rate-span"
                        ><el-icon><Pointer /></el-icon
                        >{{ item.clickRate }}</span
                      >
                    </p>
                  </div>
                  <div class="route-container">
                    <div
                      class="R_retings"
                      v-for="(i, k) in item.cityinfos"
                      :key="k"
                    >
                      <span>Day{{ k + 1 }}</span
                      ><strong>{{ i.cityNameCn }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="paginationCommon blogPagination categoryPagination">
            <nav aria-label="Page navigation" class="center-page">
              <ul class="pagination">
                <li>
                  <a
                    href="javascript:;"
                    aria-label="Previous"
                    @click="changeCurrentPage(page - 1)"
                    v-if="page > 1"
                  >
                    <span aria-hidden="true"
                      ><i class="fa fa-angle-left" aria-hidden="true"></i
                    ></span>
                  </a>
                  <a
                    href="javascript:;"
                    aria-label="Previous"
                    class="disabled"
                    v-else
                  >
                    <span aria-hidden="true"
                      ><i class="fa fa-angle-left" aria-hidden="true"></i
                    ></span>
                  </a>
                </li>
                <li><a v-if="start > 1">...</a></li>
                <li
                  v-for="(item, index) in btnArr"
                  :class="{ active: page === item }"
                  @click="changeCurrentPage(item)"
                >
                  <a href="javascript:;"> {{ item }}</a>
                </li>
                <li><a v-if="end < totalPageNum">...</a></li>
                <li>
                  <a
                    href="javascript:;"
                    aria-label="Next"
                    @click="changeCurrentPage(page + 1)"
                    v-if="page < totalPageNum"
                  >
                    <span aria-hidden="true"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i
                    ></span>
                  </a>
                  <a
                    href="javascript:;"
                    aria-label="Next"
                    class="disabled"
                    v-else
                  >
                    <span aria-hidden="true"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i
                    ></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="row" v-show="onSearchFlag">
        <div class="col-md-12">
          <div class="row">
            <div
              class="col-md-12 col-sm-12 col-xs-12"
              v-for="(item, index) in searchResultcitysInfo"
              :key="index"
            >
              <div class="row ListriBox">
                <div class="col-md-5 col-sm-6 col-xs-12 Nopadding">
                  <figure>
                    <router-link :to="`/themeTravel/item/${item.themeId}`"
                      ><img
                        :src="
                          'http://182.92.103.154/static/images/upload/' +
                          item.titlePic
                        "
                        class="img-fluid"
                        alt=""
                      />
                      <div class="read_more"><span>查看详情</span></div>
                    </router-link>
                  </figure>
                </div>
                <div class="col-md-7 col-sm-6 col-xs-12 Nopadding">
                  <div class="ListriBoxmain">
                    <h3>
                      <router-link :to="`/themeTravel/item/${item.themeId}`">{{
                        item.themeTitle
                      }}</router-link>
                    </h3>
                    <p class="content-hidden">
                      {{ item.themeContent }}
                    </p>
                    <p>
                      <span class="click-rate-span"
                        ><el-icon><Pointer /></el-icon
                        >{{ item.clickRate }}</span
                      >
                    </p>
                  </div>
                  <div class="route-container">
                    <div
                      class="R_retings"
                      v-for="(i, k) in item.cityinfos"
                      :key="k"
                    >
                      <span>Day{{ k + 1 }}</span
                      ><strong>{{ i.cityNameCn }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ListingList {
  padding-top: 50px;
}
.route-container {
  float: left;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55px;
  padding: 5px 25px;
  border-top: 1px solid #ededed;
  display: flex;
  align-items: center;
}
.R_retings {
  float: left;
  margin-right: 15px;
  margin-bottom: 5px;
  display: flex;
  // align-items: center;
  strong {
    background-color: #c63a48;
    padding: 7px;
    font-size: 14px;
  }
}
.ListriBoxmain {
  width: 100%;
  height: 150px;
  padding-top: 20px;
  padding-bottom: 0;
}
/* 段落显示2行，多余的用...省略，并且首行缩进2字符 */
.content-hidden {
  text-indent: 2em;
  text-align: justify;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.click-rate-span {
  display: flex;
  float: right;
  font-size: 14px;
  color: #b1b3b8;
  justify-content: center;
  align-items: center;
}

.input-box {
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  border-radius: 40px;
  transition: all 0.3s linear;
  .search-input {
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    transition: width 0.5s;
    transition-delay: 0.1s;
  }
  .search-input:focus {
    width: 350px;
    outline: none;
    box-shadow: none;
  }
  .search-input:focus + .search-span {
    background-color: #c63a48;
    color: #fff;
  }
  .search-span {
    position: absolute;
    top: 4px;
    right: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    padding: 0;
    color: #d4d7de;
    text-align: center;
    background: #c60b1e;
    border-radius: 50%;
    font-size: 15px;
    cursor: pointer;
    i {
      height: 30px; /* 让图标居中的方案 */
    }
  }
}
.input-box:hover {
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
  // box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);
}
.disabled {
  cursor: not-allowed;
  opacity: 0.4;
  &:hover {
    color: #333;
  }
}
.center-page {
  display: flex;
  justify-content: center;
}
</style>
