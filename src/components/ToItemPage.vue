<template>
  <div class="container">
    <h3 class="info_long">
      롱빈터 정보
    </h3>
    <div class="fish_item">
      <Carousel
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

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div
      class="youtube_container"
      :class="{'youtube_container on' : WidthActive}">
      <h3 class="youtube_title">
        공식영상
      </h3>
      <component 
  is="script" 
  id="youtube-iframe-js-api-script"
  src="https://www.youtube.com/iframe_api"
/>
      <YouTube
        src="https://youtu.be/GQmO52f26Ws"
        width="540" 
        height="300" />
    </div>
    <div
      class="youtube_container_mobile"
      :class="{'youtube_container_mobile on' : WidthmobileActive}">
      <h3 class="youtube_title">
        공식영상
      </h3>
      <component 
  is="script" 
  id="youtube-iframe-js-api-script"
  src="https://www.youtube.com/iframe_api"
/>
      <YouTube
        src="https://youtu.be/GQmO52f26Ws"
        width="280" 
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
import { Carousel, Slide,Navigation } from 'vue3-carousel'
import YouTube from 'vue3-youtube'
import { ref } from 'vue'

const WidthActive = ref(false)
const WidthPostion  = ref(0)
//모바일
const WidthmobileActive = ref(true)
const WidthmobilePostion  = ref(0)

window.addEventListener('resize', () => {
  WidthmobileActive.value = WidthmobilePostion.value > 589
  WidthmobilePostion.value = window.innerWidth
})
 window.addEventListener('resize', () => {
    WidthActive.value = WidthPostion.value < 590
    WidthPostion.value = window.innerWidth
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
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: white;

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
