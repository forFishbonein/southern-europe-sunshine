<script setup lang="ts">
import { ref, watch, reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getPageLocalInfo, getAllPageLocalInfo } from "@/apis/local";
import { localListInfoType } from "@/apis/interface/resultType";
const route = useRoute();
const localType = route.params.localType;
/* 分页查询的实现 */
let localListInfo = ref([] as localListInfoType[]);
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
const requestPageLocalListInfo = () => {
  getPageLocalInfo(localType, page.value, limit.value)
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        // alert(page.value);
        localListInfo.value = res.data.records;
        total.value = res.data.total;
        console.log(localListInfo.value);
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
requestPageLocalListInfo();
// 回调函数：改变页码时调用，page：回调参数，表示当前选中的“页码”
const changeCurrentPage = (p: number) => {
  if (p > 0 && p <= totalPageNum.value) {
    btnArr.value = [];
    page.value = p; //将当前页数改变
    requestPageLocalListInfo(); //请求新的数据
  }
};
/* 分页查询结束 */
</script>

<template>
  <section class="Campaigns pt80 pb80">
    <div class="container">
      <div class="type-words">类型：{{ localType }}</div>
      <div class="row">
        <div
          class="col-md-4 col-sm-6 col-xs-12"
          v-for="(item, index) in localListInfo"
          :key="index"
        >
          <div class="ListriBox">
            <figure>
              <a href="javascript:;"
                ><img src="/images/hotel1.jpg" class="img-fluid" alt="" />
              </a>
            </figure>
            <div class="ListriBoxmain">
              <h3 style="height: 43px">
                <a href="javascript:;">{{ item.playTitle }}</a>
              </h3>
              <p class="describe-words content-hidden">
                {{ item.playContent }}
              </p>
              <a
                class="address"
                href="javascript:;"
                v-if="item.cityinfos[0] !== null"
                >城市：<span
                  v-for="(i, k) in item.cityinfos"
                  :key="k"
                  style="margin-right: 10px"
                  >{{ i.cityNameCn }}</span
                ></a
              >
            </div>
            <ul>
              <li>
                <span class="Ropen">适合季节：{{ item.playSeason }}</span>
              </li>
              <li>
                <div class="R_retings">
                  <span>官方<em>参考价格</em></span
                  ><strong>{{ item.playPrice }}元</strong>
                </div>
              </li>
            </ul>
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
              <a href="javascript:;" aria-label="Next" class="disabled" v-else>
                <span aria-hidden="true"
                  ><i class="fa fa-angle-right" aria-hidden="true"></i
                ></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ListriBox {
  width: 350px;
  height: 460px;
}
.ListriBoxmain {
  width: 320px;
  height: 178px;
}
.describe-words {
  width: 270px;
  height: 52px;
}
.content-hidden {
  // text-indent: 2em;
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
.type-words {
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: #c60b1e;
  color: #ffffff;
  font-weight: 800;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.4s cubic-bezier(1, -2.02, 0.38, 2.05);
}
.type-words:hover {
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
  transform: translate(0px, -5px);
}
</style>
