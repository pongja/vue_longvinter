<template>
  <div class="header">
    <div class="header_wrap">
      <p
        class="logo_p"
        style="cursor:pointer;"
        @click="dashboard()">
        Longvinter Cafe
      </p>
      <ul class="gnb">
        <li>
          <router-link
            to="/"
            class="on">
            롱빈터
          </router-link>
        </li>
        <li>
          <router-link
            to="/itempage">
            롱빈터 아이템
          </router-link>
        </li>
        <li>
          <router-link to="/News">
            소식
          </router-link>
        </li>
        <li>
          <router-link to="/Notice">
            공지사항
          </router-link>
        </li>
      </ul>
      <div class="header_right">
        <ul
          v-if="username == ''"
          class="tnb cursor">
          <li
            class="user_name">  
            <p><span>{{ username }}</span>님, 반갑습니다.</p>
          </li>
          <li @click="remove()">
            로그아웃
          </li>
        </ul>
        <div
          class="lang_wrap">
          <div
            class="lang_img">
            언어변경
          </div>
          
          <ul
            class="lang_list">
            <li class="lang_btn">
              <router-link
                to="/"
                class="on">
                KOR
              </router-link>
            </li>
            <li class="lang_btn">
              <router-link to="/Home_en">
                ENG
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <button
        :class="{'menu_btn on' : openmenu }"
        class="menu_btn"
        @click="openmenu = !openmenu">
        <!-- <span
          class="line"
          :class="{ 'menu_btn.on line' : openmenu}"></span> -->
      </button>
    </div>
    <nav
      :class="{ 'mo_gnb on' : openmenu }"
      class="mo_gnb">
      <ul
        v-if="username == ''"
        class="tnb cursor">
        <li
          class="user_name">  
          <p><span>{{ username }}</span>님, 반갑습니다.</p>
        </li>
        <li @click="remove()">
          로그아웃
        </li>
      </ul>
      <ul>
        <li>
          <router-link
            to="/"
            class="on">
            롱빈터
          </router-link>
        </li>
        <li>
          <router-link to="/itempage">
            롱빈터 아이템
          </router-link>
        </li>
        <li>
          <router-link to="/News">
            소식
          </router-link>
        </li>
        <li>
          <router-link to="/Notice">
            공지사항
          </router-link>
        </li>
        <div class="lang_wrap">
          <li class="lang_btn">
            <router-link
              to="/"
              class="on">
              KOR
            </router-link>
          </li>
          <li class="lang_btn">
            <router-link to="/Home_en">
              ENG
            </router-link>
          </li>
        </div>
      </ul>
    </nav>
  </div> 
  <div
    class="sidebar-overlay"
    :class="{ 'sidebar-overlay on' : openmenu }"></div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const dashboard = () =>{
  router.push({
    name: 'home'
  })
}
const username = sessionStorage.getItem('user')
//햄버거메뉴
const remove = () => {
  alert('로그아웃되었습니다')
  sessionStorage.removeItem('user')
  router.go()
}
const openmenu = ref(false)
</script>
<style scoped>
@import "~/assets/header.css";
@import "~/assets/reset.css";
</style>
