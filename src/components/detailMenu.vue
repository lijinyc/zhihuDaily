<template>
	<div class="detai">
		<p @click='backFn'>后退</p>
		 <ul>
		 		<li>评论<span>{{list.comments}}</span></li>
		 		<li>点赞<span>{{list.popularity}}</span></li>
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
</style>