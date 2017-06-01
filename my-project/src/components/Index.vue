<template>
  <div>
    <top></top>
  <div id="loopimg">
     <swiper-banner></swiper-banner>
  </div>
  <ul id="menu">
    <li>
      <router-link to="/ebook">
        <div class="list1 list11"></div>
        <div>电子书</div>
      </router-link>
    </li>
    <li>
      <router-link to="/book">
        <div class="list1 list12"></div>
        <div>每天听本书</div>
      </router-link>
    </li>
    <li>
     <router-link to="/shop">
        <div class="list1 list13"></div>
        <div>商城</div>
      </router-link>
    </li>
    <li>
      <router-link to="/more">
        <div class="list1 list14"></div>
        <div>系列</div>
      </router-link>
    </li>
    <li>
      <router-link to="/all">
        <div class="list1 list15"></div>
        <div>全部</div>
      </router-link>
    </li>
  </ul>
  <div id="box">
    <div class="boxmin">
    </div>
    <div class="boxmax">
      <a href="##"><img src="../assets/img/d2.jpg" alt="#"></a>
    </div>
    <div class="boxmin">
    </div>
    <div class="title">
      <span class="free">知识新闻 |免费</span>
      <router-link to='./searchtwo'><span class="all">查看全部</span></router-link>
    </div>
    <!-- 下面是重复的列表 -->
    <div class="lists clearfix">
      <div id="boxliner">
        <span class="liner"></span>
      </div>
      <img src="../assets/img/d6.jpg" alt="德玛西亚">
      <div class="lists-all">
          <div class="lists-name clearfix">万维钢·精英日课<span>￥199/年</span></div>
          <div class="lists-sum">帮你和全球精英大脑同步</div>
          <div class="lists-time">14分钟前更新</div>
          <div class="lists-detail">日课193|暴露于数据之下的真实你我</div>
      </div>
    </div>
    <div class="lists clearfix">
      <div id="boxliner">
        <span class="liner"></span>
      </div>
      <img src="../assets/img/d6.jpg" alt="德玛西亚">
      <div class="lists-all">
        <div class="lists-name clearfix">万维钢-精英日课<span>￥199/年</span></div>
        <div class="lists-sum">帮你和全球精英大脑同步</div>
        <div class="lists-time">14分钟前更新</div>
        <div class="lists-detail">日课193|暴露于数据之下的真实你我</div>
      </div>
    </div>
    <div class="lists clearfix">
      <div id="boxliner">
        <span class="liner"></span>
      </div>
      <img src="../assets/img/d6.jpg" alt="德玛西亚">
      <div class="lists-all">
        <div class="lists-name clearfix">万维钢-精英日课<span>￥199/年</span></div>
        <div class="lists-sum">帮你和全球精英大脑同步</div>
        <div class="lists-time">14分钟前更新</div>
        <div class="lists-detail">日课193|暴露于数据之下的真实你我</div>
      </div>
    </div>
  </div>
  <!-- 下面的部分被fixed底部遮住，建一个空块出来，让其有内容的部分显示 -->
  <div id="faker"></div>
  <footer-bar></footer-bar>
  </div>
</template>

<script>
  import SwiperBanner from './SwiperBanner'
  import FooterBar from './FooterBar'
  import Top from './Top'
    export default {
      name: 'index',
      components:{
        'swiper-banner':SwiperBanner,
        'footer-bar':FooterBar,
        'top':Top,
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/swiper.min.css';
    *{
        margin:0;
        padding:0;
      }
    #loopimg{
      margin-top: 50px;
    }
    #loopimg img{
      /*width: 100%;*/
      height: 120px;
    }
    #menu{
      display:flex;
      height: 78px;
    }
    #menu li{
      flex:1;
      text-align: center;
      font-size: 11px;
    }
    #menu,li{
      list-style: none;
    }
    #menu li .list1{
      display: inline-block;
      width: 30px;
      height: 30px;
      margin:6px 0 6px 0px;
      background:url(../assets/img/f_img.png) no-repeat;
      background-size: 500px 75px;
      
    }
    #menu li a{
      text-decoration:none;
      color: black;
      font-weight: bold;
    }
    #menu li .list11{
      background-position: -314px 0;
    }
    #menu li .list12{
      background-position: -347px 0;
    }
    #menu li .list13{
      background-position: -377px 0;
    }
    #menu li .list14{
      background-position: -408px 0;
    }
    #menu li .list15{
      background-position: -439px 0;
    }
    .boxmin{
      width: 100%;
      height: 10px;
      background-color: #f7f7f7;
    }
    .boxmax{
      width: 100%;
      height: 132px;
      text-align: center;
      margin-top: 10px;
    }
    .boxmax img{
      width: 340px;
      height: 113px;
      display: inline-block;
    }
    .title{
      width:100%;
      height: 50px;
      line-height: 50px;
    }
    .title .free{
      font-weight: bold;
      font-size: 16px;
      margin-left: 13px;
      margin-right: 45%;
    }
    .title .all{
      font-size: 14px;
      color: #898375;
    }
    .title .all:after{
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(../assets/img/f_img.png) no-repeat;
      background-size: 500px 75px;
      background-position: -447px -50px;
    }
    .liner{
      display: inline-block;
      width: 90%;
      height: 1px;
      border-top:1px solid #e6e6e6;
    }
    #boxliner{
      text-align: center;
    }
    .lists{
      width: 100%;
      height: 120px;
    }
    .lists img{
      float:left;
      width: 72px;
      height: 97px;
      background-color: #e6e6e6;
      margin: 15px 0 0 15px;
    }
    .lists-all{
      float:left;
      margin: 15px 0 0 15px;
    }
    .lists-name{
      font-size: 14px;
      font-weight: bold;
    }
    .lists-name span{
      font-size: 10px;
      color: #f79034;
      float: right;
      right: 15px;
    }
    .lists-sum{
      color: #878787;
      font-size:12px;
    }
    .lists-time{
      display: inline-block;
      width: 75px;
      height: 20px;
      font-size: 10px;
      color: #9f9f9f;
      border:1px solid #9f9f9f;
      border-radius:4px;
      margin:15px 0 9px 0;
    }
    .lists-detail{
      font-size: 11px;
      color: #676767;
    }
    .clearfix{
       *zoom:1;
    }
    .clearfix:after{
          content:"";
          clear:both;
      font-size:0;
      display:block;
      height:0;
      visibility:hidden;
    }  
    #faker{
      width: 100%;
      height: 90px;
    }
</style>
