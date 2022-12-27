<template>
  <div id="wrap">
    <div class="container">
      <hr class="hr_tag" />
      <div class="grid_news">
        <img
          src="../../public/images/happy.png"
          class="happy_img" />
        <div>
          <p class="title_News">
            News page has been opened.
          </p>
          <P class="subTitle">
            #Develog
          </P>
          <p class="content_p">
            Long Vinter news and information on the latest developments related to the website.
          </p>
        </div>
      </div>
      <div class="develog_container">
        <div class="develog_box">
          <img
            src="../../public/images/server.png"
            class="develog_img" />
          <div>
            <p class="dayfont">
              <span class="dayfont_span">Tuesday 27</span>
            </p>
            <p class="month_font">
              #December News
            </p>
            <p class="box_font">
              There is a problem that the server cannot be maintained due to the unstable server caused by DDoS.
            </p>
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
<style scoped>
@import "~/assets/reset.css";

#wrap {display:flex; min-height:100vh; flex-direction:column;}
.box_font{
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  word-break: keep-all;
  line-height: 1.3;
}
.month_font{
  padding: 15px 0;
  font-size: 24px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  line-height: 1.3;
}
.dayfont{
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  line-height: 1.3;
}
.dayfont_span{
  background-color: #CE5137;
  color: #1B1B1E;
  padding: 5px;
  border-radius: 8px;
}
.develog_img{
  width: 400px;
  height: 250px;
  border-radius: 8px;
}
.develog_box{
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 960px;
  box-shadow: 2px 2px 15px -3px #777;
  margin: 0 auto;
  padding: 16px;
  border-radius: 20px;
  align-items: center;
  justify-items: center;
}
.title_News{
  font-size: 26px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  line-height: 1.3;
}
.subTitle{
  padding: 15px 0;
  font-size: 24px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  line-height: 1.3;
}
.content_p{
  font-size: 18px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  word-break: keep-all;
  line-height: 1.3;
}
.develog_container{
  max-width: 960px;
  margin: 0 auto;
  margin-top: 100px;
}
.happy_img{
  width: auto;
}
.hr_tag {
  border: none;   
  border-top: 1px solid gray;    
  text-align: center;    
  overflow: visible;
  margin: 0; 
}

.hr_tag::after {
  content: "News";    
  position: relative;    
  top: -25px;    
  background-color: white;    
  padding: 0 10px;
  font-size: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
}
.grid_news {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 1280px;
  border-bottom: 1px solid #1B1B1E;
  padding: 0px 16px 35px 16px;
  align-items: center;
  justify-items: center;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100%;
  height: auto;
  padding: 200px 16px 160px 16px;
  flex:1;
}
@media screen and (max-width:768px ){
  .grid_news{
    display: block;
  }
  .develog_img{
    width: 200px;
    height: 200px
  }
  .develog_box{
    display: block;
  }
}
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
