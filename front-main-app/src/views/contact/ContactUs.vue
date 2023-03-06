<script setup lang="ts"></script>

<template>
  <section class="breadcromb-top section_100">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ol class="text-white justify-content-center no-border mb-0">
            <li class="breadcrumb-item"><a href="index.html">首页</a></li>
            <li class="breadcrumb-item active">联系我们</li>
          </ol>
          <div class="breadcromb-box">
            <h3>联系我们</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="contact-pg-section pt60 pb60">
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
            method="post"
            class="contact-validation-active"
            id="contact-form-main"
            novalidate="novalidate"
          >
            <div>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="姓名"
              />
            </div>
            <div>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="邮箱"
              />
            </div>
            <div>
              <input
                type="text"
                class="form-control"
                name="phone"
                id="phone"
                placeholder="电话"
              />
            </div>
            <div>
              <select name="subject" class="form-control">
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
              ></textarea>
            </div>
            <div class="submit-area">
              <button type="submit" class="theme-btn-s4">现在发送</button>
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

<style lang="scss" scoped></style>
