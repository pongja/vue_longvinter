<template>
  <div class="container">
    <h3 class="info_long margin-bottom">
      Long-Vinter World Slider
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
    <div class="bird_container">
      <div class="bird_containerbox">
        <h3 class="info_long margin-bottom">
          Long-Vinter hunting book
        </h3>
        <div class="bird_div">
          <button
            class="brid_btn"
            @click="pheasant = !pheasant">
            click
          </button>
          <Transition>
            <div
              v-if="pheasant"
              class="flex_pimg">
              <img
                src="../../public/images/bird1.png"
                class="brid_img" />
              <p>닭 : 흔하게 들판에서 많이 발견할 수 있다.</p>
            </div>
            <div
              v-else
              class="flex_else">
              <div class="grid_img_p">
                <img
                  src="../../public/images/pheasant.png"
                  class="brid_img" />
                <p>닭을 사냥하면 자주발견되는 깃털아이템</p>
              </div>
              <div class="grid_img_p"> 
                <img
                  src="../../public/images/pheasant2.png"
                  class="brid_img" />
                <p>닭을 사냥하면 간헐적으로 발견되는 깃털아이템</p>
              </div>  
            </div>
          </Transition>
        </div>
        <div class="bird_div">
          <button
            class="brid_btn"
            @click="grouse = !grouse">
            click
          </button>
          <Transition>
            <div
              v-if="grouse"
              class="flex_pimg">
              <img
                src="../../public/images/bird2.png"
                class="brid_img" />
              <p>뇌조  : 설원지역에서 발견할 수 있다.</p>
            </div>
            <div
              v-else
              class="flex_else">
              <div class="grid_img_p">
                <img
                  src="../../public/images/grouse.png"
                  class="brid_img" />
                <p>뇌조를 사냥하면 자주발견되는 깃털아이템</p>
              </div>
              <div class="grid_img_p"> 
                <img
                  src="../../public/images/grouse2.png"
                  class="brid_img" />
                <p>뇌조를 사냥하면 간헐적으로 발견되는 깃털아이템</p>
              </div>  
            </div>
          </Transition>
        </div>
        <div class="bird_div">
          <button
            class="brid_btn"
            @click="biggrouse = !biggrouse">
            click
          </button>
          <Transition>
            <div
              v-if="biggrouse"
              class="flex_pimg">
              <img
                src="../../public/images/bird3.png"
                class="brid_img" />
              <p>큰 뇌조  : 설원지역과 사막지역 맵상단에서 발견할 수 있다.</p>
            </div>
            <div
              v-else
              class="flex_else">
              <div class="grid_img_p">
                <img
                  src="../../public/images/biggrouse.png"
                  class="brid_img" />
                <p>큰 뇌조를 사냥하면 자주발견되는 깃털아이템</p>
              </div>
              <div class="grid_img_p"> 
                <img
                  src="../../public/images/biggrouse2.png"
                  class="brid_img" />
                <p>큰 뇌조를 사냥하면 간헐적으로 발견되는 깃털아이템</p>
              </div>  
            </div>
          </Transition>
        </div>
        <div class="bird_div">
          <button
            class="brid_btn"
            @click="peacock = !peacock">
            click
          </button>
          <Transition>
            <div
              v-if="peacock"
              class="flex_pimg">
              <img
                src="../../public/images/bird4.png"
                class="brid_img" />
              <p>공작새 : 맵 하단 외딴 섬 지역에서 발견할 수 있다.</p>
            </div>
            <div
              v-else
              class="flex_else">
              <div class="grid_img_p">
                <img
                  src="../../public/images/peacock.png"
                  class="brid_img" />
                <p>공작새를 사냥하면 자주발견되는 깃털아이템</p>
              </div>
              <div class="grid_img_p"> 
                <img
                  src="../../public/images/peacock2.png"
                  class="brid_img" />
                <p>공작새를 사냥하면 간헐적으로 발견되는 깃털아이템</p>
              </div>  
            </div>
          </Transition>
        </div>
      <!--<div class="bird_div">
        <button @click="deer = !deer">
          click
        </button>
        <Transition>
          <p v-if="deer">
            hello
          </p>
          <p v-else>
            hello2
          </p>
        </Transition>
      </div>-->
      </div>
    </div>
    <div class="info_container">
      <h3 class="info_long margin-bottom">
        LongVinter-info
      </h3>
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
      <h3 class="youtube_title margin-bottom">
        Long-Vinter Youtube
      </h3>
      <div class="youtube_box">
        <YouTube
          src="https://youtu.be/GQmO52f26Ws"
          width="500" 
          height="300" />
      </div> 
    </div>
    <div
      class="youtube_container_mobile"
      :class="{'youtube_container_mobile on' : WidthmobileActive}">
      <h3 class="youtube_title margin-bottom">
        Long-Vinter Youtube
      </h3>
      <component 
        :is="script" 
        id="youtube-iframe-js-api-script"
        src="https://www.youtube.com/iframe_api" />
      <div class="youtube_box">
        <YouTube
          src="https://youtu.be/GQmO52f26Ws"
          width="220" 
          height="auto" 
          class="youtube_padding" />
      </div>
    </div>
    <button
      class="btn_top_display"
      :class="{'btn_top_display on' : scrollActive}"
      @click="toTop">
    </button>
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
import { ref,watchEffect,onMounted } from 'vue'

const WidthActive = ref(false)

//모바일
const WidthmobileActive = ref(true)

const pheasant = ref(true)
const grouse = ref(true)
const biggrouse = ref(true)
const peacock = ref(true)


watchEffect(()=>{
  window.addEventListener('resize', () => {
  WidthmobileActive.value = window.innerWidth > 590
  
  })
  window.addEventListener('resize', () => {
    WidthActive.value =  window.innerWidth < 590
})
})
const scrollActive = ref(false)
const scrollPostion  = ref(0)
onMounted(()=>{
  window.addEventListener('scroll', () => {
    scrollActive.value = scrollPostion.value > 800
    scrollPostion.value = window.scrollY
  })
})
const toTop = () => {
   window.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    })
  }
 
const slides = [
  { id: 1, src: 'sun1.png' },
  { id: 2, src: 'hillring.png'  },
  { id: 3, src: 'sun2.png'  },
  { id: 4, src: 'fishing.png' },
  { id: 5, src: 'sun4.png'  },
  { id: 6, src: 'sun3.png'  },
  { id: 7, src: 'home.png'  },

]
</script>
<style scoped>
@import "~/assets/reset.css"; 
@import "~/assets/topbtn.css";
@import "~/assets/infopage.css";

</style>
