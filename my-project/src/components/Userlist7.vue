<template>
    <div>
    	<div v-for='(item,index) in setlist'>
    		<router-link v-bind:to="'/whatever'+(index+1)">
	    		<div class="setting clearfix">
	    			<span>{{item}}</span>
	    			<span></span>
	    		</div>
	    	</router-link>
    	</div>
    	<div class="setting clearfix"
    		   @click="showbtn">
			<span>退出登录</span>
			<span></span>
	    </div>
	    <div class="allmask" v-if="showflag">
	    	<div class="centerbox">
	    		<p class="tip">温馨提示</p>
	    		<p class="question">确定要离开得到吗？</p>
	    		<div class="two">
	    			<div class="cancel" @click="showbtn">取消</div>
	    			<div class="sure"><router-link to='/login'>确定</router-link></div>
	    		</div>
	    	</div>
	    </div>
    </div>
</template>
<script>
export default {
		name:'userlist7',
		data(){
			return{
				showflag:false,
				setlist:["推荐给好友","清除缓存","软件升级"]
			}
		},
		methods:{
			showbtn:function(){
				if(this.showflag==false){
					this.showflag=true;
				}else{
					this.showflag=false
				}
			}
		},
}
</script>
<style scoped>
@import "../assets/css/base.css";
	.setting{
			width: 100%;
			height: 50px;
			position: relative;
			border-bottom: 1px solid #f7f7f7;
			z-index: 1
		}
	.setting span:nth-child(1){
			position: absolute;
			left: 25px;
			top: 20px;
		}
	.setting span:nth-child(2){
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
	.allmask{
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.3);
		z-index: 1;
		top:0;
		/*display: none;*/
	}
	.centerbox{
		display: inline-block;
		width: 80%;
		height: 130px;
		background-color: #fff;
		border-radius: 10px;
		position: absolute;
		top:40%;
		left: 10%;
	}
	.tip{
		color: #000;
		font-size: 14px;
		font-weight: bold;
		margin: 10px 0 20px 15px;
	}
	.question{
		color: #666;
		font-size: 12px;
		margin-left: 15px;
	}
	.two{
		position: absolute;
		width: 100%;
		height: 40px;
		bottom: 0;
		display: flex;
		text-align: center;
	}
	.cancel{
		flex:1;
		color: #999;
		font-size: 12px;
		display: inline-block;
		width: 50px;
		height: 30px;
	}
	.sure{
		flex:1;
		
		font-size: 12px;
		display: inline-block;
		width: 50px;
		height: 30px;
	}
	.sure a{
		color: orange;
	}
</style>