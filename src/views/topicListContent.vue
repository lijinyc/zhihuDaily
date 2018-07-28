<template>
	<div class="conBox">  
		<div v-html='conString.body' v-proxy.children="'img.src'"></div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {return {conString:[]}},
  created(){ 
		axios.get(`/api/4/news/${this.$route.params.id}`)
				.then((response)=>{
					this.conString=response.data;
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
 	font-size: 1rem;
	line-height: 36px; 
}  
</style>
<style >  
@import '../styles/content.css';
.conBox  a{ 
	font-size: 1rem;
	color: #bfbdbd;
	text-decoration: none;
}
.conBox .onlyheading{
	margin-top: 24px;
	padding: 0 15px 19px;
    font: bold 1.375rem/30px'微软雅黑';
}
.conBox .content h1{
	 font: bold 1.375rem/30px'微软雅黑';
	 margin: 15px 0;
} 
</style>
