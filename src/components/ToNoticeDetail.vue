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
      <!-- <Sidebar /> -->
      <div class="notice_write">
        <div class="wright_wrap">
          <h3 class="box_title">
            커뮤니티
          </h3>
          <div
            class="notice_content_wrap">
            <div class="notice_top">
              <p class="notice_title">
              </p>
              <div class="notice_sub_title">
                <p>작성자 : </p>
              </div>
              <div class="notice_sub_title">
                <p>등록일 : </p>
              </div>
            </div>
            <div
              class="content_box"
              v-html="form.description">
            </div>
          </div>
          <div class="detail_button_wrap">
            <button
              type="button"
              class="writing_btn back_btn">
              목록
            </button>
            <button
              type="button"
              class="writing_btn edit_btn">
              수정
            </button>
            <button
              type="button"
              class="writing_btn del_btn">
              삭제
            </button>
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
