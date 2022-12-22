<template>
  <div class="container">
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
          <Pagination />
        </template>
      </Carousel>
    </div>
    <YouTube url="https://youtu.be/GQmO52f26Ws" />
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
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import YouTube from 'vue3-youtube'


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

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: white;

}
.slideimg{
  width: 100%;
  height: 400px;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  height: 100vh;
  padding-top: 200px;
}

/* footer */
.footer {
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
