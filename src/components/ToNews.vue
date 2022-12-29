<template>
  <div id="wrap">
    <div class="container">
      <hr class="hr_tag" />
      <div class="grid_news">
        <img
          src="../../public/images/happy.png"
          class="happy_img" />
        <div>
          <p class="title_News">
            News page has been opened.
          </p>
          <P class="subTitle">
            #Develog
          </P>
          <p class="content_p">
            Long Vinter news and information on the latest developments related to the website.
          </p>
        </div>
      </div>
      <div class="develog_container">
        <div
          class="develog_box aos-init"
          data-aos="zoom-in-up"
          data-aos-duration="1500">
          <img
            src="../../public/images/portf.jpg"
            class="develog_img" />
          <div>
            <p class="dayfont">
              <span class="dayfont_span">Wednesday 28</span>
            </p>
            <p class="month_font">
              #2 December News
            </p>
            <p class="box_font">
              There is a problem that the server cannot be maintained due to the unstable server caused by DDoS.
            </p>
          </div>
        </div>
        <div
          class="develog_box aos-init"
          data-aos="zoom-in-up"
          data-aos-duration="1500">
          <img
            src="../../public/images/server.jpg"
            class="develog_img" />
          <div>
            <p class="dayfont">
              <span class="dayfont_span">Tuesday 27</span>
            </p>
            <p class="month_font">
              #1 December News
            </p>
            <p class="box_font">
              There is a problem that the server cannot be maintained due to the unstable server caused by DDoS.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_wrap">
        <div class="footer_text">
          <p>GitHub : https://github.com/pongja</p>
          <p>email : rlqjadl2222@naver.com</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
    AOS.init()
})

</script>
<style scoped>
@import "~/assets/reset.css";
@import "~/assets/news.css";

/* footer */
.footer{
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  background: #1B1B1E;
  /* position: absolute;
  bottom: 0; */
 }
 .footer .footer_wrap {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
}
.footer .footer_text {
  color: white;
  text-align: center;
  margin-top: 12px;
}
.footer .footer_text p {
  line-height: 1.6;
  font-size: 15px;
  margin-bottom: 0;
}
</style>
