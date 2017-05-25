<template>
	<div>
		<div id="ohead" class="clearfix" v-for="item in contents" v-if="$route.path==item.path">
			<div class="headsearch"></div>
			<strong>{{ item.otext }}</strong>
			<span class="setting">{{ item.ttext }}</span>
		</div>
	</div>
</template>
<script>
	export default {
		name:'top',
		data(){
			return {
				contents:[{
					path:'/',
					otext:'发现',
					ttext:''
				},
				{
					path:'/study',
					otext:'今日学习',
					ttext:'设置'
				},
				{
					path:'/listen',
					otext:'随时听',
					ttext:'设置'
				},
				{
					path:'/buy',
					otext:'已购',
					ttext:'编辑'
				}]
			}
		}
	}
</script>
<style scoped>
	@import "../assets/css/base.css";
	#ohead{
			position: fixed;
			top: 0;
			left: 0;
			height: 50px;
			width: 100%;
			font-size: 16px;
			text-align: center;
			line-height: 50px;
			background-color: #fff;
		}
		#ohead .headsearch{
			position: absolute;
			top: 20px;
			left: 20px;
			width: 25px;
			height: 25px;
			background: url(../assets/img/f_img.png) no-repeat;
			background-size: 500px 75px;
			background-position: -426px -52px;
		}
		#ohead .setting{
			position: absolute;
			right: 14px;
			color: #9b9b9b;
			font-size: 15px;
		}
</style>