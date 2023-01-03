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
      <div class="notice_write">
        <div class="wright_wrap">
          <h3 class="box_title">
            커뮤니티 글쓰기
          </h3>
          <form
            class="form_box"
            @submit.prevent="formCreate()">
            <div class="in_title">
              <h3 class="sub_title">
                제목
              </h3>
              <textarea
                v-model="form.title"
                maxlength="100"></textarea>
            </div>
            <div class="in_title">
              <h3 class="sub_title">
                작성자
              </h3>
              <textarea
                v-model="form.username"
                maxlength="100"></textarea>
            </div>
            <div class="in_title contents">
              <h3 class="sub_title">
                내용
              </h3>
              <!-- <textarea v-model="form.description"></textarea> -->
              <QuillEditor
                v-model:content="form.content"
                content-type="html"
                :options="form.editorOption"
                style="height:400px;"
                theme="snow" />
            </div>
            <div class="button_wrap">
              <button
                class="writing_btn back_btn"
                @click="back()">
                목록
              </button>
              <button
                type="reset"
                class="writing_btn del_btn">
                취소
              </button>
              <button
                class="writing_btn writing_done">
                작성 완료
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { QuillEditor } from '@vueup/vue-quill'
import axios from 'axios'
import '@vueup/vue-quill/dist/vue-quill.snow.css'



const router = useRouter()

const formCreate = async (id) => {
    const data = {
        title: form.value.title,
        content: form.value.content,
        username: form.value.username,
      }
  try {
    if(confirm('글을 작성하시겠습니까?')) {
    await axios.post('http://localhost:3000/posts', data, {
      withCredentials:true,
      params:{
        id
      }
    })
    .then((res)=>{
     console.log(res.data)
    })
     alert('성공')
    router.push({
        name:'Notice'
    })
  } 
  } catch (error) {
    alert('실패')
    console.log(error)
  }
}

const back = () => {
    router.push({
      path: '/Notice',
    })
  }
const form = ref({
  title: null, //제목
  content: null,
  editorOption: {
        modules: {
         toolbar:[
         ['bold', 'italic', 'underline', 'strike'],
         ['blockquote', 'code-block'],
         [{ header: [1, 2, 3, 4, 5, 6, false] }],
         [{list:'ordered'}, {list:'bullet'}],
        //  [{script:'sub'},{script:'super'}],
         [{ indent: '-1' }, { indent: '+1' }],
         [{ color: [] }, { background: [] }]
         ]
        },
      }, //내용
})
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
