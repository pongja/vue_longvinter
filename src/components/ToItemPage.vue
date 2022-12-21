<template>
  <div class="container">
    <div class="fish_item">
      <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000">
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="carousel__item">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.content }}</p>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
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
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = [
  { id: 1, title: 'Vue 3 Introduction', content: 'VueJS is a library'},
  { id: 2, title: 'Vue 3 Components', content: 'Know the components' },
  { id: 3, title: 'Vue 3 Components', content: 'Know the components' },
  { id: 4, title: 'Vue 3 Components', content: 'Know the components' },
  { id: 5, title: 'Vue 3 Components', content: 'Know the components' },
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

.container {
  max-width: 960px;
  margin: 0 auto;
  height: 100vh;
  padding-top: 150px;
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