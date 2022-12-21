<template>
  <div class="wrap_404">
    <h1 class="title_404">
      4<span><img src="../../public/images/happy.png" /></span>4
    </h1>
    <p class="eng_text">
      Error Not Found
    </p>
    <p class="subtitle_404">
      죄송합니다.<br class="mobi_show" />
      요청하신 페이지를 찾을 수 없습니다.
    </p>
    <p>페이지가 사라졌거나 잘못된 경로를 이용하셨습니다.</p>
    <div class="button_wrap">
      <!-- <button
        type="button"
        class="main_btn"
        onclick="location.href='/'">
        메인으로
      </button> -->
      <button
        type="button"
        class="back_btn"
        @click="beforepg">
        이전 페이지
      </button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'


const router = useRouter()

const beforepg = () =>{
  router.go(-1)
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+KR:wght@400;500;700&family=Poor+Story&family=Roboto:wght@300;400;500&display=swap');
.wrap_404{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
}
p {
  margin-bottom: 0;
}
h1 {
  font-weight: bold;
  font-size: 95px;
  display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 0;
}
h1 img {
  width: 100px;
}
.eng_text {
  font-size: 32px;
  font-weight: 500;
  color: #888;
  margin-bottom: 30px;
}
.subtitle_404 {
  font-size: 22px;
  font-weight: bold;
}

.button_wrap {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
}
.button_wrap button {
  border: none;
  width: 120px;
  height: 50px;
}
.button_wrap button:hover {
  background: white;
  color: #333;
  border: 2px dashed #333;
}
.button_wrap .back_btn {
  background: #F5D042;
  font-weight:500;
}
.mobi_show {
  display: none;
}
@media screen and (max-width: 1060px) {
  .wrap_404 {
    transform: translate(-50%, -60%);
    width: 100%;
    padding: 0 20px;
  }
  h1 img {
    width: 96px;
  }
  .eng_text {
    font-size: 26px;
  }
  .subtitle_404 {
    font-size: 20px;
  }
  .mobi_show {
  display: block;
}
}
</style>
