<template>
  <div class="container">
    <h3 class="info_long">
      롱빈터 정보
    </h3>
    <div class="fish_item">
      <Carousel
        id="Carouselcss"
        :wrap-around="true"
        :breakpoints="breakpoints"
        :autoplay="5000">
        <Slide
          v-for="slide in slides"
          :key="slide.id">
          <div class="carousel__item">
            <h3></h3>
            <img
              :src="`/images/${slide.src}`"
              class="slideimg" />
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="info_container">
      <div class="info_box">
        <h2>
          Longvinter
        </h2>
        <img
          class="info_img"
          src="../../public/images/longvinter.png" />
        <div class="info_grid_line">
          <div class="info_grid">
            <div class="frist_align">
              개발
            </div>
            <div class="sec_align">
              Uuvana Studios
            </div>
          </div>
          <div class="info_grid">
            <div class="frist_align">
              유통
            </div>
            <div class="sec_align">
              Uuvana Studios
            </div>
          </div>
          <div class="info_grid">
            <div class="frist_align">
              운영체제
            </div>
            <div class="sec_align windows">
              Windows
            </div>
          </div>
          <div class="info_grid">
            <div class="frist_align">
              플랫폼
            </div>
            <div class="sec_align steam">
              Steam
            </div>
          </div>
          <div class="info_grid">
            <div class="frist_align">
              장르
            </div>
            <div class="sec_align">
              생존, 크래프팅, 샌드박스, 멀티플레이
            </div>
          </div>
          <div class="info_grid">
            <div class="frist_align">
              엔진
            </div>
            <div class="sec_align">
              언리얼 엔진4
            </div>
          </div>
          <div class="info_grid">
            <div class="frist_align">
              한국어 지원
            </div>
            <div class="sec_align">
              공식 지원
            </div>
          </div>
          <div class="info_grid">
            <div class="frist_align">
              현재 버전
            </div>
            <div class="sec_align">
              Beta 1.0.9
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="youtube_container"
      :class="{'youtube_container on' : WidthActive}">
      <h3 class="youtube_title">
        공식영상
      </h3>
      <YouTube
        src="https://youtu.be/GQmO52f26Ws"
        width="500" 
        height="300" />
    </div>
    <div
      class="youtube_container_mobile"
      :class="{'youtube_container_mobile on' : WidthmobileActive}">
      <h3 class="youtube_title">
        공식영상
      </h3>
      <component 
        :is="script" 
        id="youtube-iframe-js-api-script"
        src="https://www.youtube.com/iframe_api" />
      <YouTube
        src="https://youtu.be/GQmO52f26Ws"
        width="220" 
        height="auto" 
        class="youtube_padding" />
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
</template>
<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import YouTube from 'vue3-youtube'
import { ref,watchEffect } from 'vue'

const WidthActive = ref(false)

//모바일
const WidthmobileActive = ref(true)


watchEffect(()=>{
  window.addEventListener('resize', () => {
  WidthmobileActive.value = window.innerWidth > 590
  
  })
  window.addEventListener('resize', () => {
    WidthActive.value =  window.innerWidth < 590
})
})

 
const slides = [
  { id: 1, src: 'home.png' },
  { id: 2, src: 'hillring.png'  },
  { id: 3, src: 'fishing.png'  },
]
</script>
<style scoped>

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: white;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  
}
.info_container{
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info_grid_line{
  line-height: 1.5;
}
.sec_align{
  padding-left: 10px;
}
.windows{
  color: #0080FF;
}
.steam{
  color:#151515;
  font-weight: bold;
}
.info_box{
  margin: 0 auto;
  box-shadow: 2px 2px 15px -3px #777;
  padding: 10px;
  max-width: 600px;
  font-family: 'Noto Sans KR', sans-serif;
}
.frist_align{
  text-align: center;
}
.info_box h2{
  text-align: center;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 26px;
}
.info_grid{
  display: grid;
  grid-template-columns: 100px 1fr;
  height: 50px;
  align-items: center;
}
.fish_item{
  border-radius: 40px;
  
}
.info_img{
  width: 568px;
  height: auto;
}
.youtube_title{
  text-align: center;
  font-size: 25px;
}
.youtube_container{
  width: 100%;
  margin: 0 auto;
  min-height: 200px;
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
}
.youtube_container.on{
  display: none;
}
.slideimg{
  width: 100%;
  height: 400px;
  border-radius: 80px;
  padding: 20px;
  
}
.youtube_container_mobile{
  width: 100%;
  margin: 0 auto;
  min-height: 200px;
  display: grid;
  align-items: center;
  justify-content: center;
}
.youtube_container_mobile.on{
  display: none;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  min-height: 200px;
  padding: 100px 16px 0px 16px;
}
.info_long{
  font-weight: bold;
  font-size: 27px;
}
/* footer */
.footer {
  width: 100%;
  height: 140px;
  margin-top: 100px;
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
@media screen and (max-width:768px) {
  .info_img{
    width: 100%;
  }
  .info_container{
    margin: 50px 0;
  }
  .info_box{
    width: 100%;
  }
}
@media screen and (max-width:560px) {
   /* .youtube_container {
    display: none;
  } */
}
@media screen and (max-width:500px){
  .slideimg{
    height: 300px;
    padding: 5px;
    border-radius: 40px;
  }
}
@media screen and (max-width:375px){
  .slideimg{
    height: 200px;
  }
}
</style>
