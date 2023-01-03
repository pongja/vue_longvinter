<template>
  <div id="wrap">
    <div id="mainVisual">
      <div class="mainSlider">
        <div class="msImg"></div>
        <div class="tbox">
          <h4>커뮤니티</h4>
        </div>
      </div>
    </div>
    <div class="container notice_container">
      <div class="wright_wrap">
        <div class="ListContainer">
          <h3 class="box_title">
            커뮤니티
          </h3>
          <button
            type="button"
            class="writing_btn btn_po"
            @click="NoticeWrite()">
            글쓰기
          </button>
          <table class="box">
            <thead>
              <th>제목</th>
              <th class="th_name">
                작성자
              </th>
              <th class="th_date">
                날짜
              </th>
            </thead>
            <tbody>
              <tr>
                <td
                  class="td_title">
                </td>
                <td class="text_center">
                </td>
                <td class="text_center">
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="mobile_notice_wrap"
            style="cursor: pointer;">
            <ul
              class="mobi_notice_list">
              <li>
                <a class="notice_title"></a>
                <p class="notice_date">
                </p>
                <p class="right_icon"></p>
              </li>
            </ul>
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
import { useRouter } from 'vue-router'
const router = useRouter()
const NoticeWrite = () => {
  router.push({
    path: '/Notice/Create',
  }) 
}
</script>
<style scoped>
@import "~/assets/reset.css";
@import "~/assets/notice.css";


#mainVisual {
    position: relative;
}
.mainSlider {
    width: 100%;
    height: auto;
}
.mainSlider .msImg {
    display: block;
    width: 100%;
    height: 330px;
    background-image: url(../../public/images/sun3.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    transition: all 0.5s;
}
.mainSlider h4 {
    font-size: 38px;
    font-weight: bold;
    line-height: 1em;
    color: white;
    text-align: center;
}
.mainSlider .tbox {
    position: absolute;
    top: 56%;
    left: 50%;
    color: #eee;
    text-align: left;
    transform: translate(-50%, -50%);
    width: 100%;
    color: #eee;
}
#wrap {display:flex; min-height:100vh; flex-direction:column;}
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
