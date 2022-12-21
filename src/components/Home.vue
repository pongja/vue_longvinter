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
              <p>LongVinter 포트폴리오</p>
            </div>
          </div>
          <button
            type="button"
            class="ms_down_icon">
            <a href="#section_top"><img
              src="../../public/images/down-circle-outline.svg"
              alt="down_ic.title-div[data-v-08e32229]on" /></a>
          </button>
        </div>
      </div>
    </div>
    <div class="mainsection">
      <div id="section_top"></div>
      <div class="section animatable">
        <div class="section-text order-grid text-left">
          <p class="section-t1">
            탐험하고 !
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
            건물을 짓고 !
          </p>
          <p class="section-t2">
            롱빈터에서 건물을 짓고 나만의 집을 만들수있습니다.
          </p>
        </div>
      </div>
      <div class="section animatable">
        <div class="section-text order-grid text-left">
          <p class="section-t1">
            친구를 만들고 !
          </p>
          <p class="section-t2">
            마음맞는 친구와 파티를 맺어 롱빈터를 즐겨보세요.
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
            무기 & 아이템을 만들고 !
          </p>
          <p class="section-t2">
            롱빈터는 무기 & 아이템을 만들어 다른 플레이어와 <br />PVP를 할수있습니다.
          </p>
        </div>
      </div>
      <div class="section animatable">
        <div class="section-text order-grid text-left">
          <p class="section-t1">
            살아남으세요 !
          </p>
          <p class="section-t2">
            롱빈터에서 건물을 짓고 친구를 만들고 무기를 <br />생산하여 적과 환경으로부터 살아남으세요.!
          </p>
        </div>
        <div class="sectimg5 centerimg">
        </div>
      </div>
      <div class="section animatable">
        <div class="sectimg6 centerimg">
        </div>
        <div class="section-text text-right">
          <p class="section-t1">
            지금바로 시작하세요.
          </p>
          <p
            class="section-t2">
            스팀에서 만나볼수있습니다.
            <span @click="gosteam()">https://store.steampowered.com/app/1635450/Longvinter/</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

const gosteam = () => {
  window.location = 'https://store.steampowered.com/app/1635450/Longvinter/'
}
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
</script>
<style scoped>
@import "~/assets/main.css";
@import "~/assets/reset.css";


</style>
