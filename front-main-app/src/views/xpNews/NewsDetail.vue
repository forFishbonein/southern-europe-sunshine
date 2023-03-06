<script setup lang="ts"></script>
<template>
  <section class="Blog-list pt80 pb80 blog-single-section">
    <div class="container">
      <div class="bread-container">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/news' }"
            >西葡资讯</el-breadcrumb-item
          >
          <el-breadcrumb-item>详情页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="row">
        <div class="col-md-8 col-xs-12">
          <div class="blog-content">
            <div class="post format-standard-image">
              <div class="entry-media"><img src="/images/b1.jpg" alt="" /></div>
              <ul class="entry-meta">
                <li>
                  <a href="#"><i class="far fa-clock"></i>Feb 20, 2019</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-funnel-dollar"></i>Consulting</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-comments"></i>3</a>
                </li>
              </ul>
              <h2>西甲第23轮巴萨1:0小胜皇马，梅西任意球绝杀</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip It showed a lady fitted out with a fur hat and
                fur boa who sat upright, raising a heavy fur muff that covered
                the whole of her lower
              </p>
              <p>
                His many legs, pitifully thin compared with the size of the rest
                of him, waved about helplessly as he looked. "What's happened to
                me?" he thought. It wasn't a dream. His room, a proper human
                room although a little too small, lay peacefully between its
                four familiar walls. A collection of textile samples lay spread
                out on the table - Samsa was a travelling salesman - and above
                it there hung a picture that he had recently cut out of an
                illustrated magazine and housed in a nice, gilded frame. It
                showed a lady fitted out with a fur hat and fur boa who sat
                upright, raising a heavy fur muff that covered the whole of her
                lower arm towards the viewer. Gregor then turned to look out the
                window at the dull weather. Drops
              </p>
              <blockquote>
                Samples lay spread out on the table - Samsa was a travelling
                salesman - and above it there hung a picture that he had
                recently cut out of an illustrated magazine and housed in a
                nice, gilded frame. It showed a lady fitted out with a fur hat
                and fur boa who sat upright
                <span class="quoter">- Mic dow</span>
              </blockquote>
              <h3>
                Recently cut out of an illustrated magazine and housed in a
                nice, gilded frame. It showed a lady fitted out with a fur hat
                and fur boa
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor
                sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam
              </p>
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
            <div class="widget search-widget">
              <h3>Search</h3>
              <form>
                <div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Post.."
                  />
                  <button type="submit"><i class="ti-search"></i></button>
                </div>
              </form>
            </div>
            <div class="widget category-widget">
              <h3>Categories</h3>
              <ul>
                <li>
                  <a href="#">Business <span>(2)</span></a>
                </li>
                <li>
                  <a href="#">Corporate <span>(5)</span></a>
                </li>
                <li>
                  <a href="#">Market Research <span>(3)</span></a>
                </li>
                <li>
                  <a href="#">Financial Planning <span>(7)</span></a>
                </li>
                <li>
                  <a href="#">Consulting <span>(10)</span></a>
                </li>
              </ul>
            </div>
            <div class="widget recent-post-widget">
              <h3>Recent post</h3>
              <div class="posts">
                <div class="post">
                  <div class="img-holder">
                    <img src="images/b1.jpg" alt="" />
                  </div>
                  <div class="details">
                    <h4>
                      <a href="#">Slightly domed and divided by arches</a>
                    </h4>
                    <span class="date">Mar 19 2019</span>
                  </div>
                </div>
                <div class="post">
                  <div class="img-holder">
                    <img src="images/b2.jpg" alt="" />
                  </div>
                  <div class="details">
                    <h4>
                      <a href="#">Collection of textile samples lay spread</a>
                    </h4>
                    <span class="date">Mar 19 2019</span>
                  </div>
                </div>
                <div class="post">
                  <div class="img-holder">
                    <img src="images/b3.jpg" alt="" />
                  </div>
                  <div class="details">
                    <h4>
                      <a href="#"
                        >Recently cut out of an illustrated magazine
                      </a>
                    </h4>
                    <span class="date">Mar 19 2019</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget tag-widget">
              <h3>Tags</h3>
              <ul>
                <li><a href="#">Consulting</a></li>
                <li><a href="#">Analysis</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Corporate</a></li>
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
