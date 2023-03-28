<script setup lang="ts">
import { ref, watch, reactive, toRefs, onMounted } from "vue";
import { getNewsListInfo } from "@/apis/news";
import { newsInfoType } from "@/apis/interface/resultType";
/* 分页查询的实现 */
let newsListInfo = ref([] as newsInfoType[]);
//为了构造一个响应式对象pageParams
const pageParams = reactive({
  total: 0,
  page: 1,
  limit: 6,
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
const getTheNewsList = () => {
  getNewsListInfo(page.value, limit.value)
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        // alert(page.value);
        newsListInfo.value = res.data.records;
        total.value = res.data.total;
        console.log(newsListInfo.value);
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

//开始获取分页数据
getTheNewsList();
// 回调函数：改变页码时调用，page：回调参数，表示当前选中的“页码”
const changeCurrentPage = (p: number) => {
  if (p > 0 && p <= totalPageNum.value) {
    btnArr.value = [];
    page.value = p; //将当前页数改变
    getTheNewsList(); //请求新的数据
  }
};
/* 分页查询结束 */
</script>
<template>
  <section class="Campaigns pt80 pb80 ListingList">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div
              class="col-md-12 col-sm-12 col-xs-12"
              v-for="(item, index) in newsListInfo"
              :key="index"
            >
              <div class="row ListriBox">
                <div class="col-md-2 col-sm-6 col-xs-12 Nopadding">
                  <figure class="img-container">
                    <router-link :to="`/news/detail/${item.newsId}`"
                      ><img :src="item.titlePic" class="img-fluid" alt="" />
                    </router-link>
                  </figure>
                </div>
                <div class="col-md-9 col-sm-6 col-xs-12 Nopadding">
                  <div class="ListriBoxmain">
                    <h2>
                      <router-link :to="`/news/detail/${item.newsId}`">{{
                        item.newsTitle
                      }}</router-link>
                      <p class="describe" v-html="item.newsContent"></p>
                    </h2>
                  </div>
                  <div class="route-container">
                    <div>{{ item.createDate }}</div>
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
.Campaigns {
  padding-bottom: 0px;
}
.img-container {
  width: 180px;
  height: 180px;
}
.ListriBox figure a img {
  // left: 0% !important;
  top: 30% !important;
}
.describe {
  margin: 20px 0;
}
// .Nopadding {
//   width: 250px !important;
// }
.route-container {
  width: 100%;
  height: 50px;
  // padding: 15px 25px;
  border-top: 1px solid #ededed;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: right;
  // > div {
  //   float: right;
  // }
}
/* 下面两个是分页必须的 */
.center-page {
  display: flex;
  justify-content: center;
}
.disabled {
  cursor: not-allowed;
  opacity: 0.4;
  &:hover {
    color: #333;
  }
}
.paginationCommon {
  margin: 35px 0;
}
</style>
