<template>
	<div>
		<top></top>
		<div class="navlist clearfix">
			<span class="pimage pimage1"></span>
			<span class="pimage pimage2"></span>
			<span @click="fn" class="allread">全部内容</span>
			<span @click="fm" class="contents">最近阅读</span>
		</div>
		<div v-if="out" class="pull">
			<ul v-for="(item,index) in conlist">
				<router-link v-bind:to="'/buylist'+(index+1)"><li>{{item}}</li></router-link>
			</ul>
		</div>
		<div v-if="outm" class="pull">
			<ul v-for="(item,index) in readlist">
				<router-link v-bind:to="'/buymlist'+(index+1)"><li>{{item}}</li></router-link>
			</ul>
		</div>
		<div class="booklist clearfix">
			<div class="list1">
				<img src="../assets/img/d9.jpg" alt="">
				<p>《博恩·崔西的时间管理课》</p>
			</div>
			<div class="list2">
				<img src="../assets/img/d8.jpg" alt="">
				<p>4步提升职场情商</p>
			</div>
		</div>
		<div v-if="out" @click="fn" class="mask"></div>
		<div v-if="outm" @click="fm" class="mask"></div>
		<footer-bar></footer-bar>
	</div>
	
</template>
<script>
 import Top from './Top'
	export default{
		name:'buy',
		components:{
        'top':Top,
      	},
      	data(){
      		return{
      			out:false,
      			outm:false,
      			conlist:["全部内容","订阅专栏","每天听本书","精选音频","电子书"],
      			readlist:["按最近阅读排序","按最近购买排序","按名称首字母排序"]
      		}
      	},
      	methods:{
      		fn:function(){
      			if(this.out==false){
      				this.out=true;
      				this.outm=false;
      			}else{
      				this.out=false
      			}
      		},
      		fm:function(){
      			if(this.outm==false){
      				this.outm=true;
      				this.out=false;
      			}else{
      				this.outm=false
      			}
      		}
      	},
      	
	}
</script>
<style scoped>
	 @import "../assets/css/base.css";
/*控制显隐*/
	 	.pull{
	 		position: absolute;
	 		top:92px;
	 		background-color: #fff;
	 		width: 100%;
	 		z-index: 12;
	 	}
	 	.pull li{
	 		height: 45px;
	 		font-size: 14px;
	 		font-weight: bold;
	 		line-height: 45px;
	 		border-bottom: 1px solid #e5e5e5;
	 		margin-left: 10px;
	 	}
	 	.mask{
	 		position: absolute;
	 		bottom: 0;
	 		width: 100%;
	 		height: 80%;
	 		background-color: rgba(0,0,0,0.4);
	 		z-index: 10;
	 	}
/*控制显隐*/
		.navlist{
			width: 100%;
			height: 40px;
			border-top: 1px solid #e1e1e1;
			border-bottom: 1px solid #e1e1e1;
			margin-top: 50px;
		}
		.navlist span{
			display: inline-block;
		}
		.pimage{
			background: url(../assets/img/f_img.png) no-repeat;
			background-size: 500px 75px;
			float:left;
		}
		.pimage1{
			width: 17px;
			height: 17px;
			background-position: -262px -3px;
			margin: 11px 23px 0 15px;
		}
		.pimage2{
			width: 17px;
			height: 17px;
			background-position: -241px -3px;
			margin-top: 11px;
		}
		.contents:after,.allread:after{
			content: "";
			display: inline-block;
			width: 10px;
			height: 10px;
			background: url(../assets/img/f_img.png) no-repeat;
			background-size: 500px 75px;
			background-position: -451px -34px;
			margin-left: 5px;

		}
		.contents,.allread{
			font-size: 14px;
			color: #626262;
			float: right;
			margin: 11px 12px 0 5px;
		}
		.booklist div{
			display: inline-block;
			width: 33%;
			height: 180px;
			float: left;
			text-align: center;
			margin-top: 15px;
		}
		.booklist div img{
			width: 90px;
			height: 120px;
			display: inline-block;
		}
		.booklist div p{
			width: 90px;
			display: inline-block;
		}
</style>
