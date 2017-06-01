<template>
	<div>
		<div class="headimg">
			<img src="../assets/img/d10.jpg" alt="">
		</div>
		<p class="name">毛毛宇</p>
		<div class="sumary">
			<div class="sum-one">
				<p>4小时5分</p>
				<p>学习时间</p>
			</div>
			<div class="sum-two">
				<p>0本</p>
				<p>阅读书籍</p>
			</div>
			<div class="sum-three">
				<p class="sum-three-1">1天</p>
				<p>连续学习</p>
			</div>
		</div>
		<div class="lists">
			<div class="list1"
				 v-for="(item,index) in classify">
				 <router-link v-bind:to="'/userlist'+(index+1)">
				<div class="list1-1">
				</div>
				<div class="list1-2 clearfix">
					<span v-bind:class="['list1-2-'+(index+1)]">{{item}}</span>
					<span></span>
				</div>
				</router-link>
			</div>
			<!-- <div class="list1">
				<div class="list1-1">
				</div>
				<div class="list1-2 clearfix">
					<span class="list1-2-2">学习小组</span>
					<span></span>
				</div>
			</div> -->
		</div>
		<div class="faker"></div>
		<footer-bar></footer-bar>
	</div>
</template>
<script>
	export default {
		name:'user',
		data(){
			return{
				classify:["我的勋章","学习小组","消息中心","专栏留言","文章笔记","账户余额","设置"],
			}
		}
	}
</script>
<style scoped>
	@import "../assets/css/base.css";
	.headimg{
			width: 100%;
			height: 195px;
		}
		.name{
			font-size: 15px;
			font-weight: bold;
			text-align: center;
			margin-top: 10px;
		}
		.sumary{
			display: flex;
			margin-top: 23px;
		}
		.sumary div{
			flex:1;
		}
		.sumary div p:nth-child(1){
			font-size: 13px;
			font-weight: bold;
			text-align: center;
			position: relative;
		}
		.sumary div p:nth-child(2){
			font-size: 11px;
			color: #bababa;
			text-align: center;
		}
		.sum-three-1:after{
			content: "";
			display: inline-block;
			width: 10px;
			height: 10px;
			background: url(../assets/img/f_img.png) no-repeat;
			background-size: 500px 75px;
			background-position: -419px -36px;
			position: absolute;
			top: 12px;
			right: 15px;
		}
		.list1-1{
			width: 100%;
			height: 10px;
			background-color: #f7f7f7;
		}
		.list1-2{
			width: 100%;
			height: 50px;
			position: relative;
		}
		.list1-2 span:nth-child(1){
			position: absolute;
			left: 50px;
			top: 20px;
		}
		.list1-2 span:nth-child(1):before{
			content: "";
			display: inline-block;
			width: 25px;
			height: 25px;
			background-size: 500px 75px;
			position: absolute;
			top: -5px;
			left: -35px;
		}
		.list1-2-1:before{
			background: url(../assets/img/f_img.png) no-repeat;
			background-position: -137px -50px;
		}
		.list1-2-2:before{
			background: url(../assets/img/f_img.png) no-repeat;
			background-position: -160px -50px;
		}
		.list1-2-3:before{
			background: url(../assets/img/f_img.png) no-repeat;
			background-position: -184px -50px;
		}
		.list1-2-4:before{
			background: url(../assets/img/f_img.png) no-repeat;
			background-position: -160px -50px;
		}
		.list1-2-5:before{
			background: url(../assets/img/f_img.png) no-repeat;
			background-position: -160px -50px;
		}
		.list1-2-6:before{
			background: url(../assets/img/f_img.png) no-repeat;
			background-position: -160px -50px;
		}
		.list1-2-7:before{
			background: url(../assets/img/f_img.png) no-repeat;
			background-position: -208px -50px;
		}
		.list1-2 span:nth-child(2){
			float: right;
			display: inline-block;
			width: 10px;
			height: 10px;
			background: url(../assets/img/f_img.png) no-repeat;
			background-size: 500px 75px;
			background-position: -419px -36px; 
			margin-top: 20px;
			margin-right: 15px;
		}
		.faker{
			width: 100%;
			height: 45px;
		}
</style>