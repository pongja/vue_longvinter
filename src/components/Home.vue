<template>
  <div class="main">
    <div id="mainVisual">
      <div class="mainSlider">
        <div class="msImg">
          <div class="tbox">
            <div class="blur_box"></div>
            <div
              class="ms_text_wrap"
              style="display: inline-block;">
              <h4>
                LongVinter
              </h4>
              <p>LongVinter portfolio</p>
            </div>
          </div>
          <button
            type="button"
            class="down_arrow">
            <a href="#section_top"><img
              src="../../public/images/down-circle-outline.svg"
              alt="down_icon" /></a>
          </button>
        </div>
      </div>
    </div>
    <div class="mainsection">
      <div id="section_top"></div>
      <div class="section animatable">
        <div class="section-text order-grid text-left">
          <p class="section-t1">
            Explore !
          </p>
          <p class="section-t2">
            롱빈터의 맵 곳곳을 탐험하며 <br />새로운 곳을 탐험해보세요.
          </p>
        </div>
        <div class="sectimg1 centerimg">
        </div>
      </div>
      <div class="section animatable">
        <div class="sectimg2 centerimg">
        </div>
        <div class="section-text text-right">
          <p class="section-t1">
            Build !
          </p>
          <p class="section-t2">
            롱빈터에서 건물을 짓고 나만의 <br />집을 만들수있습니다.
          </p>
        </div>
      </div>
      <div class="section animatable">
        <div class="section-text order-grid text-left">
          <p class="section-t1">
            Make friends !
          </p>
          <p class="section-t2">
            마음맞는 친구와 파티를 맺어<br /> 롱빈터를 즐겨보세요.
          </p>
        </div>
        <div class="sectimg3 centerimg">
        </div>
      </div>
      <div class="section animatable">
        <div class="sectimg4 centerimg">
        </div>
        <div class="section-text text-right">
          <p class="section-t1">
            Create !
          </p>
          <p class="section-t2">
            롱빈터는 무기 & 아이템을 만들어 <br />다른 플레이어와 PVP를 할수있습니다.
          </p>
        </div>
      </div>
      <div class="section animatable">
        <div class="section-text order-grid text-left">
          <p class="section-t1">
            Survive !
          </p>
          <p class="section-t2">
            롱빈터에서 건물을 짓고 친구를 만들고 무기를 <br />생산하여 적과 환경으로부터 살아남으세요.!
          </p>
        </div>
        <div class="sectimg5 centerimg">
        </div>
      </div>
      <div class="section animatable bottomsection">
        <div class="sectimg6 centerimg">
        </div>
        <div class="section-text text-right">
          <p class="section-t1">
            Get Started Now.
          </p>
          <p
            class="section-t2">
            스팀에서 만나볼수있습니다.<br />
            <span
              class="steamfont"
              style="cursor: pointer;"
              @click="gosteam()">https://store.steampowered.com/app/1635450/Longvinter/</span>
          </p>
        </div>
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
import { watchEffect,ref,onMounted } from 'vue'

const scrollActive = ref(false)
const scrollPostion  = ref(0)
onMounted(()=>{
  window.addEventListener('scroll', () => {
    scrollActive.value = scrollPostion.value > 800
    scrollPostion.value = window.scrollY
  })
  window.addEventListener('resize', () => setScreenSize())
})
const toTop = () => {
   window.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    })
  }
const gosteam = () => {
  window.location = 'https://store.steampowered.com/app/1635450/Longvinter/'
}
watchEffect(()=>{
window.addEventListener('scroll', function(e) {
scrollEvent(e)
})
var scrollEvent = function() {
var scroll = window.innerHeight + window.scrollY
var itemList = document.querySelectorAll('.mainsection .section')
Array.prototype.forEach.call(itemList, function(section){
  if(section.offsetTop < scroll) {
    section.classList.remove('animatable')
    section.classList.add('animated')
  }
})
}
})
const setScreenSize =() => {
  const vh = window.innerHeight * 0.01

  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
</script>
<style scoped>
@import "~/assets/main.css";
@import "~/assets/reset.css";
@import "~/assets/topbtn.css";

.footer{
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  background: #1B1B1E;
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
