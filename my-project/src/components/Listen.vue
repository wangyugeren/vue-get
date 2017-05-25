<template>
	<div>
		<top></top>
	<div class="exp-text">
		<p>智能推荐</p>
		<p>你想听多久，选择时间让得到为你服务</p>
	</div>
	<div class="choose-time">
		<div class="time1">
			<span class="num">30</span>
			<span class="minuter">分钟</span>
			<span class="pimage pimage1"></span>
		</div>
		<div class="time1">
			<span class="num">60</span>
			<span class="minuter">分钟</span>
			<span class="pimage pimage1"></span>
		</div>
		<div class="time1">
			<span class="num">2</span>
			<span class="minuter">小时</span>
			<span class="pimage pimage1"></span>
		</div>
	</div>
	<footer-bar></footer-bar>
	</div>
</template>
<script>
	import Top from './Top'
	export default{
		name:'listen',
		components:{
        'top':Top,
      },
	}
</script>
<style scoped>
 @import "../assets/css/base.css";
		.exp-text{
			margin-top: 96px;
			margin-left: 20px;
		}
		.exp-text p:nth-child(1){
			font-weight: bolder;
			font-size: 24px;
		}
		.exp-text p:nth-child(2){
			font-weight: bold;
			font-size: 14px;
			color: #747474;
		}
		.choose-time{
			margin-left: 20px;
			margin-top: 42px;
		}
		.time1{
			border-bottom:1px solid #e4e4e4;
			padding: 20px 0;
		}
		.time1 .num{
			display: inline-block;
			font-size: 37px;
			color: #4aacff;
			font-weight: bolder;
			margin: 0 5px 0 10px;
			width: 40px;
		}
		.time1 .minuter{
			font-size: 13px;
			color: #999999;
		}
		.pimage{
			background: url(../assets/img/f_img.png) no-repeat;
			background-size: 500px 75px;
			display: inline-block;
		}
		.pimage1{
			width: 10px;
			height: 10px;
			background-position: -420px -36px;
		    margin-left: 70%;
		}
</style>