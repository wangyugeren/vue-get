<template>
	<div class="qp">
	  <div class="headsearch">
		<input v-model.trim="text" 
			   v-on:keyup.enter="addtodo"
		class="intext" placeholder="知识发布会" >
		<span @click="cancel" class="passof">取消</span>
	  </div>
	  <div class="mlist">
	  		<ul>
	  			<li v-for="(item,index) in foList"
              v-bind:class="{active:index===tabIndex}"
              v-on:click="showcolor(index)"
	  				class="lievery">
	  				{{item.text}}
	  			</li>
	  		</ul>
	  </div>
	  <div class="listtext">
	  		<span class="hot">热门搜索</span>
	  		<ul>
	  			<li v-for="todo in todolist" class="tdlist">
	  				{{todo}}
	  			</li>
	  		</ul>
	  </div>
	</div>
</template>
<script>
	export default{
		name:'searchtwo',
		data(){
			return{
        tabIndex:0,
				text:'',
				todolist:["李翔","知识发布会","刘德华","罗永浩","谷歌","习近平","李克强"],
				bool:'false',
				foList:[{
					path:'/discover',
					text:'发现'
				},
				{
					path:'/focu',
					text:'专栏内容'
				},
				{
					path:'/buyed',
					text:'已购'
				}],
			}
		},
		methods:{
			showcolor(index){
				this.tabIndex=index;
			},
			addtodo(){
				if(!this.text){
					return
				}
				this.todolist.unshift(this.text)
				this.text=''
			},
			cancel(){
				this.text=''
			}
		}
	}
</script>
<style scoped>
 @import "../assets/css/base.css";
	*{
		margin: 0;
		padding:0;
	}
	/*搜索栏*/
	.headsearch{
		height: 50px;
		background-color: #fff;
		border-bottom: 1px solid #e5e5e5;
		line-height: 50px;
		text-align: center;
	}
	.intext{
		width: 75%;
		height: 35px;
		background-color: #e4e5e7;
		border-radius: 6px;
		outline: none;
		border:none;
		padding-left: 20px;
	}
	.passof{
		font-size: 15px;
		margin-left: 4px;
	}
	/*中间三选项*/
	.mlist{
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #e5e5e5;
		background-color: #fff;
		line-height: 45px;
	}
	.mlist ul{
		display: flex;
		text-align: center;
	}
	.lievery{
		flex:1;
		display: inline-block;
		font-size: 16px;
		color: #958574;
		border-bottom: 2px solid #e5e5e5;
	}
	.active{
		flex:1;
		display: inline-block;
		font-size: 16px;
		color: #ff962f;
		border-bottom: 2px solid #ff962f;
	}
	/*热门搜索*/
	.hot{
		display:inline-block;
		width: 70px;
		height: 25px;
		color: #999999;
		font-size: 15px;
		margin-top: 24px;
		line-height: 25px;
		text-align: center;
	}
	.listtext{
		background-color: #f4f4f4;
		padding-left: 15px;
	}
	.qp{
		position: fixed;
		background-color: #f4f4f4;
		width: 100%;
		height: 100%;
		z-index: -3;
	}
	.tdlist{
		display: inline-block;
		float: left;
		height: 36px;
		line-height: 36px;
		background-color: #e6e6e6;
		font-size: 15px;
		margin-right: 10px;
		margin-top: 10px;
		padding: 0 10px;
		border-radius: 5px;
		color: #6e6e6e;
	}
</style>