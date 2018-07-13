<template>
	<div class="detai">
		<p @click='backFn'><i class="iconfont icon-xiangzuo1"></i></p>
		 <ul>
		 		<li><i class="iconfont icon-liuyanfill"></i><span>{{list.comments}}</span></li>
		 		<li><i class="iconfont icon-zantongfill"></i><span>{{list.popularity}}</span></li>
		 </ul>
	</div>
</template>
<script>
	import axios from 'axios'
	
	export default{ 
		data(){return {list:{}}},
		created:function(){
			var This=this;
			axios.get('/api/4/story-extra/'+this.$route.params.id)
					.then(function(response){
						This.list=response.data; 
					}) 
		},
		methods:{
			backFn:function(){
				  this.$router.go(-1);//后退
			}
		}
	}
</script>
<style scoped>
 @import '../assets/iconfont.css';
.detai{
	color: #e4e1e1;
	font-size: 17px;
}
.detai p,.detai li{
	float: left;
	line-height: 60px;
	cursor: pointer;
}
.detai ul{
	float: right;
}
.detai li{
	margin-right: 20px; 
}
.detai li span{
	margin-left: 5px;
}
i:hover{
	color: #fff;
}
</style>