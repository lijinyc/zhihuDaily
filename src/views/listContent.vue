<template>
	<div class="conBox"> 
		<div class="topBox">
			<cover :image='conString.image' :title='conString.title' :author='conString.image_source'></cover>
		</div>
		<div class="content">
			 <div v-html='conString.body' v-proxy.children="'img.src'"></div>
		</div> 
	</div>
</template>
<script>
import axios from 'axios'
import cover from '../components/cover.vue'
export default {
  data () {return {conString:[]}},
  created:function(){
		var This=this;
		axios.get('/api/4/news/'+this.$route.params.id)
				.then(function(response){
					This.conString=response.data;
		        })
   },
  components: {
      cover
   }
}
</script> 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
.conBox{
	position: relative; 
	background: #fff;
}
.topBox{
	width: 100%;
	height: 375px;
	overflow: hidden;
	position: relative; 
	background-size: cover !important;
}
@media screen and (max-width: 360px){
  .topBox{ 
   	height: 60vw;
  }
}
</style>
<style>
@import '../assets/publicStyle.css';
.conBox .content{
	font-size: 1rem;
	line-height: 36px;
}
.conBox .content a{ 
	font-size: 1rem;
	color: #bfbdbd;
	text-decoration: none;
} 
</style>
