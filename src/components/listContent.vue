<template>
	<div class="conBox"> 
		<!-- <div :style='{background:"url("+conString.image+")"}'> -->
		<div :style='{background:"url(../assets/logo.png)"}'>
			<!-- <img :src='conString.images' >  -->
			<!-- <img src="../assets/logo.png"> -->
			<p>{{conString.title}}</p>
		</div>
		<div class="content">
			 <div v-html='conString.body'></div>
		</div>

	</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {return {conString:[]}},
  created:function(){
		var This=this;
		axios.get('/api/4/news/'+this.$route.params.id)
				.then(function(response){
					This.conString=response.data;
					console.log(This.conString.id)
		        })
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conBox{
 	position: relative;
 	border: 1px solid #f4f4f4; 
 	padding: 0 40px;
 	background: #fff;
}
</style>
<style >
.question{
	color: #474747;
	font-family: '微软雅黑';
}
.question-title{
	margin-top: 24px;
	font:bold 22px/62px '微软雅黑';
}
.meta{
	line-height: 74px; 
	font-size: 16px;
}
.meta .author{
	font-weight: bold;
}
.meta .bio{
	color: #9c9c9c;
}
.meta img{
	vertical-align: middle;
	width: 20px;
    height: 20px;
}
.content{
	font-size: 16px;
	line-height: 36px;
}
.content blockquote{
	padding-left: 8px;
    margin: 12px 0px;
    border-left: 3px solid #D0E5F2;
    font-size: 16px;
    line-height: 26px;
}
.content a{
	color: #105CB6;
}
.view-more{
	 background: #f4f4f4;
    text-align: center;
    line-height: 36px;
    margin-bottom: 30px;
}
.view-more a{
	color: #698ebf;
    font-size: 14px;
    text-decoration: none;
}
</style>