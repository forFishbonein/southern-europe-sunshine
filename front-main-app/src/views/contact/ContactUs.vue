<script setup lang="ts">
import { ref } from "vue";
import { membersInfoType } from "@/apis/interface/resultType";
import { postContactToUs, getTeamMembersInfo } from "@/apis/contact";
import { mainStore } from "@/store/user";
const store = mainStore();
let allMembersListInfo = ref([] as membersInfoType[]);
const getAllMembersInfo = () => {
  getTeamMembersInfo()
    .then((res: any) => {
      if (res.code != 2000) {
        //@ts-ignore
        ElMessage({
          type: "error",
          message: res.msg,
        });
      } else {
        // alert(page.value);
        allMembersListInfo.value = res.data;
        console.log(allMembersListInfo.value);
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
getAllMembersInfo();
interface contactInfo {
  name: string;
  email: string;
  phone: string;
  myitems: string;
  remark: string;
  userid: Number;
}
let contactUsInfo = ref({} as contactInfo);
const contactUs = () => {
  if (store.userInfo.userid) {
    contactUsInfo.value.userid = store.userInfo.userid;
    console.log(contactUsInfo.value);
    postContactToUs(contactUsInfo.value)
      .then((res: any) => {
        if (res.code != 2000) {
          //@ts-ignore
          ElMessage({
            type: "error",
            message: res.msg,
          });
        } else {
          //@ts-ignore
          ElMessage({
            type: "success",
            message: "发送成功！",
          });
          contactUsInfo.value = {} as contactInfo;
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
    //@ts-ignore
    ElMessage({
      type: "error",
      message: "请先登录！",
    });
  }
};
</script>

<template>
  <section class="breadcromb-top section_100">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ol class="text-white justify-content-center no-border mb-0">
            <li class="breadcrumb-item">
              <router-link to="/home">首页</router-link>
            </li>
            <li class="breadcrumb-item active">关于我们</li>
          </ol>
          <div class="breadcromb-box">
            <h3>关于我们</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="Categories pt80 pb80 theme-travel">
    <div class="container">
      <div class="row">
        <div class="col col-lg-12 col-md-12 col-sm-12">
          <div class="section-title-s4">
            <h2>我们的公司</h2>
            <p>底蕴深厚 卓尔不凡</p>
          </div>
        </div>
      </div>
      <div class="row flex-wapper body-company">
        <div class="left-body">
          <div class="title">公司介绍：</div>
          <p>公司注册号:B88271861</p>
          <p>旅行社编号:3943</p>
          <p class="third">
            西班牙南欧阳光国际 (Viajes Varano S.L)
            设立于西班牙首都马德里;并在北京，武汉，西安等地设立运营中心及办事处。深耕伊比利亚半岛，生活式旅行的引领者，与西班牙葡萄牙安道尔各级政府及相关企业、协会、学校等都有着良好的合作,为促进中西文化交流助力!
          </p>
        </div>
        <div class="right-body">
          <div class="title">业务内容：</div>
          <p>当地玩乐</p>
          <p>亲友小团</p>
          <p>24大主题旅游</p>
          <p>展会接待安排</p>
          <p>企业培训接待</p>
          <p>公商务发函与接待</p>
          <p>画展影展等文化交流活动</p>
        </div>
      </div>
    </div>
  </section>
  <section class="Categories pt80 pb80 theme-travel">
    <div class="container">
      <div class="row">
        <div class="col col-lg-12 col-md-12 col-sm-12">
          <div class="section-title-s4">
            <h2>我们的团队</h2>
            <p>工作负责 玩乐达人</p>
          </div>
        </div>
      </div>
      <div class="row flex-wapper">
        <el-card
          :body-style="{ padding: '0px' }"
          v-for="(item, index) in allMembersListInfo"
          :key="index"
        >
          <img
            :src="'http://182.92.103.154/static/images/upload/' + item.imageUrl"
            class="image"
          />
          <div style="padding: 14px" class="card-content">
            <span>{{
              item.enName && item.userName
                ? item.userName + "/" + item.enName
                : item.enName
                ? item.enName
                : item.userName
            }}</span>
            <!-- <div class="bottom clearfix"> -->
            <p>{{ item.rankTitle }}</p>
            <p>{{ item.reMark }}</p>
            <!-- </div> -->
          </div>
        </el-card>
      </div>
    </div>
  </section>
  <section class="contact-pg-section pt60 pb60 theme-travel2">
    <div class="container">
      <div class="row">
        <div class="col col-lg-12 col-md-12 col-sm-12">
          <div class="section-title-s4">
            <h2>与我们取得联系</h2>
            <p>我们会在第一时间处理您的需求，为您提供高质量服务。</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7 col-md-6 col-sm-12">
          <form
            class="contact-validation-active"
            id="contact-form-main"
            novalidate="novalidate"
            autocomplete="off"
            @submit.prevent="contactUs"
          >
            <div>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="姓名"
                v-model="contactUsInfo.name"
              />
            </div>
            <div>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="邮箱"
                v-model="contactUsInfo.email"
              />
            </div>
            <div>
              <input
                type="text"
                class="form-control"
                name="phone"
                id="phone"
                placeholder="电话"
                v-model="contactUsInfo.phone"
              />
            </div>
            <div>
              <select
                name="subject"
                class="form-control"
                v-model="contactUsInfo.myitems"
              >
                <option disabled="disabled" selected="">事项</option>
                <option>旅游定制</option>
                <option>问题咨询</option>
                <option>意见反馈</option>
              </select>
            </div>
            <div class="fullwidth">
              <textarea
                class="form-control"
                name="note"
                id="note"
                placeholder="请描述..."
                v-model="contactUsInfo.remark"
              ></textarea>
            </div>
            <div class="submit-area">
              <button
                type="submit"
                class="theme-btn-s4"
                style="cursor: pointer"
              >
                现在发送
              </button>
              <div id="loader">
                <i class="ti-reload"></i>
              </div>
            </div>
          </form>
        </div>

        <div class="col-lg-5 col-md-6 col-sm-12">
          <div class="contact-info">
            <div>
              <div class="icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <div class="details">
                <h5>联系电话</h5>
                <p>+65482456147485, 012574854</p>
              </div>
            </div>
            <div>
              <div class="icon">
                <i class="far fa-envelope"></i>
              </div>
              <div class="details">
                <h5>联系邮箱</h5>
                <p>demo@mail.com</p>
              </div>
            </div>
            <div>
              <div class="icon">
                <i class="fas fa-headphones-alt"></i>
              </div>
              <div class="details">
                <h5>企业微信</h5>
                <p>+5+654651654</p>
              </div>
            </div>
            <div>
              <div class="icon">
                <i class="fas fa-street-view"></i>
              </div>
              <div class="details">
                <h5>公司地址</h5>
                <p>45, street melabo direm aduto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end container -->
  </section>
</template>

<style lang="scss" scoped>
.flex-wapper {
  justify-content: space-around;
}
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 287px;
  height: 130px;
  span {
    color: #c60b1e;
    font-weight: 800;
  }
  p {
    // display: flex;
    // justify-content: center;
    text-align: center;
  }
}
.el-card {
  margin-bottom: 30px;
}
.body-company {
  display: flex;
  justify-content: space-around;
  .left-body {
    height: 300px;
    width: 400px;
    // border: 1px #e8604c solid;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    .title {
      font-size: 28px;
      font-weight: 1000;
    }
    .third {
      line-height: 2em;
    }
  }
  .right-body {
    height: 300px;
    width: 400px;
    // border: 1px #e8604c solid;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    .title {
      font-size: 28px;
      font-weight: 1000;
    }
  }
}
.theme-travel2 {
  padding-top: 0;
}
.image {
  width: 287px;
  height: 350px;
  display: block;
}
</style>
