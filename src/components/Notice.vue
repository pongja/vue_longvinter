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
              <!-- <th class="th_date">
                날짜
              </th> -->
            </thead>
            <tbody>
              <tr
                v-for="forms in posts"
                :key="forms.id"
                style="cursor: pointer;"
                @click="NoticeDetail(forms.id)">
                <td
                  class="td_title">
                  {{ forms.title }}
                </td>
                <td class="text_center">
                  {{ forms.username }}
                </td>
                <!-- <td class="text_center">
                  {{ forms.createdAt }}
                </td> -->
              </tr>
            </tbody>
          </table>
          <div
            v-for="forms in posts"
            :key="forms.id"
            class="mobile_notice_wrap"
            style="cursor: pointer;"
            @click="NoticeDetail(forms.id)">
            <ul
              class="mobi_notice_list">
              <li>
                <a class="notice_title">{{ forms.title }}</a>
                <p class="notice_date">
                  {{ forms.username }}
                </p>
                <p class="right_icon"></p>
              </li>
            </ul>
          </div>
          <AppPagination
            :current-page="params._page"
            :page-count="pageCount"
            @page="page => (params._page = page)" />
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
import axios from 'axios'
import { ref,computed } from 'vue'
import AppPagination from '~/components/AppPagination.vue'


const form = ref([])
const params = ref({
  _page: 1,
  _order: 'desc',
  _limit: 10,
})
const totalCount = ref(0)
const pageCount = computed(() => {
  return Math.ceil(totalCount.value / params.value._limit)
})
const posts = computed(() => {
  return form.value.filter((post, index) => {
    const { _limit, _page } = params.value
    const p = _page - 1
    const length = p * _limit
    return (index >= length && index < length + _limit)
  })
})
const fetchPosts = async (params) =>{
  axios.get('http://localhost:3000/posts',{
    params: {
      params
    }
  })
  .then((res)=>{
    console.log(res.data)
    const allPosts = res.data
    form.value = allPosts
    totalCount.value = allPosts.length
  })
}
fetchPosts()
const router = useRouter()
const NoticeWrite = () => {
  router.push({
    path: '/Notice/Create',
  }) 
}
const NoticeDetail = id => {
  router.push({
    name: 'noticedetail',
    params: {
      id
    }
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
