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
            글 수정
          </h3>
          <form
            class="form_box"
            @submit.prevent="fetchEdit">
            <div class="in_title">
              <h3 class="sub_title">
                제목
              </h3>
              <textarea
                v-model="state.form.title"
                maxlength="100"></textarea>
            </div>
            <div class="in_title contents">
              <h3 class="sub_title">
                내용
              </h3>
              <QuillEditor
                ref="resetquill"
                v-model:content="state.form.description"
                content-type="html"
                :options="state.form.editorOption"
                style="height:400px;"
                theme="snow" />
            </div>
            <div class="button_wrap">
              <button
                class="writing_btn back_btn"
                @click="backload()">
                목록
              </button>
              <button
                class="writing_btn writing_done"
                type="submit">
                수정 완료
              </button>
            </div>
          </form>
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
