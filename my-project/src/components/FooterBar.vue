<template>
	<div id="ofoot">
	    <ul>
	      <li v-for="(item, index) in fooList" 
	      	  v-bind:class="{active:$route.path===item.path}">
	        <div v-bind:class="['ofootlist'+(index+1),'ofootlist']"></div>
	        <router-link v-bind:to="item.path">
					{{ item.text }}
			</router-link>
	      </li>
	    </ul>
   </div>
</template>
<script>
	export default {
		name: 'footerbar',
		data(){
			return{
				fooList:[{
					path:'/',
					text:'发现'
				},
				{
					path:'/study',
					text:'今日学习'
				},
				{
					path:'/listen',
					text:'随时听'
				},
				{
					path:'/buy',
					text:'已购'
				},
				{
					path:'/user',
					text:'我'
				}]
			}
		}
	}
</script>
<style scoped>
	@import '../assets/css/base.css';
	#ofoot ul{
      position: fixed;
      left: 0;
      bottom: 0;
      display: flex;
      height: 45px;
      width: 100%;
      border-top: 1px solid #c2c2c2;
      background-color: #fff;
    }
    #ofoot ul li{
      flex:1;
      text-align: center;
      font-size: 11px;
    }
    .ofootlist{
      display: inline-block;
      width: 20px;
      height: 20px;
      background:url(../assets/img/f_img.png) no-repeat;
      background-size: 500px 75px;
    }
    .ofootlist1{
      background-position: -286px -54px;
    }
    .ofootlist2{
      background-position: -306px -52px;
    }
    .ofootlist3{
      background-position: -374px -53px;
    }
    .ofootlist4{
      background-position: -351px -52px;
    }
    .ofootlist5{
      background-position: -329px -52px;
    }
    #ofoot ul a {
    	display: block;
    }
    #ofoot ul .active a {
      color: #ecb12f;
    }
    #ofoot ul .active .ofootlist1{
      background-position: -480px -17px;
    }
    #ofoot ul .active .ofootlist2{
      background-position: -477px 1px;
    }
    #ofoot ul .active .ofootlist3{
      background-position: -401px -51px;
    }
    #ofoot ul .active .ofootlist4{
      background-position: -479px -35px;
    }
    #ofoot ul .active .ofootlist5{
      background-position: -480px -54px;
    }
</style>