<script setup lang="ts">
import { ref } from "vue";
import { getOneNewsInfo } from "@/apis/news";
import { newsInfoType } from "@/apis/interface/resultType";
import { useRoute } from "vue-router";
import { getInsuranceListInfo } from "@/apis/news";
import { getNewsListInfo } from "@/apis/news";
const route = useRoute();
const visaId = route.params.visaId;
const oneNewsDetailInfo = ref({} as newsInfoType);
const getTheOneThemeDetailInfo = () => {
  getOneNewsInfo(visaId)
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        oneNewsDetailInfo.value = res.data;
        console.log(oneNewsDetailInfo.value);
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
getTheOneThemeDetailInfo();
let insuranceListInfo = ref([] as newsInfoType[]);
const getTheInsuranceList = () => {
  getInsuranceListInfo(1, 1, 8)
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        // alert(page.value);
        insuranceListInfo.value = res.data.records;
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
getTheInsuranceList();
const newsListInfo = ref([] as newsInfoType[]);
const getTheNewsList = () => {
  getNewsListInfo(1, 8)
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
getTheNewsList();
</script>
<template>
  <section class="Blog-list pt80 pb80 blog-single-section">
    <div class="container">
      <div class="bread-container">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/visaInsurance/visa/list' }"
            >保险签证</el-breadcrumb-item
          >
          <el-breadcrumb-item>详情页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="row">
        <div class="col-md-8 col-xs-12">
          <div class="blog-content">
            <div class="post format-standard-image">
              <div class="entry-media">
                <img :src="oneNewsDetailInfo.titlePic" alt="" />
              </div>
              <ul class="entry-meta">
                <li>
                  <a href="javascript:;"
                    ><i class="far fa-clock"></i
                    >{{ oneNewsDetailInfo.createDate }}</a
                  >
                </li>
                <li>
                  <a href="javascript:;"
                    ><i class="fas fa-funnel-dollar"></i
                    >{{ oneNewsDetailInfo.clickRate }}</a
                  >
                </li>
              </ul>
              <h2>{{ oneNewsDetailInfo.newsTitle }}</h2>
              <div v-html="oneNewsDetailInfo.newsContent"></div>
            </div>
            <div class="tag-share">
              <div class="tag">
                Tags: &nbsp;
                <ul>
                  <li><a href="#">Business ,</a></li>
                  <li><a href="#">Agency ,</a></li>
                  <li><a href="#">Finance</a></li>
                  <li><a href="#">Consutling ,</a></li>
                </ul>
              </div>
              <div class="share">
                Share: &nbsp;
                <ul>
                  <li>
                    <a target="_Blank" href="http://www.facebook.com"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a target="_Blank" href="http://www.twitter.com"
                      ><i class="fab fa-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a target="_Blank" href="http://www.google.com"
                      ><i class="fab fa-google-plus-g"></i
                    ></a>
                  </li>
                  <li>
                    <a target="_Blank" href="http://www.linkedin.com"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </li>
                  <li>
                    <a target="_Blank" href="http://www.instagram.com"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end tag-share -->
          </div>
        </div>
        <div class="col-md-4 col-xs-12">
          <div class="blog-sidebar">
            <div class="widget category-widget">
              <h3>签证保险</h3>
              <ul>
                <li v-for="(item, index) in insuranceListInfo" :key="index">
                  <router-link :to="`/news/detail/${item.newsId}`"
                    >{{ item.newsTitle }}
                    <span>{{ item.createDate }}</span></router-link
                  >
                </li>
              </ul>
            </div>
            <div class="widget category-widget">
              <h3>西葡资讯</h3>
              <ul>
                <li v-for="(item, index) in newsListInfo" :key="index">
                  <router-link :to="`/news/detail/${item.newsId}`"
                    >{{ item.newsTitle }}
                    <span>{{ item.createDate }}</span></router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bread-container {
  margin-bottom: 30px;
  margin-left: 0px;
}
</style>
