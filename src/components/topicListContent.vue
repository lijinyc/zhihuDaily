<template>
	<div class="conBox">  
		<div v-html='conString.body' v-proxy.children="'img.src'"></div>
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
		        })
	  }
}
</script> 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
.conBox{
 	position: relative;
 	border: 1px solid #f4f4f4;
 	background: #fff;
 	font-size: 16px;
	line-height: 36px; 
}  
</style>
<style > 
.conBox  a{ 
	font-size: 16px;
	color: #bfbdbd;
	text-decoration: none;
}
.conBox .content-inner{
	padding: 0 15px 19px;
	clear: both;
} 
.conBox .onlyheading{
	margin-top: 24px;
	padding: 0 15px 19px;
    font: bold 22px/30px'微软雅黑';
}
.conBox .headline-background{
	padding: 0 15px 19px;
	position: relative;
}
.conBox .headline-background  .heading{
	font-size: 14px;
    color: #9c9c9c;
}
.conBox .headline-background  .heading-content{
	color: #474747;
	width: 92%;
    line-height: 28px;
	/*border: 1px solid; */
}
.conBox .headline-background i{
	width: 12px;
    height: 12px;
    font-size: 23px;
    display: inline-block;
    border: 0;
    border-top: 3px solid #c8c5c5;
    border-right: 3px solid #c8c5c5;
    transform: rotate(38deg);
    position: absolute;
    right: 19px;
    top: 48px;
}
.conBox figure{
	margin: 0;
}
.conBox figure img{
	width: 100%;
}
.conBox .content-image{
	width: 100%;
} 
.conBox blockquote{
	padding-left: 8px;
    margin: 12px 0px;
    border-left: 3px solid #D0E5F2;
    font-size: 16px;
    line-height: 26px;
}
.conBox blockquote img{
	width: 100%;
}
.conBox .question{
	color: #474747;
	font-family: '微软雅黑'; 
}
.conBox .question img{
	max-width: 100%;
}
.conBox .question-title{
	margin-top: 24px;
	font:bold 22px/30px'微软雅黑';
}
.conBox .meta{
    line-height: 23px;
    font-size: 16px;
    margin: 20px 0 ;
}
.conBox .meta .author{
	font-weight: bold;
}
.conBox .meta .bio{
	color: #9c9c9c;
}
.conBox .meta img{
	vertical-align: middle;
	width: 20px;
    height: 20px;
} 
.conBox .view-more{
	 background: #f4f4f4;
    text-align: center;
    line-height: 36px;
    margin: 30px 0 10px; 
    color: #698ebf;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
}
.conBox .origin_image{
	width: 100%;
}
</style>
